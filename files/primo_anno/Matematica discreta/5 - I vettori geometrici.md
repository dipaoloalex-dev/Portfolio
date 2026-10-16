## 1. VETTORE GEOMETRICO APPLICATO E VETTORE GEOMETRICO LIBERO

Si lavora nello spazio della geometria euclidea, indicato con `E`. Dati due punti
distinti `P` e `Q`, il tratto che li congiunge è il **segmento** `PQ` e la retta che
li contiene si indica con `r(PQ)`.

Un **verso** su un segmento è semplicemente un ordine dei suoi estremi: il
segmento `PQ` ammette due versi, `(P, Q)` e `(Q, P)`, che indicano i due sensi di
percorrenza. Un segmento dotato di verso si chiama **segmento orientato** o
**vettore applicato**: quello di punto iniziale `P` e punto finale `Q` si indica
con `PQ→` (oppure `Q − P`) e si disegna come freccia da `P` a `Q`. Se i due
estremi coincidono si ha il **vettore nullo applicato** in quel punto.

Due vettori applicati si dicono **equipollenti** quando rappresentano "la stessa
freccia a meno della posizione": sono entrambi nulli, oppure sono entrambi non
nulli e hanno stessa lunghezza (segmenti congruenti), stessa direzione (rette
parallele, eventualmente coincidenti) e stesso verso. Due frecce con stessa
lunghezza e direzione ma punte opposte non sono equipollenti: il verso fa la
differenza.

L'equipollenza è una relazione di equivalenza (riflessiva, simmetrica,
transitiva) e divide i vettori applicati in classi: un **vettore geometrico
libero** è proprio una di queste classi, cioè l'insieme di tutte le frecce
equipollenti fra loro. I vettori nulli applicati nei vari punti formano un'unica
classe, il **vettore nullo** `0`. Nel seguito "vettore" significa vettore libero,
indicato con lettere minuscole in grassetto (`v`, `w`).

Fissata un'unità di misura, un vettore libero non nullo è individuato da tre
dati: **direzione**, **lunghezza** (positiva) e **verso**; il nullo ha lunghezza
zero e direzione e verso indeterminati.

Proprietà fondamentale: fissato un punto `P` qualsiasi e un vettore libero `v`,
esiste un unico punto `Q` tale che il vettore applicato in `P` con estremo `Q`
rappresenti `v`. In altre parole, ogni vettore libero si può "appoggiare" con la
coda in un punto arbitrario: l'applicazione che manda `Q` nel vettore `PQ` è una
biezione.

## 2. SOMMA TRA VETTORI

La **somma** `v + w` si costruisce con la regola del triangolo: si prende un
rappresentante di `v` da `P` a `Q`, poi da `Q` si riporta un rappresentante di
`w` fino a `T`; la somma è la classe della freccia da `P` a `T`. La costruzione
non dipende dai rappresentanti scelti. In forma equivalente vale la regola del
**parallelogramma**: riportati `v` e `w` con la stessa origine, la somma è la
diagonale uscente da quell'origine.

La somma gode delle proprietà attese: associativa, commutativa, elemento neutro
(`0 + v = v`) ed esistenza dell'opposto (`v + (−v) = 0`, dove `−v` è la stessa
freccia con la punta scambiata). La differenza `v − w` è per definizione
`v + (−w)`.

Errore tipico: confondere il vettore applicato (legato al suo punto di
applicazione) con il vettore libero (la classe). Due frecce uguali in punti
diversi sono applicati diversi ma rappresentano lo stesso vettore libero.

## 3. PRODOTTO DI UN VETTORE PER UNO SCALARE

Dato un reale `a` e un vettore `v`, il prodotto `av` è il vettore nullo se `a = 0`
oppure `v = 0`; altrimenti ha la stessa direzione di `v`, lunghezza pari a `|a|`
volte quella di `v`, e verso concorde a `v` se `a > 0`, discorde se `a < 0`.
In particolare `−v` è il vettore di pari lunghezza e direzione ma verso opposto.

Valgono: elemento neutro (`1v = v`), associatività (`(ab)v = a(bv)`) e le due
distributive (`(a+b)v = av + bv` e `a(v+w) = av + aw`).

## Concetti chiave da ricordare

