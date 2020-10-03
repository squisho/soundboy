import Datastore from 'nedb-promises';
import dbFactory from './dbFactory';

class Sounds {
    private db: Datastore

    constructor() {
        this.db = dbFactory('sounds.db');
    }

    create = (data: Record<string, any>) => {
        return this.db.insert(data);
    }

    getAll = () => {
        return this.db.find({});
    }
}

const sounds = new Sounds();

export default sounds;
