let now = new Date();

let year = now.getFullYear();

// --------------------------- current date and time

document.getElementById("original").innerHTML = `<p class="mb-0">${now}</p>`;

// --------------------------- current year for footer

document.getElementById("year").innerHTML = year;

// --------------------------- clear output

const clearOutput = () => {
    document.getElementById("output").innerHTML = "";
}

// --------------------------- show Output function

const showOutput = (output) => {
    return document.getElementById("output").innerHTML = output
}

// -------------------------- function for get input value

const getInputValue = () => {
    return document.getElementById("inputValue").value;
}

// --------------------------- get name of today

const getDayName = () => {
    let now = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let dayName = days[now.getDay()];

    showOutput(dayName);

}

// ------------------------- calculate days since i born

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

    showOutput(html)
}

//  --------------------------------- when is your next birth day

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

    showOutput(html)

}








