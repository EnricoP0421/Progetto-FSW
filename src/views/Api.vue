<template>
  <section class="container">
    
    <!-- Header -->
    <div class="section-header">
      <h1 class="section-title">API React Native</h1>
      <p class="section-description">
        Guida ai principali concetti di React Native: installazione, componenti, stili ed esempi pratici.
      </p>
    </div>

    <!-- Cards -->
    <div class="features-grid">
      <div class="feature-card" @click="showSection('how'); console.log('CLICK HOW')">
        <div class="feature-icon">⚙️</div>
        <h3>Come Funziona</h3>
        <p>Il funzionamento di React Native e il flusso di sviluppo.</p>
      </div>

      <div class="feature-card" @click="showSection('component')">
        <div class="feature-icon">🧩</div>
        <h3>Componenti</h3>
        <p>Creazione dell'interfaccia con JSX.</p>
      </div>

      <div class="feature-card" @click="showSection('styles')">
        <div class="feature-icon">🎨</div>
        <h3>Stili</h3>
        <p>Layout Flexbox e StyleSheet.</p>
      </div>

      <div class="feature-card" @click="showSection('sintax')">
        <div class="feature-icon">📘</div>
        <h3>Sintassi di Base</h3>
        <p>Componenti fondamentali e hook.</p>
      </div>

      <div class="feature-card" @click="showSection('debug')">
        <div class="feature-icon">🛠️</div>
        <h3>Debug e strumenti</h3>
        <p>Durante lo sviluppo, React Native offre diversi strumenti.</p>
      </div>

      <div class="feature-card" @click="showSection('examples')">
        <div class="feature-icon">💡</div>
        <h3>Esempi di codice</h3>
        <p>Esempi pratici di codice.</p>
      </div>
    </div>

    <!-- API CONTENT -->
     <div v-show="activeSection === 'how'" class="api-section">
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

    <div v-show="activeSection === 'component'" class="api-section">
      <h2>Componenti di Base</h2>
      <p>
        React Native utilizza componenti nativi come View e Text.
        Lo stato dell'app viene gestito tramite hook come useState.
      </p>
      <pre>const App = () => {
  const [count, setCount] = useState(0);
  return (
    &lt;Text&gt;{count}&lt;/Text&gt;
  );
};</pre>
    </div>

    <div v-show="activeSection === 'styles'" class="api-section">
      <h2>Gestione degli Stili</h2>
      <p>
        Gli stili vengono definiti in JavaScript usando StyleSheet.create
        e il layout è basato su Flexbox.
      </p>
      <pre>const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});</pre>
    </div>

    <div v-show="activeSection === 'debug'" class="api-section">
      <h2>Debug e Strumenti</h2>
      <p>
        Durante lo sviluppo di applicazioni mobile, il debug è una fase fondamentale per individuare errori, ottimizzare le prestazioni e garantire la corretta esecuzione del codice. React Native mette a disposizione una serie di strumenti integrati e professionali che semplificano enormemente questo processo.
      </p>
      <ul>
        <li><strong>Fast Refresh</strong>: aggiorna subito l'app dopo ogni modifica.</li>
        <li><strong>Console.log</strong>: per stampare valori e verificare il flusso del codice.</li>
        <li><strong>React Developer Tools</strong>: permette di analizzare i componenti e il loro stato.</li>
      </ul>
    </div>

    <div v-show="activeSection === 'examples'" class="api-section">
      <h2>Esempi Pratici e Debug</h2>
      <p>
        Gli esempi principali includono un Hello World evoluto,
        una lista della spesa e un contatore.
      </p>
      <p>
        Durante lo sviluppo sono disponibili strumenti come Fast Refresh,
        console.log e React Developer Tools.
      </p>
    </div>

    <div v-show="activeSection === 'sintax'" class="api-section">
      <h2>Sintassi di Base</h2>
      <ul>
        <li><strong>useState</strong>: gestione dello stato</li>
        <li><strong>View</strong>: contenitore principale</li>
        <li><strong>Text</strong>: visualizzazione testo</li>
        <li><strong>Button</strong>: bottone con evento onPress</li>
        <li><strong>TextInput</strong>: inserimento dati</li>
        <li><strong>FlatList</strong>: gestione di liste lunghe</li>
        <li><strong>StyleSheet.create</strong>: definizione degli stili</li>
      </ul>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Api',
  data() {
    return {
      activeSection: ''
    }
  },
  methods: {
    showSection(id) { 
      this.activeSection = id 
    } 
  }
}
</script>

<style scoped>
/* Importa i font */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Sora:wght@400;600;800&display=swap');


.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 40px;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-label {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  color: var(--accent-purple);
  margin-bottom: 20px;
  text-transform: uppercase;
}

/* Cards */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.feature-card {
  padding: 40px;
  background: var(--bg-card);
  border-radius: 20px;
  border: 1px solid rgba(97, 218, 251, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: rgba(97, 218, 251, 0.3);
  box-shadow: 0 20px 60px rgba(97, 218, 251, 0.2);
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 10px;
}


.api-section h2 {
  margin-bottom: 20px;
  font-size: 30px;
}

.api-section li {
  margin-bottom: 10px;
}

.code-line {
  display: block;
  animation: typeIn 0.5s ease-out backwards;
}

.code-line:nth-child(1) { animation-delay: 0.1s; }
.code-line:nth-child(2) { animation-delay: 0.2s; }
.code-line:nth-child(3) { animation-delay: 0.3s; }
.code-line:nth-child(4) { animation-delay: 0.4s; }
.code-line:nth-child(5) { animation-delay: 0.5s; }
.code-line:nth-child(6) { animation-delay: 0.6s; }
.code-line:nth-child(7) { animation-delay: 0.7s; }
.code-line:nth-child(8) { animation-delay: 0.8s; }

@keyframes typeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.keyword { color: #c792ea; }
.function { color: #82aaff; }
.string { color: #c3e88d; }
.component { color: #ffcb6b; }

.steps {
  display: grid;
  gap: 50px;
  margin-top: 60px;
}

.step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  align-items: start;
}

.step-content h3 {
  font-size: 26px;
  margin-bottom: 15px;
  font-weight: 700;
}
/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 100px 20px;
  }
  
  .step {
    grid-template-columns: 1fr;
  }
  
  .step-number {
    justify-self: center;
  }
}
</style>