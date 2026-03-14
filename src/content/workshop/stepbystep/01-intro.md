---
title: "Introduksjon"
description: "Vi løper gjennom de grunnleggende delene av p5.js"
---

Her blir du introdusert til de grunnleggende delene av p5.js. Får hvert steg kan du klikke inn på en lenke til et program som du kan eksperimentere med og se hvordan det fungerer. Det er en fin måte å lære på, og det er også veldig gøy! Så ikke vær redd for å prøve deg frem og se hva du kan lage.

Skal du lagre programmene dine, så må du være pålogget i p5.js editoren. Det er gratis og enkelt å lage en konto, og det gir deg muligheten til å lagre og dele programmene dine med andre. Se i leksjone 1 for instruksjoner om hvordan du lager en konto.

Når du er logget inn, kan du klikke på "File" i verktøylinjen og velge "Duplicate". Da får du en kopi av programmet som du kan redigere og lagre på kontoen din. 

For hvert eksempel vil det være kommetarer i koden som forklarer, og foreslår endringer du kan gjøre for å se hva som skjer. Prøv deg frem og ha det gøy!

_Disse leksjonene er basert på leksjonene fra <a href="http://vestera.as/processing/" target="_blank" rel="noreferrer">http://vestera.as/processing/</a>. Vi har oversatt de til p5.js og gjort noen tilpasninger._

## 1. Hello World!

I dette eksempelet starter vi med et veldig enkelt program som skriver ut "Hello World!" på skjermen.

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/vVgEvTlxw" target="_blank" rel="noreferrer">1.Hello World</a>.

---

## 2. Former

Noe av det første du skal få lære i ***p5.js*** er å tegne rektangler og ellipser. Eller firkanter og rundinger som vi sier til vanlig.

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/NC1EKeDuQ" target="_blank" rel="noreferrer">2.Former</a>.

---

## 3.  Å tegne en H

Klarer du å tegne en H med tre firkanter?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/OVx4habRo" target="_blank" rel="noreferrer">3. Tegne en H</a>.

---

## 4. Farger

Kommandoen `fill(r, g, b);` bestemmer fargen ting vi tegner fylles med. Man setter inn tall fra 0 til 255 for r, g og b som sier hvor rød, hvor grønn og hvor blå fargen skal være.

For eksempel blir `fill(0, 0, 0);` svart, `fill(100, 0, 100);` blir mørk lilla og `fill(255, 255, 0);` blir gul.

Under har vi skrevet koden for to sirkler. En rød og en grønn. Klarer du å lage én til som er blå?

Hva med andre farger?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/2UEnM7rR3" target="_blank" rel="noreferrer">4. Farger</a>.

---

## 5. Flere tegneverktøy

Vi har litt flere tegneverktøy som er kjekt å vite om før vi går videre.

Kommandoen `background(r, g, b);` setter farge på bakgrunnen. Man setter inn tall fra 0 til 255 på akkurat samme måte som i `fill(r, g, b);`.

Kommandoen `line(a1, a2, b1, b2);` tegner en linje mellom to punkter. Man setter fire tall, hvor de to første er det første punktet og de to siste er det andre punktet.

Med kommandoen `triangle(a1, a2, b1, b2, c1, c2);` tegner man en trekant ved å sette inn tre punkter på samme måte som `line();` tar to punkter.

Klarer du å kode en tegning av et hus, nå som du har litt flere verktøy å tegne med?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/hzYQdPKUr" target="_blank" rel="noreferrer">5. Flere tegneverktøy</a>.

---

## 6. Bevegelse

Hittil har vi bare lagd ting som står stille. Men ting blir jo mye mer spennende når de beveger seg!

Koden vi har skrevet til nå skjer én gang, og så stopper den. Hvis vi vil at den skal kjøres om igjen og om igjen helt til vi stopper den pakker vi den inn på denne måten:
```
function draw() {
    Koden plasseres her
}
```
I koden under har vi pakket inn kode som tegner en sirkel. I tillegg er det et par andre nye ting. `mouseX` og `mouseY` er det vi kaller variabler. Ting vi kan sette inn i stedet for tall. Akkurat disse to sier oss hvor musepekeren peker akkurat nå.

Prøv å bytt om på `mouseX` og `mouseY`. Hva er det som skjer?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/DoCdZC8u-" target="_blank" rel="noreferrer">6. Bevegelse</a>.

---

## 7. Bevegelse 2

Variabler som `mouseX` og `mouseY` kan brukes alle steder tall kan brukes.

Hva skjer hvis du setter inn `mouseX` og `mouseY` i stedet for tall i `fill`-kommandoen?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/8KERxDhTi" target="_blank" rel="noreferrer">7. Bevegelse 2</a>.

---

## 8. Flere innebygde variabler

I tillegg til `mouseX` og `mouseY` har vi noen andre nyttige innebygde variabler. `height` som er høyden på området vi tegner på og `width` som er bredden.

Klarer du å tegne en strek fra hjørnet øverst til venstre til det nederst til høyre uten å bruke noe annet enn 0, `width` og `height` i `line()`-kommandoen?

