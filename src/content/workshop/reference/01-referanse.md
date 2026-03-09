---
title: "Referanseark for p5.js"
description: "En oversikt over vanlig syntaks i JavaScript og funksjoner i p5.js-biblioteket som brukes i dette kurset."
---

Dette dokumentet er en rask referanse for de vanligste konseptene og funksjonene du vil møte i dette p5.js-kurset.

## Grunnleggende Struktur

Alle p5.js-skisser har samme grunnleggende struktur med to hovedfunksjoner: `setup()` og `draw()`.

```javascript
// Kjøres én gang når programmet starter
function setup() {
  // Oppsett-kode her, f.eks. createCanvas()
}

// Kjøres i en løkke (om og om igjen) etter setup()
function draw() {
  // Tegne-kode her
}
```

### `setup()`
Brukes til å initialisere programmet. Dette kan være å sette størrelsen på lerretet, laste inn bilder eller fonter, og sette startverdier for variabler.

### `draw()`
Inneholder koden som tegner på lerretet. Siden `draw()` kjører i en løkke, vil endringer i variabler føre til animasjon.

## Variabler og Datatyper

Variabler brukes til å lagre informasjon som programmet ditt kan bruke.

### Deklarering
Bruk `let` for variabler som kan endre verdi, og `const` for konstanter som ikke endrer seg.

```javascript
let score = 0; // Kan endres senere
const GRAVITY = 9.8; // Kan ikke endres
```

### Datatyper
- **Tall (Number)**: `let alder = 15;`
- **Tekst (String)**: `let navn = "Ola Nordmann";`
- **Array (Liste)**: `let farger = ["rød", "grønn", "blå"];`

## Operatorer

### Aritmetiske
- `+` (addisjon)
- `-` (subtraksjon)
- `*` (multiplikasjon)
- `/` (divisjon)

### Tilordning
- `=` (sett verdi): `x = 10;`
- `+=` (øk med): `x += 5;` (samme som `x = x + 5;`)
- `-=` (mink med): `x -= 5;` (samme som `x = x - 5;`)

### Sammenligning
- `===` (lik): `if (navn === "Ola")`
- `<` (mindre enn): `if (alder < 18)`
- `>` (større enn): `if (score > 100)`

## Kontrollstrukturer

### Betingelser (`if` / `else`)
Brukes til å kjøre kode kun hvis en betingelse er sann.

```javascript
if (x > width) {
  // Gjør noe hvis x er utenfor høyre kant
} else if (x < 0) {
  // Gjør noe annet hvis x er utenfor venstre kant
} else {
  // Gjør noe annet i alle andre tilfeller
}
```

### `for`-løkker
Brukes til å repetere kode et bestemt antall ganger. Veldig nyttig for å jobbe med arrays.

```javascript
for (let i = 0; i < 5; i++) {
  // Denne koden kjøres 5 ganger
  ellipse(i * 50, 100, 40, 40);
}
```

## Kommentarer
Brukes til å skrive notater i koden som ikke blir kjørt.

```javascript
// Dette er en enkeltlinje-kommentar

/*
Dette er en
flerlinje-kommentar
*/
```

## Tegning i p5.js

### Lerret og Koordinater
- `createCanvas(bredde, høyde)`: Lager selve tegneområdet (lerretet) ditt.
- `width` og `height`: Innebygde variabler som alltid inneholder lerretets bredde og høyde.

Tenk på lerretet som et rutenett. For å tegne noe, må du oppgi posisjonen med x- og y-koordinater.

- **(0, 0)** er punktet øverst i venstre hjørne.
- **x-koordinaten** bestemmer posisjonen horisontalt (sideveis). Verdien øker mot høyre.
- **y-koordinaten** bestemmer posisjonen vertikalt (opp og ned). Verdien øker nedover.

![Illustrasjon av p5.js-koordinatsystemet](/p5js-workshop/images/p5js-coordinate-system.svg)

### Farger
- `background(farge)`: Setter bakgrunnsfargen.
- `fill(farge)`: Setter fyllfargen for former.
- `noFill()`: Ingen fyllfarge.
- `stroke(farge)`: Setter fargen på omrisset (streken).
- `noStroke()`: Ikke noe omriss.

Farger kan spesifiseres som gråtone (0-255), RGB (r, g, b) eller med andre metoder.

```javascript
background(200); // Grå
fill(255, 0, 0); // Rød
stroke(0, 0, 255); // Blå
```

### Former
- `ellipse(x, y, bredde, høyde)`: Tegner en ellipse (eller sirkel).
- `rect(x, y, bredde, høyde)`: Tegner et rektangel.
- `triangle(x1, y1, x2, y2, x3, y3)`: Tegner en trekant med tre hjørner.
- `quad(x1, y1, x2, y2, x3, y3, x4, y4)`: Tegner en firkant med fire hjørner.
- `beginShape()`, `vertex(x, y)`, `endShape(CLOSE)`: Brukes til å tegne egendefinerte mangekanter.

## Input fra Bruker

### Mus
- `mouseX`, `mouseY`: Innebygde variabler som holder musens x- og y-posisjon.
- `mouseIsPressed`: Innebygd variabel som er `true` hvis en museknapp holdes nede.
- `mouseReleased()`: En funksjon som kjøres én gang når en museknapp slippes.

### Tastatur
- `keyIsPressed`: Innebygd variabel som er `true` hvis en tast holdes nede.
- `key`: Innebygd variabel som holder verdien av den siste tasten som ble trykket.

```javascript
if (keyIsPressed && key === 'a') {
  // Beveg spilleren til venstre
}
```

## Bilder

- `loadImage("filnavn.png")`: Laster inn en bildefil. Bør gjøres i `setup()`.
- `image(bildeVariabel, x, y, bredde, høyde)`: Tegner et bilde på lerretet.

```javascript
let mittBilde;

function setup() {
  mittBilde = loadImage("bilde.png");
}

function draw() {
  image(mittBilde, 0, 0);
}
```

## Matematikk

- `random(max)`: Gir et tilfeldig tall mellom 0 og `max`.
- `random(min, max)`: Gir et tilfeldig tall mellom `min` og `max`.
- `sin(vinkel)`, `cos(vinkel)`: Trigonometriske funksjoner, nyttige for sirkulær bevegelse.
- `radians(grader)`: Konverterer en vinkel fra grader til radianer, som `sin()` og `cos()` forventer.

---
Dette er ikke en komplett liste over alt i p5.js, men den dekker det du trenger for å komme i gang og fullføre oppgavene i dette kurset. For en fullstendig oversikt, se den [offisielle p5.js-referansen](https://p5js.org/reference/).
