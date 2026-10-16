## 1. PRODOTTO DI MATRICI

### 1.1 Matrici compatibili per il prodotto

Date `A` di tipo `(m, p)` e `B` di tipo `(q, n)`, il prodotto `AB` si può definire
solo se il numero di colonne di `A` coincide con il numero di righe di `B`
(`p = q`). In tal caso `A` è **compatibile** (o conformabile) con `B`, e il
prodotto sarà di tipo `(m, n)`: eredita le righe della prima e le colonne della
seconda.

Attenzione: la compatibilità non è simmetrica. Se `A` è compatibile con `B`,
in generale `B` non è compatibile con `A`. Casi tipici:

- vettore riga `(1, n)` per vettore colonna `(n, 1)`: prodotto `(1, 1)`, cioè un
  singolo numero; al contrario, colonna per riga dà una `(n, n)`;
- matrice `(m, n)` per colonna a `n` componenti: risultato colonna a `m`
  componenti; il verso opposto non funziona (salvo `m = 1`);
- riga a `m` componenti per matrice `(m, n)`: risultato riga a `n` componenti;
- due quadrate dello stesso ordine sono sempre compatibili in entrambi i versi,
  e i prodotti restano quadrati dello stesso ordine.

### 1.2 Definizione di prodotto matriciale

Se `A = [aᵢⱼ]` è `(m, p)` e `B = [bᵢⱼ]` è `(p, n)`, il prodotto `AB = [cᵢⱼ]` è la
`(m, n)` con `cᵢⱼ = Σ aᵢₖ·bₖⱼ` al variare di `k` da 1 a `p`. In parole: l'elemento
di riga `i` e colonna `j` si ottiene combinando la riga `i` di `A` con la colonna
`j` di `B` (prodotti a coppie e somma). È il cosiddetto prodotto **righe per
colonne**: il numero di colonne di `A` deve coincidere con il numero di righe di
`B` proprio perché ogni riga di `A` deve "incontrare" ogni colonna di `B` con lo
stesso numero di elementi.

Esempio nuovo: con `A` di righe `(2,1)` e `(0,3)` (tipo `(2, 2)`) e `B` di righe
`(4,5)` e `(−1,2)` (tipo `(2, 2)`), il prodotto `AB` ha righe `(2·4+1·(−1),
2·5+1·2) = (7,12)` e `(0·4+3·(−1), 0·5+3·2) = (−3,6)`. Il prodotto `BA` invece
dà righe diverse: `(8,19)` e `(−2,5)`: già qui si vede che l'ordine conta.

**Il prodotto non commuta.** Anche quando entrambi i versi sono definiti e
hanno lo stesso tipo, in generale `AB ≠ BA`. Se i tipi incrociati danno ordini
diversi, la disuguaglianza è ovvia; ma vale anche fra quadrate dello stesso
ordine, come mostra l'esempio sopra. Eccezione importante: ogni quadrata
commuta con l'unità dello stesso ordine (`AI = IA = A`).

Per misurare la mancata commutazione si introduce il **commutatore**
`[A, B] = AB − BA` fra quadrate dello stesso ordine: `A` e `B` **commutano**
(o sono permutabili) se e solo se il commutatore è la nulla.

**Seconda sorpresa: niente legge di annullamento.** Con i numeri, se il prodotto
è zero almeno un fattore è zero; con le matrici no: esistono `A, B` entrambe non
nulle con `AB = O`. Esempio nuovo: `A` con righe `(0,1)` e `(0,0)`, `B` con righe
`(1,0)` e `(0,0)`: entrambe non nulle, ma `AB` ha tutte le combinazioni nulle ed
è `O₂`. Quindi dal prodotto nullo non si deduce nulla sui fattori.

### 1.3 Proprietà del prodotto matriciale

Valgono (con matrici compatibili con tutte le operazioni scritte):

- associativa: `(AB)C = A(BC)`, quindi si scrive `ABC` senza ambiguità;
- distributive: `(A+B)C = AC + BC` e `C(A+B) = CA + CB`;
- scalari liberi di muoversi: `α(AB) = (αA)B = A(αB)`;
- trasposizione che inverte l'ordine: `(AB)ᵗ = BᵗAᵗ` (e per tre fattori
  `(ABC)ᵗ = CᵗBᵗAᵗ`);
- unità neutra: `AI = A` e `IA = A` (con l'unità dell'ordine giusto: se `A` è
  `(m, n)` non quadrata, le due unità sono di ordini diversi);
- nulla assorbente: `AO = O` e `OA = O`.

Nota: non esiste un "prodotto righe per righe" o simili di uso standard: solo il
righe-per-colonne è associativo, ed è per questo che si usa quello.

## 2. ESEMPI DI CALCOLO DI PRODOTTI DI MATRICI

- **Riga per colonna:** `[x₁ ... xₙ]` per la colonna delle `y` dà il numero
  `x₁y₁ + ... + xₙyₙ`. Il verso opposto (colonna per riga) dà invece una matrice
  `n×n` di elementi `yᵢxⱼ`: stesso ingredienti, risultato completamente diverso.
