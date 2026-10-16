## 1. DEFINIZIONE DI APPLICAZIONE LINEARE

Siano `V` e `W` spazi vettoriali sullo stesso campo `K`. Un'applicazione
`f: V → W` è lineare, o omomorfismo, se conserva somme e multipli:

- `f(v + w) = f(v) + f(w)` per ogni `v, w ∈ V`;
- `f(k·v) = k·f(v)` per ogni `v ∈ V` e `k ∈ K`.

Dalla definizione segue subito `f(0) = 0`: infatti
`f(0) = f(0+0) = f(0)+f(0)`, da cui l'unico vettore uguale al suo doppio è
lo zero. Analogamente `f(-v) = -f(v)`.

Esempio nuovo: `f: R² → R²` con `f(x, y) = (2x - y, x + 3y)` è lineare perché
ogni componente è un polinomio omogeneo di primo grado senza termini noti;
la verifica sulle due proprietà è diretta.

Controesempio nuovo: `g: R² → R²` con `g(x, y) = (x + 1, y)` non è lineare
perché `g(0, 0) = (1, 0) ≠ (0, 0)`; la presenza della costante rompe la
seconda proprietà.

Terminologia: lineare suriettiva è epimorfismo, iniettiva è monomorfismo,
biettiva è isomorfismo. Se `f` è un isomorfismo, l'inversa `f⁻¹` esiste ed è
a sua volta lineare e biettiva; i due spazi si dicono isomorfi. Un'applicazione
lineare da uno spazio in sé è un endomorfismo; un isomorfismo di uno spazio
in sé è un automorfismo.

La composizione di lineari è lineare: se `f: V → W` e `g: W → Z` sono
omomorfismi, anche `g ∘ f: V → Z` lo è, perché
`(g ∘ f)(v + v') = g(f(v)+f(v')) = (g ∘ f)(v)+(g ∘ f)(v')`, e analogamente
per gli scalari. La composta di isomorfismi è un isomorfismo.

Errore tipico: pensare che basti controllare una sola delle due proprietà,
o che una formula con quadrati, prodotti misti o termini costanti possa
essere lineare. Solo combinazioni di primo grado omogenee lo sono.

## 2. PROPRIETÀ DELLE APPLICAZIONI LINEARI

Il comportamento rispetto a generati, sottospazi e indipendenza è:

- (a) se `v ∈ ⟨S⟩` allora `f(v) ∈ ⟨f(S)⟩`: applicando `f` a
  `v = k₁v₁ + ... + kₙvₙ` si ottiene la stessa combinazione delle immagini;
- (b) se `V'` è sottospazio di `V`, allora `f(V')` è sottospazio di `W`;
  se `V'` è finitamente generato, lo è anche l'immagine e
  `dim f(V') ≤ dim V'`, perché l'immagine di un sistema di generatori
  genera l'immagine;
- (c) se `f(S)` è indipendente allora `S` è indipendente: una relazione
  tra i `vᵢ` darebbe per linearità la stessa relazione tra gli `f(vᵢ)`,
  che può essere solo banale;
- (d) se `S` è indipendente e `f` è iniettiva allora `f(S)` è
  indipendente: da una relazione tra gli `f(vᵢ)` si risale a una relazione
  tra i `vᵢ` dentro il nucleo, che per iniettività è solo quella nulla.

Corollario: un isomorfismo conserva tutto. `S` è indipendente se e solo se
lo è `f(S)`; `v` dipende da `S` se e solo se `f(v)` dipende da `f(S)`; un
sottospazio ha dimensione `n` se e solo se la sua immagine ha dimensione
`n`. Per questioni di dipendenza, dimensione e sottospazi si può quindi
sostituire uno spazio con uno isomorfo.

In particolare, fissato in `V` di dimensione `n` un riferimento
`R = (v₁, ..., vₙ)`, l'applicazione coordinate
`φ_R: M(n, K) → V` con `φ_R(k₁, ..., kₙ) = k₁v₁ + ... + kₙvₙ` è un
isomorfismo: biettiva per unicità delle coordinate e lineare per somma
componente per componente.

Una lineare è fissata dai valori su una base. Se `H` è base di `V` e
`f: H → W` è una qualsiasi applicazione, esiste un'unica estensione lineare
`F: V → W` con `F = f` su `H`, data da
`F(k₁v₁ + ... + kₙvₙ) = k₁f(v₁) + ... + kₙf(vₙ)`. È ben definita proprio
perché la scrittura in base è unica.

