const searchEngines = {
    g: { name: "Google", url: "https://www.google.com/search?q=" },
    d: { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=" },
    yan: { name: "Yandex", url: "https://ya.ru/search/?text=" },
    y: { name: "YouTube", url: "https://www.youtube.com/results?search_query=" },
};

const searchField = document.getElementById("search-field");
const searchBox = document.getElementById("search");
const hint = document.createElement("div");

const maxFontRem = 4;
const minFontRem = 1.2;

hint.classList.add("search-hint");
searchBox.appendChild(hint);


searchField.addEventListener("input", () => {
    const val = searchField.value.trim();
    const match = val.match(/^!(\w+)/);
    if (match) {
        const key = match[1].toLowerCase();
        hint.textContent = searchEngines[key]?.name || "Unknown";
    } else {
        hint.textContent = searchEngines["g"].name;
    }
});

function search(e) {
    if (e.keyCode === 13) {
        let val = searchField.value.trim();
        let engineKey = "g";

        const match = val.match(/^!(\w+)\s+(.*)/);
        if (match) {
            const key = match[1].toLowerCase();
            if (searchEngines[key]) {
                engineKey = key;
            }
            val = match[2];
        }

        const searchUrl = searchEngines[engineKey].url + encodeURIComponent(val);
        window.open(searchUrl);

        searchField.value = "";
        searchField.blur();
        searchBox.style.display = "none";
    }
}

function getTime() {
    let date = new Date(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = date.getHours();

    return (
        "" +
        (hour < 10 ? "0" + hour : hour) +
        ":" +
        (min < 10 ? "0" + min : min) +
        ":" +
        (sec < 10 ? "0" + sec : sec)
    );
}

function getWeather() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "http://api.openweathermap.org/data/2.5/weather?id=4737316&units=metric&appid=e5b292ae2f9dae5f29e11499c2d82ece"
    );
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.responseText);
                document.getElementById("temp").innerHTML = json.main.temp.toFixed(0) + "°C";
                document.getElementById("weather-description").innerHTML = json.weather[0].description;
            } else {
                console.log("error msg: " + xhr.status);
            }
        }
    };
    xhr.send();
}

function setupBookmarks() {
    const bookmarkContainer = document.getElementById("bookmark-container");
    bookmarkContainer.innerHTML = bookmarks
        .map((b) => {
            const html = ["<div class='bookmark-set'>"];
            html.push(`<div class="bookmark-title">${b.title}</div>`);
            html.push('<div class="bookmark-inner-container">');
            html.push(
                ...b.links.map(
                    (l) =>
                        `<a class="bookmark" href="${l.url}" target="_blank">${l.name}</a>`
                )
            );
            html.push("</div></div>");
            return html.join("");
        })
        .join("");
}

window.onload = () => {
    setupBookmarks();
    getWeather();

    document.getElementById("clock").innerHTML = getTime();

    setInterval(() => {
        document.getElementById("clock").innerHTML = getTime();
    }, 100);
};


document.addEventListener("keyup", (event) => {
    if (event.keyCode == 32) {
        document.getElementById("search").style.display = "flex";
        document.getElementById("search-field").focus();

    } else if (event.keyCode == 27) {
        document.getElementById("search-field").value = "";
        document.getElementById("search-field").blur();
        document.getElementById("search").style.display = "none";
    }
});
