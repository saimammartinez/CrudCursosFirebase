// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBGrNkx7iMMcV73t3aE7dCTEbotJGYoCHM",
    authDomain: "crud-cursos.firebaseapp.com",
    databaseURL: "https://crud-cursos.firebaseio.com",
    projectId: "crud-cursos",
    storageBucket: "crud-cursos.appspot.com",
    messagingSenderId: "743254507452"
  }
};
