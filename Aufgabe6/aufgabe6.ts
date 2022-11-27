//# sourceMappingURL=aufgabe6.js.map
const country5 = "EU"
const inhabitantsEU = 446.8;
let overall5 = ((inhabitantsEU / inhabitantsEU) * 100).toFixed(1);
const inhabitantsEU08 = 500.0;
let comparison5 = ((1 - inhabitantsEU08 / inhabitantsEU) * 100).toFixed(1);
let comparisonnumber5 = (inhabitantsEU - inhabitantsEU08).toFixed(1)

const country1 = "Belgien"
const inhabitants1 = 11.6;
//console.log(country1 + " hat " + inhabitants1 + " Millionen Einwohner im Jahr 2022.")
let overall1 = ((inhabitants1 / inhabitantsEU) * 100).toFixed(1);
//console.log("Relativ zur Gesamtzahl der Einwohner der EU, beträgt die Einwohnerzahl in " + country1 + " im Jahr 2022: " + overall1 + "%.")
const inhabitants108 = 10.7
let comparison1 = ((1 - inhabitants108 / inhabitants1) * 100).toFixed(1);
//console.log("Für " + country1 + " hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um " + comparison1 + "% erhöht.")
let comparisonnumber1 = (inhabitants1 - inhabitants108).toFixed(1)

const country2 = "Deutschland"
const inhabitants2 = 84.0;
//console.log(country2 + " hat " + inhabitants2 + " Millionen Einwohner im Jahr 2022.")
let overall2 = ((inhabitants2 / inhabitantsEU) * 100).toFixed(1);
//console.log("Relativ zur Gesamtzahl der Einwohner der EU, beträgt die Einwohnerzahl in " + country2 + " im Jahr 2022: " + overall2 + "%.")
const inhabitants208 = 82.1
let comparison2 = ((1 - inhabitants208 / inhabitants2) * 100).toFixed(1);
//console.log("Für " + country2 + " hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um " + comparison2 + "% erhöht.")
let comparisonnumber2 = (inhabitants2 - inhabitants208).toFixed(1)

const country3 = "Frankreich"
const inhabitants3 = 67.8;
//console.log(country3 + " hat " + inhabitants3 + " Millionen Einwohner im Jahr 2022.")
let overall3 = ((inhabitants3 / inhabitantsEU) * 100).toFixed(1);
//console.log("Relativ zur Gesamtzahl der Einwohner der EU, beträgt die Einwohnerzahl in " + country3 + " im Jahr 2022: " + overall3 + "%.")
const inhabitants308 = 64.4
let comparison3 = ((1 - inhabitants308 / inhabitants3) * 100).toFixed(1);
//console.log("Für " + country3 + " hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um " + comparison3 + "% erhöht.")
let comparisonnumber3 = (inhabitants3 - inhabitants308).toFixed(1)

const country4 = "Italien"
const inhabitants4 = 59.0;
//console.log(country4 + " hat " + inhabitants4 + " Millionen Einwohner im Jahr 2022.")
let overall4 = ((inhabitants4 / inhabitantsEU) * 100).toFixed(1);
//console.log("Relativ zur Gesamtzahl der Einwohner der EU, beträgt die Einwohnerzahl in " + country4 + " im Jahr 2022: " + overall4 + "%.")
const inhabitants408 = 58.8
let comparison4 = ((1 - inhabitants408 / inhabitants4) * 100).toFixed(1);
//console.log("Für " + country4 + " hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um " + comparison4 + "% erhöht.")
let comparisonnumber4 = (inhabitants4 - inhabitants408).toFixed(1)



function content(Country: string, Inhabitants: number, Overall: string, Comparison: string, Comparisonnumber: string) {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in " + Country;
    document.querySelector("#section1 h2").innerHTML = Inhabitants.toString() + "Mio";
    document.querySelector("#section1 p").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in " + Country + " in 2022";
    document.querySelector("#section2 h2").innerHTML = Overall + "%";
    document.querySelector("#section3 h2").innerHTML = Comparison + "%";
    document.querySelector("#section4 h2").innerHTML = Comparisonnumber + "Mio";
    document.querySelector(".chart").setAttribute('style', "height:" + Overall + "%");
}


document.querySelector(".belgium").addEventListener('click', function () {
    content(country1, inhabitants1, overall1, comparison1, comparisonnumber1);
})

document.querySelector(".germany").addEventListener('click', function () {
    content(country2, inhabitants2, overall2, comparison2, comparisonnumber2);
})

document.querySelector(".france").addEventListener('click', function () {
    content(country3, inhabitants3, overall3, comparison3, comparisonnumber3);
})

document.querySelector(".italy").addEventListener('click', function () {
    content(country4, inhabitants4, overall4, comparison4, comparisonnumber4);
})

document.querySelector(".stars").addEventListener('click', function () {
    content(country5, inhabitantsEU, overall5, comparison5, comparisonnumber5);
})