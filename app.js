const app = {
  currentPage: 'home',
  games: [],
  exams: [],
  selectedExamId: null,
  activeSection: null,
  nextExamId: 1,
  editingExamId: null,
  activeApiSection: 'how'
};

function saveExams() {
  localStorage.setItem('examsData', JSON.stringify({
    exams: app.exams,
    nextId: app.nextExamId
  }));
}

function initializeSampleExams() {
  app.exams = [
    { id: 1, name: 'Programmazione', grade: 28, date: '2024-01-15' },
    { id: 2, name: "Elementi di Matematica per l'Informatica", grade: 25, date: '2024-02-20' },
    { id: 3, name: 'Architettura degli Elaboratori e Sistemi Operativi', grade: 30, date: '2024-03-10' },
    { id: 4, name: 'Reti di Calcolatori e Programmazione Reti', grade: 27, date: '2024-04-05' }
  ];
  app.nextExamId = 5;
  saveExams();
}

function loadExams() {
  const saved = localStorage.getItem('examsData');
  if (!saved) {
    initializeSampleExams();
    return;
  }
  try {
    const parsed = JSON.parse(saved);
    app.exams = parsed.exams || [];
    app.nextExamId = parsed.nextId || 1;
  } catch (e) {
    console.error('Errore nel caricamento esami:', e);
    initializeSampleExams();
  }
}

