const {rmSync} = require('fs');
const DIST_FOLDER = 'dist/';

rmSync(DIST_FOLDER, {
  recursive: true,
  force: true
});
