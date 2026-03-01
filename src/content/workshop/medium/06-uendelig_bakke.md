---
title: Uendelig bakke
description: Starten på et "rullende" spill, der bakken beveger seg uendelig langt bortover.
---

# Introduksjon:

I denne oppgava skal vi få underlaget til å bevege seg uendelig langt bortover. Det skal vi gjøre ved å ha to like bilder ved siden av hverandre som beveger seg til venstre. Med en gang et av bildene er kommet på utsiden av skjermen, så flytter vi det til høyre siden av det andre bildet slik at det ser ut som om vi har et langt bilde som beveger seg. Et slikt program kan brukes i et spill der spilleren skal løpe bortover, og bakken skal bevege seg for å få det til å se ut som om spilleren løper. Bildet er slik det sømløst kan legges ved siden av seg selv, og likevel henge naturlig sammen.

Når all koden er skrevet ferdig vil du ha en uendelig bakke som ruller bortover. Da har du begynnelsen av et spill som ser slik ut:

![Uendelig bakke](/p5js-workshop/images/uendelig_bakke.png)

## Steg 1: Oppsett

- [ ] Start med å lage et nytt prosjekt i p5.js: <a href="https://editor.p5js.org/" target="_blank" rel="noreferrer">`https://editor.p5js.org/`</a> 

- [ ] Gi det navnet "Uendelig bakke", ved å klikke på blyant-ikonet over teksteditoren og skrive inn navnet.

- [ ] Nå kan du også høyreklikke på dette bildet av en bakke, og lagre det på datamaskinen din: ![Bilde av en bakke](/p5js-workshop/images/bakke.png)

- [ ] Nå skal du last opp bildet til prosjektet ditt i p5.js Web Editor. Først klikker ">" ved siden av "sketch.js". Da vil du se filene i prosjektet ditt. "sketch.js" er filen der du skriver koden din. Klikke "+" knappen ved siden av "Sketch Files", og velg "Upload File". Trekk og slipp bildet du lastet ned. Nå har du bildet i prosjektet ditt, og du kan bruke det i koden din!

Så kan vi sette opp størrelsen på vinduet og en bakgrunnsfarge i vinduet.

### Gjør dette

 - [ ] I `setup`-metoden, altså mellom krøllparentesene etter setup skal du endre `createCanvas(400, 400);` til `createCanvas(800, 800);`. Vi gjør da vinduet større.

 - [ ] I `draw`-metoden endrer du `background(220);` til `background(100, 100, 200);`

 - [ ] Kjør programmet ved å klikke på Play-knappen øverst til venstre. Nå skal du se et blått vindu som er 800 piksler bredt og 800 piksler høyt. Feiler det, så sjekk at du har skrevet koden riktig.

 Koden skal nå se slik ut:
```javascript
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(100, 100, 200);
}
```

---
### Forklaring av innebygde metoder

Både `createCanvas` og `background` er innebygde metoder, det betyr at noen har skrevet dem ferdig for oss og dermed kan vi bare bruke de når de treng. Når vi bruker metoder kalles å gjøre metodekall.

Tallene i metodekallet på `createCanvas` betyr hvor høyt og hvor bredt vinduet skal være. Tallene i background bestemer hvor mye rødt, grønt og blått det skal være. Hvert av de tallene kan bare være mellom 0 og 255.

Alt som står inni parentesene på en metode vi bruker er argumentene, eller parameterne, til metoden.

---

### Gjør dette

- [ ] Endre argumentene til background til du finner en farge du liker.


## Steg 2: Hente inn bilde

I ***p5.js*** kan et bilde bli lagret i en variabel, og hentes inn ved å bruke metoden `loadImage();`. Denne metoden tar navnet på bildet som et argument, og brukes gjerne inne i `setup`.

```javascript
let bilde;

function setup() {
  createCanvas(800, 800);
  bilde = loadImage("bakke.png");
}

function draw() {
  background(100, 100, 200);
  image(bilde, 150, 150, 240, 120);
}
```

Får første linje foran `setup`-metoden deklarerer vi variabelen `bilde`. Det er i denne variabelen vi skal lagre bildet av bakken. Det er viktig at vi deklarerer variabelen utenfor `setup`-metoden, fordi da kan vi bruke den i både `setup` og `draw`. Nå kan vi lese inn bildet i `setup`-metoden ved å bruke `loadImage`-metoden, og lagre det i variabelen `bilde`. I `draw`-metoden kan vi så bruke `image`-metoden for å tegne bildet på skjermen. Det første argumentet er bildet vi vil tegne, og de neste fire argumentene er x-posisjon, y-posisjon, bredde og høyde på bildet.

---

### Forklaring av image

Det neste steget nå er å tegne bilde på skjermen, det gjør vi ved hjelp av metoden `image();`.
image er en metode som tar fem argumenter: image(img, x, y, b, h);

