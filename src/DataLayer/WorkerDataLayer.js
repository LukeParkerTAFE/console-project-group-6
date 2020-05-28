
const fs = require("fs");
const Worker = require("../Models/Worker");

module.exports = class WorkerDataLayer 
{
    constructor(fileName)
    {
        this.fileName = fileName;
    }

    getArrayFromFile()
    {
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(w => new Worker(
            w.firsName,
            w.lastName,
            w.age,
            w.postion,
            w.centerNumber
        ));
    }

    writeArrayIntoFile(worker)
    {
        fs.writeFileSync(this.fileName,JSON.stringify(worker));
    }


    //warning
    writeToFile(number,cervicenumbers)
    {
        fs.writeFileSync(this.fileName,JSON.stringify(Worker.getRandomWorker(number,cervicenumbers)));
    }
}