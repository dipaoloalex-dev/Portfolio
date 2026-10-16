## 1. INSIEMI ED ELEMENTI

Un **insieme** è una collezione ben definita di oggetti: deve essere sempre chiaro,
per ogni oggetto candidato, se fa parte o no della collezione.
Gli oggetti della collezione si chiamano **elementi**.

Convenzioni di notazione:

- gli insiemi si indicano con lettere maiuscole: `A, B, C, ...`;
- gli elementi con lettere minuscole: `a, b, c, ...`;
- `a ∈ A` significa "a appartiene ad A" (a è elemento di A);
- `a ∉ A` significa "a non appartiene ad A".

Ci sono due modi standard per descrivere un insieme.

**1) Per elencazione.** Si scrivono gli elementi fra parentesi graffe, separati da
virgole. Esempio: `A = {x, y, p, q}` è l'insieme composto dalle quattro lettere
x, y, p, q. L'ordine di scrittura non conta e le ripetizioni non aggiungono nulla:
`{1, 3, 8}`, `{3, 8, 1}` e `{3, 1, 8}` sono lo stesso insieme.

**2) Per proprietà caratteristica.** Si descrive la regola che gli elementi devono
soddisfare, con la forma:

```
X = {x : x soddisfa la proprietà P}
```

Il simbolo `:` si legge "tale che". Esempio: l'insieme dei numeri interi positivi
che sono primi si può descrivere come
`X = {x intero positivo : x è un numero primo}`.

Insiemi numerici che useremo spesso (senza definirli qui in modo formale):

- `N = {0, 1, 2, ...}` — interi da zero in su;
- `Z` — interi relativi;
- `Q` — razionali;
- `R` — reali.

**Esempi notevoli: gli intervalli reali.** Con `a, b ∈ R` e `a < b`:

- `(a, b) = {x ∈ R : a < x < b}` — aperto;
- `[a, b] = {x ∈ R : a ≤ x ≤ b}` — chiuso;
- `[a, b) = {x ∈ R : a ≤ x < b}` — aperto a destra;
- `(a, b] = {x ∈ R : a < x ≤ b}` — aperto a sinistra.

La differenza sta tutta nell'inclusione o esclusione degli estremi.

**Un punto delicato: l'insieme universo.** Descrivere un insieme tramite una
proprietà non basta da solo: serve anche dire dentro quale "contenitore" si sta
cercando. Questo contenitore si chiama **insieme universo** (indicato con `U`).
La scrittura precisa è quindi `X = {x ∈ U : x soddisfa P}`.

Esempio: la proprietà "essere soluzione di x² = 2" dà risultati diversi a seconda
dell'universo:

- in `R`: l'insieme è `{√2, −√2}`;
- in `N`: nessuna soluzione, quindi si ottiene l'**insieme vuoto** `∅`
  (l'insieme senza elementi).

Morale: stessa proprietà + universo diverso = insieme diverso.

## 2. SOTTOINSIEMI E SOPRAINSIEMI

**Definizione.** `A` è un **sottoinsieme** di `B` (e si scrive `A ⊆ B`) quando ogni
elemento di `A` è anche elemento di `B`:

```
a ∈ A  ⟹  a ∈ B
```

In tal caso si dice anche che `B` è un **soprainsieme** di `A` (`B ⊇ A`), che `A`
è contenuto in `B`, o che `B` contiene `A`. Le negazioni si scrivono `A ⊄ B`
e `B ⊉ A`: basta un solo elemento di `A` che non sta in `B` per far cadere
l'inclusione.

**Errore tipico da evitare: elemento vs singoletto.** Se `A = {1, 2, 3}`, allora
`1 ∈ A` è vero, e `{1} ⊆ A` è vero, ma `1 ⊆ A` e `{1} ∈ A` sono scritture
sbagliate: `1` è un elemento, `{1}` è l'insieme che contiene solo `1`. Sono due
oggetti di tipo diverso.

**Un esempio con insiemi dentro insiemi.** Sia `B = {1, {2, 3}}`: `B` ha due
elementi, il numero `1` e l'insieme `{2, 3}`. Quindi `1 ∈ B` e `{2, 3} ∈ B` sono
vere, mentre `2 ∈ B` è falsa (il `2` è "dentro" l'elemento `{2, 3}`, non è un
elemento diretto di `B`).

Catena fondamentale fra insiemi numerici: `N ⊆ Z ⊆ Q ⊆ R`.

**Uguaglianza fra insiemi.** Due insiemi sono uguali quando contengono
esattamente gli stessi elementi, cioè quando valgono entrambe le inclusioni:

```
A = B  ⟺  (A ⊆ B e B ⊆ A)
```

Se vale una sola delle due inclusioni si parla di **sottoinsieme proprio**.
Da qui segue anche che l'ordine di elencazione non conta, come visto sopra.

**Teorema (proprietà dell'inclusione).** Per insiemi qualsiasi `A, B, C`:

1. `A ⊆ A` (ogni insieme è contenuto in sé stesso);
2. se `A ⊆ B` e `B ⊆ C`, allora `A ⊆ C` (transitività).

## 3. FAMIGLIE O CLASSI

Gli elementi di un insieme possono essere a loro volta degli insiemi. Un insieme
i cui elementi sono insiemi si chiama **famiglia** (o **classe**); valgono per le
famiglie gli stessi concetti di sottofamiglia visti per i sottoinsiemi.

Esempio: `F = {{−1}, {1, 0}, {3, 5, 2}}` è una famiglia con tre elementi, che sono
gli insiemi `A = {−1}`, `B = {1, 0}`, `C = {3, 5, 2}`. Si può scrivere `F = {A, B, C}`.

Un altro modo tipico di costruire famiglie è per indice: ad esempio, per ogni
`n ∈ N`, sia `Jn = [2n+1, 2n+2]`; allora `G = {Jn : n ∈ N}` è la famiglia di tutti
questi intervalli chiusi di lunghezza unitaria.

**Insieme potenza (insieme delle parti).** Dato un insieme `X`, l'insieme di
*tutti* i suoi sottoinsiemi si chiama **insieme potenza** e si indica con `P(X)`:

```
A ∈ P(X)  ⟺  A ⊆ X
```

Esempio: se `X = {x, y, z}`, allora `P(X)` contiene i tre singoletti `{x}`, `{y}`,
`{z}`, le tre coppie `{x, y}`, `{x, z}`, `{y, z}`, più `X` stesso e l'insieme vuoto:
8 elementi in tutto. In generale, un insieme finito con `n` elementi ha un insieme
potenza con `2ⁿ` elementi. Nota che `∅ ∈ P(X)` e `X ∈ P(X)` sempre.

Attenzione anche qui al tipo degli oggetti: `{y} ∈ P(X)` (è un sottoinsieme di X,
quindi un elemento del potenza), mentre `{y} ⊆ P(X)` è falso in generale.

## 4. OPERAZIONI INSIEMISTICHE

Fissato un universo `X`, da due insiemi `A, B ⊆ X` si costruiscono nuovi insiemi:

- **Unione:** `A ∪ B = {x : x ∈ A oppure x ∈ B}` — gli elementi che stanno in
  almeno uno dei due;
- **Intersezione:** `A ∩ B = {x : x ∈ A e x ∈ B}` — gli elementi in comune;
- **Differenza:** `A − B = {x : x ∈ A, x ∉ B}` — ciò che sta in A ma non in B;
- **Complementare** (rispetto a `X`): `Aᶜ = {x ∈ X : x ∉ A}`, cioè `X − A`;
- **Differenza simmetrica:** `A Δ B = (A − B) ∪ (B − A)` — gli elementi che
  stanno in uno solo dei due.

Due insiemi con intersezione vuota (`A ∩ B = ∅`) si dicono **disgiunti**.
La nozione si estende alle famiglie: una famiglia è di insiemi **a due a due
disgiunti** quando due suoi elementi diversi qualsiasi non hanno elementi in
comune.

Esempi di lettura rapida:

- con intervalli chiusi di tipo `[n, n+1/2]` al variare di `n ∈ N`, due intervalli
  diversi non si toccano mai: è una famiglia disgiunta;
- con intervalli aperti `(n, n+1)`, anche gli intervalli "contigui" come `(0,1)`
  e `(1,2)` hanno intersezione vuota, perché l'estremo `1` non appartiene a
  nessuno dei due: famiglia disgiunta anche qui.

**Leggi dell'algebra degli insiemi.** Per `A, B, C ⊆ X` valgono, tra le altre:

1. Idempotenza: `A ∪ A = A`, `A ∩ A = A`;
2. Associatività e commutatività di unione e intersezione;
3. Distributività dell'una sull'altra;
4. Identità: `A ∪ ∅ = A`, `A ∪ X = X`, `A ∩ X = A`, `A ∩ ∅ = ∅`;
5. Complementazione: `A ∪ Aᶜ = X`, `A ∩ Aᶜ = ∅`, `(Aᶜ)ᶜ = A`;
6. **De Morgan:** `(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ` e `(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ`.

L'idea della seconda legge di De Morgan: stare fuori dall'intersezione significa
mancare da almeno uno dei due insiemi, cioè stare nel complementare dell'uno
oppure in quello dell'altro.

## 5. INSIEMI PRODOTTO

Dati `A` e `B`, l'**insieme prodotto** `A × B` è l'insieme di tutte le **coppie
ordinate** `(a, b)` con `a ∈ A` e `b ∈ B`:

```
A × B = {(a, b) : a ∈ A, b ∈ B}
```

Con `N` insiemi si generalizza alle `N`-uple ordinate. La coppia ordinata si può
definire con i soli insiemi come `(a, b) = {{a}, {a, b}}`; da questa definizione
segue la proprietà chiave: `(a, b) = (c, d)` se e solo se `a = c` e `b = d`.
L'ordine conta: in generale `(a, b) ≠ (b, a)`.

Due fatti operativi da ricordare:

- il prodotto distribuisce sull'unione: `A × (B ∪ C) = (A × B) ∪ (A × C)`
  (verificabile per elencazione diretta nei casi finiti);
- il prodotto **non** è commutativo: in generale `A × B ≠ B × A`. Esempio: con
  `A = {1, 3}` e `B = {2}` si ha `A × B = {(1,2), (3,2)}` mentre
  `B × A = {(2,1), (2,3)}`: insiemi diversi, qui addirittura disgiunti.

## Concetti chiave da ricordare

- `∈` lega un elemento a un insieme; `⊆` lega due insiemi fra loro.
- Un elemento non va confuso con il singoletto che lo contiene (`1` vs `{1}`).
- La stessa proprietà definisce insiemi diversi al variare dell'universo.
- `A = B` significa doppia inclusione; l'ordine di elencazione è irrilevante.
- `P(X)` raccoglie tutti i sottoinsiemi di `X`; se `|X| = n`, allora `|P(X)| = 2ⁿ`.
- De Morgan scambia unione/intersezione passando ai complementari.
- Nel prodotto cartesiano l'ordine delle componenti è essenziale.

## TEST di AUTOVALUTAZIONE

Domande originali di verifica sugli stessi argomenti della lezione, con soluzioni
ragionate in fondo. Nessuna domanda è copiata dal materiale sorgente.

**1.** Sia `A = {2, 5}`. Quale scrittura è corretta?
a) `2 ⊆ A` · b) `{2} ∈ A` · c) `{2} ⊆ A` · d) `{5} = 5`