È essenziale che `H` sia base. Controesempio nuovo: in `R²` sia
`H = [(1, 0), (2, 0)]`, sistema di generatori ma dipendente. Assegnare
`f(1, 0) = (1, 0)` e `f(2, 0) = (0, 1)` non si estende a una lineare, perché
il secondo è il doppio del primo ma le immagini non sono una il doppio
dell'altra.

Errore tipico: credere che l'immagine di un indipendente sia sempre
indipendente. Senza iniettività è falso: basta mandare tutto a zero.

## 3. PRODOTTO TRA MATRICI

Il prodotto nasce per descrivere le lineari tra spazi numerici, e quindi in
generale tra spazi finitamente generati.

Dati `a = (a₁, ..., aₙ)` riga e `b` colonna con entrate `b₁, ..., bₙ`, il
prodotto riga-colonna è lo scalare `a·b = a₁b₁ + ... + aₙbₙ`. Soddisfa
`k(a·b) = (ka)·b = a·(kb)`, le distributive
`a·(b+c) = a·b + a·c` e `(a+b)·c = a·c + b·c`, e il legame con la trasposta.

Siano `A` di tipo `(m, n)` e `B` di tipo `(n, p)`. Scrivendo `A` per righe
`a₁, ..., aₘ` e `B` per colonne `b¹, ..., bᵖ`, l'elemento di posto `(i, j)`
del prodotto è `aᵢ·bʲ = Σ_{h=1}^{n} a_{i,h}b_{h,j}`. Il risultato è di tipo
`(m, p)`. Il prodotto esiste solo se le colonne della prima sono tante
quante le righe della seconda.

Esempio nuovo: siano

```
A = [[2, 0], [1, -1]]   B = [[1, 2, 0], [3, 0, 4]]
```

`A` è `(2, 2)`, `B` è `(2, 3)`, quindi `A·B` è `(2, 3)`:

```
A·B = [[2, 4, 0], [-2, 2, -4]]
```

Infatti `(A·B)₁₁ = 2·1 + 0·3 = 2` e `(A·B)₂₃ = 1·0 + (-1)·4 = -4`. Il
prodotto `B·A` non è definito perché `B` ha `3` colonne e `A` ha `2` righe.

Proprietà del prodotto tra matrici:

- associativa: `(A·B)·C = A·(B·C)`;
- omogeneità: `k(A·B) = (kA)·B = A·(kB)`;
- distributive: `(A+B)·C = A·C + B·C` e `A·(B+C) = A·B + A·C`;
- trasposta: `(A·B)ᵀ = Bᵀ·Aᵀ`, con ordine invertito.

Non vale in generale la commutatività. Se `A` è `(m, n)` e `B` è `(n, p)`,
`B·A` esiste solo se `m = p`, e comunque ha tipo diverso (`(n, n)` contro
`(m, m)`). Anche nel caso quadrato `m = n = p` di norma `A·B ≠ B·A`.
Due quadrate con `A·B = B·A` si dicono permutabili.

Esempio nuovo con diagonali: sia `B = [[1, 2, 3], [0, -1, 4]]` di tipo
`(2, 3)` e `D(2, -1, 3)` diagonale. Allora

```
B·D(2, -1, 3) = [[2, -2, 9], [0, 1, 12]]
```

cioè ogni colonna `j` è moltiplicata per `kⱼ`. Moltiplicare a sinistra per
una diagonale moltiplica invece le righe: se `C` è `(3, 2)`, la riga `i`
di `D(k₁, ..., kₙ)·C` è `kᵢ` volte la riga `i` di `C`. Per una scalare
`Dₙ(k)` si ha `B·Dₙ(k) = Dₘ(k)·B = kB`, e in particolare
`B·Iₙ = Iₘ·B = B`: l'identità è il neutro del prodotto in `M(n, n, K)`.

Errore tipico: moltiplicare entrate omonime, scambiare righe con colonne
nel calcolo, o supporre `A·B = B·A` e `(A·B)ᵀ = Aᵀ·Bᵀ`. L'ordine conta sia
nel prodotto sia nella trasposta.

## Concetti chiave da ricordare

