---
title: Verden
description: Starten på et verdensspill hvor du gjetter verdensdeler.
---

# Introduksjon

Velkommen til verdensspillet! Her skal vi lage begynnelsen av et spill hvor man skal gjette hvilke verdensdeler som er hvor. Så kan du utvide oppgava til å heller gjelde for land, hav, fjell, eller noe annet du finner på! Denne oppgava viser deg hvordan du kan skrive kode som gjør at navnet på verdensdeler dukker opp når man holder datamusa over dem.

Slik skal spillet se ut når vi er ferdig med denne oppgaven. Oppe i høyre hjørnet ser du det står "EUROPA", det skal det bare stå når datamusa holdes over Europa på kartet.

![Ferdig verdenspill](/p5js-workshop/images/world_end.png)

## Steg 1: Vinduet

 - [ ] Aller først må du starte p5.js web editor. Gå til gå til <a href="https://editor.p5js.org/" target="_blank" rel="noreferrer">`https://editor.p5js.org/`</a>. Nå har du kodeeditoren foran deg, denne skal du fylle med kode! Du starter alltid med to funksjoner, `setup` og `draw`. Det er i `setup` du skriver kode som skal kjøres en gang når programmet starter, og i `draw` skriver du kode som skal kjøres hele tiden så lenge programmet kjører.

 - [ ] Gi navn til prosjektet ditt ved å klikke på blyantikonet over teksteditoren og skrive inn et navn for prosjektet, for eksempel "Verdensspill". Det er lurt å gi prosjektene dine navn, så du kan finne dem igjen senere.

 - [ ] Prøv å kjøre programmet ved å klikke på den store "Play"-knappen.

 - [ ] Prøv å endre koden slik at function, setup, draw, createCanvas og background er skrevet feil. Hva skjer når du prøver å kjøre programmet da? Prøv å rette opp i feilene og kjør programmet igjen.
    - Ser du Console-fanen nederst i editoren? Der kan du se feilmeldinger som kan hjelpe deg å finne ut hva som er feil i koden din.
    - Eller at kode er merket med rødt i kodeeditoren, det betyr at det er en feil i koden på den linjen.

---

### Forklaring av koden
I koden defineres 2 funksjoner `setup()` og `draw()`. Når du kjører programmet vil `setup()` kjøres først, og den lager et tegneområde (canvas) som er 400 piksler bredt og 400 piksler høyt. `draw()` kjøres etter `setup()`, og den fyller hele tegneområdet med en grå bakgrunnsfarge (220). `draw()` kjører hele tiden dvs. kalles om og om igjen, flere ganger i sekundet.

Funksjoner som du lager, som `setup` og `draw`, starter med `function` og etter det kommer navnet på funksjonen, og så parenteser. Inni parentesene kan du skrive argumenter som gir funksjonen informasjon om hvordan den skal oppføre seg. 

`createCanvas` og `background` er begge funksjoner som kommer fra p5.js-biblioteket, og de gjør det enkelt å lage grafikk i nettleseren. Så ditt program så langt så kalles `createCanvas` for å lage et tegneområde, og `background` for å fylle det med en gråfarge. Det er i dette tegneområdet at du senere skal tegne kartet og verdensdelene.

Når du kaller en funksjon, skriver du navnet på funksjonen etterfulgt av parenteser. Inni parentesene kan du skrive argumenter som gir funksjonen informasjon om hvordan den skal oppføre seg. For eksempel, `createCanvas(400, 400)` forteller `createCanvas` at tegneområdet skal være 400 piksler bredt og 400 piksler høyt.

Så i koden din så deklarerer du to funksjoner, `setup` og `draw`, som kalles når du kjører programmet. Inn i disse funksjonene kaller du på andre funksjoner som `createCanvas` og `background` for å lage tegneområdet og fylle det med farge. Det er slik du bygger opp programmet ditt, ved å kalle funksjoner inni andre funksjoner.

---

Vinduet er ganske lite. Vi kan bestemme størrelsen på vinduet ved å kalle på en funksjon, det betyr at vi bruker en funksjon som noen allerede har skrevet ferdig for oss. Når vi kaller en funksjon skriver vi funksjonsnavnet etterfulgt av parenteser og til sist et semikolon, slik som dette:
```javascript
createCanvas(1200, 850);
```
Som du ser har vi satt tall inne i parentesene, disse bestemmer størrelsen på vinduet som dukker opp når du trykker på play og programmet kjøres. Kjør programmet og se at det fungerer.

### Prøv dette

- [ ] Gjør vinduet høyt og smalt.

- [ ] Få vinduet til å strekke seg fra venstre til høyre side av skjermen.

- [ ] Sett vinduet tilbake til å være 1200 piksel bredt og 850 piksel høyt.

