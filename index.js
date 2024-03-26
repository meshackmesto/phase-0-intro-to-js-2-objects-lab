// Write your solution in this file!
const employee = {
    name:"felo",
    streetAddress:"Kinangop",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = {
        ...employee,
        name :"Sam",
        streetAddress: "11 Broadway",
    }
    return updateEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name ="Sam",
    employee.streetAddress = "12 Broadway"
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {
        ...employee,
        name :"Sam",
        streetAddress: "11 Broadway",
        };
        delete newEmployee[key];
        return newEmployee;

    }
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}