Hva med en strek mellom de to andre hjørnene?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/iThPXTkET" target="_blank" rel="noreferrer">8. Flere innebygde variabler</a>.

---

## 9. Å regne i p5.js

På samme måte som du kan bruke variabler der du kan bruke tall kan du også sette inn regnestykker i stedet for enkle tall.

Når vi skal skrive regnestykker bruker vi `*` til ganging og `/` til deling.

Hvis du vil plassere en sirkel på midten kan du for eksempel skrive `ellipse(width / 2, height / 2, 100, 100);`

Under ser du et litt mer spennende eksempel. Prøv å sette inn variabler i stedet for `100, 100` også. Klarer du å få til noe spennende?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/ocqcp74bR" target="_blank" rel="noreferrer">9. Å regne i p5.js</a>.

---

## 10: Å skrive tekst på skjermen

Når vi driver å regner med ting som endrer seg er fort gjort å bli forvirret. Særlig når vi ikke engang får se tallene vi regner ut, men bare det vi bruker dem til!

Heldigvis har p5.js en kommando som ser slik ut: `text("En tekst", x, y);`

Hvis du for eksempel vil skrive "Hei" midt på skjermen skriver du koden `text("Hei!", width / 2, height / 2);`

Men vi kan også bruke text();-kommandoen til å skrive ut tall. Under har vi oppdatert forrige eksempel til å vise variablene x og y etter at vi har regnet dem ut.

Klarer du å skrive navnet ditt inne i sirkelen?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/eveoztcNA" target="_blank" rel="noreferrer">10. Å skrive tekst på skjermen</a>. 

---

## 11. if/else

Ofte vil vi bare at koden vi skriver gjør forskjellige ting i forskjellige tilfeller. Til det kan vi bruke noe som kalles en `if`-blokk. Den ser ut ca sånn:

```javascript
if (test) {
    kode
}
```
I en `if`-blokk kjøres koden som er mellom `{` og `}` bare dersom det vi har skrevet som test er sant(eller `true` som det heter på engelsk). Hvis testen er usann(`false`) går programmet videre uten å kjøre koden vi har pakket inn.

På samme måte som variabelen `mouseX` sier oss noe om hvor musepekeren er, kan `mouseIsPressed` si oss om det trykkes med musa når koden kjører.

Klarer du å lage et lite "tegneprogram" med `mouseX`, `mouseY` og `mouseIsPressed`?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/VmLMUBGnk" target="_blank" rel="noreferrer">11. if/else</a>.

---

## 12. Mer om if/else

Når vi lager tester til å bruke i `if`-setninger kan vi regne som vanlig, men for å ha en test må vi ha `true` eller `false`, og derfor må vi gjerne sammenligne tall. Til det har vi en del forskjellige tegn.

Det vi kanskje bruker oftest er `>` og `<` til om å se om ett tall er større enn et annet. For eksempel vil testen i `if (1 < 2) { }` alltid være sann(`true`), mens testen i `if (1 > 2) { }` alltid vil være usann(`false`).

Hvis vi lurer på om to tall er helt like bruker vi `===`. For eksempel vil `(5 === 5)` alltid bli `true`, mens `(1 === 2)` alltid vil bli `false`.

Til slutt har vi `!==` som er det motsatte av `===`. Den blir `true` hvis tallene er forskjellige.

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/FtXRjRvqOA" target="_blank" rel="noreferrer">12. Mer om if/else</a>.

---

## 13. Løkker

Hittil, hvis vi har hatt lyst til å gjøre noe flere ganger har vi bare skrevet det flere ganger etter hverandre. Heldigvis har vi noe vi kaller løkker, for å gjøre ting mange ganger.

Den enkleste løkken er `while (test) { }`

Den fungerer veldig likt en `if`-blokk, med det unntaket at en `if`-blokk kun kjøres en gang dersom testen er sann, mens en `while`-løkke kjøres om igjen og om igjen så lenge testen er sann.

Skriv navnet ditt mange ganger nedover skjermen ved hjelp av en `while`-løkke.

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/qV78ZQuok" target="_blank" rel="noreferrer">13. Løkker</a>.

---

## 14.for-løkker

I tillegg til `while`-løkken har vi en løkke som ser slik ut: `for (start; test; oppdatering) { }`

`for`-løkken er egentlig bare en mer kompakt versjon av `while`-løkken.

Den `for`-løkken vi har lagt inn under gjør faktisk ganske akkurat det samme som `while`-løkken som var forrige eksempel.

Bruk en `for`-løkke til å tegne mange streker som går til samme punkt.

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/q-_UAlLOb" target="_blank" rel="noreferrer">14. for-løkker</a>.

---

## 15.Doble for-løkker

Du kan ha mye rar kode inni en `for`-løkke. Du kan for eksempel til og med ha en `for`-løkke inni `for`-løkken din!

