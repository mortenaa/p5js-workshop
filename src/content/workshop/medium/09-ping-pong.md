---
title: "Ping Pong"
description: "Ping Pong spill"
---

# Introduksjon

Her skal vi lage dataspillet Ping pong. Vi skal også lære om å hvordan du kan få programmene dine til å reagere på tastetrykk. Dette er veldig nyttig når du skal lage spill.

Pong dataspillet ble laget i 1972, og var det første dataspillet som ble laget.

## Steg 1: Sprettende ball

Vår begynnelse kommer til å ligne på det vi gjorde i den "Sprettende Ballen".

### Sjekkliste

- [ ] Start p5.js og skriv dette:

  ```javascript
  let ballX;
  let ballY;
  let ballXFart = 2;
  let ballYFart = 2;
  let ballRadius = 9;
  let ballDiameter = ballRadius * 2;

  function setup() {
    createCanvas(600, 300);

    ballX = width / 2;
    ballY = height / 2;
  }

  function draw() {
    ballX = ballX + ballXFart;
    ballY = ballY + ballYFart;

    if (ballX < ballRadius) {
      ballXFart = -ballXFart;
    }
    if (ballX > width - ballRadius) {
      ballXFart = -ballXFart;
    }
    if (ballY < ballRadius) {
      ballYFart = -ballYFart;
    }
    if (ballY > height - ballRadius) {
      ballYFart = -ballYFart;
    }

    background(0);
    ellipse(ballX, ballY, ballDiameter, ballDiameter);
  }
  ```

Koden er endret litt fra oppgaven om den sprettende ballen. Vi bruker andre navn på variablene våre. Det er også noen helt nye variabler.

Hvorfor tror du vi har gjort dette?

- [ ] Kjør programmet ved å trykke på Play-knappen![Play-knappen](/p5js-workshop/images/play.png)

![Ping pong 1](/p5js-workshop/images/pingpong1.gif)

- [ ] Gi programmet ditt et navn ved trykke på pennen. Du må være logget inn for å kunne gjøre dette.

### Utfordringer

- [ ] Kan du endre størrelsen på ballen?

- [ ] Kan du endre farten på ballen?

## Steg 2: Ballen faller bak

I Ping pong skal du hindre at ballen faller bak rekkerten. For at det skal være vits å gjøre dette må vi først sørge for at ballen ikke bare spretter tilbake når den treffer venstre vegg. Vi kan begynne med å sørge for at ballen ikke spretter tilbake.

- [ ] Fjern koden som gjør at ballen spretter tilbake (denne ligger i den øverste ‘if’-en), slik at du går fra dette:

  ```javascript
  if (ballX < ballRadius) {
  ballXFart = -ballXFart;
  }
  ```

  Til:

  ```javascript
  if (ballX < ballRadius) {

  }
  ```

![Ping pong 2](/p5js-workshop/images/pingpong2.gif)

### Utfordringer

- [ ] Kan du få ballen til å dukke opp et annet sted etter den har gått igjennom veggen?

## Steg 3: Legg til rekkerten

Nå som ballen kan falle igjennom den venstre veggen, så må vi få på plass en rekkert, slik at du kan slå ballen tilbake. Det gjør vi ved å ha noen tallvariabler som representerer hvor rekkerten er og hvor stor den er. I tilegg så må vi ha kode som sender ballen tilbake.

- [ ] Legge inn disse variablene nedenfor de som er der fra før:

  ```javascript
  let rekkertHoyde = 66;
  let rekkertBredde = 5;
  let rekkert1X = 20;
  let rekkert1Y = 100;
  ```

Disse variablene skal vi bruke til å holde styr på på størrelsen og plasseringen til rekkerten.

Rett nedenfor background(0), legg til dette:

```javascript
rect(rekkert1X, rekkert1Y, rekkertBredde, rekkertHoyde);
```

![Ping pong 3](/p5js-workshop/images/pingpong3.gif)

Vi kan nå se rekkerten når vi kjører programmet, men ballen går igjennom rekkerten. Det er fordi vi ikke har skrevet kode som stopper ballen og sender den tilbake.

Legg til følgende i `draw()`-funksjonen:
```javascript
if (ballX-ballRadius < rekkert1X + rekkertBredde && ballX + ballRadius > rekkert1X) {
  if (ballY < rekkert1Y + rekkertHoyde && ballY > rekkert1Y) {
    ballX = ballX + rekkertBredde;
    ballXFart = -ballXFart;
  }
}
```

