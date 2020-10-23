// DOM Elements
const time = document.querySelector('.time'),
    date = document.querySelector('.date'),
    greeting = document.querySelector('.greeting'),
    name = document.querySelector('.name'),
    focus = document.querySelector('.focus'),
    btn = document.querySelector('.btn_img'),
    btn_q = document.querySelector('.btn_qts'),
    blockquote = document.querySelector('blockquote'),
    figcaption = document.querySelector('figcaption'),
    city = document.querySelector('.weather'),
    weatherIcon = document.querySelector('.weather-icon'),
    temperature = document.querySelector('.temperature'),
    humidity = document.querySelector('.humidity'),
    windspeed = document.querySelector('.windspeed'),
    weatherDescription = document.querySelector('.weather-description');

const fsrc = 'assets/images/';
const tsrc = ['night/', 'morning/', 'day/', 'evening/'];
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg',
    '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg',
    '18.jpg', '19.jpg', '20.jpg'
];
let count = 0;
let today = new Date();
var value = today.getHours()
var imArr = getArrayImage();

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        day = today.getDate(),
        month = today.getMonth(),
        wday = today.getDay(),
        year = today.getFullYear();

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec)}`;
    date.innerHTML = `${dayToWord(wday)}<span>, </span>${day}<span> </span>${monthToWord(month)}<span> </span>${year}`;
    btn.addEventListener('click', updateBg);
    setTimeout(showTime, 1000);
}

function dayToWord(day) {
    switch (day) {
        case 1:
            return 'Mondey'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        case 0:
            return 'Sunday'
    }
}

function monthToWord(month) {
    switch (month) {
        case 0:
            return 'January'
        case 1:
            return 'February'
        case 2:
            return 'March'
        case 3:
            return 'April'
        case 4:
            return 'May'
        case 5:
            return 'June'
        case 6:
            return 'July'
        case 7:
            return 'August'
        case 8:
            return 'September'
        case 9:
            return 'October'
        case 10:
            return 'November'
        case 11:
            return 'December'
    }
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Greeting and Background
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();

    if (hour < 12) {
        // Morning
        setBackground(hour);
        greeting.textContent = 'Good Morning, ';
        //setTimeout(setBgGreet, 360000)

    } else if (hour < 18) {
        // Afternoon
        greeting.textContent = 'Good Afternoon, ';
        setBackground(hour);
        document.body.style.color = 'white';
        //setTimeout(setBgGreet, 360000)
    } else {
        // Evening
        greeting.textContent = 'Good Evening, ';
        setBackground(hour)
        document.body.style.color = 'white';
        //setTimeout(setBgGreet, 360000)
    }
    setTimeout(setBgGreet, (((59 - minute) * 60000 + (59 - second) * 1000) + 1000));
}


function updateBg() {
    setBackground(value);
    value++;
    if (value > 23) { value = 0 }
    console.log(value)
    btn.disabled = true;
    setTimeout(function() { btn.disabled = false }, 1000);
}

//Get Background
function getBackground(hour) {
    let imgSrces = '';
    switch (hour) {
        case 0:
            {
                imgSrces = imgSrces + fsrc + tsrc[0] + imArr[0];
                //count++;
                return imgSrces
            }
        case 1:
            {
                imgSrces = imgSrces + fsrc + tsrc[0] + imArr[1];
                //count++;
                return imgSrces
            }
        case 2:
            {
                imgSrces = imgSrces + fsrc + tsrc[0] + imArr[2];
                //count++;
                return imgSrces
            }
        case 3:
            {
                imgSrces = imgSrces + fsrc + tsrc[0] + imArr[3];
                //count++;
                return imgSrces
            }
        case 4:
            {
                imgSrces = imgSrces + fsrc + tsrc[0] + imArr[4];
                //count++;
                return imgSrces
            }
        case 5:
            {
                imgSrces = imgSrces + fsrc + tsrc[0] + imArr[5];
                //count++;
                return imgSrces
            }
        case 6:
            {
                imgSrces = imgSrces + fsrc + tsrc[1] + imArr[0];
                //count++;
                return imgSrces
            }
        case 7:
            {
                imgSrces = imgSrces + fsrc + tsrc[1] + imArr[1];
                //count++;
                return imgSrces
            }
        case 8:
            {
                imgSrces = imgSrces + fsrc + tsrc[1] + imArr[2];
                //count++;
                return imgSrces
            }
        case 9:
            {
                imgSrces = imgSrces + fsrc + tsrc[1] + imArr[3];
                //count++;
                return imgSrces
            }
        case 10:
            {
                imgSrces = imgSrces + fsrc + tsrc[1] + imArr[4];
                //count++;
                return imgSrces
            }
        case 11:
            {
                imgSrces = fsrc + tsrc[1] + imArr[5];
                //count++;
                return imgSrces
            }
        case 12:
            {
                imgSrces = imgSrces + fsrc + tsrc[2] + imArr[0];
                //count++;
                return imgSrces
            }
        case 13:
            {
                imgSrces = imgSrces + fsrc + tsrc[2] + imArr[1];
                //count++;
                return imgSrces
            }
        case 14:
            {
                imgSrces = imgSrces + fsrc + tsrc[2] + imArr[2];
                //count++;
                return imgSrces
            }
        case 15:
            {
                imgSrces = imgSrces + fsrc + tsrc[2] + imArr[3];
                //count++;
                return imgSrces
            }
        case 16:
            {
                imgSrces = imgSrces + fsrc + tsrc[2] + imArr[4];
                //count++;
                return imgSrces
            }
        case 17:
            {
                imgSrces = imgSrces + fsrc + tsrc[2] + imArr[5];
                //count++;
                return imgSrces
            }
        case 18:
            {
                imgSrces = imgSrces + fsrc + tsrc[3] + imArr[0];
                //count++;
                return imgSrces
            }
        case 19:
            {
                imgSrces = imgSrces + fsrc + tsrc[3] + imArr[1];
                //count++;
                return imgSrces
            }
        case 20:
            {
                imgSrces = imgSrces + fsrc + tsrc[3] + imArr[2];
                //count++;
                return imgSrces
            }
        case 21:
            {
                imgSrces = imgSrces + fsrc + tsrc[3] + imArr[3];
                //count++;
                return imgSrces
            }
        case 22:
            {
                imgSrces = imgSrces + fsrc + tsrc[3] + imArr[4];
                //count++;
                return imgSrces
            }
        case 23:
            {
                imgSrces = imgSrces + fsrc + tsrc[3] + imArr[5];
                //count++;
                return imgSrces
            }
    }
}

//Set Background
function setBackground(num) {
    const img = document.createElement('img');
    const src = getBackground(num);
    img.src = src;
    img.onload = ()=>{
    document.body.style.backgroundImage = `url(${src})`;
    }
}

function getArrayImage() {
    let arr = [];
    for (var i = 0; i < 6; i++) {
        var j = Math.floor(Math.random() * (19 - 0)) + 0;
        arr[i] = images[j]
        for (var k = 0; k <= i + 1; k++) {
            if (arr[i] == arr[i - k]) {
                arr[i] = images[Math.floor(Math.random() * (19 - 0)) + 0];
            }
        }
    }
    console.log(arr)
    return arr
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
    name.onfocus = function() {
        if (localStorage.getItem('name') == null || localStorage.getItem('name') == '') {
            name.textContent = ""
        } else {
            name.textContent = localStorage.getItem('name');
        }
    }
    name.onblur = function() {
        if (name.textContent == '' || name.textContent == null) { name.textContent = '[Enter Name]' }
    }

}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
    focus.onfocus = function() {
        if (localStorage.getItem('focus') == null || localStorage.getItem('focus') == '') {
            focus.textContent = ""

        } else {
            focus.textContent = localStorage.getItem('focus');
        }
    }
    focus.onblur = function() {
        if (focus.textContent == '' || focus.textContent == null) { focus.textContent = '[Enter Focus]' }
    }

}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

async function getQuote() {
    const url = `https://favqs.com/api/qotd`;
    const res = await fetch(url);
    const data = await res.json();

    setTimeout(function() {
        blockquote.textContent = data.quote.body;
        figcaption.textContent = data.quote.author;
    })

}

