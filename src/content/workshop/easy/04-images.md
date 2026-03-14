---
title: "Vise bilder"
description: "Lær å vise eksisterende bilder."
---

Her lærer du å vise bilder i p5.js. Du kan bruke bilder som du har lagret på datamaskinen din, eller du kan bruke bilder som er tilgjengelige på nettet.

I denne oppgaven skal vi vise bilder ved å skrive kode i p5.js. Det kan være kult å bruke i presentasjoner på skolen, som bakgrunnsbilder i spill, eller andre ting. Vi kommer til å lære deg hvordan du kan bytte bilde ved å klikke på datamusa.

Når du er gjennom oppgava skal du greie å sette opp et vindu som ser slik ut:
![bilde1](/p5js-workshop/images/bilde_preview.png)

## Steg 1: Laste opp bildet
Når du har åpna p5.js, så kan du starte med å lagre det tomme vinduet. Kall det hva du vil. Vi har valgt å kalle vårt bildevisningsprogram for `presentasjonen`. Pass på at du er logget inn på p5.js, ellers kan du ikke lagre prosjektet ditt.
![Startbilde](/p5js-workshop/images/color_start.png)

Nå kan du høyreklikke på bildet under og lagre det på datamaskinen din.
![Bilde av sjø](/p5js-workshop/images/color_undersea.jpg)

Så kan du klikke på ">"-knappen under play-knappen i p5.js. Deretter klikker du pluss-tegnet og velger "Upload File". Finn bildet du nettopp lagret og dra det inn i "Upload File"-vinduet. Nå skal bildet være lastet opp i p5.js, og du kan se det i "Sketch Files"-delen.

I web editoren kan du skrive kode for å lage variablen som skal holde bildet. Skrive inn på første linje foran function setup():
```javascript
let sjoen;
```
Hele koden så langt skal se slik ut:
```javascript
let sjoen;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

## Steg 2: Endre setup-funksjon
- Vi ønsker å lage tegneområde vårt i setup-funksjonen større, så endre createCanvas-linjen til:
```javascript
createCanvas(640, 420);
```
- Klare du å forande størrelsen på tegneområdet ved å endre tallene i createCanvas? Prøv å endre dem til andre tall og se hva som skjer!
- Sett størrelsen på tegneområdet tilbake til 640 og 420.

Hele koden så langt skal se slik ut:
```javascript
let sjoen;

function setup() {
  createCanvas(640, 420);
}

function draw() {
  background(220);
}
```

## Steg 3: Vis bildet!

Nå skal vi få frem bildet i vinduet du har laget. Først må vi laste inn bildet, det gjør vi inne i setup-metoden. 

- Først må du skrive `async` foran `function setup()`, slik at det ser slik ut:
```javascript
async function setup() {
  createCanvas(640, 420);
}
```

- async er en måte å fortelle p5.js at det kommer til å være noe i setup-funksjonen som tar litt tid, og at p5.js må vente på det før den fortsetter. Det er viktig at vi skriver async her, ellers kommer ikke bildet til å vises.

- Så må du skrive inn følgende kode inne i setup-funksjonen, under createCanvas-linjen:
    - Her må du passe på at filnavnet i koden er det samme som filnavnet på bildet du lastet opp. Hvis du for eksempel lastet opp et bilde som heter `bilde.jpg`, så må du skrive `bilde.jpg` i koden.

```javascript
sjoen = await loadImage('undersea.jpg');
```

Hele koden så langt skal se slik ut:
```javascript
let sjoen;

async function setup() {
  createCanvas(640, 420);
  sjoen = await loadImage('undersea.jpg');
}

function draw() {
  background(220);
}
```
- I draw-funksjonen, under background-linjen, skriv inn følgende kode for å vise bildet:
```javascript
image(sjoen, 0, 0);
```
- Trykk på play nå og se om bildet vises! Dersom bildet ikke vises nå, så må du dobbelsjekke koden din, for nå har du alt du trenger.

Hele koden så langt skal se slik ut:
```javascript
let sjoen;

async function setup() {
  createCanvas(640, 420);
  sjoen = await loadImage('undersea.jpg');
}