- **Matrice per colonna:** ogni componente del risultato combina una riga di `A`
  con la colonna `U`: `(AU)ᵢ = Σ aᵢₖuₖ`.
- **Riga per matrice:** ogni componente combina la riga `V` con una colonna di
  `A`: `(VA)ⱼ = Σ vₖaₖⱼ`.
- **Caso generale:** ogni elemento `(AB)ᵢⱼ` combina la riga `i` di `A` con la
  colonna `j` di `B`. Con due `(2, 2)` generiche il calcolo resta a mano in
  pochi passaggi; sopra un esempio numerico completo.

## 3. POTENZE E POLINOMI MATRICIALI

Per una quadrata `A` di ordine `n` si definisce la **potenza** `Aᵏ` come `A`
moltiplicata per sé stessa `k` volte (`k ≥ 1`), con `A⁰ = I(n)`. Valgono
`AᵏAʰ = Aᵏ⁺ʰ` e `(Aᵏ)ʰ = Aᵏʰ`. Attenzione: `(AB)ᵏ = AᵏBᵏ` vale solo se `A` e `B`
commutano.

Combinando somma, prodotto per scalare e prodotto fra matrici si definisce il
**polinomio in `A`**: dato `P(t) = a₀t^q + ... + aₙ`, la matrice `P(A)` si ottiene
sostituendo `A` alla variabile, con il termine noto che diventa `aₙ·I(n)`
(non va confuso il grado del polinomio con l'ordine della matrice). Due
polinomi qualsiasi nella stessa `A` commutano sempre fra loro, perché le potenze
di `A` commutano.

## Concetti chiave da ricordare

- Prodotto definito solo se colonne della prima = righe della seconda; il tipo
  del risultato è (righe della prima, colonne della seconda).
- Regola righe-per-colonne; l'ordine dei fattori è essenziale.
- Niente commutativa in generale (`[A,B] = AB − BA` la misura); niente legge di
  annullamento (`AB = O` non implica fattori nulli).
- `(AB)ᵗ = BᵗAᵗ`; `AI = IA = A`; associativa e distributive valgono.
- `Aᵏ` e `P(A)` solo per quadrate; i polinomi nella stessa matrice commutano.

## TEST di AUTOVALUTAZIONE

Domande originali di verifica sugli stessi argomenti della lezione, con soluzioni
ragionate in fondo. Nessuna domanda è copiata dal materiale sorgente.

**1.** `A` è `(2, 3)` e `B` è `(3, 4)`. Quale affermazione è vera?
a) Solo `AB` è definito, di tipo `(2, 4)` · b) Solo `BA` è definito ·
c) Entrambi definiti · d) Nessuno dei due

**2.** Con le matrici dell'esempio (`A` righe `(2,1)/(0,3)`, `B` righe
`(4,5)/(−1,2)`), quanto vale l'elemento di riga 1, colonna 2 di `AB`?
a) `12` · b) `10` · c) `7` · d) `19`

**3.** Se `AB` e `BA` sono entrambi definiti ma `A` è `(2, 3)`, cosa si può dire?
a) `B` è `(3, 2)`, `AB` è `(2, 2)` e `BA` è `(3, 3)`: diversi per tipo ·
b) `AB = BA` sempre · c) `B` è `(2, 3)` · d) Il prodotto non è associativo

**4.** Quale uguaglianza vale per matrici compatibili qualsiasi?
a) `(AB)ᵗ = AᵗBᵗ` · b) `(AB)ᵗ = BᵗAᵗ` · c) `(A+B)ᵗ = AᵗBᵗ` · d) `(AB)ᵗ = AB`

**5.** Se `A, B` non nulle danno `AB = O`, cosa si conclude?
a) Impossibile · b) È normale: la legge di annullamento non vale fra matrici ·
c) Almeno una è l'unità · d) `A = B`

**6.** Sia `P(t) = t² + 1` e `A` quadrata di ordine 2. Quanto vale `P(A)`?
a) `A² + I₂` · b) `A² + 1` · c) `A² + A` · d) `A²` da solo

### Soluzioni ragionate

**1 — a.** Colonne di `A` (3) = righe di `B` (3): `AB` esiste ed è `(2, 4)`.
Il verso `BA` richiederebbe 4 = 2, falso.

**2 — a.** Riga 1 di `A` per colonna 2 di `B`: `2·5 + 1·2 = 12`. La b) `10`
sarebbe con la colonna 1, la c) è l'elemento (1,1).

**3 — a.** Doppia compatibilità con `A` di tipo `(m,p)` e `B` di tipo `(q,n)`
richiede `p = q` e `m = n`: qui `B` è `(3,2)`, i prodotti sono quadrati di ordini
diversi (2 e 3), quindi certamente diversi.

**4 — b.** La trasposta del prodotto inverte l'ordine dei fattori. La a) è
l'errore classico, la c) confonde somma e prodotto.

**5 — b.** È esattamente la caduta della legge di annullamento: fattor non
nulli possono dare prodotto nullo.

**6 — a.** Si sostituisce la matrice alla variabile e il termine noto diventa
l'unità dello stesso ordine: `P(A) = A² + I₂`. La b) è priva di senso (numero +
matrice).

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
