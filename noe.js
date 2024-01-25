const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [//linkene i hvert av "sidene" i "info-boksen"
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
        sources: [//linker til siden i css, i info delen
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
        sources: [//samme med JS, som de over. linkene som er i en ul.
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
        sources: [//likt som over, bare andre linker. men funker på samme måte
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
        sources: [//blir en liste på hver side av knappene man trykker på. Blir til en enkel string
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


function showContent(category) {//funksjonen som viser content på en kategori
    
    const viktigInnhold = document.getElementById('viktig-innhold');// Henter referanse til "viktig-innhold" boxen
    const tabs = document.querySelectorAll('#tabs button');// Henter alle faner
    
    tabs.forEach(tab => tab.classList.remove('active'));// Fjerner "active" klassen fra alle faner

    
    const content = resources.find(resource => resource.category === category);//finner innholdet som er lik med den valgte kategorien
    
    viktigInnhold.innerHTML = `
        <h2>${content.category}</h2>
        <p>${content.text}</p>
        <ul>
            ${content.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
        </ul>
        `;// Oppdater innerHTML til viktig-innhold boksen med innhold for den kategorien

    const activeTab = document.querySelector(`#tabs button[data-category="${category}"]`);//henter fanen som er det samme som den valgte kategorien
    
    activeTab.classList.add('active');// Legger til "active" klassen til den valgte fanen
}


const tabs = document.querySelectorAll('#tabs button');// Henter alle faner
// Legg til en addEventListener til hver fane. addEventListener "hører" etter når brukeren trykker på en av knappene.
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const category = this.getAttribute('data-category');// Hent kategorien til den fanen som ble klikket på
        showContent(category);// Vis innholdet for den valgte kategorien
    });
});


//fikk litt hjelp av Oskar Linus Holone med JavaScripten. Siden jeg ikke fikk det helt til å funke. Det hjalp med et ekstra sett øyne;)