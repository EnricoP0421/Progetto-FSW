// Vue 3 Application con template in JavaScript
const { createApp, ref, computed, watch, onMounted } = Vue;

// ===== MAIN APP TEMPLATE =====
const AppTemplate = `
<div>
    <!-- Navbar -->
    <nav class="top-nav">
        <div class="nav-inner">
            <div class="brand">
                <img src="images/React native icona.png" alt="Logo" class="logo" />
                <span class="brand-name">React Native</span>
            </div>
            <div class="nav-links">
                <button 
                    v-for="page in pages" 
                    :key="page.id"
                    @click="currentPage = page.id"
                    :class="['nav-btn', { active: currentPage === page.id }]"
                >
                    {{ page.label }}
                </button>
            </div>
        </div>
    </nav>

    <!-- ==================== HOME PAGE ==================== -->
    <section v-if="currentPage === 'home'" class="container">
        <div class="section-header">
            <h1 class="section-title">Home</h1>
            <p class="section-description">Un unico codice, esperienze native su ogni dispositivo</p>
        </div>

        <div class="menu">
            <!-- Card 1 -->
            <div class="main-card" :class="{ open: activeCards.includes(1) }">
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

            <!-- Card 2 -->
            <div class="main-card" :class="{ open: activeCards.includes(2) }">
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

            <!-- Card 3 -->
            <div class="main-card" :class="{ open: activeCards.includes(3) }">
                <div class="header-card" @click="toggleCard(3)">
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

    <!-- ==================== API PAGE ==================== -->
    <section v-if="currentPage === 'api'" class="container">
        <div class="section-header">
            <h1 class="section-title">API React Native</h1>
            <p class="section-description">
                Guida ai principali concetti di React Native: installazione, componenti, stili ed esempi pratici.
            </p>
        </div>

        <div class="features-grid">
            <div class="feature-card" @click="activeApiSection = 'how'">
                <div class="feature-icon">⚙️</div>
                <h3>Come Funziona</h3>
                <p>Il funzionamento di React Native e il flusso di sviluppo.</p>
            </div>
            <div class="feature-card" @click="activeApiSection = 'component'">
                <div class="feature-icon">🧩</div>
                <h3>Componenti</h3>
                <p>Creazione dell'interfaccia con JSX.</p>
            </div>
            <div class="feature-card" @click="activeApiSection = 'styles'">
                <div class="feature-icon">🎨</div>
                <h3>Stili</h3>
                <p>Layout Flexbox e StyleSheet.</p>
            </div>
            <div class="feature-card" @click="activeApiSection = 'sintax'">
                <div class="feature-icon">📘</div>
                <h3>Sintassi di Base</h3>
                <p>Componenti fondamentali e hook.</p>
            </div>
            <div class="feature-card" @click="activeApiSection = 'debug'">
                <div class="feature-icon">🛠️</div>
                <h3>Debug e strumenti</h3>
                <p>Strumenti per lo sviluppo e il debugging.</p>
            </div>
            <div class="feature-card" @click="activeApiSection = 'examples'">
                <div class="feature-icon">💡</div>
                <h3>Esempi di codice</h3>
                <p>Esempi pratici di codice.</p>
            </div>
        </div>

        <div id="api-content" v-html="apiSectionContent"></div>
    </section>

    <!-- ==================== GAMEDEX PAGE ==================== -->
    <section v-if="currentPage === 'gamedex'" class="container">
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
                <tr v-for="game in games" :key="game.id">
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

    <!-- ==================== INSERTION PAGE ==================== -->
    <section v-if="currentPage === 'insertion'" class="container">
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
                    <div 
                        v-for="exam in exams" 
                        :key="exam.id"
                        :class="['exam-item', { selected: selectedExamId === exam.id }]"
                        @click="selectExam(exam.id)"
                    >
                        <div class="exam-info">
                            <h3>{{ exam.name }}</h3>
                            <div class="exam-details">
                                <span class="exam-grade">Voto: {{ exam.grade }}</span>
                                <span>{{ exam.date }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="exams.length === 0" class="no-exams">
                        Nessun esame presente
                    </div>
                </div>
            </div>

            <div class="exam-form">
                <!-- Aggiungi -->
                <div class="form-section add-section">
                    <button class="section-btn add-btn" type="button" @click="toggleSection('add')">Aggiungi</button>
                    <div v-if="activeSection === 'add'" class="form-content">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Corso:</label>
                                <input v-model="newExam.name" class="form-input" type="text" placeholder="Nome del corso" />
                            </div>
                            <div class="form-group">
                                <label>Voto:</label>
                                <input v-model.number="newExam.grade" class="form-input" type="number" min="18" max="30" placeholder="18-30" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Data:</label>
                            <input v-model="newExam.date" class="form-input" type="date" />
                        </div>
                        <button @click="addExam" class="action-btn add-action-btn" type="button">Aggiungi +</button>
                    </div>
                </div>

                <!-- Modifica -->
                <div class="form-section modify-section">
                    <button class="section-btn modify-btn" type="button" @click="toggleSection('modify')">Modifica</button>
                    <div v-if="activeSection === 'modify'" class="form-content">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Corso:</label>
                                <input v-model="editExam.name" class="form-input" type="text" placeholder="Nome del corso" :disabled="!selectedExam" />
                            </div>
                            <div class="form-group">
                                <label>Voto:</label>
                                <input v-model.number="editExam.grade" class="form-input" type="number" min="18" max="30" placeholder="18-30" :disabled="!selectedExam" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Data:</label>
                                <input v-model="editExam.date" class="form-input" type="date" :disabled="!selectedExam" />
                            </div>
                            <div class="form-group">
                                <label>Esame da modificare:</label>
                                <input class="form-input" type="text" disabled placeholder="Seleziona un esame dalla lista" :value="selectedExam ? selectedExam.name : ''" />
                            </div>
                        </div>
                        <button @click="updateExam" class="action-btn modify-action-btn" type="button" :disabled="!selectedExam">Modifica</button>
                    </div>
                </div>

                <!-- Elimina -->
                <div class="form-section delete-section">
                    <button class="section-btn delete-btn" type="button" @click="toggleSection('delete')">Elimina</button>
                    <div v-if="activeSection === 'delete'" class="form-content">
                        <div class="form-group">
                            <label>Esame da eliminare:</label>
                            <input class="form-input" type="text" disabled placeholder="Seleziona un esame dalla lista" :value="selectedExam ? selectedExam.name : ''" />
                        </div>
                        <button @click="deleteExam" class="action-btn delete-action-btn" type="button" :disabled="!selectedExam">Elimina</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
`;

