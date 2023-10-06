onmessage = async e => {
  const root = await navigator.storage.getDirectory();
  const fileHandle = await root.getFileHandle('test.txt');
  const syncHandle = await fileHandle.createSyncAccessHandle();
  const data = new TextEncoder().encode(e.data);
  syncHandle.truncate(0);
  syncHandle.write(data);
  syncHandle.flush();
  syncHandle.close();

  postMessage("written")
};
