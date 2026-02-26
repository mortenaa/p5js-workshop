---
title: "Sprettende ball"
description: "Lær å lage en sprettende ball med variabler og logikk."
---

# Introduksjon:

I denne modulen skal vi lære et programmeringsspråk som heter p5.js. Det
ble laget for å gjøre programmering lett for designere og andre som ikke har
programmert før. p5.js egner seg til å lage multimedieprogrammer, spill og
liknende. Mange liker p5.js fordi det er raskt å lage programmer som
vanligvis krever mye arbeid.

![ball som spretter opp og ned](/p5js-workshop/images/bouncing_ball.gif "ball som spretter opp og ned")

# Steg 1: Vindu

Nå skal vi begynne helt enkelt med å lage et vindu og fylle det med en
bakgrunnsfarge. Dette vil bli grunnlaget for nesten alle programmer som du lager
med p5.js, så det er et fint sted å starte.

## Sjekkliste

- [ ] Start med å skrive dette i p5.js-editoren:

  ```javascript
  function setup() {
    createCanvas(640, 480);
  }

  function draw() {
    background(0);
  }
  ```

- [ ] Kjør programmet.

- [ ] Lagre programmet som Ball.

## Utforsking

Hva skjer hvis du:

- [ ] Endrer `640` i `createCanvas(640, 480);`?

- [ ] Endrer `480`?

- [ ] Hva om du endrer `0` i `background(0);`?

- [ ] Hva skjer hvis tallet er høyere enn `255`?

- [ ] Hva skjer hvis tallet er negativt?

- [ ] Før du går videre, fjern endringene du gjorde i utforskingen.

## Forklaring av koden

Selv om du har utforsket `createCanvas(640, 480)` og `background(0)`, lurer du kanskje
på hva resten av koden gjør? Her er en forklaring:

- `function setup() {` lager en *funksjon* som heter setup. Når `setup` blir kalt
  kjøres koden mellom krøllparentesene `{ }`. Du lurer kanskje på hva en
  funksjon er og hva det betyr å kalle den? En funksjon er *en navngitt del med
  kode*. Den navngitte koden kan kjøres når man trenger det, ved *å kalle den*
  slik som dette: `setup();`. `setup` er en spesiell funksjon som alltid kjøres
  av p5.js når du starter programmet.