function draw() {
  background(220);
  image(sjoen, 0,0);
}
```
 - Prøv å endre tallene til `image(sjoen, 0, 0)`.
 - Sett dem tilbake til (0, 0) før du går videre.

 ## Steg 4: Endre størrelsen!

 Inni parentesen til image, så har du nå tre parametre. Altså tre forskjellige ting som er separert med komma. Du kan legge til to parametre til. De må være tall og de bestemmer størrelsen på bildet ditt.

 - Legg til to parametre til, slik at innholdet i parentesen til `image` ser slik ut: `(sjoen, 0, 0, 640, 200)`.
 - Få bildet til å dekke hele vinduet igjen, ved å bytte ut det siste parameteret med størrelsen på vinduet sin høyde.
 - Forsøk å få bildet til å vises slik som dette:
![Bilde av halv sjø](/p5js-workshop/images/color_half.png)
- Forsøk å få bildet til å vises slik som dette:
![Bilde av kvart sjø](/p5js-workshop/images/color_quarter.png)
- Forsøk å få bildet til å vises slik som dette:
![Bilde av kvart sjø i sentrum](/p5js-workshop/images/color_quarter_center.png)
- Forsøk å få bildet til å vises slik som dette:
![Bilde av sentrert sjø](/p5js-workshop/images/color_center.png)

Her er koden med de to siste parameterne i image. Når denne koden kjører, så skjer akkurat det samme som når koden i steg 3 kjørte. Bilde av sjøen vises i hele vinduet.

```javascript
let sjoen;

async function setup() {
  createCanvas(640, 420);
  sjoen = await loadImage('undersea.jpg');
}

function draw() {
  background(220);
  image(sjoen,0,0,640,420);
}
```

## Steg 5: Vis 2 bilder

Her er det nye bildet vi har valgt å bruke. Lagre det på samme sted som det forrige, eller finn et annet bilde du vil bruke. Gi bildet navnet `space.jpg`.
![Bilde av verdensrommet](/p5js-workshop/images/color_space.jpg)

Hugser du hvordan du lastet opp det første bildet? Se tilbake på steg 1 dersom du ikke husker det. Nå må du laste opp det nye bildet på samme måte som du lastet opp det første.

For hver kodelinje du skriver inn, må du kjøre koden din for å se at du ikke har noen skrivefeil. Bildet vil ikke vises før du har skrevet inn alle linjene, men du vil få feilmelding dersom du har skrivefeil, og da vil du vite hvilken linje skrivefeilen er på.

- Nå må du lage en ny bildedeklarasjon. Denne skrives rett under den første du har. Vi har valgt å kalle dette bildet verdensrommet, så vår bildedeklarasjone ser slik ut:
```javascript
let verdensrommet;
```
Husker du hva du må gjøre nå?

- Nå må bildet leses inn, da skriver vi denne kodelinja inni setup:
```javascript
verdensrommet = await loadImage('space.jpg');
```

- Nå gjenstår bare å fortelle programmet hvordan du vil at bildet skal vises. La oss starte med å putte det inn oppå det andre bildet. Da skriver vi denne kodelinja inn i draw-metoden:
```javascript
image(verdensrommet, 0, 0);
```

- Sett koden `image(verdensrommet, 0, 0);` slik at den står på linja over `image(sjoen, 0, 0, 640, 200);` hva skjer?
- Sett koden `image(verdensrommet, 0, 0);` slik at den står på linja under `image(sjoen, 0, 0, 640, 200);` hva skjer?
- Pass på at `image(verdensrommet, 0, 0);` står under `image(sjoen, 0, 0, 640, 200);`, så setter du inn de to parameterne som justerer størrelsen på bildet og gjør verdensrombildet halvparten så stort. Hva skjer?
- Forsøk å få bildene til å vises slik:
![Bilde 1](/p5js-workshop/images/color_space_1.png)
- Forsøk å få bildene til å vises slik:
![Bilde 2](/p5js-workshop/images/color_space_2.png)
- Forsøk å få bildene til å vises slik:
![Bilde 3](/p5js-workshop/images/color_space_3.png)
- Før du går videre, så gjør slik at verdensrombildet står på linja under sjøbildet, og pass også på at begge bildene dekker hele skjermen.
Her er koden så langt:
```javascript
let sjoen;
let verdensrommet;

async function setup() {
  createCanvas(640, 420);
  sjoen = await loadImage('undersea.jpg');
  verdensrommet = await loadImage('space.jpg');
}

