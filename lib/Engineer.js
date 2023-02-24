// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee") 

class Engineer extends Employee{

    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;

    }

    getGithub(){
        return this.github

    }

    getRole(){
        return 'Engineer'

    }

}

const engineer1 = new Engineer('John', 12342, "john.smith@hotmail.com", "johnCla")
console.log(engineer1)

module.exports = Engineer;