async function getWeather() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=7941f175c308a149c7409c9643fd4255&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setTimeout(function() {
        try {
            weatherIcon.className = 'weather-icon owf';
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${data.main.temp}°C`;
            weatherDescription.textContent = data.weather[0].description;
            humidity.textContent = `${data.main.humidity}%`
            windspeed.textContent = `${data.wind.speed}m/s`
        } catch {
            city.textContent = '[Enter city]';
            weatherIcon.classList = '';
            temperature.textContent = '';
            weatherDescription.textContent = '';
            humidity.textContent = ''
            windspeed.textContent = ''
        }
    })
}

// Get City
function getCity() {
    if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
        city.textContent = '[Enter city]';
    } else {
        city.textContent = localStorage.getItem('city');
    }
    city.onfocus = function() {
        if (localStorage.getItem('city') == null || localStorage.getItem('city') == '') {
            city.textContent = ""
        } else {
            city.textContent = localStorage.getItem('city');
        }
    }
    city.onblur = function() {
        if (city.textContent == '' || city.textContent == null) { city.textContent = '[Enter city]' }
    }

}

function setCity(e) {
    if (e.code === 'Enter') {
        if (city.textContent == null || city.textContent == '') {
            localStorage.setItem(('city'), localStorage.getItem('city'))
        } else {
            localStorage.setItem('city', e.target.innerText);
            getWeather();
            city.blur();
        }
    }
}

//document.addEventListener('DOMContentLoaded', getQuote);
btn_q.addEventListener('click', getQuote);
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
getCity();
getQuote();
