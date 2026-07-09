const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;
 
const Home = {
  template: `
        <section class="main-section">
          <div class="section-header">
            <h1 class="section-title">React Native Hub</h1>
            <p class="section-description">Scopri React Native: storia, funzionamento e vantaggi del framework mobile cross-platform di Meta.</p>
          </div>
 
          <h2>Che cosa è React Native?</h2>
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
                <img src="images/react-1.svg" class="react-image" alt="Schema di funzionamento di React Native">
              </div>
 
            </div>
          
 
          <h2 class="mt-4">Storia e futuro</h2>
            <div class="react-row-2">
              <p>
                React Native nasce come evoluzione naturale di React.js, la libreria JavaScript introdotta nel 2013 che ha 
                rivoluzionato lo sviluppo web grazie al Virtual DOM e alla programmazione dichiarativa. Facebook intuì che gli stessi 
                principi potevano essere applicati anche allo sviluppo mobile, superando i limiti delle soluzioni ibride tradizionali 
                come Ionic o Cordova.
              </p>
              
                <img src="images/1_OhmYGQJZ6KIlPsxvS2vbtA.png" class="react-image-2" alt="Evoluzione da React.js a React Native">
 
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
 
          <h2 class="mt-4">Vantaggi</h2>
          <div class="vantaggi-grid">
            <div class="vantaggio-item">Codice unico per più piattaforme (Android e iOS)</div>
            <div class="vantaggio-item">Prestazioni elevate, grazie al rendering nativo</div>
            <div class="vantaggio-item">Fast Refresh per aggiornamenti in tempo reale</div>
            <div class="vantaggio-item">Grande community e ampia disponibilità di librerie</div>
            <div class="vantaggio-item">Facile apprendimento per sviluppatori web</div>
            <div class="vantaggio-item">Ecosistema completo (Expo, UI libraries, testing)</div>
            <div class="vantaggio-item">Riduzione dei costi e dei tempi di sviluppo</div>
          </div>
        </section>`
};
 
