
const fs = require("fs");
const ServiceCenter = require("../Models/ServiceCenter")
module.exports = class ServiceCenterDataLayer
{
    constructor(FileName)
    {
        this.FileName=FileName;
    }

    getServiceCenter()
    {
        return JSON.parse(fs.readFileSync(this.FileName).toString()).map(e => new ServiceCenter(
            e.name,
            e.number
        ));
    }
    

    writeArrayIntoFile(servicecenter)
    {
        fs.writeFileSync(this.FileName,JSON.stringify(servicecenter));
    }   

    searchByNumber(centernumber)
    {
        return this.getServiceCenter().find(c => c.number == centernumber);
    }
    addServiceCenter(serviceCenter)
    {
        // let cervicecenterarray= this.getServiceCenter();
        
        // cervicecenterarray.push(serviceCenter);
        // this.writeArrayIntoFile(cervicecenterarray);
        this.writeArrayIntoFile(this.getServiceCenter().concat([serviceCenter]));
        
    }

    deleteServiceCenter(number) 
    {

        this.writeArrayIntoFile(this.getServiceCenter().filter(c => c.numer != number));
    }
                      
    updateServiceCenter(servicecenter) 
    {
        this.writeArrayIntoFile(this.getServiceCenter().map(s => {
            if(s.number == serviceCenter.number)
            {
                return serviceCenter;
            }
            else{
                return s;
            }
        }));
    }

    searchByName(centername)
    {
        return this.getServiceCenter().find(s => s.name == centername);
    }
    getCenterNumber()
    {
        return this.getServiceCenter().map(c => c.number);
    }
    // WARNING
    writeToFile(number)
    {   
        fs.writeFileSync(this.FileName,JSON.stringify(ServiceCenter.getRandomServiceCenter(number)));
    }

    

}