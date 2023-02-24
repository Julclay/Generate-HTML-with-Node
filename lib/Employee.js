// TODO: Write code to define and export the Employee class

class Employee {

    constructor(name, id, email){

        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    
    
    getName(){
        return this.name;


    }

    getId(){
        return this.id;


    }

    getEmail(){
        return this.email;


    }

    getRole(){
        return "Employee";


    }

}

const engineer1 = new Employee('John', 12342, "john.smith@hotmail.com",)

module.exports = Employee;