function draw() {
  background(220);
  image(sjoen,0,0,640,420);
  image(verdensrommet, 0, 0, 640, 640);
}
```

## Steg 6: Bla mellom bildene

Nå skal vi bla mellom bildene ved å bruke datamusa. Her kommer først en skriftlig forklaring på hva vi skal gjøre, og så viser vi kodelinjene etterpå.

Vi skal nummerere bildene, med nummer 0 og 1. Da bruker vi en variabel, eller rett og slett bare et tall som holder styr på hvilket bilde som vises på skjermen. Hver gang vi trykker på venstre musetast, så bytter vi bilde på skjermen. For å få dette til, så må vi lage to if-setninger som sjekker hvilket bilde som skal vises. I tillegg må vi lage en metode, eller en event-handler som hele tiden følger med på om noen trykker på musetasten på datamusa. Inni event-handleren, må vi skrive kode som oppdaterer variabelen vår, slik at hver gang noen trykker på musetasten, så skifter den mellom 0 og 1.

Vi deler dette opp i de tre neste stegene. Først lager vi variabelen, deretter lager vi if-setningene som sjekker hvilket bilde som skal vises og til slutt skriver vi koden for eventhandleren.

Vi viser ikke hvordan hele koden ser ut før på slutten av de tre neste stegene, det er derfor viktig å lese nøye og forsøke å skrive inn de forskjellige kodelinjene der du tror de skal være.

## Steg 7: Variabelen

Vi må deklarere variabler på samme måte som vi deklarerte bildene over. Variabelen gir vi navnet bildenummer. Variabelen gir vi samtidig en verdi lik 0, og ser slik ut:
```javascript
let bildenummer = 0;
```
- Skriv inn begge kodelinjen
- Sjekk at programmet fremdeles kjører. Ingenting nytt skal skje.

## Steg 8: If-setningen

Nå skal vi lage koden som sjekker hvilket bilde som skal brukes. Da må vi skrive to if-setninger, de skal skrives i `draw`-metoden. Vi starter med å skrive de med hverdagslige ord, og så gjør vi de om til kode:
```
Dersom bildenummeret er null,
    så skal bildet av verdensrommet vises

Dersom bildenummeret er en,
    så skal bildet av sjøen vises
```

Nå gjør vi den første av disse om til kode, da bli koden slik:
```javascript
if (bildenummer === 0) {
  image(verdensrommet, 70, 30, 500, 300);    
}
```

***🔔 Når vi sammenligner variabler, så bruker vi tre like-tegn.***

- Skriv if-setningen som er vist over inn i draw-metoden din.

- Sjekk at programmet kjører. Det vil ikke skje noe nytt.

- Skriv koden for den andre if-setningen selv.

- Test at koden din fungerer før du går videre.

- Du kan sjekke at begge bildene vises ved bytte fra `0` til `1` i `setup`-metoden der hvor du bestemmer hva `bildenummer` skal starte med å være.

- I steg 5, så var kodelinjene som gjorde at bildene ble vist bare inne krøllparentesene til `draw`, nå skal de i tillegg være inni krøllparentesene til hver sin if-setning. Vær nøye på at du har flytta disse kodelinjene inn i if-setningene, slik at det fremdeles bare er en av hver.

Koden din skal nå se slik ut:
```javascript
let sjoen;
let verdensrommet;
let bildenummer = 0;

async function setup() {
  createCanvas(640, 420);
  sjoen = await loadImage('undersea.jpg');
  verdensrommet = await loadImage('space.jpg');
}

