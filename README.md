## Created with Capacitor Create App

This app was created using [`@capacitor/create-app`](https://github.com/ionic-team/create-capacitor-app),
and comes with a very minimal shell for building an app.

### Running this example in the browser

To run the provided example, you can use `npm start` command.

```bash
npm start
```

### Running this example on iOS

To run the provided example on iOS, you can use following commands.

```bash
npm run build
npm run run:ios
```

### Description

This is a minimal example to reproduce a problem with the origin private file system on iOS.

The app is storing a single text file in the private file system as a text.
You can input text and it will be automatically saved to the filesystem.
The text is displayed on the next start.

Whenever the application is force closed on iOS its loosing all the stored files.
Im not sure if this is a Safari problem or a capacitor bug.
If im using the site without the capacitor wrapper in Safari directly, the state is stored correctly.