- [ ] Lagre spillet ved å klikke på "File" i verktøylinjen og velge "Save". Det er lurt å lagre ofte, så du ikke mister arbeidet ditt hvis noe skjer med datamaskinen eller nettleseren.

Koden så langt ser slik ut:
```javascript
function setup() {
  createCanvas(1200, 850);
}

function draw() {
  background(220);
}
```

## Steg 2: Vis verdenskartet

Nå skal vi få på plass verdenskartet. Her er kartet, høyreklikk på det og velg "Lagre bilde som..." for å laste det ned til datamaskinen din:
![Verdenskart](/p5js-workshop/images/world.png)

Klikk på ">" knappen i p5.js Web Editor, ved side av "sketch.js". Trykk deretter på "+" knappen og velg "Upload file". Dra kartbildet du lastet ned inn upload-vinduet. Nå skal bildet være lastet opp og klart til bruk i prosjektet ditt. Det skal nå vises i filoversikten på venstre side av editoren.

For å få bildet til å vise må vi deklarere bildet, det vil si å gi PC-en beskjed om at vi skal bruke et bilde. Deklarasjoner skjer helt øverst i programmet, før de to metodene våre.

Vi har valgt å kalle bildet for verdenskartet, og kodelinja ser slik ut:
```javascript
let verdenskartet;
``` 
Sjekk at programmet fremdeles kjører. Ingenting nytt skal skje, men du får feilmelding dersom du har skrivefeil på den nye kodelinja.

Nå må vi laste bildet opp i programmet, det gjør vi bare én gang, og derfor putter vi denne kodelinja i `setup`. Kodelinja ser slik ut:
```javascript
verdenskartet = loadImage("world.png");
```
Sjekk at programmet fremdeles kjører, det er ikke noe nytt som vil skje.

Nå er det viktig å skille på at verdenskartet er navnet vi har valgt å kalle bildet vårt i koden vår, mens `world.png` er navnet på selve bildet når det ligger som en fil i mappa på PC-en din.

Nå må vi få vist bildet i vinduet ditt, da skal vi skrive en kodelinje i `draw`-metoden. Kodelinja vi trenger ser slik ut:
```javascript
image(verdenskartet, 0, 0);
```
Etter steg 2 ser koden slik ut:
```javascript
let verdenskartet;

function setup() {
  createCanvas(1200, 850);
  verdenskartet = loadImage("world.png");
}

function draw() {
  background(220);
  image(verdenskartet, 0, 0);
}
```

## Steg 3: Hva er datamusas plassering

For å finne ut hvor i vinduet de forskjellige verdensdelene er plassert må vi vite hva koordinatene på grensa mellom de forskjellige verdensdelene er. Vi starter med å vise koordinatene til datamusa på skjermen, slik at det er lettere å forstå hva koordinater er og hvordan de fungerer i ***p5.js***.

Vi trenger bare to kodelinjer for å få til dette, og de må skrives inni draw-metoden. Vi vil ha en tekst som oppdaterer seg etter hvor på skjermen datamusa er, da trenger vi denne kodelinja:
```javascript
text("X: " + mouseX, 50, 50);
text("Y: " + mouseY, 50, 100);
```
Test at programmet kjører, nå skal du få opp noen tall som endrer seg når du beveger datamusa over vinduet.

--- 

### Forklaring av koden

Det som skjer i denne kodelinja er at vi bruker metoden `text();` som allerede er ferdig skrevet for oss. Inni parentesen har vi tre parametre, disse er skilt ved hjelp av kommategn. I den første parameteren gir vi beskjed om hva som skal skrives ut. Det to siste parameterne bestemmer hvor i vinduet det skal skrives ut.

Teksten vi skal skrive ut er koordinatene til datamusa. Disse er lagret i to forskjellige variabler som heter `mouseX` og `mouseY`. Det betyr at når den første parameteren vårt i text ser slik ut: `"X: " + mouseX`,så vil programmet først lese `"X: "` som vanlig tekst og ikke gjøre noe annet enn å vise teksten på skjermen. For `+ mouseX` derimot, så forstår programmet at dette er en variabel og da viser programmet oss verdien til variabelen i stedet for å skrive ut navnet til variabelen.

---

### Prøv dette

- [ ] Lag en ny kodelinje som skriver ut navnet ditt.

- [ ] Flytt kodelinjen med mouseX, slik at den står ca. på midten nederst på skjermen.

- [ ] Finn ut hvor i vinduet X er minst.

- [ ] Finn ut hvor i vinduet Y er høyest.

- [ ] Hvilken X og Y verdi vises når du holder datamusa over Island?

Her er koden så langt:
```javascript
let verdenskartet;

function setup() {
  createCanvas(1200, 850);
  verdenskartet = loadImage("world.png");
}

function draw() {
  background(220);
  image(verdenskartet, 0, 0);
  text("X: " + mouseX, 50, 50);
  text("Y: " + mouseY, 50, 100);
}
```

