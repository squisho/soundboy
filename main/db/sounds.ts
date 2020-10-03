import Datastore from 'nedb-promises';
import dbFactory from './dbFactory';

class Sounds {
    private db: Datastore;

    constructor() {
        this.db = dbFactory('sounds.db');
    }

    insert(data: Record<string, any>) {
        console.log('sounds db insert: ', data);
        return this.db.insert(data);
    }

    fetch(query: Record<string, any>) {
        // TODO: use the query
        console.log('sounds db fetch: ', query);
        return this.db.find(query);
    }
}

const sounds = new Sounds();

export default sounds;
