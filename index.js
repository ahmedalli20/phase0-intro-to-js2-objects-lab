// Write your solution in this file!
var employee = {};
//this is the code


function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newEmployee={};
            newEmployee['name'] = 'Sam';
            newEmployee['streetAddress']= '11 Broadway';
        return newEmployee;
      }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee['name'] = 'Sam';
    employee['streetAddress']= '12 Broadway';
    return employee
  }


  function  deleteFromEmployeeByKey(employee, key){
    var newEmployee={}; 
            newEmployee['streetAddress']= '11 Broadway';
            delete newEmployee['streetAddress']
        return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee['name'] = 'Sam';
    employee['streetAddress']= '12 Broadway';
    delete employee['name'];
    return employee
  }