const pages = {
    home: () => `
        <section class="container">
            <div class="section-header">
                <h1 class="section-title">Home</h1>
                <p class="section-description">Un unico codice, esperienze native su ogni dispositivo</p>
            </div>

            <div class="menu">
                <div class="main-card" id="card-1">
                    <div class="header-card" onclick="toggleCard(1)">
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
                    <div class="header-card" onclick="toggleCard(2)">
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
                        <div class="center-image">
                            <img src="images/1_YELk-XsmG3isUOc6xOSW0w.png" alt="React Native">
                        </div>
                        <p>
                            Nel corso degli anni, React Native è cresciuto rapidamente grazie al contributo della community open source e a un ecosistema sempre più ricco di strumenti come Expo, React Navigation e Redux.
                        </p>
                        <p>
                            Il framework si è evoluto fino a diventare una soluzione matura, adatta anche ad applicazioni con milioni di utenti.
                        </p>
                        <div class="body-flex">
                            <img class="body-image-second" src="images/1_OhmYGQJZ6KIlPsxvS2vbtA.png" alt="React Native">
                            <div class="body-text">
                                <p>Guardando al futuro, il team di React Native sta lavorando alla New Architecture,</p>
                                <ul class="custom-list">
                                    <li>Fabric, un nuovo sistema di rendering più veloce</li>
                                    <li>TurboModules, per una gestione più efficiente dei moduli nativi</li>
                                </ul>
                                <p>Queste innovazioni porteranno prestazioni ancora più vicine a quelle delle app completamente native, rendendo React Native una scelta solida anche negli anni a venire.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="main-card" id="card-3">
                    <div class="header-card" onclick="toggleCard(3)">
                        <h3>Vantaggi</h3>
                        <p>Perché sceglierlo</p>
                    </div>
                    <div class="body-card">
                        <p>React Native offre numerosi vantaggi che lo rendono uno dei framework più scelti nello sviluppo mobile moderno:</p>
                        <div class="body-flex">
                            <div class="body-text">
                                <ul class="custom-list">
                                    <li><strong>Codice unico per più piattaforme</strong> (Android e iOS)</li>
                                    <li><strong>Prestazioni elevate</strong>, grazie al rendering nativo</li>
                                    <li><strong>Fast Refresh</strong>, per aggiornare l'app in tempo reale durante lo sviluppo</li>
                                    <li><strong>Grande community</strong> e ampia disponibilità di librerie</li>
                                    <li><strong>Facile apprendimento</strong> per sviluppatori web</li>
                                    <li><strong>Ecosistema completo</strong> (Expo, UI libraries, strumenti di testing)</li>
                                    <li><strong>Riduzione dei costi e dei tempi di sviluppo</strong></li>
                                </ul>
                            </div>
                            <img class="body-image-third" src="images/react-two.webp" alt="React Native">
                        </div>
                        <p>Nonostante alcune limitazioni (come la necessità di codice nativo per funzionalità molto specifiche), React Native rappresenta un eccellente compromesso tra produttività, potenza e flessibilità.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    api: () => `
        <section class="container">
            <div class="section-header">
                <h1 class="section-title">API React Native</h1>
                <p class="section-description">
                    Guida ai principali concetti di React Native: installazione, componenti, stili ed esempi pratici.
                </p>
            </div>

            <div class="features-grid">
                <div class="feature-card" onclick="showApiSection('how')">
                    <div class="feature-icon">⚙️</div>
                    <h3>Come Funziona</h3>
                    <p>Il funzionamento di React Native e il flusso di sviluppo.</p>
                </div>

                <div class="feature-card" onclick="showApiSection('component')">
                    <div class="feature-icon">🧩</div>
                    <h3>Componenti</h3>
                    <p>Creazione dell'interfaccia con JSX.</p>
                </div>

                <div class="feature-card" onclick="showApiSection('styles')">
                    <div class="feature-icon">🎨</div>
                    <h3>Stili</h3>
                    <p>Layout Flexbox e StyleSheet.</p>
                </div>

                <div class="feature-card" onclick="showApiSection('sintax')">
                    <div class="feature-icon">📘</div>
                    <h3>Sintassi di Base</h3>
                    <p>Componenti fondamentali e hook.</p>
                </div>

                <div class="feature-card" onclick="showApiSection('debug')">
                    <div class="feature-icon">🛠️</div>
                    <h3>Debug e strumenti</h3>
                    <p>Strumenti per lo sviluppo e il debugging.</p>
                </div>

                <div class="feature-card" onclick="showApiSection('examples')">
                    <div class="feature-icon">💡</div>
                    <h3>Esempi di codice</h3>
                    <p>Esempi pratici di codice.</p>
                </div>
            </div>

            <div id="api-content"></div>
        </section>
    `,

    gamedex: () => {
        const rows = app.games.map(game => `
            <tr>
                <td data-label="ID">${game.id}</td>
                <td data-label="Titolo">${game.titolo}</td>
                <td data-label="Genere">${game.genere}</td>
                <td data-label="Anno">${game.anno}</td>
                <td data-label="Piattaforma">${game.piattaforma}</td>
                <td data-label="Sviluppatore">${game.sviluppatore}</td>
                <td data-label="Valutazione">${game.valutazione}</td>
                <td data-label="Modalità">${game.modalita}</td>
            </tr>
        `).join('');

        return `
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
                        ${rows}
                    </tbody>
                </table>
            </section>
        `;
    },

    insertion: () => `
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
        <div id="examsContainer" class="exams-container"></div>
      </div>

      <div class="exam-form">
        <div class="form-section add-section" data-section="add">
          <button class="section-btn add-btn" type="button">Aggiungi</button>
          <div class="mount"></div>
        </div>

        <div class="form-section modify-section" data-section="modify">
          <button class="section-btn modify-btn" type="button">Modifica</button>
          <div class="mount"></div>
        </div>

        <div class="form-section delete-section" data-section="delete">
          <button class="section-btn delete-btn" type="button">Elimina</button>
          <div class="mount"></div>
        </div>
      </div>
    </div>
  </section>
    `,
};

const apiSections = {
    how: () => `
        <div class="api-section">
            <h2>Come Funziona React Native</h2>
            <div class="steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h3>Installa React Native</h3>
                        <p>Inizia configurando l'ambiente di sviluppo. React Native CLI ti permette di creare un nuovo progetto con tutti i file necessari in pochi secondi.</p>
                        <div class="code-block">
                            <code>npx react-native init MiaApp</code>
                            <code>cd MiaApp</code>
                            <code>npx react-native run-android</code>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h3>Crea Componenti React</h3>
                        <p>Utilizza JSX per descrivere l'interfaccia utente. I componenti React Native come View, Text e Image si traducono automaticamente in componenti nativi della piattaforma.</p>
                        <div class="code-block">
                            <code>const MioComponente = () => (</code>
                            <code>  &lt;View style={styles.container}&gt;</code>
                            <code>    &lt;Text&gt;Testo Nativo&lt;/Text&gt;</code>
                            <code>  &lt;/View&gt;</code>
                            <code>);</code>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h3>Stilizza con Flexbox</h3>
                        <p>React Native utilizza Flexbox per il layout, rendendo semplice creare interfacce responsive. Gli stili sono definiti in JavaScript utilizzando un subset di CSS.</p>
                        <div class="code-block">
                            <code>const styles = StyleSheet.create({</code>
                            <code>  container: {</code>
                            <code>    flex: 1,</code>
                            <code>    justifyContent: 'center',</code>
                            <code>    backgroundColor: '#61dafb'</code>
                            <code>  }</code>
                            <code>});</code>
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

    component: () => `
        <div class="api-section">
            <h2>Componenti di Base</h2>
            <p>
                React Native utilizza componenti nativi come <strong>View</strong>, <strong>Text</strong>, <strong>Button</strong>, <strong>TextInput</strong> e <strong>FlatList</strong>.
                Lo stato dell'app viene gestito tramite hook come <strong>useState</strong>, che permette di rendere l'interfaccia dinamica e interattiva.
            </p>
            
            <h3 class="subsection-title">Esempio: Lista della Spesa</h3>
            <div class="code-block">
                <code>import React, { useState } from 'react';</code>
                <code>import { View, Text, TextInput, FlatList, Button, StyleSheet } from 'react-native';</code>
                <code></code>
                <code>export default function ShoppingList() {</code>
                <code>  const [items, setItems] = useState([]);</code>
                <code>  const [text, setText] = useState('');</code>
                <code>  </code>
                <code>  const addItem = () => {</code>
                <code>    if (text.trim() !== '') {</code>
                <code>      setItems([...items, text]);</code>
                <code>      setText('');</code>
                <code>    }</code>
                <code>  };</code>
                <code>  </code>
                <code>  return (</code>
                <code>    &lt;View style={styles.container}&gt;</code>
                <code>      &lt;TextInput</code>
                <code>        style={styles.input}</code>
                <code>        value={text}</code>
                <code>        onChangeText={setText}</code>
                <code>        placeholder="Aggiungi un prodotto"</code>
                <code>      /&gt;</code>
                <code>      &lt;Button title="Aggiungi" onPress={addItem} /&gt;</code>
                <code>      &lt;FlatList</code>
                <code>        data={items}</code>
                <code>        keyExtractor={(item, index) => index.toString()}</code>
                <code>        renderItem={({ item }) => &lt;Text style={styles.item}&gt;{item}&lt;/Text&gt;}</code>
                <code>      /&gt;</code>
                <code>    &lt;/View&gt;</code>
                <code>  );</code>
                <code>}</code>
            </div>
            
            <div class="info-box">
                <strong>📝 Concetti chiave:</strong>
                <ul>
                    <li><strong>useState</strong>: gestisce lo stato della lista e del campo di testo</li>
                    <li><strong>TextInput</strong>: permette all'utente di inserire nuovi elementi</li>
                    <li><strong>FlatList</strong>: renderizza liste lunghe in modo ottimizzato</li>
                    <li><strong>keyExtractor</strong>: identifica univocamente ogni elemento della lista</li>
                </ul>
            </div>
        </div>
    `,

    styles: () => `
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

    debug: () => `
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

   sintax: () => `
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
          <p>Definisce stili in modo ottimizzato e “validato”.</p>
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

examples: () => `
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

function showApiSection(section) {
    app.activeApiSection = section;
    const contentDiv = document.getElementById('api-content');
    if (contentDiv) {
        contentDiv.innerHTML = apiSections[section]();
    }
}

function loadPage(pageName) {
    app.currentPage = pageName;
    const appDiv = document.getElementById('app');
    
    if (pageName === 'gamedex') {
    loadGames().then(() => {
        appDiv.innerHTML = pages[pageName]();
    });
    }else if (pageName === 'insertion') {
        loadExams();
        appDiv.innerHTML = pages[pageName]();
        initInsertionPage();
    } else if (pageName === 'api') {
  appDiv.innerHTML = pages[pageName]();

  const contentDiv = document.getElementById('api-content');
  if (contentDiv) contentDiv.innerHTML = '';
} else {
        appDiv.innerHTML = pages[pageName]();
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.dataset.page === pageName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

async function loadGames() {
  try {
    const response = await fetch("games.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    app.games = await response.json();
    return app.games;
  } catch (error) {
    console.error("Errore nel caricamento dei giochi:", error);
    app.games = [];
    return [];
  }
}

function toggleCard(cardId) {
    const card = document.getElementById(`card-${cardId}`);
    
    document.querySelectorAll('.main-card').forEach(c => {
        if (c.id !== `card-${cardId}`) {
            c.classList.remove('open');
        }
    });
    
    card.classList.toggle('open');
}

function formatDate(dateString) {
  const d = new Date(dateString);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'","&#039;");
}

function getSelectedExam() {
  return app.exams.find(e => e.id === app.selectedExamId) || null;
}

function renderExamsList() {
  const container = document.getElementById('examsContainer');
  if (!container) return;

  container.innerHTML = '';

  if (app.exams.length === 0) {
    container.innerHTML = `<div class="no-exams"><p>Nessun esame inserito</p></div>`;
    return;
  }

  for (const exam of app.exams) {
    const item = document.createElement('div');
    item.className = 'exam-item' + (app.selectedExamId === exam.id ? ' selected' : '');
    item.innerHTML = `
      <div class="exam-info">
        <h3>${escapeHtml(exam.name)}</h3>
        <div class="exam-details">
          <span class="exam-grade">Voto: ${exam.grade}</span>
          <span class="exam-date">${formatDate(exam.date)}</span>
        </div>
      </div>
    `;

    item.addEventListener('click', () => {
      app.selectedExamId = exam.id;
      renderExamsList();
      if (app.activeSection) mountSection(app.activeSection);
    });

    container.appendChild(item);
  }
}

function unmountAllSections() {
  document.querySelectorAll('.form-section .mount').forEach(m => m.innerHTML = '');
}

function mountSection(section) {
  unmountAllSections();

  const sec = document.querySelector(`.form-section[data-section="${section}"]`);
  if (!sec) return;

  const mount = sec.querySelector('.mount');
  const selected = getSelectedExam();

  if (section === 'add') {
    mount.innerHTML = `
      <div class="form-content">
        <div class="form-row">
          <div class="form-group">
            <label>Corso:</label>
            <input id="newName" class="form-input" type="text" placeholder="Nome del corso" />
          </div>
          <div class="form-group">
            <label>Voto:</label>
            <input id="newGrade" class="form-input" type="number" min="18" max="30" placeholder="18-30" />
          </div>
        </div>
        <div class="form-group">
          <label>Data:</label>
          <input id="newDate" class="form-input" type="date" />
        </div>
        <button id="btnAddExam" class="action-btn add-action-btn" type="button">Aggiungi +</button>
      </div>
    `;

    mount.querySelector('#btnAddExam').addEventListener('click', () => {
      const name = mount.querySelector('#newName').value.trim();
      const gradeRaw = mount.querySelector('#newGrade').value.trim();
      const date = mount.querySelector('#newDate').value;

      if (!name || !gradeRaw || !date) return alert('Compila tutti i campi');

      const grade = parseInt(gradeRaw, 10);
      if (Number.isNaN(grade) || grade < 18 || grade > 30) return alert('Il voto deve essere tra 18 e 30');

      app.exams.push({ id: app.nextExamId++, name, grade, date });
      saveExams();
      renderExamsList();

      mount.querySelector('#newName').value = '';
      mount.querySelector('#newGrade').value = '';
      mount.querySelector('#newDate').value = '';
    });
  }

  if (section === 'modify') {
    const disabled = selected ? '' : 'disabled';

    mount.innerHTML = `
      <div class="form-content">
        <div class="form-row">
          <div class="form-group">
            <label>Corso:</label>
            <input id="editName" class="form-input" type="text" placeholder="Nome del corso" ${disabled}
                   value="${selected ? escapeHtml(selected.name) : ''}" />
          </div>
          <div class="form-group">
            <label>Voto:</label>
            <input id="editGrade" class="form-input" type="number" min="18" max="30" placeholder="18-30" ${disabled}
                   value="${selected ? selected.grade : ''}" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Data:</label>
            <input id="editDate" class="form-input" type="date" ${disabled}
                   value="${selected ? selected.date : ''}" />
          </div>
          <div class="form-group">
            <label>Esame da modificare:</label>
            <input class="form-input" type="text" disabled
                   placeholder="Seleziona un esame dalla lista"
                   value="${selected ? escapeHtml(selected.name) : ''}" />
          </div>
        </div>

        <button id="btnUpdateExam" class="action-btn modify-action-btn" type="button" ${disabled}>Modifica</button>
      </div>
    `;

    const btn = mount.querySelector('#btnUpdateExam');
    if (btn && selected) {
      btn.addEventListener('click', () => {
        const name = mount.querySelector('#editName').value.trim();
        const gradeRaw = mount.querySelector('#editGrade').value.trim();
        const date = mount.querySelector('#editDate').value;

        if (!name || !gradeRaw || !date) return alert('Compila tutti i campi');

        const grade = parseInt(gradeRaw, 10);
        if (Number.isNaN(grade) || grade < 18 || grade > 30) return alert('Il voto deve essere tra 18 e 30');

        const idx = app.exams.findIndex(e => e.id === selected.id);
        if (idx !== -1) app.exams[idx] = { ...app.exams[idx], name, grade, date };

        app.selectedExamId = null;
        saveExams();
        renderExamsList();
        mountSection('modify');
      });
    }
  }

  if (section === 'delete') {
    const disabled = selected ? '' : 'disabled';

    mount.innerHTML = `
      <div class="form-content">
        <div class="form-group">
          <label>Esame da eliminare:</label>
          <input class="form-input" type="text" disabled
                 placeholder="Seleziona un esame dalla lista"
                 value="${selected ? escapeHtml(selected.name) : ''}" />
        </div>

        <button id="btnDeleteExam" class="action-btn delete-action-btn" type="button" ${disabled}>Elimina</button>
      </div>
    `;

    const btn = mount.querySelector('#btnDeleteExam');
    if (btn && selected) {
      btn.addEventListener('click', () => {
        if (!confirm('Sei sicuro di voler eliminare questo esame?')) return;

        app.exams = app.exams.filter(e => e.id !== selected.id);
        app.selectedExamId = null;
        saveExams();
        renderExamsList();
        mountSection('delete');
      });
    }
  }
}

function toggleInsertionSection(section) {
  if (app.activeSection === section) {
    app.activeSection = null;
    unmountAllSections();
  } else {
    app.activeSection = section;
    mountSection(section);
  }
}

function initInsertionPage() {
  document.querySelectorAll('.form-section').forEach(sec => {
    const btn = sec.querySelector('.section-btn');
    btn.addEventListener('click', () => toggleInsertionSection(sec.dataset.section));
  });

  renderExamsList();
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = e.target.dataset.page;
            loadPage(page);
        });
    });

    loadPage('home');
});
