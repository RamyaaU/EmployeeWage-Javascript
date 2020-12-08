console.log("Welcome to employee wage problem\n");

//UC 1 : Check if employee is present or absent
console.log("UC 2\nChecking if employee is present or absent:");
const IS_ABSENT = 0;
//UC 2 Refactor
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
console.log("UC 3\nCalculating wage for employee:");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;

// UC 3 Refactor
function getWorkingHrs(empCheck)
{
    switch (empCheck) 
    {
        case IS_PART_TIME:            
            return PART_TIME_HOURS;          
        case IS_FULL_TIME:      
            return FULL_TIME_HOURS;
        default:       
            return 0;
    }
}
let empWage = WAGE_PER_HOUR*getWorkingHrs(empCheck);
console.log("Employee wage for the day: " + empWage);

// UC 4 : Calculate total emp wage for a month assuming 20 working days
console.log("UC 4\nCalculating monthly wage given 20 days")
const NUM_OF_WORKING_DAYS = 20;
empHrs=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs+=getWorkingHrs(empCheck);
}
empWage=empHrs*WAGE_PER_HOUR;
console.log("Total monthly wage: "+empWage);

//UC 5 : Calculate wages till a condition of total working hours of 160 or max days of 20 is reached for a month
console.log("UC 5\nCalculating monthly wage given condition")
const MAX_HOURS_IN_A_MONTH=160;
const MAX_NUMBER_OF_DAYS=20;
let totalWorkHrs=0;
let totalWorkingDays=0;
let empDailyWageArray = new Array();
while(totalWorkingDays<MAX_NUMBER_OF_DAYS&& totalWorkHrs<MAX_HOURS_IN_A_MONTH)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs=getWorkingHrs(empCheck);
    if(empHrs!=0 && totalWorkHrs==156)
    {
        empHrs=PART_TIME_HOURS;
    }
    totalWorkHrs+=empHrs;
    //UC 6 refactor
    empDailyWageArray.push(empHrs*WAGE_PER_HOUR);
}
let totalEmpWage=calculateDailyWage(totalWorkHrs);
console.log("Total days worked: "+totalWorkingDays+"\nTotal work hours: "+totalWorkHrs+"\nTotal monthly wage: "+totalEmpWage);

//UC 6 : Store the daily wage along with the total wage
for(let i=0;i<empDailyWageArray.length;i++)
{
    console.log("Emp wage for day: "+(i+1)+" is: "+empDailyWageArray[i]);
}
function calculateDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;
}

//UC 7A : Calculate total wage using array methods
totalEmpWage=0;
function sum(dailyWage)
{
    totalEmpWage+=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC 7A\nTotal emp wage using Foreach: "+totalEmpWage);
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
console.log("Total emp wage using reduce(): "+empDailyWageArray.reduce(totalWages,0));

//UC 7B : Show the Day along with Daily Wage using Array map helper function
let dailyCounter=0;
function mapDayWithWage(dailyWage)
{
    dailyCounter++;
    return dailyCounter+" = "+dailyWage;
}
console.log("UC 7B\nDaily wage map:\n");
let mapDayWithWageArr=empDailyWageArray.map(mapDayWithWage);
console.log(mapDayWithWageArr);

//UC 7C : Show Days when Full time wage of 160 were earned using filter function
function fullTimeWage(dailyWage)
{
    return dailyWage.includes('160');
}
console.log("UC 7C\nDaily wage filter when full time wage earned:");
let fullDayWageArr=mapDayWithWageArr.filter(fullTimeWage);
console.log(fullDayWageArr);

//UC 7D : Find the first occurrence when Full Time Wage was earned using find function
console.log("UC 7D\nFirst time full time wage was earned on Day:")
console.log(mapDayWithWageArr.find(fullTimeWage));

//UC 7E : Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes('160');
}
console.log("UC 7E\nCheck all elements have full time wage: "+fullDayWageArr.every(isAllFullTimeWage))

//UC 7F : Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes('80');
}
console.log("UC 7F\nCheck if any part time wage is present: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G : Find the number of days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage)
{
    if(dailyWage>0)
    return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G\nNumber of days employee worked: "+empDailyWageArray.reduce(totalDaysWorked,0));