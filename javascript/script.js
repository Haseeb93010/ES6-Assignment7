let now = new Date();

let year = now.getFullYear();

/*--------------------------- current date and time ------------------------------------*/

document.getElementById("original").innerHTML = `<p class="mb-0">${now}</p>`;

/*--------------------------- current footer year ------------------------------------*/

document.getElementById("year").innerHTML = year;

/*--------------------------- clear output function ------------------------------------*/

const clearOutput = () => {
    document.getElementById("output").innerHTML = "";
}

/*--------------------------- show output function ------------------------------------*/

const showOutput = (output) => {
    return document.getElementById("output").innerHTML = output
}

/*--------------------------- getInputValue Function ------------------------------------*/

const getInputValue = () => {
    return document.getElementById("inputValue").value;
}

/*--------------------------- getDayName function ------------------------------------*/
const getDayName = () => {
    let now = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let dayName = days[now.getDay()];

    showOutput(dayName);

}

/*--------------------------- Calculate days when i born function ----------------------*/

const calculateDays = () => {
    let dob = getInputValue();

    if (!dob) {
        alert("please enter your date of birth");
        return;
    }

    let today = new Date();

    let dobDate = new Date(dob);

    // console.log(today);
    // console.log(dobDate);

    let msDiff = today.getTime() - dobDate.getTime();

    let daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));

    let html = `<span style ="color:green; font-size:20px">${daysDiff}</span> days has been passed since you born.`

    showOutput(html);
}

/*-------------------------------- When is your next BirthDay -----------------------------*/

const nextBirthday = () => {
    let dob = getInputValue();

    if (!dob) {
        alert("please enter your date of birth");
        return;
    }

    let today = new Date();

    let dobDate = new Date(dob);

    // console.log(today);
    // console.log(dobDate);

    let msDiff = dobDate.getTime() - today.getTime();

    let daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));

    let html = `Your next birth day is <span style ="color:green; font-size:20px">${daysDiff}</span> days away.`

    showOutput(html);

}

/*--------------------------- Greet User Funtion ------------------------------------*/

const greetUser = () => {
    let user = prompt("please enter your name");

    if (!user) {
        alert("please enter your name");
        return;
    }

    let greetMsg = `Have a good day ${user}`;

    showOutput(greetMsg);
}
/*-------------------------------- Tell Time 1 Funtion ------------------------------*/

const tellTime_1 = () => {
    let now = new Date();

    let time = now.toLocaleTimeString()

    let html = `<span style="color:green;">${time}</span>`;

    showOutput(html);
}
/*-------------------------------- Tell Time 2 Funtion ------------------------------*/

const tellTime_2 = () => {
    let now = new Date();

    let time = now.toLocaleTimeString()

    let html = `<span style="color:green;">${time}</span>`;

    showOutput(html);
}
/*-------------------------------- Tell Time 3 Funtion ------------------------------*/

const tellTime_3 = () => {
    let now = new Date();

    let time = now.toLocaleTimeString()

    let html = `<span style="color:green;">${time}</span>`;

    showOutput(html);
}

/*--------------------------------- Calculate Tax -----------------------------*/ 

function calculatTaxBtn(){

    var price = +prompt("Enter price");

    var taxRate = 17;

    var tax = price * (taxRate/100);

    let html = "Tax: " + tax;
    
    showOutput(html)
}

function calculateTotal(price){

    if(price > 1000){
        var taxRate = 17;
    }else{
        var taxRate = 8;
    }
    var tax = price * (taxRate/100);

    var total = price + tax;

    return total;
}

function calculateTotalBtn(){

    var price = +prompt("Enter price");

    var total = calculateTotal(price);

    let html = "Total: " + total

    showOutput(html)

}

