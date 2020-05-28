
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

    addWorker(worker)
    {
        // let workerarray = this.getArrayFromFile();
        // workerarray.push(worker);
        // this.writeArrayIntoFile(workerarray);
        this.writeArrayIntoFile(this.getArrayFromFile().concat(worker));
    }

    deleteWorker(stuffnumber)
    {
        this.writeArrayIntoFile(this.getArrayFromFile().filter(w => w.stuffnumber != stuffnumber));
    }

    updateworker(worker)
    {
        this.writeArrayIntoFile(this.getArrayFromFile().map(w => {
            if(w.stuffnumber == worker.stuffnumber)
            {   
                return worker;
            }else{
                return w;
            }
        }));
    }

    findWorkerByStuffNumber(stuffnumber)
    {
        return this.getArrayFromFile().find(w => w.stuffnumber == stuffnumber);
    }
    searchByName(name)
    {
        return this.getArrayFromFile().map(w => `${w.firsName} ${w.lastName}`.toLowerCase().includes(name));
    }
    //warning
    writeToFile(number,cervicenumbers)
    {
        fs.writeFileSync(this.fileName,JSON.stringify(Worker.getRandomWorker(number,cervicenumbers)));
    }
}