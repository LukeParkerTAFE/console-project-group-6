

const ServiceCenter = require("./Moodels/ServiceCenter");
const path = require("path");

// console.log(ServiceCenter.getRandomServiceCenter(5));
const Worker = require("./Moodels/Worker");

//console.log(Worker.getRandomWorker(10));


const ServiceCenterDataLayer = require("./DataLayer/ServiceCenterDataLayer");

let databasepath = path.join(__dirname,"../","JsonData");

_serviceCenterDataLayer = new ServiceCenterDataLayer(path.join(databasepath,"ServiceCenter.json"));
_serviceCenterDataLayer.writeToFile(8);
// _serviceCenterDataLayer.addServiceCenter(new ServiceCenter("Liverpool",510))