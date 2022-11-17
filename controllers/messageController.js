const fs = require ('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
class MessageController{

    constructor(data){
        this.dataFile = `./data/${data}.json`;
    }

    async loadMessage(){
        const data = await readFile(this.dataFile,'utf-8');
        if(!data) return [];
        return JSON.parse(data).produits
    }

    async addEntry(title,message,name) {
        const data = (await this.loadMessage()) || [];
        data.unshift({title,message,name});
        return writeFile(this.dataFile, JSON.stringify(data));
    }
}
module.exports = MessageController;