import Datastore from 'nedb-promises';

import getAppPath from '../../util/getAppPath';

export default (fileName: string) =>
    Datastore.create({
        filename: `${getAppPath()}/.data/${fileName}`,
        timestampData: true,
        autoload: true,
    });
