let birthButton = document.querySelector("#birth");

//event listener
birthButton.addEventListener("click", ()=>{
    console.log("button pressed");
    sendApiRequest();
})

async function sendApiRequest(){
    let API_KEY = "l8SEJRkChs8lXnCnC7l2eDrrsZcw1LmytNZh16d0"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json();
    console.log(data);
    useApiData(data);
}

function useApiData(data) {
document.querySelector("#content").innerHTML += data.explanation;
document.querySelector("#content").innerHTML += `<img src="${data.url}`
}

const date = new Date();

date.setMonth(9);

const monthDays = document.querySelector('days');

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

document.querySelector(".date p").innerHTML = date();

let days = "";
for(let i = 1; i <= 31; i++) {
    days += '<div>${i}</div>';
monthDays.innerHTML = days;
}

