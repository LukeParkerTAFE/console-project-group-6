

const ServiceCenter = require("./Models/ServiceCenter");
const path = require("path");
const Worker = require("./Models/Worker");
const ServiceCenterDataLayer = require("./DataLayer/ServiceCenterDataLayer");
const WorkerDataLayer = require("./DataLayer/WorkerDataLayer");

let databasepath = path.join(__dirname,"../","JsonData");

let _serviceCenterDataLayer = new ServiceCenterDataLayer(path.join(databasepath,"ServiceCenter.json"));
_serviceCenterDataLayer.writeToFile(8);


let _workerDataLayer = new WorkerDataLayer(path.join(databasepath,"Worker.json"));

let centerNumbers = _serviceCenterDataLayer.getCenterNumber();

_workerDataLayer.writeToFile(10,centerNumbers);
