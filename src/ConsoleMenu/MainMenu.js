
const { askQuestion } = require("../Common/AskQuestion");
const { ServiceCenterMenu } = require("./ServiceCenterMenu");
const { workerMenu } = require("../ConsoleMenu/WorkerMenu");

async function MainMenu() {
    let shouldloop = true;

    while (shouldloop) {
        console.log("\t\t Welcom to Service Nsw DataBase \n");
        console.log("[1] Service Center Menu.");
        console.log("[2] Worker Menu.");
        console.log("[3] Exit. ");

        let userinput = await askQuestion("Please select from the Menu : ");

        switch (userinput) {
            case "1":
                console.log("\n\t\t Service Center Menue");
                await ServiceCenterMenu();
                break;
            case "2":
                console.log("\n\t\t Worker Menu");
                await workerMenu();
                break;
            case "3":
                shouldloop = false;
                break;

            default:
                console.log("\tPlease Select from the Menu 1 -> 3.");
        }
    }

}

module.exports = {
    MainMenu
}

MainMenu().then(() => {
    process.exit(0);
});

