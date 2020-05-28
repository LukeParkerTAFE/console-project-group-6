
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

    addServiceCenter(serviceCenter)
    {
        let cervicecenterarray= this.getServiceCenter();
        
        cervicecenterarray.push(serviceCenter);
        this.writeArrayIntoFile(cervicecenterarray);
        
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