- `f` lineare se conserva somme e multipli; allora `f(0) = 0` e
  `f(-v) = -f(v)`; epi/mono/iso secondo suriettività/iniettività/biettività.
- Composta di lineari è lineare; inversa di isomorfismo è isomorfismo.
- L'immagine di un generato genera l'immagine; `dim f(V') ≤ dim V'`.
- `f(S)` indipendente implica `S` indipendente; con `f` iniettiva vale anche
  il viceversa per sistemi indipendenti.
- Una lineare è univocamente fissata dai valori su una base; senza
  indipendenza l'estensione può non esistere.
- `a·b = Σ aₕbₕ`; `(A·B)_{i,j} = rigaᵢ(A)·colonnaʲ(B)`; tipi
  `(m, n)·(n, p) = (m, p)`.
- Valgono associativa, distributiva e `(A·B)ᵀ = Bᵀ·Aᵀ`; non la commutatività.
- Moltiplicare a destra per diagonale scala le colonne, a sinistra scala le
  righe; `Iₙ` è il neutro.

## TEST di AUTOVALUTAZIONE

Domande originali di verifica sugli stessi argomenti della lezione, con soluzioni
ragionate in fondo. Nessuna domanda è copiata dal materiale sorgente.

**1.** Quale `f: R² → R²` è lineare?
a) `f(x, y) = (3x + y, 2y + 5)` · b) `f(x, y) = (x², y)` ·
c) `f(x, y) = (4x - 2y, x + y)` · d) `f(x, y) = (x + y, xy)`

**2.** Se `f: V → W` è lineare, allora necessariamente:
a) `f(0) ≠ 0` · b) `f(-v) = -f(v)` per ogni `v` ·
c) `f` è biettiva · d) `f(v + w) = f(v)·f(w)`

**3.** Con `a = (2, -1, 3)` e colonna `b = (1, 0, 4)` il prodotto `a·b` vale:
a) `(2, 0, 12)` · b) `14` · c) `11` · d) `9`

**4.** Se `A` è `(2, 3)` e `B` è `(3, 2)`, allora:
a) solo `A·B` esiste ed è `(2, 2)` · b) `A·B` è `(2, 2)` e `B·A` è `(3, 3)` ·
c) entrambi sono `(2, 3)` · d) nessun prodotto esiste

**5.** Se `M = [[1, 5], [2, 0]]`, allora `M·D(3, 2)` è:
a) `[[3, 10], [6, 0]]` · b) `[[3, 5], [6, 0]]` · c) `[[3, 10], [2, 0]]` ·
d) `[[3, 15], [6, 2]]`

**6.** Per `A (m, n)` e `B (n, p)` vale sempre:
a) `A·B = B·A` · b) `(A·B)ᵀ = Aᵀ·Bᵀ` · c) `(A·B)ᵀ = Bᵀ·Aᵀ` ·
d) `B·A` ha tipo `(m, p)`

### Soluzioni ragionate

**1 — c.** Componenti omogenee di primo grado senza costanti. La a) ha `+5`,
la b) ha un quadrato, la d) ha il prodotto `xy`: nessuna conserva somme e
multipli.

**2 — b.** Segue da `f(-v) = (-1)f(v) = -f(v)`. La a) contraddice `f(0) = 0`;
la c) confonde linearità con biettività; la d) inventa un prodotto tra
vettori al posto della somma.

**3 — b.** `2·1 + (-1)·0 + 3·4 = 14`, uno scalare. La a) restituisce un
vettore invece di uno scalare; la c) e la d) sbagliano i conti
(`2 + 12 = 14`).

**4 — b.** I tipi interni `3` coincidono in entrambi i versi: `A·B` è
`(2, 2)`, `B·A` è `(3, 3)`. La a) dimentica `B·A`, la c) sbaglia i tipi, la
d) nega prodotti esistenti.

**5 — a.** La diagonale a destra scala le colonne: prima per `3`, seconda
per `2`, cioè `[[3, 10], [6, 0]]`. Le altre scalano una sola colonna o usano
fattori errati.

**6 — c.** La trasposta del prodotto inverte l'ordine. La a) è la falsa
commutatività, la b) mantiene l'ordine sbagliato, la d) attribuisce a `B·A`
un tipo che in generale non ha (esiste solo se `m = p`).

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
