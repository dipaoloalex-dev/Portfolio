## 1. SISTEMI MASSIMI DI VETTORI LINEARMENTE INDIPENDENTI

Un sottosistema `T` di `S` è **massimo** (o massimale) quando è indipendente e
genera tutto `S`: ogni vettore di `S` dipende da `T`. Le proprietà chiave:

- ogni sistema finito ammette un massimo (si parte da un vettore non nullo e si
  aggiungono vettori non dipendenti dai precedenti, finché possibile);
- `S` è indipendente se e solo se è esso stesso l'unico massimo di sé;
- tutti i massimi di uno stesso `S` hanno lo **stesso ordine**: un indipendente
  più numeroso del massimo sarebbe assurdo, e ogni indipendente si completa a
  un massimo aggiungendo vettori uno alla volta;
- un insieme infinito `H` non ha massimi se e solo se contiene indipendenti di
  ordine arbitrario (successione infinita di sistemi indipendenti crescenti):
  è il segnale che il generato non è finitamente generabile.

Errore tipico: confondere "massimo" con "massimo ordine in assoluto". Massimo
significa non estendibile dentro `S` senza perdere l'indipendenza, e solo a
posteriori segue che tutti i massimi hanno pari ordine.

## 2. DIMENSIONE E BASI DI UNO SPAZIO VETTORIALE

Un insieme `S` è una **base** di `V` quando è indipendente e genera tutto `V`.
Uno spazio è finitamente generato se e solo se ammette basi finite, e in tal
caso **tutte le basi hanno lo stesso ordine**: è la **dimensione** `dim V`
(gli altri spazi si dicono di dimensione infinita).

Conseguenze operative in dimensione finita:

- da un sistema di `n` generatori si estrae una base, quindi `dim V ≤ n`;
- ogni indipendente si completa a una base e ha ordine `≤ dim V` (uguale solo
  se è già una base);
- ogni sottospazio ha dimensione `≤ dim V`, uguale solo se coincide con `V`;
  per ogni `m` intermedio esiste un sottospazio di dimensione `m`.

Esempi guida: dimensione 0 solo per lo spazio nullo; dimensione 1 per le rette
dei multipli di un vettore non nullo; i vettori unitari formano la **base
canonica** di `Kⁿ` (dimensione `n`); le matrici elementari danno dimensione
`mn` alle `(m, n)`; diagonali, simmetriche e triangolari hanno dimensioni pari
al numero dei loro posti liberi (ad esempio `n(n+1)/2` per simmetriche e
triangolari di ordine `n`).

## 3. RIFERIMENTI DI UNO SPAZIO VETTORIALE

Un **riferimento** è una base scritta in ordine: la `n`-upla dei suoi vettori.
Fissato un riferimento, ogni vettore si scrive in un unico modo come
combinazione dei vettori del riferimento, quindi corrisponde a una e una sola
`n`-upla di coefficienti: le sue **componenti** (o coordinate) nel riferimento.
Il nullo ha componenti tutte nulle in ogni riferimento.

Esempi nuovi: in `R²` la coppia `[(2, 0), (1, 1)]` è un riferimento perché i due
vettori non sono proporzionali; il vettore `(3, 1)` ha componenti `(1, 1)` in
questo riferimento, dato che `(3, 1) = 1·(2, 0) + 1·(1, 1)`. Nello spazio
ordinario, fissata un'origine, tre punti non complanari con essa definiscono il
riferimento cartesiano: le coordinate di un punto sono i coefficienti della
scomposizione del vettore che lo raggiunge, e le componenti di una freccia fra
due punti sono le differenze delle coordinate.

## Concetti chiave da ricordare

- Massimo = indipendente e generante per `S`; tutti i massimi hanno pari ordine.
- Base = indipendenza + generazione; dimensione = ordine comune delle basi.
- Generatori danno un tetto alla dimensione; indipendenti si completano a base.
- Riferimento = base ordinata; componenti = coefficienti unici della scrittura.
- Canonica di `Kⁿ`, matrici elementari, dimensioni dei tipi speciali di matrici.

## TEST di AUTOVALUTAZIONE

Domande originali di verifica sugli stessi argomenti della lezione, con soluzioni
ragionate in fondo. Nessuna domanda è copiata dal materiale sorgente.

**1.** In `R²`, `[(2, 0), (0, 3), (1, 1)]` ammette come massimo:
a) tutto il sistema · b) una coppia di vettori non proporzionali ·
c) il solo primo vettore · d) nessun massimo

**2.** Tutte le basi di uno spazio finitamente generato:
a) hanno lo stesso ordine · b) hanno ordini diversi · c) sono infinite ·
d) coincidono

**3.** Un sottospazio proprio di un piano vettoriale (dim 2) ha dimensione:
a) 2 · b) 0 oppure 1 · c) 3 · d) infinita

**4.** In `R²` con riferimento `[(2, 0), (1, 1)]`, le componenti di `(3, 1)` sono:
a) `(3, 1)` · b) `(1, 1)` · c) `(2, 0)` · d) `(0, 0)`

**5.** Le matrici diagonali `2×2` hanno dimensione:
a) 4 · b) 2 · c) 1 · d) 3

**6.** Un indipendente si può sempre completare a una base?
a) Sì, aggiungendo vettori uno alla volta · b) No, mai · c) Solo se è massimo ·
d) Solo in dimensione infinita

### Soluzioni ragionate

**1 — b.** Il sistema ha 3 vettori in dim 2: è dipendente, e ogni coppia non
proporzionale è indipendente e genera tutto. Il sistema intero non è
indipendente, quindi la a) è falsa.

**2 — a.** È il teorema centrale: l'ordine delle basi è un invariante, la
dimensione. Le altre confondono basi diverse con ordini diversi.

**3 — b.** Un sottospazio proprio è strettamente più piccolo: resta lo zero
(dim 0) o una retta (dim 1). Dim 2 vorrebbe dire tutto il piano.

**4 — b.** `(3, 1) = 1·(2, 0) + 1·(1, 1)`: i coefficienti sono `(1, 1)`, non le
coordinate canoniche. La a) vale solo nel riferimento canonico.

**5 — b.** I posti liberi sono i 2 in diagonale: base delle due elementari
diagonali. La a) è la dimensione di tutte le `2×2`.

**6 — a.** È la proprietà di completamento: finché non è massimo si aggiunge un
vettore fuori dal generato, in un numero finito di passi.

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