Fyll bildeområdet med mange små sirkler. (Bonuspoeng om de også har litt forskjellig farge!)

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/xFa0ba0Sw" target="_blank" rel="noreferrer">15. Doble for-løkker</a>.

---

## 16.Endring over tid

Som du kanskje vet nå kjøres `draw()`-funksjonen om igjen og om igjen helt til vi sier stopp.

Slik vi har programmert til nå er det ikke slik at hva variablene var forrige gang har noe å si neste gang `draw()` kjøres. Det er fordi variablene våre forsvinner hver gang `draw()` er ferdig.

Variabler som er utenfor `draw()`, derimot, forsvinner ikke før hele programmet stopper. Så hvis vi vil oppdatere en variabel litt etter hvert er det bare å gjøre som i eksemplet under.

Klarer du å tegne en sirkel der du klikket med musa sist?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/cTut6jhnk" target="_blank" rel="noreferrer">16. Endring over tid</a>.

---

## 17.Gjennomsiktighet

Hvis vi gir fill ett ekstra tall sier det siste tallet hvor gjennomsiktig fargen er. 0 er helt usynlig. 255 er ikke gjennomsiktig i det hele tatt.

Tegn tre gjennomsiktige sirkler som overlapper hverandre.

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/eJT4w47he" target="_blank" rel="noreferrer">17. Gjennomsiktighet</a>.

---

## 18. Datatyper

Når vi programmerer med variabler i p5.js kan vi bruke forskjellige typer variabler. 

Du har allerede sett typen tall og tekst.

```javascript
let i = 1;
```

Variaben `i` er av typen heltall, dvs. tallet er et helt tall uten desimaler. Vi har også tall med desimaler, som for eksempel 14.5.

```javascript
let j = 14.5;
```

Vi bruker ordet `let` for å lage en variabel, og så setter vi inn et navn på variabelen. Vi kan gi variabelen en verdi ved å skrive `=`, og så skriver vi inn verdien. Vi kan gi variabelen `i` nye verdier senere i programmet ved å skrive `i = 2;` for eksempel. Da skriver vi ikke `let` igjen, fordi vi allerede har laget variabelen `i`.

Vi kan også gi en variabel en tekstverdi, som for eksempel "Hei". Da må vi skrive teksten i anførselstegn.

```javascript
let tekst = 'Hei';
```

Finn på noe å bruk variablene under til.

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/tKpLVuhIE" target="_blank" rel="noreferrer">18. Datatyper</a>.

---

## 19. Funksjoner

Ofte når vi programmer skriver vi flere linjer kode som egentlig kan oppsummeres som én ting vi gjør. Da er det ganske vanlig å samle den koden i noe vi kaller en funksjon.

Du har allerede sett mange funksjoner. Hver gang du har et ord etterfulgt av paranteser, som dette `fill(255, 255, 0);` er det en funksjon.

Men nå skal du få lære å lage dine egne funksjoner. For eksempel, hvis vi skal tegne en gul sirkel trenger vi to linjer:

```
fill(255, 255, 0);
ellipse(200, 200, 100, 100);
```
Hvis vi ville lage en funksjon for dette kunne den se for eksempel sånn ut:

```
function tegnGulSirkel(x, y, w) {
    fill(255, 255, 0);
    ellipse(x, y, w, w);
}
```

Klarer du å gjøre ferdig funksjonen `tegnToSirkler`?

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/zQ5zueXKR" target="_blank" rel="noreferrer">19. Funksjoner</a>.

---

## 20.Objekter

En siste viktig metode du skal få lære for å gjøre programmeringen lettere er bruk av objekter.

Objekter er i sin enkleste form en samling av variabler som vi ønsker å jobbe med som én ting.

Når vi programmerer grafikk, slik vi gjør i p5.js er det veldig ofte vi jobber med varianter av et veldig enkelt objekt: et punkt.

Lag ett nytt punkt og bruk det til å tegne en firkant.

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/uLuq3b_Am" target="_blank" rel="noreferrer">20. Objekter</a>.

---

## 21. Mer avanserte objekter

Objekter kan inneholde mer enn bare variabler. De kan også inneholde sine egne funksjoner.

Hvis man har en funksjon som heter det samme som klassen er det den som brukes når man lager ett nytt objekt.

Å gjøre oppgaver med denne type ting blir nok litt for upraktisk i denne løsningen. 

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/SUqMJDJ3s" target="_blank" rel="noreferrer">21. Mer avanserte objekter</a>.

---

## 22. Farger og sirkler

Enkle grafiske ting trenger ikke nødvendigvis så mye kode. Dette er bare en litt utvidet versjon av oppgave 15.

Funksjonen `dist(x1, y1, x2, y2)` er innebygd og regner ut avstanden mellom to punkter.

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/VdkdqkGio" target="_blank" rel="noreferrer">22. Farger og sirkler</a>.

---

## 25. Partikler

Kule effekter med partikler:

Klikk her for å komme inn på eksempelet: <a href="https://editor.p5js.org/fborlaug/sketches/sZ2oRjCaq" target="_blank" rel="noreferrer">25. Partikler</a>.