function draw() {
  background(220);
  if (bildenummer === 0) {
    image(verdensrommet, 70, 30, 500, 300);    
  }
  
  if (bildenummer === 1) {
    image(sjoen, 70, 30, 500, 300);    
  }
}
```

## Steg 9: Event-handleren

Når begge if-setningene er på plass er det på tide å lage koden som sjekker om noen har trykka på venstre musetast. Da må vi skrive inn dette helt nederst i Processing-koden din, det skal på utsiden av draw-metoden:
```javascript
function mouseReleased() {
}
```
- Skriv inn den nye koden og sjekk at programmet kjører.

### Hva er en event-handler?
En event-handler er en slags innebygd metode. Det som er spesielt er at navnet på event-handlere er allerede bestemt og når vi bruker dem i koden vår, så fungerer de slik at de reagerer når noe spesielt skjer. Hva den reagerer på kan man ofte lese ut fra navnet på metoden. Når eventen reagerer, har vi mulighet til å bestemme hva som skal skje ved ved å skrive kode. Her er noen andre event-handlere som også er klare til at vi kan skrive kode til de:
```
mousePressed()
mouseClicked()
mouseMoved()
mouseDragged()
mouseWheel()
```
Event-handleren vi skal bruke heter mouseReleased.

### Få bildene til å rulle
Nå vet programmet at det hele tiden skal følge med musetasten, men programmet har forløpig ingenting å gjøre dersom noen trykker. Det vi vil skal skje er at når noen trykker, så skal vi bytte ut hvilket bilde som vises, vi skriver dette med hverdagslige ord først:
```
Dersom bildenummeret er 0,
    så skal bildenummeret settes til å være 1,
ellers
    så skal bildenummeret settes til å være 0
```
Koden for dette blir:
```javascript
if(bildenummer === 0){
    bildenummer = 1;
} else {
    bildenummer = 0;
}
```
Vi har brukt `else` for å få en av to ting til å skje. Dersom vi hadde skrevet denne koden:
```javascript
if(bildenummer === 0){
    bildenummer = 1;
}

if(bildenummer === 1) {
    bildenummer = 0;
}
```
Så ville bildenummer først blitt til 1 og så til 0 igjen før mouseReleased var ferdig, da ville aldri bilde blitt byttet. Når vi har en else, så vil bare en av tingene skje. Vi kan også skrive dette på denne måten:
```javascript
if(bildenummer === 0){
    bildenummer = 1;
} else if(bildenummer === 1) {
    bildenummer = 0;
}
```
Her vil koden bare sjekke den andre if-setningen dersom den første ikke stemte. Test ut dette for å se hvordan det fungerer.

- Skriv inn if-setningen som blir forklart over.
- Kjør koden og se at det fungerer, nå skal bilde byttes når du trykker på datamusa.
- Skrive om koden inni `mouseReleased` slik at det er to if-setninger.
- Skriv om koden inni `draw`, slik at du får `if` og så `else`.
- Legg til dette bildet også:
![Bilde trekanter](/p5js-workshop/images/color_trekant.png)
### Ruller mellom alle tre bildene (da må du deklarere bilde, laste bilde, skrive en if-setning inni `draw` og en if-setning inni `mouseReleased` med `else` foran).
- Gjør om koden slik at alle tre bildene er like store som vinduet.
- Bytt om rekkefølgen, slik at trekantbilde vises rett etter bilde av verdensrommet.

Her er bilde av koden så langt, med to bilder som byttes på:
```javascript
let sjoen;
let verdensrommet;
let bildenummer = 0;

async function setup() {
  createCanvas(640, 420);
  sjoen = await loadImage('undersea.jpg');
  verdensrommet = await loadImage('space.jpg');
}

function draw() {
  background(220);
  if (bildenummer === 0) {
    image(verdensrommet, 70, 30, 500, 300);    
  }
  
  if (bildenummer === 1) {
    image(sjoen, 300, 200, 250, 180);   
  }
}

function mouseReleased() {
  if(bildenummer === 0){
    bildenummer = 1;
  } else {
    bildenummer = 0;
  }
}
```

Her er koden for hvordan du kan rullere mellom tre forskjellige bilder:
```javascript
let sjoen;
let verdensrommet;
let trekant;
let bildenummer = 0;

async function setup() {
  createCanvas(640, 420);
  sjoen = await loadImage('undersea.jpg');
  verdensrommet = await loadImage('space.jpg');
  trekant = await loadImage('trekant.png');
}

function draw() {
  background(220);
  if (bildenummer === 0) {
    image(verdensrommet, 70, 30, 500, 300);    
  }
  
  if (bildenummer === 1) {
    image(sjoen, 300, 200, 250, 180);   
  }
  
  if(bildenummer === 2){
    image(trekant, 20, 160, 300, 240);
  }
}

function mouseReleased() {
  if(bildenummer === 0){
    bildenummer = 1;
  } else if(bildenummer === 1){
    bildenummer = 2;
  } else if(bildenummer === 2){
    bildenummer = 0;
  }
}
```