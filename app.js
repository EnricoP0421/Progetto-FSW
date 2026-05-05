const { createApp } = Vue;

createApp({
  template: `
  <div class="d-flex flex-column min-vh-100">
    <header class="py-3 mb-3">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-2">
          <img src="images/React native icona.png" alt="React Logo" class="logo-react">
          <h1 class="h4 m-0">React Native Hub</h1>
        </div>
        <nav>
          <ul class="nav">
            <li class="nav-item">
              <button class="nav-link" :class="{active: vista==='home'}" @click="vista='home'">Home</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" :class="{active: vista==='react'}" @click="vista='react'">React Native</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" :class="{active: vista==='gamedex'}" @click="vista='gamedex'">GameDex</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" :class="{active: vista==='crud'}" @click="vista='crud'">Esami</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex-grow-1">
      <div class="container mb-4">

        <!-- HOME -->
        <section v-if="vista === 'home'" class="main-section">
          <h2 class="mb-3">Home</h2>

          <h3>Che cosa è React Native?</h3>
            <div class="react-row">
              <div class="react-text">
                <p>
                  React Native è un framework open source sviluppato da Facebook che permette di creare
                  applicazioni mobili native utilizzando JavaScript e il paradigma di React. L’idea centrale
                  è quella di scrivere il codice una sola volta e distribuirlo su più piattaforme, come
                  Android e iOS, mantenendo però componenti e prestazioni native.
                </p>
                <p>
                  A differenza delle soluzioni ibride basate su WebView, React Native utilizza componenti nativi reali,
                  garantendo prestazioni elevate, fluidità dell'interfaccia e un'esperienza utente simile a
                  quella delle app sviluppate interamente in linguaggio nativo.
                </p>
              </div>

              <div >
                <img src="images/react-1.svg" class="react-image" alt="React Native">
              </div>

            </div>
          

          <h3 class="mt-4">Storia e futuro</h3>
            <div class="react-row-2">
              <p>
                React Native nasce come evoluzione naturale di React.js, la libreria JavaScript introdotta nel 2013 che ha 
                rivoluzionato lo sviluppo web grazie al Virtual DOM e alla programmazione dichiarativa. Facebook intuì che gli stessi 
                principi potevano essere applicati anche allo sviluppo mobile, superando i limiti delle soluzioni ibride tradizionali 
                come Ionic o Cordova.
              </p>
              
                <img src="images/1_OhmYGQJZ6KIlPsxvS2vbtA.png" class="react-image-2" alt="React Native">

              <div class="react-text-2">
                <p style="padding-top: 20px;">
                  Guardando al futuro, il team di React Native sta lavorando alla New Architecture:
                </p>
                <ul>
                  <li>Fabric, un nuovo sistema di rendering più veloce</li>
                  <li>TurboModules, per una gestione più efficiente dei moduli nativi</li>
                </ul>
                <p>
                  Questi miglioramenti promettono di rendere React Native ancora più performante e scalabile, consolidando la sua posizione come uno dei framework più popolari per lo sviluppo mobile cross-platform.
                </p>
                </div>

              </div>

          <h3 class="mt-4">Vantaggi</h3>
          <ul>
            <li>Codice unico per più piattaforme (Android e iOS)</li>
            <li>Prestazioni elevate, grazie al rendering nativo</li>
            <li>Fast Refresh, per aggiornare l'app in tempo reale durante lo sviluppo</li>
            <li>Grande community e ampia disponibilità di librerie</li>
            <li>Facile apprendimento per sviluppatori web</li>
            <li>Ecosistema completo (Expo, UI libraries, strumenti di testing)</li>
            <li>Riduzione dei costi e dei tempi di sviluppo</li>
          </ul>
        </section>

        <!-- REACT NATIVE / API -->
        <section v-else-if="vista === 'react'" class="main-section">
          <div class="section-header">
            <h1 class="section-title">API React Native</h1>
            <p class="section-description">
              Guida ai principali concetti di React Native: installazione, componenti, stili ed esempi pratici.
            </p>
          </div>

          <div class="features-grid">
            <div class="feature-card" @click="showApiSection('how')">
              <div class="feature-icon">⚙️</div>
              <h3>Come Funziona</h3>
              <p>Il funzionamento di React Native e il flusso di sviluppo.</p>
            </div>

            <div class="feature-card" @click="showApiSection('component')">
              <div class="feature-icon">🧩</div>
              <h3>Componenti</h3>
              <p>Creazione dell'interfaccia con JSX.</p>
            </div>

            <div class="feature-card" @click="showApiSection('styles')">
              <div class="feature-icon">🎨</div>
              <h3>Stili</h3>
              <p>Layout Flexbox e StyleSheet.</p>
            </div>

            <div class="feature-card" @click="showApiSection('sintax')">
              <div class="feature-icon">📘</div>
              <h3>Sintassi di Base</h3>
              <p>Componenti fondamentali e hook.</p>
            </div>

            <div class="feature-card" @click="showApiSection('debug')">
              <div class="feature-icon">🛠️</div>
              <h3>Debug e strumenti</h3>
              <p>Strumenti per lo sviluppo e il debugging.</p>
            </div>

            <div class="feature-card" @click="showApiSection('examples')">
              <div class="feature-icon">💡</div>
              <h3>Esempi di codice</h3>
              <p>Esempi pratici di codice.</p>
            </div>
          </div>

          <div id="api-content" v-html="getSectionContent()"></div>
        </section>

        <!-- GAMEDEX -->
        <section v-else-if="vista === 'gamedex'" class="main-section">
          <h2 class="mb-3">GameDex</h2>

          <p class="mb-3">
            GameDex è una semplice tabella che raccoglie alcuni videogiochi famosi, con informazioni
            su genere, anno di uscita, piattaforma, sviluppatore, valutazione e modalità di gioco.
            I dati sono caricati da un file JSON esterno.
          </p>

          <div class="d-flex gap-2 mb-3 flex-wrap">
            <input type="search" class="form-control form-control-sm"
                   placeholder="Cerca titolo o genere"
                   v-model="filtroGiochi">
            <select class="form-select form-select-sm" v-model="ordinamentoGiochi">
              <option value="id">ID crescente</option>
              <option value="anno_desc">Dall'anno più recente</option>
              <option value="anno_asc">Dall'anno più vecchio</option>
              <option value="val_desc">Dalla valutazione più alta</option>
              <option value="val_asc">Dalla valutazione più bassa</option>
            </select>
          </div>

          <div v-if="caricamentoGiochi" class="mb-2 text-muted">
            Caricamento giochi...
          </div>

          <div v-else class="table-responsive">
            <table class="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Titolo</th>
                  <th>Genere</th>
                  <th>Anno</th>
                  <th>Piattaforma</th>
                  <th>Sviluppatore</th>
                  <th>Valutazione</th>
                  <th>Modalità</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="g in giochiFiltrati" :key="g.id">
                  <td>{{ g.id }}</td>
                  <td>{{ g.titolo }}</td>
                  <td>{{ g.genere }}</td>
                  <td>{{ g.anno }}</td>
                  <td>{{ g.piattaforma }}</td>
                  <td>{{ g.sviluppatore }}</td>
                  <td>{{ g.valutazione }}</td>
                  <td>{{ g.modalita }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- CRUD ESAMI -->
        <section v-else-if="vista === 'crud'" class="main-section">
          <h2 class="mb-3">Inserimento esami</h2>

          <p class="mb-3">
            In questa sezione è possibile inserire, modificare ed eliminare gli esami sostenuti.
            I dati vengono salvati nel localStorage del browser, così da rimanere disponibili
            anche dopo la chiusura della pagina.
          </p>

          <form class="row g-2 mb-4" @submit.prevent="salvaEsame">
            <div class="col-md-4">
              <label class="form-label">Corso</label>
              <input v-model="formEsame.corso" class="form-control" required>
            </div>
            <div class="col-md-2">
              <label class="form-label">Voto</label>
              <input v-model="formEsame.voto" type="number" min="18" max="30" class="form-control" required>
            </div>
            <div class="col-md-3">
              <label class="form-label">Data</label>
              <input v-model="formEsame.data" type="date" class="form-control" required>
            </div>
            <div class="col-md-3 d-flex align-items-end">
              <button class="btn btn-primary w-100">
                {{ formEsame.id ? 'Aggiorna' : 'Aggiungi' }}
              </button>
            </div>
          </form>

          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th>Corso</th>
                  <th>Voto</th>
                  <th>Data</th>
                  <th class="text-end">Azioni</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="esami.length === 0">
                  <td colspan="4" class="text-center text-muted">
                    Nessun esame inserito.
                  </td>
                </tr>
                <tr v-for="e in esami" :key="e.id">
                  <td>{{ e.corso }}</td>
                  <td>{{ e.voto }}</td>
                  <td>{{ e.data }}</td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-outline-secondary me-1" @click="modificaEsame(e)">Modifica</button>
                    <button class="btn btn-sm btn-outline-danger" @click="cancellaEsame(e.id)">Elimina</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>

    <footer class="py-3 mt-auto">
      <p class="text-center m-0 small">
        Fondamenti di Sistemi Web – A.A. 2024/2025
      </p>
    </footer>
  </div>
  `,

  data() {
    return {
      vista: "home",

      activeSection: null,
      giochi: [],
      caricamentoGiochi: false,
      filtroGiochi: "",
      ordinamentoGiochi: "id",

      esami: [
      { id: 1, corso: "Fondamenti di Sistemi Web", voto: 28, data: "2024-06-15" },
      { id: 2, corso: "Programmazione", voto: 30, data: "2024-02-10" },
      { id: 3, corso: "Basi di Dati", voto: 27, data: "2024-01-22" }
    ],
    formEsame: {
      id: null,
      corso: "",
      voto: "",
      data: ""
    }
    };
  },

  computed: {
    giochiFiltrati() {
  let lista = [...this.giochi];

  if (this.filtroGiochi.trim() !== "") {
    const f = this.filtroGiochi.toLowerCase();
    lista = lista.filter(g =>
      g.titolo.toLowerCase().includes(f) ||
      g.genere.toLowerCase().includes(f)
    );
  }

  if (this.ordinamentoGiochi === "id") {
    lista.sort((a, b) => a.id - b.id);
  }

  if (this.ordinamentoGiochi === "anno_desc") {
    lista.sort((a, b) => b.anno - a.anno);
  }

  if (this.ordinamentoGiochi === "anno_asc") {
    lista.sort((a, b) => a.anno - b.anno);
  }

  if (this.ordinamentoGiochi === "val_desc") {
    lista.sort((a, b) => b.valutazione - a.valutazione);
  }

  if (this.ordinamentoGiochi === "val_asc") {
    lista.sort((a, b) => a.valutazione - b.valutazione);
  }

  return lista;
}
  },

  methods: {
    caricaGiochi() {
      this.caricamentoGiochi = true;
      axios.get("games.json")
        .then(res => {
          this.giochi = res.data;
        })
        .catch(err => {
          console.error("Errore nel caricamento dei giochi:", err);
        })
        .finally(() => {
          this.caricamentoGiochi = false;
        });
    },

caricaEsami() {
  try {
    const salvati = localStorage.getItem("esami-react");
    if (salvati) {
      this.esami = JSON.parse(salvati);
    }
  } catch (e) {
    console.warn("LocalStorage non disponibile, uso solo gli esami iniziali.");
  }
},

showApiSection(section) {
  this.activeSection = section;
},

getSectionContent() {
  const sections = {
    how: `
          <div class="api-section">
            <h2>Come Funziona React Native</h2>
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h3>Installa React Native</h3>
                  <p>Inizia configurando l'ambiente di sviluppo. React Native CLI ti permette di creare un nuovo progetto con tutti i file necessari in pochi secondi.</p>
                  <div class="step-code">
                    <span class="code-line"><span class="keyword">npx</span> react-native init MiaApp</span>
                    <span class="code-line"><span class="keyword">cd</span> MiaApp</span>
                    <span class="code-line"><span class="keyword">npx</span> react-native run-android</span>
                  </div>
                </div>
              </div>

              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h3>Crea Componenti React</h3>
                  <p>Utilizza JSX per descrivere l'interfaccia utente. I componenti React Native come View, Text e Image si traducono automaticamente in componenti nativi della piattaforma.</p>
                  <div class="step-code">
                    <span class="code-line"><span class="keyword">const</span> <span class="function">MioComponente</span> = () => (</span>
                    <span class="code-line">  &lt;<span class="tag">View</span> style={styles.container}&gt;</span>
                    <span class="code-line">    &lt;<span class="tag">Text</span>&gt;<span class="string">Testo Nativo</span>&lt;/<span class="tag">Text</span>&gt;</span>
                    <span class="code-line">  &lt;/<span class="tag">View</span>&gt;</span>
                    <span class="code-line">);</span>
                  </div>
                </div>
              </div>

              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h3>Stilizza con Flexbox</h3>
                  <p>React Native utilizza Flexbox per il layout, rendendo semplice creare interfacce responsive. Gli stili sono definiti in JavaScript utilizzando un subset di CSS.</p>
                  <div class="step-code">
                    <span class="code-line"><span class="keyword">const</span> styles = <span class="component">StyleSheet</span>.<span class="function">create</span>({</span>
                    <span class="code-line">  container: {</span>
                    <span class="code-line">    flex: <span class="string">1</span>,</span>
                    <span class="code-line">    justifyContent: <span class="string">'center'</span>,</span>
                    <span class="code-line">    backgroundColor: <span class="string">'#61dafb'</span></span>
                    <span class="code-line">  }</span>
                    <span class="code-line">});</span>
                  </div>
                </div>
              </div>

              <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h3>Pubblica la Tua App</h3>
                  <p>Quando sei pronto, compila la tua app per produzione e pubblicala su App Store e Google Play Store. React Native gestisce l'ottimizzazione per entrambe le piattaforme.</p>
                </div>
              </div>
            </div>
          </div>
        `,
    component: `
          <div class="api-section">
            <h2>Componenti di Base</h2>
            <p>
              React Native utilizza componenti nativi come <strong>View</strong>, <strong>Text</strong>, <strong>Button</strong>, <strong>TextInput</strong> e <strong>FlatList</strong>.
              Lo stato dell'app viene gestito tramite hook come <strong>useState</strong>, che permette di rendere l'interfaccia dinamica e interattiva.
            </p>
            
            <h3 class="subsection-title">Esempio: Lista della Spesa</h3>
            <pre><span class="keyword">import</span> React, { <span class="function">useState</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> { <span class="component">View</span>, <span class="component">Text</span>, <span class="component">TextInput</span>, <span class="component">FlatList</span>, <span class="component">Button</span>, <span class="component">StyleSheet</span> } <span class="keyword">from</span> <span class="string">'react-native'</span>;

<span class="keyword">export default function</span> <span class="function">ShoppingList</span>() {
  <span class="keyword">const</span> [items, setItems] = <span class="function">useState</span>([]);
  <span class="keyword">const</span> [text, setText] = <span class="function">useState</span>(<span class="string">''</span>);
  
  <span class="keyword">const</span> <span class="function">addItem</span> = () => {
    <span class="keyword">if</span> (text.<span class="function">trim</span>() !== <span class="string">''</span>) {
      <span class="function">setItems</span>([...<span class="variable">items</span>, text]);
      <span class="function">setText</span>(<span class="string">''</span>);
    }
  };
  
  <span class="keyword">return</span> (
    &lt;<span class="component">View</span> style={styles.container}&gt;
      &lt;<span class="component">TextInput</span>
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder=<span class="string">"Aggiungi un prodotto"</span>
      /&gt;
      &lt;<span class="component">Button</span> title=<span class="string">"Aggiungi"</span> onPress={addItem} /&gt;
      &lt;<span class="component">FlatList</span>
        data={items}
        keyExtractor={(item, index) => index.<span class="function">toString</span>()}
        renderItem={({ item }) => &lt;<span class="component">Text</span> style={styles.item}&gt;{item}&lt;/<span class="component">Text</span>&gt;}
      /&gt;
    &lt;/<span class="component">View</span>&gt;
  );
}

<span class="keyword">const</span> styles = <span class="component">StyleSheet</span>.<span class="function">create</span>({
  container: {
    flex: <span class="string">1</span>,
    padding: <span class="string">20</span>,
    backgroundColor: <span class="string">'#fff'</span>,
  },
  input: {
    borderWidth: <span class="string">1</span>,
    borderColor: <span class="string">'#ccc'</span>,
    padding: <span class="string">10</span>,
    marginBottom: <span class="string">10</span>,
  },
  item: {
    fontSize: <span class="string">18</span>,
    padding: <span class="string">5</span>,
  },
});</pre>
                    
            <div class="info-box">
              <strong>📝 Concetti chiave:</strong>
              <ul>
                <li><strong>useState:</strong> gestisce lo stato della lista e del campo di testo</li>
                <li><strong>TextInput:</strong> permette all'utente di inserire nuovi elementi</li>
                <li><strong>FlatList:</strong> renderizza liste lunghe in modo ottimizzato</li>
                <li><strong>keyExtractor:</strong> identifica univocamente ogni elemento della lista</li>
              </ul>
            </div>
          </div>
        `,
    styles: `
          <div class="api-section">
            <h2>Gestione degli Stili</h2>
            <p>
              Gli stili in React Native vengono definiti in JavaScript usando <strong>StyleSheet.create</strong>.
              Il layout è basato su <strong>Flexbox</strong>, un sistema flessibile che permette di creare interfacce responsive
              che si adattano a diverse dimensioni dello schermo.
            </p>
            
            <h3 class="subsection-title">Proprietà Flexbox Principali</h3>
            <div class="info-box">
              <ul>
                <li><strong>flex:</strong> definisce quanto spazio occupa un componente rispetto agli altri</li>
                <li><strong>flexDirection:</strong> 'row' | 'column' - dispone i figli orizzontalmente o verticalmente</li>
                <li><strong>justifyContent:</strong> 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'</li>
                <li><strong>alignItems:</strong> 'center' | 'flex-start' | 'flex-end' | 'stretch'</li>
                <li><strong>gap:</strong> spazio tra gli elementi figli</li>
              </ul>
            </div>

            <h3 class="subsection-title">Esempio di Stili</h3>
            <pre><span class="keyword">const</span> styles = <span class="component">StyleSheet</span>.<span class="function">create</span>({
  container: {
    flex: <span class="string">1</span>,
    justifyContent: <span class="string">'center'</span>,
    alignItems: <span class="string">'center'</span>,
    backgroundColor: <span class="string">'#f0f0f0'</span>,
    padding: <span class="string">20</span>,
  },
  text: {
    fontSize: <span class="string">24</span>,
    fontWeight: <span class="string">'bold'</span>,
    color: <span class="string">'#333'</span>,
    marginBottom: <span class="string">15</span>,
  },
  button: {
    backgroundColor: <span class="string">'#007AFF'</span>,
    padding: <span class="string">15</span>,
    borderRadius: <span class="string">8</span>,
    marginTop: <span class="string">10</span>,
  }
});</pre>
            
            <div class="tip-box">
              <strong>💡 Suggerimento:</strong> A differenza del CSS web, in React Native i valori numerici sono già interpretati come pixel (dp su Android, pt su iOS), quindi non serve specificare unità di misura.
            </div>
          </div>
        `,
    sintax: `
          <div class="api-section">
            <h2>Sintassi di Base</h2>
            <p style="margin-bottom: 32px;">
              React Native fornisce un set di componenti e API fondamentali per costruire interfacce utente native.
              Ecco i principali elementi che utilizzerai quotidianamente nello sviluppo.
            </p>

            <div class="syntax-grid">
              <div class="syntax-item">
                <h3>🎣 useState</h3>
                <p>Hook per la gestione dello stato locale del componente. Quando modifichi lo stato, il componente si ri-renderizza.</p>
                <div class="code-example">
                  <code>const [value, setValue] = useState(initialValue);</code>
                </div>
              </div>

              <div class="syntax-item">
                <h3>📦 View</h3>
                <p>Contenitore principale per il layout (come un <code>div</code> nel web). Supporta Flexbox.</p>
                <div class="code-example">
                  <code>&lt;View style={styles.container}&gt;...&lt;/View&gt;</code>
                </div>
              </div>

              <div class="syntax-item">
                <h3>📝 Text</h3>
                <p>Componente per visualizzare testo. In React Native, il testo va sempre dentro <code>Text</code>.</p>
                <div class="code-example">
                  <code>&lt;Text style={styles.title}&gt;Hello&lt;/Text&gt;</code>
                </div>
              </div>

              <div class="syntax-item">
                <h3>🔘 Button</h3>
                <p>Pulsante nativo: usa <code>onPress</code> (non <code>onClick</code>).</p>
                <div class="code-example">
                  <code>&lt;Button title="Click" onPress={handlePress} /&gt;</code>
                </div>
              </div>

              <div class="syntax-item">
                <h3>⌨️ TextInput</h3>
                <p>Campo di input testo con evento <code>onChangeText</code>.</p>
                <div class="code-example">
                  <code>&lt;TextInput value={text} onChangeText={setText} /&gt;</code>
                </div>
              </div>

              <div class="syntax-item">
                <h3>📋 FlatList</h3>
                <p>Lista ottimizzata: renderizza solo gli elementi visibili per performance migliori.</p>
                <div class="code-example">
                  <code>&lt;FlatList data={items} renderItem={...} /&gt;</code>
                </div>
              </div>

              <div class="syntax-item">
                <h3>🎨 StyleSheet.create</h3>
                <p>Definisce stili in modo ottimizzato e "validato".</p>
                <div class="code-example">
                  <code>const styles = StyleSheet.create({...});</code>
                </div>
              </div>

              <div class="syntax-item">
                <h3>🖼️ Image</h3>
                <p>Per immagini locali o remote (via <code>uri</code>).</p>
                <div class="code-example">
                  <code>&lt;Image source={{uri: 'https://...'}} style={{width: 100, height: 100}} /&gt;</code>
                </div>
              </div>
            </div>

            <div class="info-box">
              <strong>📚 Documentazione:</strong> 
              Per approfondire ogni componente e API, consulta la 
              <a href="https://reactnative.dev/docs/components-and-apis" target="_blank" rel="noopener">documentazione ufficiale di React Native</a>.
            </div>
          </div>
        `,
    debug: `
          <div class="api-section">
            <h2>Debug e Strumenti</h2>
            <p>
              Durante lo sviluppo di applicazioni mobile, il debug è una fase fondamentale per individuare errori, 
              ottimizzare le prestazioni e garantire la corretta esecuzione del codice.
            </p>
            
            <div class="tools-grid">
              <div class="tool-card">
                <h3>⚡ Fast Refresh</h3>
                <p>
                  Aggiorna automaticamente l'applicazione ogni volta che salvi il codice, mantenendo lo stato corrente. 
                  Permette di vedere istantaneamente le modifiche senza dover riavviare l'intera app.
                </p>
              </div>
              
              <div class="tool-card">
                <h3>🖥️ Console.log</h3>
                <p>
                  Il metodo più semplice per il debug. Stampa valori, oggetti e messaggi nella console per verificare 
                  il flusso del codice e controllare i dati in tempo reale durante l'esecuzione.
                </p>
              </div>
              
              <div class="tool-card">
                <h3>🔍 React Developer Tools</h3>
                <p>
                  Estensione browser che permette di ispezionare la gerarchia dei componenti React, visualizzare props e state, 
                  e analizzare le performance. Essenziale per debug avanzato.
                </p>
              </div>
              
              <div class="tool-card">
                <h3>📱 React Native Debugger</h3>
                <p>
                  Applicazione standalone che combina React DevTools, Redux DevTools e la console in un'unica interfaccia. 
                  Offre funzionalità di breakpoint e inspection avanzata.
                </p>
              </div>
              
              <div class="tool-card">
                <h3>⚠️ Error Boundaries</h3>
                <p>
                  Componenti speciali che catturano gli errori JavaScript nei loro componenti figli, permettendo di 
                  mostrare un'interfaccia di fallback invece di far crashare l'intera app.
                </p>
              </div>
              
              <div class="tool-card">
                <h3>📊 Flipper</h3>
                <p>
                  Piattaforma di debug estensibile creata da Meta. Offre network inspector, database viewer, 
                  performance monitor e molti altri plugin per analizzare ogni aspetto dell'app.
                </p>
              </div>
            </div>
            
            <div class="info-box">
              <strong>🎯 Menu di Debug:</strong> Durante lo sviluppo, scuoti il dispositivo (o premi Cmd+D su iOS / Ctrl+M su Android) 
              per aprire il Dev Menu con opzioni come: reload, debug JS remotely, enable fast refresh, e show inspector.
            </div>
          </div>
        `,
    examples: `
          <div class="api-section">
            <h2>Esempi Pratici di Codice</h2>
            <p style="margin-bottom: 32px;">
              Di seguito trovi alcuni esempi pratici che dimostrano i concetti fondamentali di React Native,
              dalla gestione dello stato alla creazione di interfacce interattive.
            </p>

            <h3 class="subsection-title">Esempio 1: Hello World con Interazione</h3>
            <p style="margin-bottom: 32px;">Un semplice esempio che mostra come cambiare il messaggio visualizzato premendo un pulsante:</p>

            <pre><span class="keyword">import</span> React, { <span class="function">useState</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> { <span class="component">Text</span>, <span class="component">View</span>, <span class="component">Button</span>, <span class="component">StyleSheet</span> } <span class="keyword">from</span> <span class="string">'react-native'</span>;

<span class="keyword">export default function</span> <span class="function">App</span>() {
  <span class="keyword">const</span> [message, setMessage] = <span class="function">useState</span>(<span class="string">'Benvenuto in React Native!'</span>);

  <span class="keyword">const</span> <span class="function">changeMessage</span> = () => {
    <span class="function">setMessage</span>(<span class="string">'Hai premuto il pulsante!'</span>);
  };

  <span class="keyword">return</span> (
    &lt;<span class="component">View</span> style={styles.container}&gt;
      &lt;<span class="component">Text</span> style={styles.text}&gt;{message}&lt;/<span class="component">Text</span>&gt;
      &lt;<span class="component">Button</span> title=<span class="string">"Premi qui"</span> onPress={changeMessage} /&gt;
    &lt;/<span class="component">View</span>&gt;
  );
}

<span class="keyword">const</span> styles = <span class="component">StyleSheet</span>.<span class="function">create</span>({
  container: {
    flex: <span class="string">1</span>,
    justifyContent: <span class="string">'center'</span>,
    alignItems: <span class="string">'center'</span>,
    backgroundColor: <span class="string">'#fff'</span>,
  },
  text: {
    fontSize: <span class="string">20</span>,
    marginBottom: <span class="string">20</span>,
  },
});</pre>
            
            <h3 class="subsection-title">Esempio 2: Contatore Interattivo</h3>
            <p style="margin-bottom: 32px;">Un classico esempio che dimostra la gestione dello stato e l'aggiornamento dell'interfaccia:</p>
            
            <pre><span class="keyword">import</span> React, { <span class="function">useState</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> { <span class="component">View</span>, <span class="component">Text</span>, <span class="component">Button</span>, <span class="component">StyleSheet</span> } <span class="keyword">from</span> <span class="string">'react-native'</span>;

<span class="keyword">export default function</span> <span class="function">Counter</span>() {
  <span class="keyword">const</span> [count, setCount] = <span class="function">useState</span>(<span class="string">0</span>);

  <span class="keyword">return</span> (
    &lt;<span class="component">View</span> style={styles.container}&gt;
      &lt;<span class="component">Text</span> style={styles.counter}&gt;{count}&lt;/<span class="component">Text</span>&gt;
      &lt;<span class="component">View</span> style={styles.buttons}&gt;
        &lt;<span class="component">Button</span> title=<span class="string">"Incrementa"</span> onPress={() => <span class="function">setCount</span>(count + <span class="string">1</span>)} /&gt;
        &lt;<span class="component">Button</span> title=<span class="string">"Decrementa"</span> onPress={() => <span class="function">setCount</span>(count - <span class="string">1</span>)} /&gt;
      &lt;/<span class="component">View</span>&gt;
    &lt;/<span class="component">View</span>&gt;
  );
}

<span class="keyword">const</span> styles = <span class="component">StyleSheet</span>.<span class="function">create</span>({
  container: {
    flex: <span class="string">1</span>,
    justifyContent: <span class="string">'center'</span>,
    alignItems: <span class="string">'center'</span>,
    backgroundColor: <span class="string">'#fff'</span>,
  },
  counter: {
    fontSize: <span class="string">48</span>,
    marginBottom: <span class="string">20</span>,
  },
  buttons: {
    flexDirection: <span class="string">'row'</span>,
    gap: <span class="string">10</span>,
  },
});</pre>

            <div class="tip-box">
              <strong>🎓 Best Practices:</strong>
              <ul>
                <li>Usa sempre <code>useState</code> per gestire dati che cambiano nel tempo</li>
                <li>Mantieni i componenti piccoli e focalizzati su un singolo compito</li>
                <li>Definisci gli stili con <code>StyleSheet.create</code> per migliori performance</li>
                <li>Usa <code>FlatList</code> invece di <code>ScrollView</code> per liste lunghe</li>
              </ul>
            </div>
          </div>
        `
  };
  
  return sections[this.activeSection] || '';
},

    salvaEsamiLS() {
      localStorage.setItem("esami-react", JSON.stringify(this.esami));
    },

    salvaEsame() {
      if (!this.formEsame.corso || !this.formEsame.voto || !this.formEsame.data) return;

      if (this.formEsame.id) {
        const idx = this.esami.findIndex(e => e.id === this.formEsame.id);
        if (idx !== -1) this.esami[idx] = { ...this.formEsame };
      } else {
        const nuovo = { ...this.formEsame, id: Date.now() };
        this.esami.push(nuovo);
      }

      this.salvaEsamiLS();
      this.resetFormEsame();
    },

    modificaEsame(e) {
      this.formEsame = { ...e };
      this.vista = "crud";
    },

    cancellaEsame(id) {
      this.esami = this.esami.filter(e => e.id !== id);
      this.salvaEsamiLS();
      if (this.formEsame.id === id) this.resetFormEsame();
    },

    resetFormEsame() {
      this.formEsame = { id: null, corso: "", voto: "", data: "" };
    }
  },

  watch: {
    vista(nuova) {
      if (nuova === "gamedex" && this.giochi.length === 0) {
        this.caricaGiochi();
      }
    }
  },

  mounted() {
    this.caricaEsami();
  }
}).mount("#app");