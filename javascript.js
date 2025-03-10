/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/* Svar: <script src="javascript.js"></script> */

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

const text = "Pick an instrument";
let number = 3;
const isAvailable = true;
let instruments = ["Guitar", "Piano", "Violin"];

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

console.log("Oppgave 3 Resultat:");

let x = (100 / 2) * 3 - 50;

let y = 50 - 25;

console.log(x);

console.log(y);

console.log(x + y);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "steve";
let userAge = 19;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = " ";

// Skriv koden for oppgave 4 her

if (userName != "" && userAge >= 18 && userIsBlocked == false) {
  console.log("Oppgave 4 Resultat - Welcome");
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log(userIsLoggedIn, goToPage);
} else {
  console.log("Oppgave 4 Resultat - Access Denied");
  console.log(userIsLoggedIn, goToPage);
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = true;

// Skriv koden for oppgave 5 her

const userTitle = userMale ? "Mr." : "Mrs.";

console.log(`Oppgave 5 Resultat:  Welcome ${userTitle}`);

/*

Oppgave 1: Ferdig

Oppgave 2: Ferdig

Oppgave 3: Ferdig

Oppgave 4: Under arbeid

Oppgave 5: Ferdig

*/

/* Problem: man skal lage en home retur i javascript, er dette en nettside til html man lager? */
