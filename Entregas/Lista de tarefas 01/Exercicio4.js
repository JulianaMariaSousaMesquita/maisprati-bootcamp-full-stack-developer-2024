// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const readline = require("readline");

function displayMenu() {
    console.log("Menu:");
    console.log("1. Option 1");
    console.log("2. Option 2");
    console.log("3. Option 3");
    console.log("0. Exit");
}

function handleInput(option) {
    switch (option) {
        case "1":
            console.log("Option 1 selected");            
            break;
        case "2":
            console.log("Option 2 selected");            
            break;
        case "3":
            console.log("Option 3 selected");
            break;
        case "0":
            console.log("Exiting...");
            process.exit(0);
            break;
        default:
            console.log("Invalid option");
            break;
    }
}

function startMenu() {
    displayMenu();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter your choice: ", (option) => {
        handleInput(option);
        rl.close();
        startMenu();
    });
}

startMenu();