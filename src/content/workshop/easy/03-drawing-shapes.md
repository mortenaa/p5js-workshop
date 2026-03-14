---
title: "Tegne Figurer"
description: "Lær å tegne enkle figurer som sirkler, firkanter og linjer med p5.js."
---

I denne leksjonen skal vi lære å tegne grunnleggende former og figurer. Dette er byggeklossene for alle slags tegninger og visualiseringer du kan lage med kode!

## Steg 1: Lerretet og Bakgrunnen

Før vi kan tegne noe, setter vi som vanlig opp et "Lerret" med ønsket størrelse og farge.

```javascript
function setup() {
  // Lager et lerret som er 400x400 piksler
  createCanvas(400, 400);
}

function draw() {
  // Setter bakgrunnsfargen til en lys gråfarge
  background(220);
}
```
Kjør denne koden. Du skal nå se en grå firkant. Dette er lerretet vårt, klart til å bli tegnet på!

## Steg 2: Rektangler

La oss tegne et rektangel. Vi bruker `rect()`-funksjonen. Den tar fire argumenter: `rect(x, y, bredde, høyde)`.

- `x` og `y` bestemmer posisjonen til rektangelets øverste venstre hjørne.
- `bredde` og `høyde` bestemmer størrelsen.

La oss legge til et rektangel i `draw()`-funksjonen vår (behold `setup`-funksjonen som den er):

```javascript
function draw() {
  background(220);
  // Tegner et rektangel på posisjon (20, 20)
  // med bredde 150 og høyde 100
  rect(20, 20, 150, 100);
}
```

En kvadrat er bare et rektangel der bredden og høyden er lik.

### Prøv selv:
- Kan du tegne et høyt, smalt rektangel?
- Kan du tegne et lite kvadrat nær midten av lerretet? (Husk at midten er på `(200, 200)` i et 400x400 lerret).

## Steg 3: Ellipser og Sirkler

For å tegne ellipser eller sirkler, bruker vi `ellipse()`-funksjonen. Den tar også fire argumenter: `ellipse(x, y, bredde, høyde)`.

- `x` og `y` bestemmer posisjonen til ellipsens **sentrum**.
- `bredde` og `høyde` bestemmer størrelsen.

La oss tegne en ellipse:

```javascript
function draw() {
  background(220);
  // Tegner en ellipse med sentrum i (250, 100)
  // med bredde 120 og høyde 60
  ellipse(250, 100, 120, 60);
}
```

En sirkel er en ellipse der bredden og høyden er like.

### Prøv selv:
- Tegn en perfekt sirkel.
- Plasser en liten sirkel i nederste høyre hjørne av lerretet.

## Steg 4: Farger og Kanter

Som standard er figurene hvite med en svart kant. Vi kan endre dette med `fill()` (fyll-farge) og `stroke()` (kant-farge).

- `fill(r, g, b)`: Setter fyll-fargen. `r, g, b` er verdier for rød, grønn og blå (0-255).
- `stroke(r, g, b)`: Setter kant-fargen.
- `noFill()`: Gjør at figurene blir tegnet uten å ha noen fyll-farge.
- `noStroke()`: Gjør at figurene tegnes uten kant.

**Viktig:** Når du setter en farge med `fill()` eller `stroke()`, vil alle figurene som tegnes *etterpå* få den fargen, helt til du endrer den igjen.

```javascript
function draw() {
  background(220);

  // En rød sirkel med blå kant
  fill(255, 0, 0);   // Rødt fyll
  stroke(0, 0, 255); // Blå kant
  ellipse(100, 100, 80, 80);

  // En grønn firkant uten kant
  fill(0, 255, 0);   // Grønt fyll
  noStroke();        // Ingen kant
  rect(200, 200, 100, 100);
}
```
*Mer om farger kan du lese i leksjonen [Jobbe med farger](05-colors)*

## Steg 5: Linjer og Trekanter

- `line(x1, y1, x2, y2)`: Tegner en linje fra punkt `(x1, y1)` til punkt `(x2, y2)`.
- `triangle(x1, y1, x2, y2, x3, y3)`: Tegner en trekant med hjørner i de tre punktene.

Disse er flotte for å lage mer komplekse former.

```javascript
function draw() {
  background(220);

  stroke(0); // Svart kantfarge
  strokeWeight(4); // Tykkere linje

  // En linje på skrå
  line(20, 350, 150, 250);

  // En trekant
  fill(255, 255, 0); // Gult fyll
  triangle(200, 350, 280, 250, 360, 350);
}
```
`strokeWeight(tykkelse)` kan brukes for å endre tykkelsen på linjer og kanter.

## Steg 6: La oss tegne en figur!

Nå kan du kombinere alt du har lært for å lage en enkel figur. Hva med et enkelt ansikt?

Her er et eksempel på hvordan du kan tegne et smilefjes:

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Ansiktet
  fill(255, 255, 0); // Gult
  stroke(0);
  strokeWeight(2);
  ellipse(200, 200, 250, 250); // Hode

  // Øyne
  fill(0); // Svart
  ellipse(150, 160, 30, 30); // Venstre øye
  ellipse(250, 160, 30, 30); // Høyre øye

  // Munn (en bue)
  noFill(); // Ikke noe fyll for munnen
  strokeWeight(4);
  // arc(x, y, bredde, høyde, startVinkel, sluttVinkel)
  arc(200, 230, 150, 100, 0, PI);
}
```
Vi har brukt en ny funksjon her, `arc()`, for å tegne munnen. Den tegner en del av en ellipse. `PI` er en innebygd konstant som representerer 180 grader i radianer.

### Utfordringer:
- Kan du endre ansiktet til å se sint eller overrasket ut?
- Kan du tegne en enkel figur av et hus med en dør og et vindu?
