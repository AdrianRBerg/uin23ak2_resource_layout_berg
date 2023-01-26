const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

let kategorier = document.getElementById("kategorier");
let kategorier_html = "";
resources.forEach(x => kategorier_html += `<div class="kategori not_selected" onclick="select('${x["category"]}')">${x["category"]}</div>`);
kategorier.innerHTML = kategorier_html;
// Dette er for å gjøre en av tabsene default-valgt
select("HTML")


function select(kategori) {
    let kategorier = document.getElementById("kategorier");
    // Hentet fra:
    // https://stackoverflow.com/questions/6409505/document-getelementbyid-is-not-a-function
    // https://stackoverflow.com/questions/9468807/loop-through-divs-inside-a-div
    let divs = kategorier.getElementsByTagName("div");
    for (let x = 0; x < divs.length; x += 1) {
        let div = divs[x];
        if (div.classList.contains("selected")) {
            div.classList.remove("selected");
        };
    }

    let valgt_kategori;
    for (let x = 0; x < divs.length; x += 1) {
        let div = divs[x];
        if (div.innerText == kategori) {
            valgt_kategori = div;

        };
    }
    
    let innside_tittel = document.getElementById("kategori-tittel");
    let innside_tekst = document.getElementById("tekst");
    let innside_kilder = document.getElementById("kilder");
    // https://www.tutorialrepublic.com/faq/how-to-find-an-object-by-property-value-in-an-array-of-javascript-objects.php
    let ressurs = resources.find(x => x.category === kategori);
    innside_tittel.innerText = ressurs["category"];
    innside_tekst.innerText = ressurs["text"];
    kilde_liste = "<ul>";
    let kilder = ressurs["sources"];
    kilder.forEach(x => kilde_liste += `<li><a href=${x["url"]}>${x["title"]}</li>`);
    innside_kilder.innerHTML = kilde_liste;
    
    // Legge til not selected til alle andre divs
    valgt_kategori.classList.add("selected");
    valgt_kategori.classList.remove("not_selected");
    for (let x = 0; x < divs.length; x += 1) {
        let div = divs[x];
        if (div != valgt_kategori) {
            div.classList.add("not_selected");
        };
    }

}