- `createCanvas(640, 480);` er et kall på funksjonen `createCanvas` som åpner et vindu med
  bredde 640 [piksler](https://no.wikipedia.org/wiki/Piksel) og høyde 480
  piksler. Legg merke til at du sender verdier inn til createCanvas med å legge verdiene
  mellom `( )`. `;` forteller at setningen er ferdig. Dette gjør det mulig å ha
  flere setninger på samme linje (`createCanvas(1,2); background(3);`) eller fordele en
  lang setning utover flere linjer.

- `}` på linje tre betyr at funksjonen `setup` er ferdig.

- `function draw() {` på linje 5 betyr at vi lager en funksjon som heter `draw`.
  `draw` er spesiell, den blir kjørt om og om igjen så lenge programmet ditt
  kjører.

- `background(0);` setter bakgrunnsfargen i vinduet. Tallet `0` betyr at
  bakgrunnen skal være svart. Hvit har verdien `255`. Tallene mellom 0-255 gir
  forskjellige gråtoner. Senere skal vi se hvordan vi tegner farger.

- `}` på siste linje betyr at funksjonen `draw` er ferdig.


# Steg 2: Sirkel

Siden denne oppgaven skal handle om en sprettende ball, er det på tide at vi
begynner å tegne. La oss tegne en sirkel midt i vinduet.

## Sjekkliste

- [ ] Endre `draw` til følgende uten å endre `setup`:

  ```javascript
  function draw() {
    background(0);
    ellipse(320, 240, 100, 100);
  }
  ```

- [ ] Lagre og kjør programmet. Du skal nå se en
  hvit sirkel midt i vinduet som i bildet under.

  ![En hvit sirkel på svart bakgrunn midt i et vindu](/p5js-workshop/images/bouncing_ball_circle1.png "En hvit sirkel på svart bakgrunn midt i et vindu")

- [ ] Legg til en sirkel til og kjør programmet igjen:

  ```javascript
  function draw() {
    background(0);
    ellipse(320, 240, 100, 100);
    ellipse(0, 0, 200, 200);
  }
  ```

- [ ] La oss legge til en siste sirkel og kjøre programmet enda en gang:

  ```javascript
  function draw() {
    background(0);
    ellipse(320, 240, 100, 100);
    ellipse(0, 0, 200, 200);
    ellipse(640, 480, 50, 50);
  }
  ```

![Tre hvite sirkler på svart bakgrunn: en stor øverst til venstre, en middels
stor midt i vinduet og en liten nederst til høyre](/p5js-workshop/images/bouncing_ball_circle2.png "Tre hvite sirkler på svart bakgrunn: en stor øverst til venstre, en middels stor midt i
vinduet og en liten nederst til høyre")

## Forklaring av koden

Klarer du knekke koden for hvordan `ellipse` fungerer?

- Det første tallet bestemmer hvor langt til høyre i vinduet sirkelen skal
  tegnes opp.

- Det andre tallet bestemmer hvor langt ned i vinduet den skal tegnes opp.

- Det tredje tallet bestemmer hvor bred sirkelen skal være.

- Det siste tallet bestemmer hvor høy sirkelen er.

Det siste hørtes kanskje rart ut? En sirkel er jo like bred som den er høy! En
ellipse som er like høy som den er bred, er en sirkel, men ellipser kan også
være bredere enn de er høye, eller høyere enn de er brede. Derfor heter
funksjonen `ellipse` og ikke `circle`.

![Tre hvite sirkler på svart bakgrunn med piler som viser X- og
Y-aksen.](/p5js-workshop/images/bouncing_ball_circle3.png "Tre hvite sirkler på svart bakgrunn med piler som viser X- og Y-aksen.")

I bildet ovenfor vises også området utenfor bilderammen og to piler **X** og
**Y**.

- Det første tallet i `ellipse` angir posisjon langs X-aksen, vist med X-pilen.

- Det andre tallet i `ellipse` angir posisjon lans Y-aksen, vist med Y-pilen.

Der pilene krysser hverandre har både X og Y verdien `0`. Pilene strekker seg
til kanten av vinduet med verdiene `640` for X og `480` for Y. Dette ble bestemt
av `createCanvas(640, 480)`.

**Tips:** Man kan tegne opp ting utenfor bildet med negative tall eller tall som
er større enn de som ble brukt i `createCanvas`.


# Steg 3: Variabler

Til nå har vi brukt faste tall overalt. Dette fungerer ikke alltid bra. For
eksempel, hva skjer hvis vi endrer størrelsen på vinduet? Vil den første
sirkelen være i midten? Og hvordan kan vi få sirklene skal bevege på seg?

Dette løser vi ved hjelp av noe som heter *variabler*. En variabel er en verdi
som har blitt gitt et navn. Vi kan endre på verdien til variabelen, og det er
derfor det heter variabel: *verdien kan variere*.

## Sjekkliste

- [ ] La oss begynne med å endre størrelsen på vinduet i `setup`:

  ```javascript
  function setup() {
    createCanvas(800, 600);
  }
  ```

  Legg merke til at to av sirkelene har "flyttet" på seg. De er ikke i midten og
  høyre bunn av vinduet.

  ![De tre hvite sirklene er nå vist på en svart bilderamme som er større enn
  før.](/p5js-workshop/images/bouncing_ball_variables1.png "De tre hvite sirklene er nå vist på en svart bilderamme som er større enn før.")

- [ ] Vi skal nå ta i bruk to variabler som heter `width` og `height`, altså
  bredde og høyde. Disse variablene får verdien til størrelsen på vinduet når
  `createCanvas` kalles. Endre `draw` til å bruke `width` og `height`:

  ```javascript
  function draw() {
    background(0);
    ellipse(width / 2, height / 2, 100, 100);
    ellipse(0, 0, 200, 200);
    ellipse(width, height, 50, 50);
  }
  ```

  Her har vi brukt regnestykkene `width / 2` og `height / 2` for å tegne opp den
  første sirkelen. Skråstreken `/` betyr delt på, altså gir `width / 2`
  halvparten av bredden. Hva gir `height / 2`?

  **Tips:** Vi kunne også brukt `width * 0.5` for å oppnå det samme, bredden
  ganget med en halv. Noen ganger er det enklere med deling og andre ganger
  ganging.

- [ ] Lagre og kjør programmet, om du ikke har gjort det allerede.

- [ ] La oss lage våre egne variabler, slik at vi kan få formene til å bevege på
  seg:

  ```javascript
  let x;
  let y;

  function setup() {
    createCanvas(800, 600);
    x = width / 2;
    y = height / 2;
  }
  ```

  `let x;` og `let y;` lager to variabler med navn `x` og `y`. Inne i `setup` gir vi
  variablene verdier, som er de samme regnestykkene som vi brukte tidligere.

- [ ] Det er ikke nok å bare ha variabler, vi må bruke dem også. Endre `draw`
  til å bruke `x` og `y`:

  ```javascript
  function draw() {
    x = x + 1;

    background(0);
    ellipse(x, y, 100, 100);
    ellipse(0, 0, 200, 200);
    ellipse(width, height, 50, 50);
  }
  ```

  Den første sirkelen bruker nå `x` og `y` som posisjon. I tillegg la vi til
  linjen `x = x + 1;` som sier at `x` skal øke med `1` for hver gang `draw`
  kjøres. Hva vil skje med den ene sirkelen når programmes kjøres?

- [ ] Lagre og kjør programmet, om du ikke har gjort det allerede.

## Utforsking

Kan du endre `x` og `y` inni `draw` slik at sirkelen beveger seg:

- [ ] Mot venstre istedenfor høyre?

- [ ] Opp istedenfor sidelengs?

- [ ] Ned istedenfor for opp?

- [ ] På skrå?


# Steg 4: Sprette i veggen

Det er kjedelig når sirkelen forsvinner ut av vinduet hele tiden. Vi skal nå få
sirkelen til å snu når den treffer kanten av vinduet, slik en ball spretter
tilbake hvis den kastes i en vegg.

## Sjekkliste

- [ ] Vi trenger et par nye variabler for å styre retningen til sirkelen. Legg
  til variablene `xFart` og `yFart` før `setup`:

  ```javascript
  let xFart = 1.5;
  let yFart = 2;
  ```

- [ ] Legg til koden under i `draw` for å få ballen til å snu. Merk at vi endrer
  setningen hvor vi øker `x` og fjerner to av sirklene.

  ```javascript
  function draw() {
    x = x + xFart;
    y = y + yFart;

    if (x < 50) {
      xFart = -xFart;
    }

    if (x > width - 50) {
      xFart = -xFart;
    }

    if (y < 50) {
      yFart = -yFart;
    }

    if (y > height - 50) {
      yFart = -yFart;
    }

    background(0);
    ellipse(x, y, 100, 100);
  }
  ```

- [ ] Lagre og kjør programmet.

### Forklaring

I `draw` ser vi en del nytt som du ikke har sett før.

- `if (x < 50)`, *hvis x er under 50*, lar oss kjøre `xFart = -xFart;` kun
  dersom x er under 50. Hva betyr de andre `if`-setningene?

- `xFart = -xFart;` endrer fortegnet på farten. Dersom farten er positiv (+),
  vil den endres til å bli negativ (+ - = -). Dersom farten er negativ får vi to
  minus, som er positiv (- - = +).

## Utfordringer

- [ ] Kan du kombinere to og to av `if`-setningene ved å bruke `||`? `||` betyr
  eller. Her er et eksempel: `if (x < 1 || x > 10)`, hvis x er under 1 *eller* x
  er over 10.

- [ ] Kan du få ballen til å sprette sideleng som dette?

  ![ball som spretter sidelengs](/p5js-workshop/images/bouncing_ball_sideways.gif "ball som spretter sidelengs")

- [ ] Kan du få ballen til å endre form samtidig?

  ![ball som endrer form etter posisjon](/p5js-workshop/images/bouncing_ball_rar.gif "ball som endrer form etter posisjon")

- [ ] Kan du få ballen til å endre fart avhengig av posisjonen?

  ![ball som har større fart på bunn](/p5js-workshop/images/bouncing_ball.gif "ball som har større fart på bunn")
