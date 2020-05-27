
const fs = require("fs");
const ServiceCenter = require("../Moodels/ServiceCenter")
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
    // WARNING
    writeToFile(number) //20
    {   
        fs.writeFileSync(this.FileName,JSON.stringify(ServiceCenter.getRandomServiceCenter(number)));
    }

    

}