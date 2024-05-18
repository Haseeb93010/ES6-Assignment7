let now = new Date();

let year = now.getFullYear();

// --------------------------- current date and time

document.getElementById("original").innerHTML = `<p class="mb-0">${now}</p>`;

// --------------------------- current year for footer

document.getElementById("year").innerHTML = year;

// --------------------------- get name of today

const getDayName = () => {
    let now = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let dayName = days[now.getDay()];

    document.getElementById("output").innerHTML = dayName

}