// ===== API SECTIONS CONTENT =====
const apiSections = {
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

// ===== VUE APPLICATION =====
createApp({
    template: AppTemplate,

    setup() {
        // ===== NAVIGATION =====
        const pages = ref([
            { id: 'home', label: 'Home' },
            { id: 'api', label: 'API' },
            { id: 'gamedex', label: 'Gamedex' },
            { id: 'insertion', label: 'Inserimento' }
        ]);
        const currentPage = ref('home');

        // ===== HOME PAGE - Cards =====
        const activeCards = ref([]);
        
        const toggleCard = (cardId) => {
            const index = activeCards.value.indexOf(cardId);
            if (index > -1) {
                activeCards.value.splice(index, 1);
            } else {
                activeCards.value.push(cardId);
            }
        };

        // ===== API PAGE =====
        const activeApiSection = ref('how');

        const apiSectionContent = computed(() => {
            return apiSections[activeApiSection.value] || '';
        });

        // ===== GAMEDEX PAGE =====
        const games = ref([]);

        const loadGames = async () => {
            try {
                const response = await fetch('games.json');
                games.value = await response.json();
            } catch (error) {
                console.error('Errore nel caricamento dei giochi:', error);
                games.value = [];
            }
        };

        // ===== INSERTION PAGE - Exams =====
        const exams = ref([]);
        const selectedExamId = ref(null);
        const activeSection = ref(null);
        const nextExamId = ref(1);

        const newExam = ref({ name: '', grade: null, date: '' });
        const editExam = ref({ name: '', grade: null, date: '' });

        const selectedExam = computed(() => {
            return exams.value.find(e => e.id === selectedExamId.value) || null;
        });

        watch(selectedExam, (newVal) => {
            if (newVal) {
                editExam.value = { ...newVal };
            } else {
                editExam.value = { name: '', grade: null, date: '' };
            }
        });

        const saveExams = () => {
            localStorage.setItem('examsData', JSON.stringify({
                exams: exams.value,
                nextId: nextExamId.value
            }));
        };

        const loadExams = () => {
            const saved = localStorage.getItem('examsData');
            if (!saved) {
                initializeSampleExams();
                return;
            }
            try {
                const parsed = JSON.parse(saved);
                exams.value = parsed.exams || [];
                nextExamId.value = parsed.nextId || 1;
            } catch (e) {
                console.error('Errore nel caricamento esami:', e);
                initializeSampleExams();
            }
        };

        const initializeSampleExams = () => {
            exams.value = [
                { id: 1, name: 'Programmazione', grade: 28, date: '15/01/2025' },
                { id: 2, name: "Elementi di Matematica per l'Informatica", grade: 25, date: '20/02/2025' },
                { id: 3, name: 'Architettura degli Elaboratori e Sistemi Operativi', grade: 30, date: '10/01/2025' },
                { id: 4, name: 'Reti di Calcolatori e Programmazione Reti', grade: 27, date: '05/02/2025' }
            ];
            nextExamId.value = 5;
            saveExams();
        };

        const toggleSection = (section) => {
            activeSection.value = activeSection.value === section ? null : section;
        };

        const selectExam = (id) => {
            selectedExamId.value = selectedExamId.value === id ? null : id;
        };

        const addExam = () => {
            const { name, grade, date } = newExam.value;
            if (!name || !grade || !date) {
                alert('Compila tutti i campi');
                return;
            }
            if (grade < 18 || grade > 30) {
                alert('Il voto deve essere tra 18 e 30');
                return;
            }
            exams.value.push({ id: nextExamId.value++, name, grade, date });
            saveExams();
            newExam.value = { name: '', grade: null, date: '' };
        };

        const updateExam = () => {
            const { name, grade, date } = editExam.value;
            if (!name || !grade || !date) {
                alert('Compila tutti i campi');
                return;
            }
            if (grade < 18 || grade > 30) {
                alert('Il voto deve essere tra 18 e 30');
                return;
            }
            const index = exams.value.findIndex(e => e.id === selectedExamId.value);
            if (index !== -1) {
                exams.value[index] = { ...exams.value[index], name, grade, date };
            }
            selectedExamId.value = null;
            saveExams();
        };

        const deleteExam = () => {
            if (!confirm('Sei sicuro di voler eliminare questo esame?')) return;
            exams.value = exams.value.filter(e => e.id !== selectedExamId.value);
            selectedExamId.value = null;
            saveExams();
        };

        // ===== LIFECYCLE =====
        onMounted(() => {
            loadGames();
            loadExams();
        });

        // ===== RETURN ALL =====
        return {
            // Navigation
            pages,
            currentPage,
            // Home
            activeCards,
            toggleCard,
            // API
            activeApiSection,
            apiSectionContent,
            // Gamedex
            games,
            // Insertion
            exams,
            selectedExamId,
            activeSection,
            newExam,
            editExam,
            selectedExam,
            toggleSection,
            selectExam,
            addExam,
            updateExam,
            deleteExam
        };
    }
}).mount('#app');
