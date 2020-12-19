let name = document.querySelector("#userName");
let welcome = document.querySelector("#welcomeMessage");
let date = document.querySelector("#B-date");
let leapbtn = document.querySelector("#leapyear");
let outputdiv = document.querySelector("#output");



name.addEventListener("input", function() {
    welcome.innerText = "Hey " + name.value +  " , Welcome to the Birthday Game . Know whether you born in leap year or your birthday date is a Prime Number";
} )

leapbtn.addEventListener("click", function leapYear() {
   let dateInput = date.value;
   if(name.value.length === 0) {
       alert('Name field is empty . Kindly fill that first.');
   } else if (dateInput.length == 0) {
     alert('Date field is empty . Kindly fill that first.');
   } else {
    let split = dateInput.split('-');
    let yearstring = split[0];
    let year = parseInt(yearstring);
    let currDate = new Date();
    let currYear = currDate.getFullYear();


   if(year >= 1000 && year <= currYear) { 
   if(year % 400 === 0 || year % 4 === 0) {
       outputdiv.innerText = "congratulations " + name.value + " , You were born in a leap year. Hope you enjoyed playing this game. ";
   }
    else if (year % 100 === 0) {
       outputdiv.innerText = "Sorry!" + name.value + " , You were not born in a leap year . Thanks for playing this game.";
   }
   else {
       outputdiv.innerText = "Sorry!" + name.value + " , You were not born in a leap year . Thanks for playing this game.";
   }
}
   else {
     console.log(name.value.length);
     if(name.value.length === 0) {
        alert('Name field is empty . Kindly fill that first.');
    } else {
        alert(' Please enter the valid birth Date. Kindly fill that first.');
    }
   }
}
}
);

