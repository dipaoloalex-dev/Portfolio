## 1. SISTEMI LINEARI E SOTTOSPAZI DEI VETTORI NUMERICI

Un sistema di `m` equazioni lineari in `n` incognite sul campo `K` si scrive
leggendo le colonne: indicate con `a¹, ..., aⁿ` le colonne dei coefficienti e con
`c` la colonna dei termini noti, risolverlo significa trovare gli scalari
`x₁, ..., xₙ` tali che `a¹x₁ + ... + aⁿxₙ = c`. La matrice con tutte le colonne
(`B`) è la **matrice completa**; quella senza la colonna dei termini noti (`A`)
è la **matrice incompleta**; il sistema è **omogeneo** quando `c = 0`, e il suo
omogeneo associato si ottiene azzerando i termini noti.

Il sistema si dice **compatibile** (o risolubile) quando ammette almeno una
soluzione. L'omogeneo lo è sempre, grazie alla **soluzione banale** nulla;
esistono invece sistemi impossibili, come due equazioni che impongono valori
diversi alla stessa incognita.

Legami con i sottospazi:

- le soluzioni di un sistema **omogeneo** formano un sottospazio (somma e
  multipli di soluzioni restano soluzioni, e lo zero c'è sempre);
- le soluzioni di un sistema non omogeneo **non** formano un sottospazio
  (manca lo zero);
- se il sistema completo è compatibile e `ξ` è una sua soluzione, tutte le
  soluzioni sono esattamente quelle del tipo `a + ξ` al variare di `a` fra le
  soluzioni dell'omogeneo associato: una soluzione particolare più il
  sottospazio omogeneo.

Errore tipico: pensare che "tante equazioni, tante soluzioni" o che lo zero sia
sempre soluzione. Lo zero risolve solo gli omogenei; un non omogeneo può anche
non avere alcuna soluzione.

## 2. CRITERIO DI COMPATIBILITÀ PER SISTEMI LINEARI

Dire che `c` dipende dal sistema delle colonne dei coefficienti equivale a dire
che il sistema è compatibile: le soluzioni sono proprio i coefficienti delle
combinazioni che ricostruiscono `c`.

**Teorema (criterio di compatibilità).** Un sistema è compatibile se e solo se la
colonna dei termini noti dipende linearmente dalle colonne dei coefficienti.

Riformulazione con gli spazi righe/colonne: lo **spazio righe** `Rig(A)` è il
generato dalle righe, lo **spazio colonne** `Col(A)` quello generato dalle
colonne (entrambi nulli solo per la matrice nulla). Il criterio diventa:
compatibilità se e solo se `Col(A) = Col(B)`, cioè aggiungere la colonna dei
termini noti non allarga lo spazio colonne.

Esempio nuovo: il sistema `x + 2y = 3`, `2x − y = 1` ha colonne `(1, 2)` e
`(2, −1)`, non proporzionali, e termini noti `(3, 1) = 1·(1, 2) + 1·(2, −1)`:
compatibile con soluzione `(1, 1)`. Se invece i termini noti fossero `(0, 5)` con
le stesse colonne, servirebbero coefficienti che soddisfano insieme `x + 2y = 0`
e `2x − y = 5`, cioè `(2, −1)`: verificando, la seconda dà `2·2 −(−1) = 5`. OK,
compatibile. Con termini noti `(1, 1)` e colonne `(1, 2)`, `(2, 4)` — seconda
doppia della prima — servirebbe `x + 2y = 1` e `2x + 4y = 1`, impossibile
(la seconda è il doppio della prima a sinistra ma non a destra): incompatibile.

## 3. ESEMPI

- Con tre equazioni in due incognite e colonne non proporzionali, lo spazio
  colonne ha dimensione 2: se i termini noti stanno in quel piano il sistema è
  compatibile, altrimenti no (basta tentare la combinazione e trovare
  contraddizione sulla terza componente).
- Con una matrice completa a tre righe e due colonne di coefficienti
  indipendenti, la compatibilità si decide tutta sulla terza coordinata: i
  coefficienti fissati dalle prime due righe devono verificare anche la terza.

## Concetti chiave da ricordare

- Sistema = combinazione delle colonne dei coefficienti che deve dare i termini noti.
- Completa vs incompleta; omogeneo sempre compatibile (soluzione banale).
- Soluzioni dell'omogeneo = sottospazio; del completo compatibile = una
  particolare più l'omogeneo.
- Compatibile ⟺ termini noti nel generato delle colonne ⟺ `Col(A) = Col(B)`.

## TEST di AUTOVALUTAZIONE

Domande originali di verifica sugli stessi argomenti della lezione, con soluzioni
ragionate in fondo. Nessuna domanda è copiata dal materiale sorgente.

**1.** Il sistema `x₁ = 0`, `x₁ = 1` è:
a) compatibile · b) incompatibile · c) omogeneo · d) a infinite soluzioni

**2.** Le soluzioni di un sistema omogeneo formano:
a) sempre un sottospazio · b) mai un sottospazio · c) un sottospazio solo se
c'è la banale · d) l'intero spazio

**3.** Se `ξ` risolve un sistema compatibile non omogeneo, le altre soluzioni sono:
a) solo `ξ` · b) `a + ξ` al variare di `a` fra le soluzioni dell'omogeneo ·
c) tutte nulle · d) inesistenti

**4.** Il sistema è compatibile se e solo se:
a) `Col(A) = Col(B)` · b) le colonne sono nulle · c) è omogeneo ·
d) ha più incognite che equazioni

**5.** Con colonne `(1, 0)` e `(0, 1)` e termini noti `(4, −2)`, il sistema:
a) è incompatibile · b) è compatibile con soluzione `(4, −2)` ·
c) è omogeneo · d) non ha matrice completa

**6.** Con colonne `(1, 1)` e `(2, 2)` e termini noti `(0, 1)`, il sistema:
a) è compatibile · b) è incompatibile perché i termini noti escono dalla retta
delle colonne · c) è omogeneo · d) ha soluzione unica `(0, 0)`

### Soluzioni ragionate

**1 — b.** Le due equazioni impongono valori diversi alla stessa incognita:
nessuna soluzione. Non è omogeneo (termini noti non nulli).

**2 — a.** Somma e multipli di soluzioni omogenee restano soluzioni, e lo zero
c'è: è un sottospazio per definizione.

**3 — b.** È la struttura delle soluzioni: traslato della particolare per il
sottospazio omogeneo. La a) varrebbe solo con soluzione unica.

**4 — a.** È il corollario del criterio: aggiungere i termini noti non deve
allargare lo spazio colonne.

**5 — b.** Le colonne sono i versori: `(4, −2) = 4·(1, 0) + (−2)·(0, 1)`, i
coefficienti sono la soluzione.

**6 — b.** Le colonne stanno sulla bisettrice `y = x`, i termini noti no:
nessuna combinazione può raggiungerli, quindi `Col(A) ≠ Col(B)`.

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
