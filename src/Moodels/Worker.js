const {v4}= require("uuid");
const Random = require("../Common/Random");


module.exports  = class Worker
{
    constructor(firstName,lastName,age,postion,centerNumber,stuffnumber=v4() )
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.postion = postion;
        this.centerNumber = centerNumber;
        this.stuffnumber = stuffnumber;
    }

    getinfo()
    {
        return `worker : ${this.firstName} ${this.lastName} is ${this.age} `;
    }

    static getRandomWorker(number , centerNumber)
    {
        let arry=[];
        arry.push(new Worker(Random.getRandomGivenName(),Random.getRandomFamilyName(),Random.getRandomNumber(50) + 18,"Manger",centerNumber));

        let arraynumber = Random.getRandomNumber(number);
        for(let i=0; i< arraynumber ; i++)
        {
            let postion = Random.getPostion();
            let worker= new Worker(
                    Random.getRandomGivenName(),
                    Random.getRandomFamilyName(),
                    Random.getRandomNumber(50) + 18,
                    postion,
                    centerNumber
                );
            arry.push(worker);    
        }
        return arry;
    }
}