const Fondamenti = {
  data() {
    return {
      activeSection: null
    };
  },
  methods: {
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
                  <p>Si inizia configurando l'ambiente di sviluppo. React Native CLI permette di creare un nuovo progetto con tutti i file necessari in pochi secondi.</p>
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
                  <p>Si utilizza JSX per descrivere l'interfaccia utente. I componenti React Native come View, Text e Image si traducono automaticamente in componenti nativi della piattaforma.</p>
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
                  <p>Quando si è pronti, si compila l' app per produzione e si pubblica su App Store e Google Play Store. React Native gestisce l'ottimizzazione per entrambe le piattaforme.</p>
                </div>
              </div>
            </div>
          </div>`,
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
          </div>`,
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
          </div>`,
    sintax: `
          <div class="api-section">
            <h2>Sintassi di Base</h2>
            <p style="margin-bottom: 32px;">
              React Native fornisce un set di componenti e API fondamentali per costruire interfacce utente native.
              Ecco i principali elementi utilizzati quotidianamente nello sviluppo.
            </p>
 
            <div class="syntax-grid">
              <div class="syntax-item">
                <h3>useState</h3>
                <p>Hook per la gestione dello stato locale del componente.</p>
                <div class="code-example">
                  <code>const [value, setValue] = useState(initialValue);</code>
                </div>
              </div>
 
              <div class="syntax-item">
                <h3>View</h3>
                <p>Contenitore principale per il layout.</p>
                <div class="code-example">
                  <code>&lt;View style={styles.container}&gt;...&lt;/View&gt;</code>
                </div>
              </div>
 
              <div class="syntax-item">
                <h3>Text</h3>
                <p>Componente per visualizzare testo.</p>
                <div class="code-example">
                  <code>&lt;Text style={styles.title}&gt;Hello&lt;/Text&gt;</code>
                </div>
              </div>
 
              <div class="syntax-item">
                <h3>Button</h3>
                <p>Pulsante nativo: usa <code>onPress</code>.</p>
                <div class="code-example">
                  <code>&lt;Button title="Click" onPress={handlePress} /&gt;</code>
                </div>
              </div>
 
              <div class="syntax-item">
                <h3>TextInput</h3>
                <p>Campo di input testo con evento <code>onChangeText</code>.</p>
                <div class="code-example">
                  <code>&lt;TextInput value={text} onChangeText={setText} /&gt;</code>
                </div>
              </div>
 
              <div class="syntax-item">
                <h3>FlatList</h3>
                <p>Lista ottimizzata: renderizza solo gli elementi visibili.</p>
                <div class="code-example">
                  <code>&lt;FlatList data={items} renderItem={...} /&gt;</code>
                </div>
              </div>
 
              <div class="syntax-item">
                <h3>StyleSheet.create</h3>
                <p>Definisce stili in modo ottimizzato e "validato".</p>
                <div class="code-example">
                  <code>const styles = StyleSheet.create({...});</code>
                </div>
              </div>
 
              <div class="syntax-item">
                <h3>Image</h3>
                <p>Per immagini locali o remote (via <code>uri</code>).</p>
                <div class="code-example">
                  <code>&lt;Image source={{uri: 'https://...'}} style={{width: 100, height: 100}} /&gt;</code>
                </div>
              </div>
            </div>
 
            
          </div>`,
    debug: `
          <div class="api-section">
            <h2>Debug e Strumenti</h2>
            <p>
              Durante lo sviluppo di applicazioni mobile, il debug è una fase fondamentale per individuare errori, 
              ottimizzare le prestazioni e garantire la corretta esecuzione del codice.
            </p>
            
            <div class="tools-grid">
              <div class="tool-card">
                <h3>Fast Refresh</h3>
                <p>
                  Aggiorna automaticamente l'applicazione. 
                  Permette di vedere istantaneamente le modifiche senza dover riavviare l'app.
                </p>
              </div>
              
              <div class="tool-card">
                <h3>Console.log</h3>
                <p>
                  Stampa valori, oggetti e messaggi nella console per verificare la corretta esecuzione del codice.
                </p>
              </div>
              
              <div class="tool-card">
                <h3>React Developer Tools</h3>
                <p>
                  Estensione browser che permette di ispezionare la gerarchia dei componenti React, visualizzare props e state, 
                  e analizzare le performance.
                </p>
              </div>
              
              <div class="tool-card">
                <h3>React Native Debugger</h3>
                <p>
                  Applicazione standalone che combina React DevTools, Redux DevTools e la console in un'unica interfaccia.
                </p>
              </div>
              
              <div class="tool-card">
                <h3>Error Boundaries</h3>
                <p>
                  Componenti che catturano errori JavaScript nei loro componenti figli, permettendo di 
                  mostrare un'interfaccia di fallback invece di far crashare l'intera app.
                </p>
              </div>
              
              <div class="tool-card">
                <h3>Flipper</h3>
                <p>
                  Piattaforma di debug creata da Meta. Offre network inspector, database viewer, 
                  performance monitor e molti altri plugin per analizzare ogni aspetto dell'app.
                </p>
              </div>
            </div>
          </div>`,
    examples: `
          <div class="api-section">
            <h2>Esempi Pratici di Codice</h2>
            <p style="margin-bottom: 32px;">
              Di seguito ci sono due esempi pratici che mostrano i concetti fondamentali di React Native,
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
          </div>`
  };
 
      return sections[this.activeSection] || '';
    }
  },
  template: `
        <section class="main-section">
          <div class="section-header">
            <h1 class="section-title">Fondamenti di React Native</h1>
            <p class="section-description">
              Guida ai principali concetti di React Native: installazione, componenti, stili ed esempi pratici.
            </p>
          </div>
 
          <div class="features-grid">
            <button class="feature-card" :class="{ active: activeSection === 'how' }" @click="showApiSection('how')">
              <span class="feature-card-title"><b>Come Funziona</b></span>
              <p>Il funzionamento di React Native e il flusso di sviluppo.</p>
            </button>
 
            <button class="feature-card" :class="{ active: activeSection === 'component' }" @click="showApiSection('component')">
              <span class="feature-card-title"><b>Componenti</b></span>
              <p>Creazione dell'interfaccia con JSX.</p>
            </button>
 
            <button class="feature-card" :class="{ active: activeSection === 'styles' }" @click="showApiSection('styles')">
              <span class="feature-card-title"><b>Stili</b></span>
              <p>Layout Flexbox e StyleSheet.</p>
            </button>
 
            <button class="feature-card" :class="{ active: activeSection === 'sintax' }" @click="showApiSection('sintax')">
              <span class="feature-card-title"><b>Sintassi di Base</b></span>
              <p>Componenti fondamentali e hook.</p>
            </button>
 
            <button class="feature-card" :class="{ active: activeSection === 'debug' }" @click="showApiSection('debug')">
              <span class="feature-card-title"><b>Debug e strumenti</b></span>
              <p>Strumenti per lo sviluppo e il debugging.</p>
            </button>
 
            <button class="feature-card" :class="{ active: activeSection === 'examples' }" @click="showApiSection('examples')">
              <span class="feature-card-title"><b>Esempi di codice</b></span>
              <p>Esempi pratici di codice.</p>
            </button>
          </div>
 
          <div v-if="activeSection" class="api-content-wrapper">
            <button class="btn-back" @click="showApiSection(null)">← Torna alle sezioni</button>
            <div v-html="getSectionContent()"></div>
          </div>
        </section>`
};
 
const GameDex = {
  data() {
    return {
      giochi: [],
      caricamentoGiochi: false,
      filtroGiochi: "",
      ordinamentoGiochi: "id"
    };
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
    }
  },
  mounted() {
    if (this.giochi.length === 0) {
      this.caricaGiochi();
    }
  },
  template: `
        <section class="main-section">
          <div class="section-header">
            <h1 class="section-title">GameDex</h1>
            <p class="section-description">Una raccolta di videogiochi famosi con informazioni su genere, anno, piattaforma, sviluppatore e valutazione.</p>
          </div>
          <div v-if="caricamentoGiochi" class="mb-2" style="color:#444;" role="status">
            Caricamento giochi...
          </div>
 
          <div v-else class="table-responsive">
            <table class="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Titolo</th>
                  <th scope="col">Genere</th>
                  <th scope="col">Anno</th>
                  <th scope="col">Piattaforma</th>
                  <th scope="col">Sviluppatore</th>
                  <th scope="col">Valutazione</th>
                  <th scope="col">Modalità</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="g in giochi" :key="g.id">
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
        </section>`
};
 
const Esami = {
  data() {
    return {
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
  methods: {
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
  mounted() {
    this.caricaEsami();
  },
  template: `
        <section class="main-section">
          <div class="section-header">
            <h1 class="section-title">Esami</h1>
          </div>
 
          <form class="row g-2 mb-4" @submit.prevent="salvaEsame">
            <div class="col-md-4">
              <label class="form-label" for="esame-corso">Corso</label>
              <input v-model="formEsame.corso" id="esame-corso" name="corso"
                    autocomplete="off" class="form-control" required>
            </div>
            <div class="col-md-2">
              <label class="form-label" for="esame-voto">Voto</label>
              <input v-model="formEsame.voto" id="esame-voto" name="voto" type="number"
                    min="18" max="30" autocomplete="off" class="form-control" required>
            </div>
            <div class="col-md-3">
              <label class="form-label" for="esame-data">Data</label>
              <input v-model="formEsame.data" id="esame-data" name="data" type="date"
                    autocomplete="off" class="form-control" required>
            </div>
            <div class="col-md-3 d-flex align-items-end gap-2">
              <button class="btn btn-primary flex-grow-1">
                {{ formEsame.id ? 'Aggiorna' : 'Aggiungi' }}
              </button>
              <button v-if="formEsame.id" type="button" class="btn btn-outline-secondary" @click="resetFormEsame">Annulla</button>
            </div>
          </form>
 
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Corso</th>
                  <th scope="col">Voto</th>
                  <th scope="col">Data</th>
                  <th scope="col" class="text-end">Azioni</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="esami.length === 0">
                  <td colspan="4" class="text-center" style="color:#444;">
                    Nessun esame inserito.
                  </td>
                </tr>
                <tr v-for="e in esami" :key="e.id">
                  <td>{{ e.corso }}</td>
                  <td>{{ e.voto }}</td>
                  <td>{{ e.data }}</td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-outline-secondary me-2 mb-1 mb-sm-0" @click="modificaEsame(e)">Modifica</button>
                    <button class="btn btn-sm btn-outline-danger" @click="cancellaEsame(e.id)">Elimina</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>`
};
 
const routes = [
  { path: '/', component: Home },
  { path: '/fondamenti', component: Fondamenti },
  { path: '/gamedex', component: GameDex },
  { path: '/esami', component: Esami }
];
 
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
});
 
const app = createApp({});
app.use(router);
app.mount('#app');