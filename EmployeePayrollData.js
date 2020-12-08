//UC12,13,14
class EmployeePayrollData
{
     // constructor
    // Spread operator used to provide multiple dynamic parameters to constructor
    constructor (...params)
    {
        this.id= params[0];
        this.name= params[1];
        this.salary= params[2];
        this.gender= params[3];
        this.startDate= params[4];
    }

    //UC 14 - Regex for id
    get id(){return this._id}
    set id(id)
    {
        let idRegex= RegExp('^[1-9]{1,}$');
        if(idRegex.test(id))
            this._id= id;
        else throw 'Invalid Id';
    }

    //UC 13 - Regex for name
    get name(){ return this._name;}
    set name(name)
    { 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name=name;
        else throw 'Name is Incorrect!';
    }

    //UC 14 - Regex for salary 
    get salary(){return this._salary}
    set salary(salary)
    {
        let salaryRegex= RegExp('^[1-9]+[0-9]{1,}$');
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Invalid salary';
    }

    //checks whether start date is not a future date
    get gender(){return this._gender;}
    set gender(gender)
    {
        let genderRegex= RegExp('^[MF]$');
        if(genderRegex.test(gender))
            this._gender= gender;
        else throw  'Invalid gender';
    }

    get startDate(){return this._startDate;}
    set startDate(startDate)
    {
        let currentDate= new Date();
        if(currentDate - startDate >= 0)
            this._startDate= startDate;
        else throw  'Invalid date';
    }

    toString()
    {
        const options = {year:'numeric',month:'long',day:'numeric'};
        const empDate = this.startDate===undefined ? "undefined": this.startDate.toLocaleDateString("en-US",options); 
        return "id= "+this.id+", name= "+ this.name+", salary= "+this.salary+", gender= "+this.gender+", startdate= "+ empDate;    
    }
}  

let employeePayrollData= new  EmployeePayrollData(1,"Mark",30000, 'M', new Date());
console.log(employeePayrollData.toString());

//UC13,14
try
{
   employeePayrollData.id= 2;
   employeePayrollData.name= "Jeff";
   employeePayrollData.salary = 12345;
   employeePayrollData.startDate = new Date("2020-02-23");
   employeePayrollData.gender = 'M'
   console.log(employeePayrollData.toString());
}
catch(e)
{
    console.error(e);
}
let newEmployeePayrollData= new EmployeePayrollData(3,"Terrisa",30000,"F", new Date());
console.log(newEmployeePayrollData.toString());