---
title: Snake
description: Et enkelt Snake-spill laget i p5.js, hvor du styrer en slange som vokser når den spiser mat, og spillet er over hvis slangen krasjer i seg selv eller veggen.
---

# Introduksjon

I denne leksjonen kan du prøve å lære av å lese koden for et enkelt Snake-spill laget i p5.js. Spillet går ut på at du styrer en slange som beveger seg rundt på skjermen, og målet er å spise mat som dukker opp. Hver gang slangen spiser maten, vokser den, og spillet er over hvis slangen krasjer i seg selv eller veggen.

## Steg 1 

Åpne p5.js editoren, fjern `draw` og `setup` funksjonene, og kopier koden for Snake-spillet som er gitt nederst i denne leksjonen. Kjør spillet, og les koden etterpå for å se hvordan spillet fungerer. Prøv å forstå hva hver del av koden gjør, og hvordan de forskjellige funksjonene og variablene samhandler for å skape spillet. Om du ikke forstår koden, prøv likevel å fortsette. Du vil nok lære mye bare ved å eksperimentere med koden og se hvordan endringene påvirker spillet. Ikke vær redd for å gjøre feil, det er en del av læringsprosessen!

## Steg 2
Ser at brettet er delt inn i celler, og at både slangen og maten beveger seg i disse cellene. Prøv å endre `cellSize` og `brettSize` for å se hvordan det påvirker spillet. Hva skjer hvis du gjør cellene større eller mindre? Hva skjer hvis du gjør brettet større eller mindre?

## Steg 3
Eksperimenter med `frameRate` for å se hvordan det påvirker spillet. Hva skjer hvis du gjør oppdateringshastigheten raskere eller tregere? Hvordan påvirker det spillopplevelsen?

## Steg 4
Legg til en poengsum som øker hver gang slangen spiser maten. Vis poengsummen på skjermen, og prøv å slå din egen rekord!

## Steg 5
Kanskje spillet gå fortere etter hvert som slangen vokser? Legg til en mekanisme for å øke `frameRate` etter hvert som slangen blir lengre, for å gjøre spillet mer utfordrende.

## Steg 6
Gjør det du vil for å forbedre spillet! 
Forslag:
- Kanskje du vil legge til flere typer mat som gir forskjellige poengsummer
- Hindringer på brettet som slangen må unngå. 
- En startskjerm
- Lydeffekter når slangen spiser maten eller krasjer. 
- Endre farger og grafikk for å gjøre spillet mer visuelt tiltalende. Kanskje slange og maten kan ha andre farger eller former, eller kanskje du vil legge til en bakgrunnsbilde.
- Mat kan dukke opp i slangens kropp. Det er uheldigvis, kanskje du kan legge til en sjekk for å sørge for at maten ikke dukker opp i slangens kropp når den blir plassert på nytt etter å ha blitt spist.

```javascript
let slange;
let matPos;
let slangeRetning;
let spisteMat = false;
const cellSize = 10;
const brettSize = 50;

function setup() {
  // Setter slangen sin posisjon til (0,0) dvs. opp til venstre hjørne av lerretet.
  let slangeHode = createVector(0, 0);
  slange = Array.of(slangeHode);
  slangeRetning = createVector(1, 0); // Slangen starter med å bevege seg mot høyre.
  // Setter matens posisjon til en tilfeldig posisjon på lerretet.
  matPos = createVector(floor(random(0, brettSize)), floor(random(0, brettSize)));
  createCanvas(brettSize * cellSize, brettSize * cellSize);
  frameRate(10); // Setter oppdateringshastigheten til 10 ganger per sekund.
}

function draw() {
  background("green");
  // Oppdaterer 
  oppdaterSlange();
  // Sjekker død
  if (sjekkerDød()) {
    return;
  }
  // Sjekker om slangen spiser maten
  sjekkerMat();
  // Tegner 
  tegnSlange();
  tegnMat();
}

function tegnSlange() {
  fill("white");
  for (let i = 0; i < slange.length; i++) {
    let del = slange[i];
    rect(del.x * cellSize, del.y * cellSize, cellSize, cellSize);
  }
}

function tegnMat() {
  fill("red");
  rect(matPos.x * cellSize, matPos.y * cellSize, cellSize, cellSize);
}

function oppdaterSlange() {
  let gamleRetning = slangeRetning.copy(); // Kopierer den gamle retningen for å kunne sjekke om den nye retningen er gyldig (slangen kan ikke snu 180 grader).
  const nyRetning = slangeRetning.copy();
  if (keyIsDown(LEFT_ARROW) ) {
    nyRetning.set(-1, 0);
  } else if (keyIsDown(RIGHT_ARROW)) {
    nyRetning.set(1, 0);
  } else if (keyIsDown(UP_ARROW)) {
    nyRetning.set(0, -1);
  } else if (keyIsDown(DOWN_ARROW)) {
    nyRetning.set(0, 1);
  }

  if (!erMotsattRetning(gamleRetning, nyRetning)) {
    slangeRetning = nyRetning;
  }

  let nyttHode = slange[0].copy(); // Kopierer det gamle hodet for å lage et nytt hode som skal flyttes i den retningen slangen beveger seg i.
  nyttHode.add(slangeRetning); // Legger til retningen til det nye hodet for å flytte det i den retningen slangen beveger seg i.
  slange.unshift(nyttHode); // Legger det nye hodet til i starten av slangen (index 0) for å flytte slangen i den retningen den beveger seg i.
  if (!spisteMat) {
    slange.pop(); // Fjerner den siste delen av slangen (halen) hvis slangen ikke har spist maten, for å opprettholde samme lengde.
  } else {
    spisteMat = false; // Resetter spisteMat til false etter at slangen har vokst.
  }
}

function sjekkerDød() {
  let erDød = false;
  if (slange[0].x < 0 || slange[0].x >= brettSize || slange[0].y < 0 || slange[0].y >= brettSize) {
    erDød = true;
  }
  // Kræsjet i seg selv
  for (let i = 1; i < slange.length; i++) {
    let del = slange[i];
    if (slange[0].x === del.x && slange[0].y === del.y) {
      erDød = true;
      continue;
    }
  }
  if (erDød) {
    tegnGameOver();
    noLoop(); // Stopper spillet hvis slangen går utenfor lerretet.
  }
  return erDød;
}

function sjekkerMat() {
  if (slange[0].x === matPos.x && slange[0].y === matPos.y) {
    // Setter spisteMat til true for å indikere at slangen har spist maten, slik at den ikke fjerner halen i neste oppdatering og dermed vokser.
    spisteMat = true;
    // Når slangen spiser maten, flytter vi maten til en ny tilfeldig posisjon.
    matPos.set(floor(random(0, brettSize)), floor(random(0, brettSize)));
  }
}

function tegnGameOver() {
  textSize(32);
  fill("white");
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
} 

function erMotsattRetning(retning1, retning2) {
  return slange.length > 1 && (retning2.x === -retning1.x || retning2.y === -retning1.y);
}
```