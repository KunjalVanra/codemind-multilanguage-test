import { calculateTotal } from "./utils.js";

class ProjectManager {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`Project: ${this.name}`);
    }
}

function startProject() {
    const manager = new ProjectManager("CodeMind");
    manager.display();

    const total = calculateTotal([10, 20, 30]);
    console.log("Total:", total);
}

startProject();