![Ping pong 4](/p5js-workshop/images/pingpong4.gif)

### Utfordringer

- [ ] Kan du gjøre rekkerten mindre?

- [ ] Kan du endre plasseringen til rekkerten?

---

### Forklaring 

Her er et bilde som forklarer hva de forskjellige variablene står for:
![Ping pong forklaring](/p5js-workshop/images/pingpongforklaring.png)

---

## Steg 4: Styre rekkerten

Vi har en rekkert, men den er ikke til mye hjelp så lenge du ikke kan styre den. Derfor må du skrive kode som gjør at du kan styre den.

- [ ] Skriv inn følgende i toppeb av `draw()`:

```javascript
  if (keyIsDown(UP_ARROW) === true) {
    rekkert1Y = rekkert1Y - 2;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    rekkert1Y = rekkert1Y + 2;
  }
```

Denne koden sjekker om du holder ned opp- eller ned-pilen på tastaturet. Hvis du holder ned opp-pilen så flytter den rekkerten oppover, og hvis du holder ned ned-pilen så flytter den rekkerten nedover. Pass på å klikke med musen i tegneområdet før du prøver å bruke pilene, ellers vil ikke programmet registrere at du trykker på dem. Du må gjøre tegneområdet aktivt for at programmet skal kunne registrere tastetrykk.

![Ping pong 5](/p5js-workshop/images/pingpong5.gif)

Nå har du laget Ping pong!

Koden så langt:
```javascript
let ballX;
let ballY;
let ballXFart = 2;
let ballYFart = 2;
let ballRadius = 9;
let ballDiameter = ballRadius * 2;
let rekkertHoyde = 66;
let rekkertBredde = 5;
let rekkert1X = 20;
let rekkert1Y = 100;

function setup() {
  createCanvas(600, 300);

  ballX = width / 2;
  ballY = height / 2;
}

function draw() {
  
  if (keyIsDown(UP_ARROW) === true) {
    rekkert1Y = rekkert1Y - 2;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    rekkert1Y = rekkert1Y + 2;
  }
  
  ballX = ballX + ballXFart;
  ballY = ballY + ballYFart;

  if (ballX < ballRadius) {
  }
  if (ballX > width - ballRadius) {
    ballXFart = -ballXFart;
  }
  if (ballY < ballRadius) {
    ballYFart = -ballYFart;
  }
  if (ballY > height - ballRadius) {
    ballYFart = -ballYFart;
  }
  if (
    ballX - ballRadius < rekkert1X + rekkertBredde &&
    ballX + ballRadius > rekkert1X
  ) {
    if (ballY < rekkert1Y + rekkertHoyde && ballY > rekkert1Y) {
      ballX = ballX + rekkertBredde;
      ballXFart = -ballXFart;
    }
  }
  
  background(0);
  rect(rekkert1X, rekkert1Y, rekkertBredde, rekkertHoyde);
  ellipse(ballX, ballY, ballDiameter, ballDiameter);
}
``` 

---

### Bokstavtaster

Bokstavtaster
Hvis du vil styre ved å trykke på bokstavtaster istedenfor piltastene, må du endre litt på koden. Mange er vant til å styre opp med ***W*** og ned med ***S***.

Hvis du endrer:
```
  if (keyIsDown(UP_ARROW) === true) {
```
Til:
```
  if (keyIsDown(87) === true) {
```

87 er koden for ***W***-tasten. Kan du styre opp med ***W***? Koden for  ***S*** er 83.

Alternativt kan du bruke `key`-variabelen, som inneholder selve tegnet på tasten du trykker på. Da kan du skrive:

```javascript
if (keyIsPressed === true) {
  if (key === 'w') {
    rekkert1Y = rekkert1Y - 2;
  }
  if (key === 's') {
    rekkert1Y = rekkert1Y + 2;
  }
}
```
---

### Utfordringer

- [ ] Kan du endre farten rekkerten beveger seg i?

- [ ] Kan du legge til en rekkert på den andre siden slik at to spillere kan spille mot hverandre?

- [ ] Kan du gjøre det slik at ballens vertikale retning (opp og ned) bestemmes av hvilken del av rekkerten den treffer?

- [ ] Kan du gjøre noe som gjør at spillet blir vanskeligere etter hvert? For eksempel at ballen går raskere og raskere etter hvert, eller at rakkerten blir mindre.
