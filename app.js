import DirWatcher from './dirwatcher';
import Importer from './importer';

const path = './data';

const dirwatcher = new DirWatcher();
const importer = new Importer();

dirwatcher.on('dirwatcher:changed', async (files) => {
  const result = await Promise.all(files.map(file => importer.import(`${path}/${file}`)));
  console.log(result);
});

// importer.importSync('./data');
dirwatcher.watch(path, 2000);