**2.** Sia `B = {0, {1}}`. Quale affermazione è falsa?
a) `0 ∈ B` · b) `{1} ∈ B` · c) `1 ∈ B` · d) `{0} ⊆ B`

**3.** La proprietà è "essere soluzione intera di x² = 9". Al variare
dell'universo (`Z` oppure `N`), cosa cambia?
a) Niente, l'insieme è sempre `{−3, 3}` · b) In `N` si ottiene `{3}`, in `Z` si
ottiene `{−3, 3}` · c) In entrambi si ottiene l'insieme vuoto · d) In `N` si
ottiene `{−3, 3}`

**4.** Se `X = {a, b}`, quanti elementi ha `P(X)` e quali sono?
a) 3 · b) 4: `∅, {a}, {b}, {a, b}` · c) 4: `a, b, {a}, {b}` · d) 2

**5.** Siano `A = {1, 2, 3}`, `B = {3, 4}` dentro `X = {1, 2, 3, 4, 5}`.
Quanto valgono `(A ∩ B)ᶜ` e `Aᶜ ∪ Bᶜ`?
a) Sono diversi · b) Entrambi `{1, 2, 4, 5}` · c) Entrambi `{3}` ·
d) Entrambi `X`

**6.** `A × B` è uguale a `B × A`?
a) Sempre · b) Mai · c) Solo se almeno uno dei due è vuoto o in casi particolari
(ad es. `A = B`), in generale no · d) Solo per insiemi infiniti

### Soluzioni ragionate

**1 — c.** `{2} ⊆ A` perché l'unico elemento di `{2}` sta in `A`. La a) confonde
elemento e sottoinsieme, la b) pretende che `{2}` sia elemento di `A`, la d)
uguaglia un insieme a un numero.

**2 — c.** `1 ∈ B` è falsa: gli elementi di `B` sono `0` e l'insieme `{1}`; il
numero `1` da solo non compare come elemento diretto. Tutte le altre sono vere.

**3 — b.** Le soluzioni in `Z` sono `−3` e `3`; in `N` resta solo `3`. È
l'esempio tipico di "stessa proprietà, universo diverso".

**4 — b.** `|P(X)| = 2² = 4`, e gli elementi sono i sottoinsiemi: vuoto, i due
singoletti e l'insieme intero. La c) sbaglia perché `a` e `b` da soli non sono
sottoinsiemi.

**5 — b.** `A ∩ B = {3}`, il cui complementare in `X` è `{1, 2, 4, 5}`. Per
De Morgan `(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ`: infatti `Aᶜ = {4, 5}`, `Bᶜ = {1, 2, 5}`, la cui
unione è di nuovo `{1, 2, 4, 5}`.

**6 — c.** Il prodotto non è commutativo in generale; coincide solo in casi
particolari (insiemi uguali, uno dei due vuoto, ecc.).

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
