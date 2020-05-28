
const Random = require("../Common/Random");
module.exports = class ServiceCenter
{
    constructor(name,number)
    {
        this.name = name;
        this.number = number;
    }

    getinfo()
    {
        return `SERVICE Centre : ${this.name}, number:  ${this.number}` ;
    }

    static getRandomServiceCenter(number)
    {
        let array=[];
        let arraynumber = Random.getRandomNumber(number);

        for(let i=0 ; i< arraynumber ; i++)
        {

            let name = Random.getRANDOMcenter();
            if(array.find(e => e.name == name))
            {
                i--;
            }
            else
            {
                let randomcenter= new ServiceCenter(name,Random.getRandomNumber(500) + 100);
                array.push(randomcenter);
            }
   
        }
        return array;
    }

}