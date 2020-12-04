console.log("Welcome to employee wage problem");

//UC 1 : Check if employee is present or absent
console.log("UC1: Checking if employee is present or absent");
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
{
    if (empCheck == IS_ABSENT) {
        console.log("Employee is Absent");
    }
    else {
        console.log("Employee is Present");
    }
}

//UC 2 : Calculate daily wage based on part time or full time
console.log("UC2: Calculating wage for employee");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
switch (empCheck) 
{
    case IS_PART_TIME:
        console.log("Employee is working part time");
        empHrs = 4;
        break;
    case IS_FULL_TIME:
        console.log("employee is working full time");
        empHrs = 8;
        break;
    default:       
        empHrs = 0;
        break;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee wage: " + empWage);