- Applicato = freccia con posizione; libero = classe di frecce equipollenti.
- Equipollenza = stessa lunghezza, stessa direzione, stesso verso.
- Ogni vettore libero si può applicare in un punto qualsiasi a scelta.
- Somma: regola del triangolo/parallelogramma; `v − w = v + (−w)`.
- `av`: scala la lunghezza di `|a|`, conserva o ribalta il verso secondo il segno.

## TEST di AUTOVALUTAZIONE

Domande originali di verifica sugli stessi argomenti della lezione, con soluzioni
ragionate in fondo. Nessuna domanda è copiata dal materiale sorgente.

**1.** Due frecce congruenti su rette parallele ma con punte opposte sono:
a) equipollenti · b) lo stesso vettore applicato · c) non equipollenti ·
d) il vettore nullo

**2.** Il vettore libero nullo:
a) ha lunghezza zero e direzione e verso indeterminati · b) non esiste ·
c) ha direzione fissata · d) coincide con un punto solo se applicato ovunque

**3.** Fissato `P` e dato un vettore libero `v` qualsiasi, quanti punti `Q` esistono
tali che `PQ→` rappresenti `v`?
a) Nessuno · b) Due · c) Uno solo · d) Infiniti

**4.** Con la regola del parallelogramma, `v + w` con `v, w` non paralleli è:
a) la diagonale uscente dall'origine comune · b) il lato fra le due punte ·
c) sempre nullo · d) la differenza dei due

**5.** Se `a < 0` e `v ≠ 0`, il vettore `av`:
a) ha verso concorde a `v` · b) ha verso discorde da `v` e lunghezza `|a|` volte
quella di `v` · c) è sempre nullo · d) cambia direzione

**6.** Quale proprietà è falsa in generale?
a) `(v+w)+u = v+(w+u)` · b) `v+w = w+v` · c) `a(v+w) = av+aw` ·
d) `v+w = v−w` per ogni `v, w`

### Soluzioni ragionate

**1 — c.** Manca lo stesso verso, quindi non c'è equipollenza. La b) è falsa
perché i punti di applicazione differiscono.

**2 — a.** È la definizione: lunghezza nulla, direzione e verso non definiti.

**3 — c.** È la proposizione di applicabilità: esistenza e unicità del
rappresentante con coda in `P`.

**4 — a.** La somma è la diagonale uscente dall'origine comune; il lato fra le
punte rappresenterebbe una differenza.

**5 — b.** Segno negativo = verso ribaltato, lunghezza scalata di `|a|`. La
direzione resta la stessa.

**6 — d.** Somma e differenza coincidono solo quando `w = 0`; le altre sono le
proprietà dimostrate della somma e del prodotto per scalare.

---

## PROMPT RIUTILIZZABILE

Prompt usato per generare questa scheda. Copialo in una nuova conversazione
insieme al testo della lezione da rielaborare per mantenere lo stesso stile:

```
Rielabora la lezione universitaria fornita in una sintesi originale in italiano,
senza copiare frasi, esempi con gli stessi valori, domande del test, immagini,
tabelle, nomi di docenti o università, né avvisi di copyright del materiale
sorgente. I concetti matematici devono restare tecnicamente identici
all'originale, spiegati però a parole tue.

Struttura obbligatoria del file:
- Niente frontmatter, niente titolo H1, niente frase introduttiva: parti
  direttamente dalla prima sezione con "## N. TITOLO SEZIONE", usando gli
  stessi titoli delle sezioni originali in maiuscolo.
- Una sezione "##" per ogni sezione della lezione, con spiegazioni chiare,
  notazione standard in code span, esempi riscritti con valori diversi
  dall'originale ed evidenziazione degli errori tipici da evitare.
- Poi una sezione "## Concetti chiave da ricordare" con elenco puntato dei
  punti essenziali.
- Poi una sezione "## TEST di AUTOVALUTAZIONE" con 6 domande a scelta
  multipla (a/b/c/d) originali sugli stessi argomenti, mai copiate dal
  materiale sorgente.
- Poi una sezione "### Soluzioni ragionate" con la risposta corretta di ogni
  domanda e 2-3 righe di spiegazione, motivando anche perché le altre opzioni
  sono sbagliate.
- Tono didattico preciso, in italiano, formattazione Markdown come in questa
  scheda.
```
