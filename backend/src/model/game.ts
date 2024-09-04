import { ObjectId } from 'mongodb';

class Game {
    constructor(
        public name: string,
        public price: number,
        public category: string,
        public id?: ObjectId,
    ) {}
}
