// Router e gestione dello stato
const app = {
    currentPage: 'home',
    games: [],
    exams: [],
    editingExamId: null,
    activeApiSection: 'how'
};

// Carica esami dal localStorage
function loadExams() {
    const stored = localStorage.getItem('exams');
    app.exams = stored ? JSON.parse(stored) : [];
}

// Salva esami nel localStorage
function saveExams() {
    localStorage.setItem('exams', JSON.stringify(app.exams));
}

// Funzioni per caricare le pagine
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

    insertion: () => {
        const examsList = app.exams.map(exam => `
            <tr>
                <td data-label="Materia">${exam.materia}</td>
                <td data-label="Data">${exam.data}</td>
                <td data-label="Voto">${exam.voto}</td>
                <td data-label="CFU">${exam.cfu}</td>
                <td data-label="Azioni" class="actions-cell">
                    <button class="btn-edit" onclick="editExam(${exam.id})">✏️ Modifica</button>
                    <button class="btn-delete" onclick="deleteExam(${exam.id})">🗑️ Elimina</button>
                </td>
            </tr>
        `).join('');

        const editingExam = app.exams.find(e => e.id === app.editingExamId);

        return `
            <section class="container">
                <h1 class="section-title">Gestione Esami</h1>
                
                <div class="form-container">
                    <h2 style="margin-bottom: 20px;">${app.editingExamId ? '✏️ Modifica Esame' : '➕ Nuovo Esame'}</h2>
                    <form id="exam-form" onsubmit="saveExam(event)">
                        <div class="form-group">
                            <label>Materia</label>
                            <input type="text" id="materia" value="${editingExam ? editingExam.materia : ''}" required>
                        </div>
                        <div class="form-group">
                            <label>Data Esame</label>
                            <input type="date" id="data" value="${editingExam ? editingExam.data : ''}" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Voto (18-30)</label>
                                <input type="number" id="voto" min="18" max="30" value="${editingExam ? editingExam.voto : ''}" required>
                            </div>
                            <div class="form-group">
                                <label>CFU</label>
                                <input type="number" id="cfu" min="1" max="12" value="${editingExam ? editingExam.cfu : ''}" required>
                            </div>
                        </div>
                        <div class="form-buttons">
                            <button type="submit" class="btn-submit">
                                ${app.editingExamId ? '💾 Salva Modifiche' : '➕ Aggiungi Esame'}
                            </button>
                            ${app.editingExamId ? '<button type="button" class="btn-cancel" onclick="cancelEdit()">❌ Annulla</button>' : ''}
                        </div>
                    </form>
                </div>

                ${app.exams.length > 0 ? `
                <div class="exams-container">
                    <h2 style="margin-bottom: 20px; color: #7dd3fc;">📚 I Miei Esami (${app.exams.length})</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Materia</th>
                                <th>Data</th>
                                <th>Voto</th>
                                <th>CFU</th>
                                <th>Azioni</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${examsList}
                        </tbody>
                    </table>
                    
                    <div class="stats-container">
                        <div class="stat-card">
                            <div class="stat-value">${calculateAverage()}</div>
                            <div class="stat-label">Media Voti</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${calculateTotalCFU()}</div>
                            <div class="stat-label">CFU Totali</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${app.exams.length}</div>
                            <div class="stat-label">Esami Sostenuti</div>
                        </div>
                    </div>
                </div>
                ` : '<div class="empty-state">📝 Nessun esame registrato. Inizia aggiungendone uno!</div>'}
            </section>
        `;
    }
};

// Contenuti delle sezioni API
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

// Funzione per mostrare sezione API
function showApiSection(section) {
    app.activeApiSection = section;
    const contentDiv = document.getElementById('api-content');
    if (contentDiv) {
        contentDiv.innerHTML = apiSections[section]();
    }
}

// Funzione per caricare una pagina
function loadPage(pageName) {
    app.currentPage = pageName;
    const appDiv = document.getElementById('app');
    
    // Se è la pagina gamedex e non abbiamo ancora caricato i giochi
    if (pageName === 'gamedex') {
    // carica (o ricarica) i giochi e poi renderizza la pagina
    loadGames().then(() => {
        appDiv.innerHTML = pages[pageName]();
    });
    }else if (pageName === 'insertion') {
        loadExams();
        appDiv.innerHTML = pages[pageName]();
    } else if (pageName === 'api') {
        appDiv.innerHTML = pages[pageName]();
        showApiSection(app.activeApiSection);
    } else {
        appDiv.innerHTML = pages[pageName]();
    }

    // Aggiorna lo stato attivo dei bottoni
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
    // IMPORTANTISSIMO: niente "/" davanti
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

// Toggle per le card espandibili
function toggleCard(cardId) {
    const card = document.getElementById(`card-${cardId}`);
    
    // Chiudi tutte le altre card
    document.querySelectorAll('.main-card').forEach(c => {
        if (c.id !== `card-${cardId}`) {
            c.classList.remove('open');
        }
    });
    
    // Toggle della card cliccata
    card.classList.toggle('open');
}

// CRUD Esami
function saveExam(event) {
    event.preventDefault();

    const materia = document.getElementById('materia').value;
    const data = document.getElementById('data').value;
    const voto = parseInt(document.getElementById('voto').value);
    const cfu = parseInt(document.getElementById('cfu').value);

    if (app.editingExamId) {
        // Modifica esame esistente
        const index = app.exams.findIndex(e => e.id === app.editingExamId);
        app.exams[index] = {
            id: app.editingExamId,
            materia,
            data,
            voto,
            cfu
        };
        app.editingExamId = null;
    } else {
        // Aggiungi nuovo esame
        const newExam = {
            id: Date.now(),
            materia,
            data,
            voto,
            cfu
        };
        app.exams.push(newExam);
    }

    saveExams();
    loadPage('insertion');
}

function editExam(id) {
    app.editingExamId = id;
    loadPage('insertion');
}

function deleteExam(id) {
    if (confirm('Sei sicuro di voler eliminare questo esame?')) {
        app.exams = app.exams.filter(e => e.id !== id);
        saveExams();
        loadPage('insertion');
    }
}

function cancelEdit() {
    app.editingExamId = null;
    loadPage('insertion');
}

function calculateAverage() {
    if (app.exams.length === 0) return '0.0';
    const sum = app.exams.reduce((acc, exam) => acc + exam.voto, 0);
    return (sum / app.exams.length).toFixed(1);
}

function calculateTotalCFU() {
    return app.exams.reduce((acc, exam) => acc + exam.cfu, 0);
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    // Aggiungi event listener ai bottoni di navigazione
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = e.target.dataset.page;
            loadPage(page);
        });
    });

    // Carica la pagina home
    loadPage('home');
});
