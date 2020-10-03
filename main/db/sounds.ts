import Datastore from 'nedb-promises';
import dbFactory from './dbFactory';

class Sounds {
    private db: Datastore

    constructor() {
        this.db = dbFactory('sounds.db');
    }

    insert = (data: Record<string, any>) => {
        console.log('sounds db insert: ', data);
        return this.db.insert(data);
    }

    fetch = (query: Record<string, any>) => {
        console.log('sounds db fetch: ', query);
        return this.db.find({});
    }
}

const sounds = new Sounds();

export default sounds;
