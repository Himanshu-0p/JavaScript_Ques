//Q1.log your name and favorite hobby to console
console.log("Himanshu","Playing badminton")

//Q2.Perform and Log the result of 45*2-10
let ans = 45*2-10;
console.log(ans);

//Q3.Console log to display the current year
const date = new Date();
console.log(date.getFullYear());

//Q4.Create two variables for the first and last name and concatenate them
let firstname = "Himanshu";
let lastname = "Patil";
console.log(firstname+" "+lastname);
console.log(`${firstname} ${lastname}`);

//Q5 Track the value of variable by logging it before and after updating
let a = 12;
console.log(a);
a = 32;
console.log(a);

//Q6 Use console.error() to simulate an error message
console.error("Something went wrong");

//Q7 log the sq of the number 12 to the console
let sqans = 12*12;
console.log(sqans);

//Q8 Print the type of variable holding ur age and log whether its greater than 18
let as = "true";
console.log(typeof as);


//Q9 Create a variable holding ur age and check whether it is greater than 18 or not

function ageverify(val){
    if(val < 18) return "Not an Adult";
    return "Adult";
}
console.log(ageverify(22));


//Q10 Log the result of 100/0 and observe the result
console.log(100/0);  //Ans would be infinity