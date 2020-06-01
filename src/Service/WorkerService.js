

module.exports = class WorkerService {
    constructor(workerDataLayer, ServiceCenterDataLayer) {
        this.workerDataLayer = workerDataLayer;
        this.ServiceCenterDataLayer = ServiceCenterDataLayer;
    }

    validworker(newcenternumber) {
        if (isNaN(newcenternumber)) {
            return false;
        }
        else if (this.ServiceCenterDataLayer.getCenterNumber().find(n => n == newcenternumber)) {
            return true;
        }
        else {
            return false;
        }
    }
    addWorker(newworker) {
        if (!this.validworker(newworker.centerNumber)) {
            console.log("Error : This worker is not Valid.");
        }
        else {
            this.workerDataLayer.addWorker(newworker);
        }
    }

    deleteWorker(stuffnumber) {

        this.workerDataLayer.deleteWorker(stuffnumber);
    }

    updateworker(newworker) {
        // if (this.workerDataLayer.findWorkerByStuffNumber(newworker.stuffnumber) == undefined) {
        //     console.log(this.workerDataLayer.findWorkerByStuffNumber(newworker.stuffnumber));
        //     console.log("Error: this worker is not Exist.");
        // }
        //console.log(newworker);
        // if (!this.validworker(newworker.centerNumber)) {
        //     console.log("Error : This worker is not Valid.");
        // }
        // else {
            this.workerDataLayer.updateworker(newworker);
        // }

    }

    searchByName(name) {
        let names = this.workerDataLayer.searchByName(name);
        if (names.length == 0) {
            console.log("No MATCHING...");
        }
        else {
            return names;
        }
    }

    findworkerscenter(workercenternumber) {
        let center = this.ServiceCenterDataLayer.getServiceCenter().find(c => c.number == workercenternumber);
        if (center == undefined) {
            console.log("This Worker has No Center..");
        }
        else {
            return center;
        }
    }

}