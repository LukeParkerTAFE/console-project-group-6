


module.exports = class ServiceCenterService {
    constructor(servicecenterdatalayer, workerdatalayer) {
        this.servicecenterdatalayer = servicecenterdatalayer;
        this.workerdatalayer = workerdatalayer;
    }

    addServiceCenter(newservicecenter) {
        let servicecenter = this.servicecenterdatalayer.searchByNumber(newservicecenter.number);
        if (servicecenter) {
            console.log("This Center is Already Exist.");
        }else if(!this.validcenter(newservicecenter))
        {
            console.log("The Center is not valid");
        }
        else {
            this.servicecenterdatalayer.addServiceCenter(newservicecenter);
            console.log("\nService Center has been Added");
        }
        
    }

    validcenter(servicecenter)
    {
        if(servicecenter.number > 100 && servicecenter.number < 600)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    deleteServiceCenter(centernumber) {
    
        this.servicecenterdatalayer.deleteServiceCenter(centernumber);
       
    }

    updateServiceCenter(newservicecenter)
    {
        let servicecenter = this.servicecenterdatalayer.searchByNumber(newservicecenter.number);
        if (servicecenter) {
            this.servicecenterdatalayer.updateServiceCenter(newservicecenter);
        }
        else {
            console.log("Center is not Exist.");
        }

    }
    searchByName(centername)
    {
        let centerarray =  this.servicecenterdatalayer.searchByName(centername);
        
        if(centerarray.length == 0)
        {
            console.log("No Matching...");
        }
        else{
            return centerarray;
        }
    }

    listofworkers(centernumber)
    {
        let workers = this.workerdatalayer.getArrayFromFile();
        let workersbelongtothecenter = workers.filter(w => w.centerNumber == centernumber);
        if(workersbelongtothecenter)
        {
            return workersbelongtothecenter;
        }
        else
        {
            console.log("No Workers in the Center...");
        }
    }

}