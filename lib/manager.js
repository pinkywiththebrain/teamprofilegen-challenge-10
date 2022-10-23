// officeNumber, getRole() //overridden to return 'Manager'
const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;