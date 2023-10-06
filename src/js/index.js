
// using worker since safari only supports the synchronous file writing operations that are only avaliable inside of a worker
const writeWorker = new Worker(new URL('./worker.js', import.meta.url));
writeWorker.addEventListener('message', readFile);

const input = document.querySelector('input');
input?.addEventListener('input', e => writeWorker.postMessage(e.target?.value));

readFile();

async function readFile() {
  const root = await navigator.storage.getDirectory();
  const fileHandle = await root.getFileHandle('test.txt', { create: true });
  const file = await fileHandle.getFile();
  const output = document.querySelector('.output');

  if (file.size > 0) {
    const reader = new FileReader();

    reader.onload = function () {
      const result = reader.result;
      const content = new TextDecoder().decode(result);
      output.innerHTML = content;
    };

    reader.readAsArrayBuffer(file);
  } else {
    output.innerHTML = 'no file found';
  }
  if ('estimate' in navigator.storage) {
    const span = document.querySelector('span');
    const { usage } = await navigator.storage.estimate();
    span.innerHTML = `You have ${usage} Bytes stored in the OPFS.`;
  }
}
