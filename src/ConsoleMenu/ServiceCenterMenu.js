const  { askQuestion } = require("../Common/AskQuestion");
const ServiceCenter = require("../Models/ServiceCenter");
const ServiceCenterDataLayer = require("../DataLayer/ServiceCenterDataLayer");
const WorkerDataLayer = require("../DataLayer/WorkerDataLayer");
const  ServiceCenterService  = require("../Service/ServiceCenterService");
const path = require("path");



let databasepath = path.join(__dirname,"../../","JsonData");
let _serviceCenterDataLayer = new ServiceCenterDataLayer(path.join(databasepath,"ServiceCenter.json"));
let _workerDataLayer = new WorkerDataLayer(path.join(databasepath,"Worker.json"));
let _servicecenterservice = new ServiceCenterService(_serviceCenterDataLayer,_workerDataLayer);


async function addServiceCenter()
{
    let servicecentername = await askQuestion("Enter service center name: ");
    let servicecenternumber = await askQuestion("Enter service center number: ");
    let servicecenter = new ServiceCenter(servicecentername,servicecenternumber);
    _servicecenterservice.addServiceCenter(servicecenter);
}

async function ServiceCenterMenu()
{
    let shouldloop = true;

    while(shouldloop)
    {

        console.log("\t\t Service Center Menue");
        console.log("[1] Add Service Center.");
        console.log("[2] Search for Service Center.");
        console.log("[3] Delete Service Center.");
        console.log("[4] Update Service Center.");
        console.log("[5] Print all workers in the Service Center.");
        console.log("[6] Back to Main Menu.");

        let userinput = await askQuestion("Select from the List above: ");
        switch(userinput)
        {
            case "1":
                await addServiceCenter();
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                shouldloop = false;
                break;

            default :
                console.log("Please select from the list 1 -> 6");    
        }

    }
}

module.exports = {
    ServiceCenterMenu
}