- img er bildet vi vil tegne, feks bilde1
- x er hvor vi vil starte å tegne bildet på x-aksen
- y er hvor vi vil starte å tegne bildet på y-aksen
- b er hvor bredt vi vil at bildet skal være
- h er hvor høyt vi vil at bildet skal være.

---

### Prøv dette

- [ ] Endre tallene som er på plassen til x, y, b, h en om gangen og se hva som skjer.

- [ ] Finn tall som du liker.

## Steg 3: Flere bilder

Nå vil vi legge til enda et bilde, og få begge bildene til å bevege seg.

Siden vi skal bruke det samme bildet to ganger, trenger vi ikke å laste det inn på nytt. Vi kan bare bruke det samme bildet i to forskjellige `image`-metoder. Vi plasserer bildet til høyre for det første slik at de ligger helt inntil hverandre.

```javascript
let bilde;

function setup() {
  createCanvas(800, 800);
  bilde = loadImage("bakke.png");
}

function draw() {
  background(100, 100, 200);
  image(bilde, 150, 150, 240, 120);
  image(bilde, 390, 150, 240, 120);
}
```
![Uendelig bakke](/p5js-workshop/images/bakke2.png)

For å få bildene til å bevege på seg må vi få tallet i `x` plassen i `image`-metoden til å endre seg, for å få til dette må vi bruke to variabler, for eksempel `x1` og `x2`. Disse setter vi utenfor metodene våre under `let bilde;`.

I `setup` gir vi de verdier, feks 150 og 390 da begynner den første 150 pixler til høyre for venstresiden av vinduet. Den neste begynner 240 pixler til høyre for der igjen, som da blir helt tett inntil det første bildet. (Bildet er 240 pixler bredt).

Nå bytter vi ut variablene med `x` plassen i `image`-metoden.

```javascript
let bilde;
let x1;
let x2;

function setup() {
  createCanvas(800, 800);
  bilde = loadImage("bakke.png");
  x1 = 150;
  x2 = 390;
}

function draw() {
  background(100, 100, 200);
  image(bilde, x1, 150, 240, 120);
  image(bilde, x2, 150, 240, 120);
}
```

Fortsatt beveger de seg ikke når vi kjører koden, hva tror du det kan skyldes? For å gjøre det kan vi ta `x1 -= 2;` som betyr "ta verdien av x1, trekk ifra 2 og putt den nye verdien inn i x1". Putt denne koden nederst i `draw`-metoden.

```javascript
x1 -= 2;
x2 -= 2;
```

### Prøv selv

- [ ] Hva skjer dersom du bytter ut minus tegnet med pluss tegn?

- [ ] Hva skjer dersom du øker tallet til 5? eller 10?

## Steg 4: Putt bildet tilbake

Når bildet forsvinner ut av skjermen vil vi at det skal bli puttet til høyre for det andre bildet slik at vi hele tiden har mer bakke.

For å få til det trenger vi en `if`-test for hver `x` variabel, det vil si at vi teste om høyresiden av bildet er ute av vinduet. Det kan vi skrive først med ord og så mer og mer til kode:

```
Hvis høyresiden av bildet er ute av vinduet,
    så flytt bildet tilbake dit det starta
```    
```
Hvis x1 pluss bildebredden er mindre enn 0,
    pluss 480 på x1
```
```
Hvis(x1 + 240 < 0) {
    x1 += 480
}
```
```
if(x1 + 240 < 0) {
    x1 += 480;
}
```
Dette må vi gjøre for begge x variablene. Legg merke til at vi kan skrive alt på en linje om vi vil, men det er lettere å lese om vi bruker flere linjer.
```javascript
  x1 -= 2;
  x2 -= 2;

  if(x1 + 240 < 0){ x1 += 480; }
  if(x2 + 240 < 0){ x2 += 480; }
```
---
### Testing
Nå vet du det du trenger for å lage en uendeleg bevegelig bakke. For at det ikke skal se rart ut, prøv å sett bredden på vinduet til 240 bredt i createCanvas-metoden, da vil du ikke se at bakken popper frem på høyresiden, men det vil se ut som om bakken er uendelig lang og bare kommer og kommer.

---

Hele koden ser nå slik ut:

```javascript
let bilde;
let x1;
let x2;

function setup() {
  createCanvas(240, 800);
  bilde = loadImage("bakke.png");
  x1 = 150;
  x2 = 390;
}

function draw() {
  background(100, 100, 200);
  
  image(bilde, x1, 150, 240, 120);
  image(bilde, x2, 150, 240, 120);
  
  x1 -= 2;
  x2 -= 2;

  if(x1 + 240 < 0){ x1 += 480; }
  if(x2 + 240 < 0){ x2 += 480; }
}
```