## Steg 4: Vis Europa

Nå skal vi få ordet `Europa` til å dukke opp på skjermen når vi holder datamusa over verdensdelen.

Da må vi først finne ut hvor grensa til Europa egentlig er. Nå gjør vi en veldig forenkla utgave av grensa til Europa, la oss si at Europa er helt firkanta, og at denne firkanten er grensa til Europa:
![Europa](/p5js-workshop/images/worldeurope1.png)

For å gjøre kodingen enklere, så bytter vi ut bildet vi har av verden med dette bildet. Last ned bildet og lagre det på samme sted som det forrige verdenskartet. Vi trenger bare å endre den ene kodelinja som forteller programmet hvilket bilde det skal laste inn. Det gjorde vi i `setup`-metoden. Da blir kodelinja slik etter at den er endra:
```javascript
verdenskartet = loadImage("worldeurope1.png");
```

### Gjør dette før du går videre:

- [ ] Start programmet

- [ ] Forsøk å skrive en kommentar i koden din. Alle kommentarer starter med to stråstreker, slik som dette: `//`. Alt som skrives bak skråstrekene blir grått og det betyr at programmet ikke leser det. Dette kan brukes som egne notater i koden, slik at man kan notere hva som skjer eller lignende. Test at du får til å skrive en kommentar i kode. Når du gjør de neste punktene skal du notere svaret du får som kommentarer i koden din. Gå gjennom de neste tre punktene fire ganger, en gang for hver av sidene i firkanten som vi har laga som grensa til Europa.

- [ ] Beveg musepekeren langs grensa (frem og tilbake, eller opp og ned) noen ganger og finn ut hvilken av X- og Y-koordinatene som nesten ikke endrer seg. Bare den koordinaten som nesten ikke endrer seg når du begever datamusa langs grensa skal brukes i de neste punktene.

- [ ] Skriv ned tallet som koordinaten har når den er akkurat på grensa.

- [ ] Beveg musa ut og inn over grensa, finn ut om verdien på koordinaten er større eller mindre på innsiden enn på utsiden av grensa og skriv dette ned.

Har du funnet svare på alt? Her er svarene vi kom frem til:
```
// Grense 1: X-koordinaten beveger seg nesten ikke, den er ca. 367 på hele
  // grensa, og innenfor er den større enn utenfor
// Grense 2: X-koordinaten beveger seg nesten ikke, den er ca. 694 på hele
  // grensa, og innenfor er den mindre enn utenfor
// Grense 3: Y-koordinaten beveger seg nesten ikke, den er ca. 455 på hele
  // grensa, og innenfor er den mindre enn utenfor
// Grense 4: Y-koordinaten beveger seg nesten ikke, den er ca. 33 på hele
  // grensa, og innenfor er den større enn utenfor
```

Nå skal vi sjekke om musepekeren er innenfor en og en av kantene, da må vi bruke `if`-setninger. De fungerer slik at man skriver en test, dersom det man tester stemmer, eller er sant, så blir en bestemt kode gjenomført. La oss starte med grense nummer 1.

Først skriver vi `if`-setningen med vanlig ord og så gjør vi det om til kode. Nå skal vi bruke tallene og resultatet av det vi fant.

```
Dersom musepekeren er innenfor grense nummer 1,
    så skal teksten ***"Europa"*** vises på skjermen
```

Vi vet at X-koordinaten akkurat på grense nummer 1 er 367, i tillegg vet vi at X-koordinaten er større innenfor grense 1 enn utenfor grense 1, la oss putte dette inn:

```
Dersom musepekeren sin X-koordinat er større enn 367,
    så vis teksten ***"EUROPA"*** på skjermen
```
Nå kan vi gjøre dette om til kode, da ser det slik ut:
```javascript
    if(mouseX > 365){
        text("EUROPA", 950, 50);
    }
```

### Gjør dette:

- [ ] Skriv `if`-setningen inn i `draw`-metoden.

- [ ] Sjekk at koden kjører.

- [ ] Se at du får opp `EUROPA` opp til høyre i vinduet når musepekeren er innenfor grense nummer 1.

Legg merke til at ***EUROPA*** dukker opp på skjermen selv om du holder musepekeren over selve Europa på kartet, eller om du holder den over Madagaskar. Dette er fordi vi bare har én if-setning, vi må legge til de tre andre også for at ***EUROPA*** bare skal dukke opp når vi er innenfor alle fire grensene. Akkurat nå vises ***EUROPA*** uansett hvor musepekeren er i det grå området.

![EUROPA 2](/p5js-workshop/images/worldeurope2.png)

La oss legge til kode for grense nummer to, da er målet at ***EUROPA*** skal vises i det grå området her:

