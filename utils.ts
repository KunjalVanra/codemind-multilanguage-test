interface Project {
    name: string;
    version: number;
}

class ProjectService {
    getProject(): Project {
        return {
            name: "CodeMind",
            version: 1
        };
    }
}

function calculateTotal(numbers: number[]): number {
    return numbers.reduce((total, value) => total + value, 0);
}

export { ProjectService, calculateTotal };
