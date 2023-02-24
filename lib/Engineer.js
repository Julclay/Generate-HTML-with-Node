// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee") 

class Engineer extends Employee{

    constructor(name, id, email, gitHubUser){
        super(name, id, email);
        this.gitHubUser = gitHubUser;

    }

    getGithub(){
        return this.gitHubUser

    }

    getRole(){
        return 'Engineer'

    }

}

const engineer1 = new Engineer('John', 12342, "john.smith@hotmail.com", "johnCla")
console.log(engineer1)

module.exports = Engineer;