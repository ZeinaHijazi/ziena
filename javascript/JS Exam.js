let user = 
[
    {  userid : 1, 

    firstname :  'Krish', 

    lastname :  'Lee', 

    phonenumber :  '123456' , 

    emailaddress : 'krish.lee@learningcontainer.com'}, 

 { userid : 2, 

    firstname :  'racks', 

    lastname : 'jacson' , 

    phonenumber :  '123456', 

    emailaddress : 'racks.jacson@learningcontainer.com'
 },

{
        userid : 3, 

    firstname :  'denial', 

    lastname :  'roast', 

    phonenumber :  '21312312', 

    emailaddress :  'denial.roast@learningcontainer.com'
}, 

 { userid : 4, 

    firstname :  'devid', 

    lastname : 'neo' , 

    phonenumber :  '8975343', 

    emailaddress :  'devid.neo@learningcontainer.com', 

 }, 

 { userid : 5, 

    firstname : 'jone' , 

    lastname :  'mac' , 

    phonenumber :  '3254667', 

    emailaddress : 'jone.mac@learningcontainer.com',

 } 

] 

//Q1

function userIdByFirstName(users,name){
    let z=name;
    let Iduser=users.filter(user=>user.firstname == z)
    let idReturned=Iduser[0].userid;
    return idReturned;
}
console.log(userIdByFirstName(user, "devid"))



//Q2

function returnIdByLastName (users,filtering){
    let x=filtering;
    let idFilter=users.filter(user=>user.lastname == x);
    let returnId=idFilter[0].userid;
    return returnId;
}
console.log(returnIdByLastName(user, "roast"))

//Q3

function fullName (users,filtering){
    let x=filtering;
    let fullNameFilter=users.filter(user=>user.phonenumber == x);
    let returnFullName=[];
    returnFullName.push(fullNameFilter[0].firstname + " " + fullNameFilter[0].lastname);
    return returnFullName;
}
console.log(fullName(user, "8975343")) 






let family = [ 

   { 
    
   firstName: "Hussam", 
    
   lastName: "Bawwab", 
    
    age: 28, 
    
    address: "Irbid", 
    
    phoneNumber: "7981323312", 
    
    jobDescription: { 
    
    title: "Frontend", 
    
    salary: 132123, 
    
    }, 
    
    childreen: [ 
    
    { 
    
    firstName: "Samer", 
    
    lastName: "Bawwab", 
    
    age: 3, 
    
    }, 
    
    { 
    
    firstName: "Bilal", 
    
    lastName: "Bawwab", 
    
    age: 6, 
    
    }, 
    
    { 
    
    firstName: "Mariam", 
    
    lastName: "Bawwab", 
    
    age: 8, 
    
    }, 
    
    ], 
    
    }, 
    
    { 
    
   firstName: "Sara", 
    
   lastName: "Lobani", 
    
   age: 22, 
    
   address: " Irbid ", 
    
   phoneNumber: "7213454654", 
    
   jobDescription: { 
    
   title: "Frontend", 
    
   salary: 2133, 
    
   }, 
    
   childreen: [ 
    
   { 
    
   firstName: "Ail", 
    
   lastName: "Lobani", 
    
   age: 13, 
    
   }, 
    
   { 
    
   firstName: "Lobna", 
    
   lastName: "Lobani", 
    
   age: 16, 
    
   }, 
    
   { 
    
   firstName: "Zaid", 
    
   lastName: "Lobani", 
    
   age: 1, 
    
   }, 
    
   ], 
    
   }, 
    
{ 
    
firstName: "Ezz", 
    
lastName: "Ashore", 
    
age: 25, 
    
address: "Amman", 
    
phoneNumber: "79823216", 
    
jobDescription: { 
    
title: "Frontend", 
    
salary: 2133, 
    
}, 
    
childreen: [ 
    
{ 
    
firstName: "Rami", 
    
lastName: "Lobani", 
    
age: 20, 
    
}, 
    
{ 
    
firstName: "Omar", 
    
lastName: "Lobani", 
    
age: 9, 
    
}, 
    
], 
    
}, 
    
{ 
    
firstName: "Mohammad", 
    
lastName: "Damra", 
    
age: 30, 
    
address: "Amman", 
    
phoneNumber: "79898798465", 
    
jobDescription: { 
    
title: "Frontend", 
    
salary: 1133, 
    
}, 
    
childreen: [ 
    
{ 
    
firstName: "Laith", 
    
lastName: "Damra", 
    
age: 1, 
    
}, 
    
{ 
    
firstName: "Ahmad", 
    
lastName: "Damra", 
    
age: 8, 
    
   }, 
    
   ], 
    
   }, 
    
    ]; 
    
    //Q10

    console.log("Ziena Hijazi");
   
   
   
   
    //Q4

    function moreThan25(family){
        let moreThan25=family.filter(Element=>Element.age >= 25);
        return {moreThan25:moreThan25}
    }
    console.log(moreThan25(family));

    //Q5

    function lessThan25(family){
        let lessThan25=family.filter(Element=>Element.age <= 25);
        return {lessThan25:lessThan25}
    }
    console.log(lessThan25(family));

    //Q6

    function taxation(family){
        let fullNames = [];
        let salaryBeforeTax = [];
        let salaryAfterTax = [];
        let jobtitle = []; 
        let result = {Opt: []};

        for (
            let i = 0; i < family.length; i++
        ){
            fullNames.push(family[i].firstName + " " + family[i].lastName);
            salaryBeforeTax.push(family[i].jobDescription.salary);
            salaryAfterTax.push(salaryBeforeTax[i] - family[i].jobDescription.salary * 0.07);
            jobtitle.push(family[i].jobDescription.title);
            result.Opt.push({
                name: fullNames[i],
                salary: salaryAfterTax[i],
                jobtitle: jobtitle[i],
            })
        }
        return result;
    }
    console.log(taxation(family));

    //Q7

    function userByAddress(userByAddress , filtering){
        let z = filtering; 
        let fullName = []; 
        let addressFiltering = userByAddress.filter((user)=>user.address == z);
        fullName.push(addressFiltering[0].firstName + " " + addressFiltering[0].lastName);
        return addressFiltering;
    }
    console.log(userByAddress(family,'Amman'));


    //Q8

    function moreThan2Kids(family){
        let checkchild = family.filter((user) => user.childreen.length >= 2);
        return {userHasMoreThan2Kids: checkchild};

    }

    console.log(moreThan2Kids(family));

    //Q9

    function price(family){
        let salaryBeforePrice=[];
        let salaryAfterPrice=[];
        let result = { Opt: [] };
        for ( 
            let i = 0; i< family.length; i++
        );{
            salaryBeforePrice.push(family[i].jobDescription.salary);
            salaryAfterPrice.push(salaryBeforePrice[i] + family[i].jobDescription.salary * 0.05);
        result.Opt.push({salaryAfterAddetion: salaryAfterPrice[i]})}
        return result;
    }

    console.log(price(family));






   