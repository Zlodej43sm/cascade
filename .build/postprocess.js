const {
  readFileSync,
  readdirSync,
  renameSync,
  writeFileSync
} = require('fs');

const DIST_FOLDER = 'dist/';

function replaceUsagesInHtmlFile(oldName, newName) {
  const indexHtmlFileName = DIST_FOLDER + 'index.html';
  const content = readFileSync(indexHtmlFileName, 'utf8');
  const newContent = content.replace(oldName, newName);
  writeFileSync(indexHtmlFileName, newContent, () => {
  });
}

function renameByFileExtension(file, extension) {
  const oldPath = DIST_FOLDER + file;
  if (oldPath.endsWith(extension)) {
    const newFile = 'index' + extension;
    const newPath = DIST_FOLDER + newFile;
    renameSync(oldPath, newPath);
    replaceUsagesInHtmlFile(file, newPath);
    console.log(`File ${oldPath} renamed to ` + newPath);
  }
}

readdirSync(DIST_FOLDER)
  .forEach((file) => {
    renameByFileExtension(file, '.css');
    renameByFileExtension(file, '.js');
  });
