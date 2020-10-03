import { app } from 'electron';
import Datastore from 'nedb-promises';

export default (fileName: string) => Datastore.create({
    filename: `${process.env.NODE_ENV === 'development' ? '.' : app.getAppPath()}/data/${fileName}`,
    timestampData: true,
    autoload: true,
});
