function formatDate(dateString) {
  const d = new Date(dateString);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function isDateInFuture(dateString) {
  if (!dateString) return false;
  
  const d = new Date(dateString);
  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0);
  d.setHours(0, 0, 0, 0);
  
  return d > oggi;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'","&#039;");
}

// COMPONENTE HOME
const HomePage = {
  methods: {
    toggleCard(cardId) {
      const card = document.getElementById(`card-${cardId}`);
      document.querySelectorAll('.main-card').forEach(c => {
        if (c.id !== `card-${cardId}`) {
          c.classList.remove('open');
        }
      });
      card.classList.toggle('open');
    }
  },
  template: `
    <section class="container">
      <div class="section-header">
        <h1 class="section-title">Home</h1>
        <p class="section-description">Un unico codice, esperienze native su ogni dispositivo</p>
      </div>

      <div class="menu">
        <div class="main-card" id="card-1">
          <div class="header-card" @click="toggleCard(1)">
            <h3>Che cos'è</h3>
            <p>Introduzione a React Native</p>
          </div>
          <div class="body-card">
            <div class="body-flex">
              <div class="body-text">
                <p>
                  React Native è un framework open source rilasciato da Facebook nel 2015 che consente di sviluppare applicazioni mobili <strong>native</strong> utilizzando <strong>JavaScript</strong> e <strong>React</strong>.
                </p>
                <p>
                  Il suo obiettivo principale è permettere la creazione di app multipiattaforma (Android e iOS) partendo da un'unica base di codice, riducendo tempi e costi di sviluppo.
                </p>
              </div>
              <img class="body-image" src="images/react-1.svg" alt="React Native">
            </div>
            <p class="full-text">
              A differenza delle soluzioni ibride basate su WebView, React Native utilizza componenti nativi reali, garantendo prestazioni elevate, fluidità dell'interfaccia e un'esperienza utente simile a quella delle app sviluppate interamente in linguaggio nativo.
            </p>
            <div class="body-flex">
              <img class="body-image" src="images/images.png" alt="React Native">
              <div class="body-text">
                <p>
                  Grazie alla sua struttura a componenti, all'uso degli hook (come useState) e a un sistema di styling simile al CSS, React Native risulta accessibile soprattutto per chi proviene dal mondo dello sviluppo web.
                </p>
                <p>
                  Oggi è utilizzato da numerose aziende di livello mondiale come Facebook, Instagram, Uber Eats, Discord e Tesla.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="main-card" id="card-2">
          <div class="header-card" @click="toggleCard(2)">
            <h3>Storia e futuro</h3>
            <p>Evoluzione del framework</p>
          </div>
          <div class="body-card">
            <p>
              React Native nasce come evoluzione naturale di React.js, la libreria JavaScript introdotta nel 2013 che ha rivoluzionato lo sviluppo web grazie al Virtual DOM e alla programmazione dichiarativa.
            </p>
            <p>
              Facebook intuì che gli stessi principi potevano essere applicati anche allo sviluppo mobile, superando i limiti delle soluzioni ibride tradizionali come Ionic o Cordova.
            </p>
            <p>
              Il primo rilascio pubblico di React Native avvenne nel marzo 2015, quando il framework fu rilasciato come progetto open source.
            </p>
            <div class="body-flex">
              <div class="body-text">
                <p>
                  Nel 2016 Microsoft portò React Native anche su Windows e sul desktop, dimostrando la flessibilità del sistema.
                </p>
                <p>
                  Nel 2018 Facebook annunciò la "re-architettura" di React Native, un progetto pluriennale volto a modernizzare il motore interno e migliorare l'interoperabilità con il codice nativo.
                </p>
              </div>
              <img class="body-image" src="images/react-two.webp" alt="React Native">
            </div>
            <p>
              Tra le innovazioni più recenti figurano il "New Architecture" (basato su JSI e Fabric), che permette comunicazione sincrona tra JavaScript e nativo, e il "Turbo Modules", per migliorare le prestazioni dei moduli nativi.
            </p>
            <p>
              Il futuro di React Native si concentra su prestazioni ancora più elevate, supporto migliorato per il web (React Native Web), strumenti di sviluppo più avanzati e un ecosistema di librerie sempre più maturo.
            </p>
          </div>
        </div>

        <div class="main-card" id="card-3">
          <div class="header-card" @click="toggleCard(3)">
            <h3>Vantaggi e Svantaggi</h3>
            <p>Analisi comparativa</p>
          </div>
          <div class="body-card">
            <div class="body-flex">
              <div class="body-text">
                <h4>Vantaggi</h4>
                <ul class="pros-cons">
                  <li><strong>Codice condiviso:</strong> Scrivi una volta, esegui su Android e iOS</li>
                  <li><strong>Performance native:</strong> Utilizza componenti nativi reali</li>
                  <li><strong>Hot Reload:</strong> Vedi le modifiche istantaneamente durante lo sviluppo</li>
                  <li><strong>Grande comunità:</strong> Migliaia di librerie e risorse disponibili</li>
                  <li><strong>Competenze web:</strong> Usa JavaScript e React che già conosci</li>
                  <li><strong>Aggiornamenti rapidi:</strong> Possibilità di over-the-air updates</li>
                </ul>
              </div>
              <img class="body-image" src="images/1_YELk-XsmG3isUOc6xOSW0w.png" alt="Vantaggi">
            </div>
            <div class="body-flex">
              <img class="body-image" src="images/1_OhmYGQJZ6KIlPsxvS2vbtA.png" alt="Svantaggi">
              <div class="body-text">
                <h4>Svantaggi</h4>
                <ul class="pros-cons">
                  <li><strong>Dimensione app:</strong> Le app tendono ad essere più grandi rispetto alle native pure</li>
                  <li><strong>Debugging complesso:</strong> Errori tra JavaScript e nativo possono essere difficili da tracciare</li>
                  <li><strong>Aggiornamenti breaking:</strong> Le nuove versioni possono richiedere migrazioni significative</li>
                  <li><strong>API native limitate:</strong> Non tutte le API native sono disponibili out-of-the-box</li>
                  <li><strong>Dipendenza da terze parti:</strong> Per funzionalità avanzate serve affidarsi a moduli esterni</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

// COMPONENTE API
const ApiPage = {
  data() {
    return {
      activeSection: null
    };
  },
  methods: {
    showApiSection(section) {
      // Toggle: se la sezione è già aperta, la chiude
      if (this.activeSection === section) {
        this.activeSection = null;
      } else {
        this.activeSection = section;
      }
    },
    getSectionContent() {
      if (!this.activeSection) return '';
      
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
    }
  },
  template: `
    <section class="container">
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
  `
};

// COMPONENTE GAMEDEX
const GamedexPage = {
  data() {
    return {
      games: []
    };
  },
  methods: {
    async loadGames() {
      try {
        const response = await axios.get('games.json', { cache: 'no-store' });
        this.games = response.data;
      } catch (error) {
        console.error('Errore nel caricamento dei giochi:', error);
        this.games = [];
      }
    }
  },
  mounted() {
    this.loadGames();
  },
  template: `
    <section class="container">
      <h1 class="section-title">GameDex</h1>
      <table>
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
          <tr v-if="games.length === 0">
            <td colspan="8">Caricamento in corso...</td>
          </tr>
          <tr v-else v-for="game in games" :key="game.id">
            <td data-label="ID">{{ game.id }}</td>
            <td data-label="Titolo">{{ game.titolo }}</td>
            <td data-label="Genere">{{ game.genere }}</td>
            <td data-label="Anno">{{ game.anno }}</td>
            <td data-label="Piattaforma">{{ game.piattaforma }}</td>
            <td data-label="Sviluppatore">{{ game.sviluppatore }}</td>
            <td data-label="Valutazione">{{ game.valutazione }}</td>
            <td data-label="Modalità">{{ game.modalita }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `
};

// COMPONENTE INSERTION
const InsertionPage = {
  data() {
    return {
      exams: [],
      nextExamId: 1,
      selectedExamId: null,
      activeSection: null,
      newExam: { name: '', grade: '', date: '' },
      editExam: { name: '', grade: '', date: '' }
    };
  },
  methods: {
    formatDate(dateString) {
      return formatDate(dateString);
    },
    saveExams() {
      localStorage.setItem('examsData', JSON.stringify({
        exams: this.exams,
        nextId: this.nextExamId
      }));
    },
    loadExams() {
      const saved = localStorage.getItem('examsData');
      if (!saved) {
        this.initializeSampleExams();
        return;
      }
      try {
        const parsed = JSON.parse(saved);
        this.exams = parsed.exams || [];
        this.nextExamId = parsed.nextId || 1;
      } catch (e) {
        console.error('Errore nel caricamento esami:', e);
        this.initializeSampleExams();
      }
    },
    initializeSampleExams() {
      this.exams = [
        { id: 1, name: 'Programmazione', grade: 28, date: '2024-01-15' },
        { id: 2, name: "Elementi di Matematica per l'Informatica", grade: 25, date: '2024-02-20' },
        { id: 3, name: 'Architettura degli Elaboratori e Sistemi Operativi', grade: 30, date: '2024-01-10' },
        { id: 4, name: 'Reti di Calcolatori e Programmazione Reti', grade: 27, date: '2024-02-05' }
      ];
      this.nextExamId = 5;
      this.saveExams();
    },
    selectExam(examId) {
      this.selectedExamId = examId;
      if (this.activeSection === 'modify') {
        const exam = this.exams.find(e => e.id === examId);
        if (exam) {
          this.editExam = { ...exam };
        }
      }
    },
    toggleSection(section) {
      if (this.activeSection === section) {
        this.activeSection = null;
      } else {
        this.activeSection = section;
        if (section === 'modify' && this.selectedExamId) {
          const exam = this.exams.find(e => e.id === this.selectedExamId);
          if (exam) {
            this.editExam = { ...exam };
          }
        }
      }
    },
    addExam() {
      if (!this.newExam.name || !this.newExam.grade || !this.newExam.date) {
        alert('Compila tutti i campi!');
        return;
      }

      const grade = parseInt(this.newExam.grade);
      if (grade < 18 || grade > 30) {
        alert('Il voto deve essere tra 18 e 30');
        return;
      }

      if (isDateInFuture(this.newExam.date)) {
        alert('Non puoi inserire una data futura');
        return;
      }

      this.exams.push({
        id: this.nextExamId++,
        name: this.newExam.name,
        grade: grade,
        date: this.newExam.date
      });

      this.saveExams();
      this.newExam = { name: '', grade: '', date: '' };
    },
    updateExam() {
      if (!this.selectedExamId) return;

      if (!this.editExam.name || !this.editExam.grade || !this.editExam.date) {
        alert('Compila tutti i campi!');
        return;
      }

      const grade = parseInt(this.editExam.grade);
      if (grade < 18 || grade > 30) {
        alert('Il voto deve essere tra 18 e 30');
        return;
      }

      if (isDateInFuture(this.editExam.date)) {
        alert('Non puoi inserire una data futura');
        return;
      }

      const idx = this.exams.findIndex(e => e.id === this.selectedExamId);
      if (idx !== -1) {
        this.exams[idx] = {
          id: this.selectedExamId,
          name: this.editExam.name,
          grade: grade,
          date: this.editExam.date
        };
      }

      this.selectedExamId = null;
      this.saveExams();
      this.editExam = { name: '', grade: '', date: '' };
    },
    deleteExam() {
      if (!confirm('Sei sicuro di voler eliminare questo esame?')) return;

      this.exams = this.exams.filter(e => e.id !== this.selectedExamId);
      this.selectedExamId = null;
      this.saveExams();
    }
  },
  computed: {
    selectedExam() {
      return this.exams.find(e => e.id === this.selectedExamId) || null;
    }
  },
  mounted() {
    this.loadExams();
  },
  template: `
    <section class="container">
      <div class="section-header">
        <h1 class="section-title">Inserimento</h1>
        <p class="section-description">
          Gestisci i tuoi esami: visualizza, aggiungi, modifica ed elimina
        </p>
      </div>

      <div class="exam-management">
        <div class="exams-list">
          <h2>Dati degli esami:</h2>
          <div class="exams-container">
            <div v-if="exams.length === 0" class="no-exams">
              <p>Nessun esame inserito</p>
            </div>
            <div v-else 
                 v-for="exam in exams" 
                 :key="exam.id" 
                 :class="['exam-item', { selected: selectedExamId === exam.id }]"
                 @click="selectExam(exam.id)">
              <div class="exam-info">
                <h3>{{ exam.name }}</h3>
                <div class="exam-details">
                  <span class="exam-grade">Voto: {{ exam.grade }}</span>
                  <span class="exam-date">{{ formatDate(exam.date) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="exam-form">
          <!-- Sezione Aggiungi -->
          <div class="form-section add-section">
            <button class="section-btn add-btn" type="button" @click="toggleSection('add')">Aggiungi</button>
            <div class="mount" v-if="activeSection === 'add'">
              <div class="form-content">
                <div class="form-row">
                  <div class="form-group">
                    <label>Corso:</label>
                    <input v-model="newExam.name" class="form-input" type="text" placeholder="Nome del corso" />
                  </div>
                  <div class="form-group">
                    <label>Voto:</label>
                    <input v-model="newExam.grade" class="form-input" type="number" min="18" max="30" placeholder="18-30" />
                  </div>
                </div>
                <div class="form-group">
                  <label>Data:</label>
                  <input v-model="newExam.date" class="form-input" type="date" />
                </div>
                <button @click="addExam" class="action-btn add-action-btn" type="button">Aggiungi +</button>
              </div>
            </div>
          </div>

          <!-- Sezione Modifica -->
          <div class="form-section modify-section">
            <button class="section-btn modify-btn" type="button" @click="toggleSection('modify')">Modifica</button>
            <div class="mount" v-if="activeSection === 'modify'">
              <div class="form-content">
                <div class="form-row">
                  <div class="form-group">
                    <label>Corso:</label>
                    <input v-model="editExam.name" 
                           class="form-input" 
                           type="text" 
                           placeholder="Nome del corso" 
                           :disabled="!selectedExam" />
                  </div>
                  <div class="form-group">
                    <label>Voto:</label>
                    <input v-model="editExam.grade" 
                           class="form-input" 
                           type="number" 
                           min="18" 
                           max="30" 
                           placeholder="18-30" 
                           :disabled="!selectedExam" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Data:</label>
                    <input v-model="editExam.date" 
                           class="form-input" 
                           type="date" 
                           :disabled="!selectedExam" />
                  </div>
                  <div class="form-group">
                    <label>Esame da modificare:</label>
                    <input class="form-input" 
                           type="text" 
                           disabled
                           placeholder="Seleziona un esame dalla lista"
                           :value="selectedExam ? selectedExam.name : ''" />
                  </div>
                </div>

                <button @click="updateExam" 
                        class="action-btn modify-action-btn" 
                        type="button" 
                        :disabled="!selectedExam">Modifica</button>
              </div>
            </div>
          </div>

          <!-- Sezione Elimina -->
          <div class="form-section delete-section">
            <button class="section-btn delete-btn" type="button" @click="toggleSection('delete')">Elimina</button>
            <div class="mount" v-if="activeSection === 'delete'">
              <div class="form-content">
                <div class="form-group">
                  <label>Esame da eliminare:</label>
                  <input class="form-input" 
                         type="text" 
                         disabled
                         placeholder="Seleziona un esame dalla lista"
                         :value="selectedExam ? selectedExam.name : ''" />
                </div>

                <button @click="deleteExam" 
                        class="action-btn delete-action-btn" 
                        type="button" 
                        :disabled="!selectedExam">Elimina</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

// DEFINIZIONE ROUTES
const routes = [
  { path: '/home', component: HomePage },
  { path: '/api', component: ApiPage },
  { path: '/gamedex', component: GamedexPage },
  { path: '/insertion', component: InsertionPage },
  { path: '/', redirect: '/home' }
];

// CREAZIONE ROUTER
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

// CREAZIONE E MOUNT DELL'APP VUE
const app = Vue.createApp({});
app.use(router);
app.mount('#app');