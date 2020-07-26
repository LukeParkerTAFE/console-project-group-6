const { askQuestion } = require("../Common/AskQuestion");
const Worker = require("../Models/Worker");
const ServiceCenterDataLayer = require("../DataLayer/ServiceCenterDataLayer");
const WorkerDataLayer = require("../DataLayer/WorkerDataLayer");
const ServiceCenterService = require("../Service/ServiceCenterService");
const WorkerService = require("../Service/WorkerService");

const path = require("path");



let databasepath = path.join(__dirname, "../../", "JsonData");
let _serviceCenterDataLayer = new ServiceCenterDataLayer(path.join(databasepath, "ServiceCenter.json"));
let _workerDataLayer = new WorkerDataLayer(path.join(databasepath, "Worker.json"));
let _servicecenterservice = new ServiceCenterService(_serviceCenterDataLayer, _workerDataLayer);
let _WorkerService = new WorkerService(_workerDataLayer, _serviceCenterDataLayer);


async function addworker() {
    let workerfirstname = await askQuestion("Enter the worker First Name: ");
    let workerlastname = await askQuestion("Enter worker last name: ");
    let wokerage = await askQuestion("Enter Worker Age: ");
    let workercenter = await askQuestion("Enter worker Center: ");
    workercenter = parseInt(workercenter);
    let workerpostion;
    if (!_WorkerService.validworker(workercenter)) {
        console.log("Error: this center is not Exist");
    } else {
        let shouldloop = true;
        while (shouldloop) {
            console.log("[1] Manger.");
            console.log("[2] Coordinator.");
            console.log("[3] Conciearge.");
            console.log("[4] CSR.");
            console.log("[5] DSR.");

            let userinput = await askQuestion("Enter worker Postion: ");

            switch (userinput) {
                case "1":
                    let new_workercenter = _servicecenterservice.listofworkers(workercenter);
                    if (new_workercenter.find(w => w.postion.toLowerCase().includes("manger"))) {
                        console.log("Center has already a manger..");
                        break;
                    }
                    workerpostion = "Manger";
                    shouldloop = false;
                    break;
                case "2":
                    workerpostion = "Coordinator";
                    shouldloop = false;
                    break;
                case "3":
                    workerpostion = "Conciearge";
                    shouldloop = false;
                    break;
                case "4":
                    workerpostion = "CSR";
                    shouldloop = false;
                    break;
                case "5":
                    workerpostion = "DSR";
                    shouldloop = false;
                    break;

                default:
                    console.log("please select from the list above 1 -> 5");
            }
        }
        wokerage = parseInt(wokerage);
        let new_worker = new Worker(workerfirstname, workerlastname, wokerage, workerpostion, workercenter);
        _WorkerService.addWorker(new_worker);
    }

}

async function searchforworker() {
    let searchname = await askQuestion("Enter the worker name: ");
    searchname = searchname.toLowerCase();
    let workerresult = _WorkerService.searchByName(searchname);
    let worker;
    if (workerresult == undefined) {

    }
    else if (workerresult.length > 1) {
        console.log("\nmore than worker has been found.\n");
        console.log(workerresult);
        let age = await askQuestion("Enter the worker age: ");
        worker = workerresult.filter(w => w.age == age);
        if (worker.length > 1 || worker == undefined) {
            console.log("PLEASE DO THE SEARCH AGIAN AND GIVE MORE DETAILS..");
        }
        else {
            worker = worker[0];
            if (worker == undefined) {
                console.log("No MATCHING...");
            }
            else {
                console.log(`worker has been found as  ${worker.getinfo()}`);
                return worker;
            }
        }
    }
    else {
        worker = workerresult[0];
        console.log(`worker has been found as  ${worker.getinfo()}`);

        console.log(worker.stuffnumber);
        return worker;
    }
}

async function deletworker(workerselected) {

    if (workerselected == undefined) {
        console.log("Worker is not exist..");
    }
    else {
        _WorkerService.deleteWorker(workerselected.stuffnumber);
        console.log("Worker has been deleted");
    }
}

async function updateworker(worker) {
    if (worker == undefined) {
        console.log("worker is not exist.");
    }
    else {
        let new_worker_name = await askQuestion("Enter the new name : ");
        let new_worker_familyname = await askQuestion("enter the family name: ");
        let new_worker_postion = await askQuestion("Enter the worker Postion : ");
        worker.firstName = new_worker_name;
        worker.lastName = new_worker_familyname;
        worker.postion = new_worker_postion;
        console.log(worker.stuffnumber);
        _WorkerService.updateworker(worker);
        console.log("worker has been updated");
    }
}
async function findworkerscenter(worker) {
    let workerarray = _WorkerService.findworkerscenter(worker.centerNumber);
    if (workerarray != undefined) {
        console.log(workerarray);
    }
}
async function workerMenu() {

    let shouldloop = true;
    let worker;
    while (shouldloop) {
        console.log("[1] Add worker.");
        console.log("[2] Search for worker.");
        console.log("[3] Delete worker.");
        console.log("[4] Update worker.");
        console.log("[5] find worker's Service Center.");
        console.log("[6] Going back to Main Menu.");

        let userinput = await askQuestion("Select from the List: ");
        switch (userinput) {
            case "1":
                await addworker();
                console.log("Worker Has been added.");
                break;
            case "2":
                worker = await searchforworker();
                
                break
            case "3":
                worker = await searchforworker();
                //console.log(worker.stuffnumber);
                await deletworker(worker);
                break;
            case "4":
                worker = await searchforworker();

                await updateworker(worker);
                break;
            case "5":
                worker = await searchforworker();
                console.log(worker);
                await findworkerscenter(worker);
                break;
            case "6":
                shouldloop = false;
                break;

            default:
                console.log("Please Select from the List 1 -> 6  ");
        }
    }
}

module.exports = {
    workerMenu
}