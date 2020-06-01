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
    servicecenternumber = parseInt(servicecenternumber);
    let servicecenter = new ServiceCenter(servicecentername,servicecenternumber);
    _servicecenterservice.addServiceCenter(servicecenter);
    
}

async function searchforservicecenter()
{
    let inputname = await askQuestion("Enter the name: ");
    inputname = inputname.toLowerCase();
    let servicenames =_servicecenterservice.searchByName(inputname);
    let selectedservicecenter;
    
    if(servicenames == undefined)
    {
        console.log("Error: No Center");
    }
    else if(servicenames.length > 1)
    {
        console.log(servicenames);
        let number = await askQuestion("please enter service number: ");
        selectedservicecenter = servicenames.find(n => n.number == number);
        console.log(selectedservicecenter);
        return selectedservicecenter;
    }
    else
    {
        selectedservicecenter = servicenames[0];
        console.log(selectedservicecenter);
        return selectedservicecenter;
    }
}

async function deleteCenter(center)
{
    _servicecenterservice.deleteServiceCenter(center.number);
    console.log("Center has been deleted..");
}
async function ServiceCenterMenu()
{
    let shouldloop = true;
    let selectecenter;
    while(shouldloop)
    {

        
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
                await searchforservicecenter();
                break;
            case "3":
                selectecenter = await searchforservicecenter();
                if(selectecenter == undefined)
                {
                    break;
                }
                await deleteCenter(selectecenter);
                break;
            case "4":
                selectecenter= await searchforservicecenter();
                if(selectecenter == undefined)
                {
                    break;
                }
                let newservicecentername = await askQuestion("Please enter the new center name: ");
                selectecenter.name=newservicecentername ;
                _servicecenterservice.updateServiceCenter(selectecenter);
                console.log("the center name has been updated..");
                break;
            case "5":
                selectecenter= await searchforservicecenter();
                if(selectecenter == undefined)
                {
                    break;
                }
                console.log(_servicecenterservice.listofworkers(selectecenter.number));
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