![EUROPA 3](/p5js-workshop/images/worldeurope3.png)

Forsøk å skriv `if`-setningen for å få dette til med vanlige ord før du går videre.

Her er vårt forslag til hvordan `if`-setningen for grense 2 kan skrives:
```
Dersom musepekeren sin X-koordinat er innenfor grense 2,
    så skal teksten "EUROPA" vises
```

Vi har sjekka at grenseverdien er 649 og vi vet at X-koordinaten er mindre innenfor grensa enn utenfor grensa. Vi går videre og skriver `if`-setningen i kode:
```javascript
    if(mouseX < 694){
        text("EUROPA", 950, 50);
    }
```

### Gjør dette:

- [ ] Skriv if-setningen inn i draw metoden.

- [ ] Sjekk at koden kjører.

- [ ] Hva skjer når du beveger musepekeren rundt på skjermen?

Nå står det EUROPA på skjermen hele tiden, det er jo feil, la oss feilsøke!

### Gjør dette:

- [ ] Bytt ut plasseringen av teksten i den siste if-setningen. Dette gjør vi ved å skrive 100 i stedet for 50 som den siste parameteren inni parentesen bak text (du kan også ).

- [ ] Kjør koden igjen, nå skal den nye teksten dukke opp litt under den første.

Nå ser vi at ***EUROPA*** vises på skjermen to steder, oppe og nede. Oppe, står det ***EUROPA*** uansett hvor musepekeren er, så lenge den er til høyre for grense 1. Nede står det ***EUROPA*** uansett hvor datamusa er så lenge den er til venstre for grense 2. De to `if`-setningene gjør det de skal, men de gjør det hver for seg. Nå har kan koden sees på som bildet under. I sted var område på høyre side markert med grått, nå har vi markert venstre sida også. Vi må skrive om koden, slik at vi får sjekka om musepekeren er innenfor grense 1 og grense 2 samtidig ikke hver for seg.

![EUROPA 4](/p5js-workshop/images/worldeurope4.png)

Vi må koble sammen `if`-setningene, det er enkelt, vi skriver de inni hverandre! Slik blir `if`-setningene da:

```javascript
  if(mouseX > 365){
    if(mouseX < 694){
      text("EUROPA", 950, 50);
    }
  }
```

Nå vil vi bare få skrive ut ***EUROPA*** i vinduet dersom begge `if`-setningene er sanne.

### Gjør dette:

- [ ] Skriv om koden din, slik at if-setningene står inni hverandre, slik som koden over viser.

- [ ] Test koden og se om det fungerer.

Nå skal vi skrive de to siste if-setningene som skal sjekke om musepekeren er innenfor grense 3 og 4. De må skrives inni de to if-setningene vi allrede har. Vi kommer til å få en if-setning inni en if-setning inni en if-setning inni en if-setning.

Nå er det på tide med grense nummer 3. Nå hjelper vi deg bare med å skrive if-setningen med nesten helt vanlige ord, så må du skrive nesten all koden selv:
```
Dersom musepekeren sin Y-koordinat er mindre enn grense 3,
    så skal teksten "EUROPA" vises
```

Her er litt av koden, fyll ut resten selv:

```javascript
if(mouseX > 365){
    if(mouseX < 694){
        if(               ){
            text("EUROPA", 950, 50);
        }
    }
}
```

### Gjør dette:

- [ ] Skriv koden du tror er riktig.

- [ ] Test om koden fungerer. Dersom den gjør det, så skal EUROPA vises når musepekeren er innenfor det grå området:

![EUROPA 5](/p5js-workshop/images/worldeurope5.png)

Nå må du forsøke deg på koden til den siste `if`-setningen helt selv!

### Gjør dette:

- [ ] Skriv den siste `if`-setningen med vanlig tekst.
- [ ] Skriv inn koden for den siste `if`-setningen inni de andre if-setningene.
- [ ] Kjør programmet og se at det fungerer. Når alt er i orden skal ***EUROPA*** vises bare når du er innenfor den firkanta grensa til Europa som vi har laga.

Her har du bilde av koden, så kan du dobbelsjekke alt dersom det er noe som ikke fungerer helt som det skal.

```javascript
let verdenskartet;

function setup() {
  createCanvas(1200, 850);
  verdenskartet = loadImage("world.png");
}

function draw() {
  background(220);
  image(verdenskartet, 0, 0);
  text("X: " + mouseX, 50, 50);
  text("Y: " + mouseY, 50, 100);
  
  if(mouseX > 365){
    if(mouseX < 694){
      if(mouseY < 455){
        if(mouseY > 33){
          text("EUROPA", 950, 50);
        }
      }
    }
  }
}
```

Husk å bytte bildet tilbake til bildet av verdenskartet som ikke har grensa til Europa tegna inn!
