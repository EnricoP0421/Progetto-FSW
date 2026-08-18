const Home = {     
    template: `
            <h1>React Native Hub</h1>
        
 
          <h2>Che cosa e' React Native?</h2>
                <p>
                  React Native e' un framework open source sviluppato da Facebook che permette di creare
                  applicazioni mobili native utilizzando JavaScript e il paradigma di React. L'idea centrale
                  e' quella di scrivere il codice una sola volta e distribuirlo su piu' piattaforme, come
                  Android e iOS, mantenendo pero' componenti e prestazioni native.
                </p>
                <p>
                  A differenza delle soluzioni ibride basate su WebView, React Native utilizza componenti nativi reali,
                  garantendo prestazioni elevate, fluidita' dell'interfaccia e un'esperienza utente simile a
                  quella delle app sviluppate interamente in linguaggio nativo.
                </p>
        
                <img src="images/react-1.svg" alt="Schema di funzionamento di React Native" style="height:250px">
    
          <h2>Storia e futuro</h2>
              <p>
                React Native nasce come evoluzione naturale di React.js, la libreria JavaScript introdotta nel 2013 che ha 
                rivoluzionato lo sviluppo web grazie al Virtual DOM e alla programmazione dichiarativa. Facebook intuì' che gli stessi 
                principi potevano essere applicati anche allo sviluppo mobile, superando i limiti delle soluzioni ibride tradizionali 
                come Ionic o Cordova.
              </p>
              
                <img src="images/1_OhmYGQJZ6KIlPsxvS2vbtA.png" alt="Evoluzione fino a React Native">
 
                <p >
                  Guardando al futuro, il team di React Native sta lavorando alla New Architecture:
                </p>
                <ul>
                  <li>Fabric, un nuovo sistema di rendering piu' veloce</li>
                  <li>TurboModules, per una gestione piu' efficiente dei moduli nativi</li>
                </ul>
                <p>
                  Questi miglioramenti promettono di rendere React Native ancora piu' performante e scalabile, consolidando la sua posizione come uno dei framework piu' popolari per lo sviluppo mobile cross-platform.
                </p>
                
          <h2>Vantaggi</h2>
          <ul>
          <li>Codice unico per piu' piattaforme (Android e iOS)</li>
          <li>Prestazioni elevate, grazie al rendering nativo</li>
          <li>Fast Refresh per aggiornamenti in tempo reale</li>
          <li>Grande community e ampia disponibilita' di librerie</li>
          <li>Facile apprendimento per sviluppatori web</li>
          <li>Ecosistema completo (Expo, UI libraries, testing)</li>
          <li>Riduzione dei costi e dei tempi di sviluppo</li>
          </ul>`
          
};

const Fondamenti = {     
       template:  `
       <h1> Fondamenti di React Native </h1>
        <p class=>
              Guida ai principali concetti di React Native: installazione, componenti, stili ed esempi pratici.
            </p>
            <div class="fondamenti-layout">
           
            <section>
            <div class="blocchi">
            <h2>Come Funziona React Native</h2>
                  <h3> 1) Installa React Native</h3>
                  <p>Si inizia configurando l'ambiente di sviluppo. React Native CLI permette di creare un nuovo progetto con tutti i file necessari in pochi secondi.</p>
 
        
                  <h3>2) Crea Componenti React</h3>
                  <p>Si utilizza JSX per descrivere l'interfaccia utente. I componenti React Native come View, Text e Image si traducono automaticamente in componenti nativi della piattaforma.</p>
                    
                  <h3>3) Stilizza con Flexbox</h3>
                  <p>React Native utilizza Flexbox per il layout, rendendo semplice creare interfacce responsive. Gli stili sono definiti in JavaScript utilizzando un subset di CSS.</p>
                  <div class="step-code">
                    
                  <h3>4) Pubblica la Tua App</h3>
                  <p>Quando si è pronti, si compila l' app per produzione e si pubblica su App Store e Google Play Store. React Native gestisce l'ottimizzazione per entrambe le piattaforme.</p>
            </div>
            <div class="blocchi">
            <h2>Componenti di Base</h2>
            <p>
              React Native utilizza componenti nativi come <strong>View</strong>, <strong>Text</strong>, <strong>Button</strong>, <strong>TextInput</strong> e <strong>FlatList</strong>.
              Lo stato dell'app viene gestito tramite hook come <strong>useState</strong>, che permette di rendere l'interfaccia dinamica e interattiva.
            </p>
            
            <h3 class="subsection-title">Esempio: Lista della Spesa</h3>

            </div>
            <div class="blocchi">            
            <h2>Gestione degli Stili</h2>
            <p>
              Gli stili in React Native vengono definiti in JavaScript usando <strong>StyleSheet.create</strong>.
              Il layout è basato su <strong>Flexbox</strong>, un sistema flessibile che permette di creare interfacce responsive
              che si adattano a diverse dimensioni dello schermo.
            </p>
            
            <h3>Proprietà Flexbox Principali</h3>
              <ul>
                <li><strong>flex:</strong> definisce quanto spazio occupa un componente rispetto agli altri</li>
                <li><strong>flexDirection:</strong> 'row' | 'column' - dispone i figli orizzontalmente o verticalmente</li>
                <li><strong>justifyContent:</strong> 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'</li>
                <li><strong>alignItems:</strong> 'center' | 'flex-start' | 'flex-end' | 'stretch'</li>
                <li><strong>gap:</strong> spazio tra gli elementi figli</li>
              </ul>
 
            <h3>Esempio di Stili</h3>
            </div>
            <div class="blocchi">
            <h2>Sintassi di Base</h2>
            <p style="margin-bottom: 32px;">
              React Native fornisce un set di componenti e API fondamentali per costruire interfacce utente native.
              Ecco i principali elementi utilizzati quotidianamente nello sviluppo.
            </p>
                <h3>useState</h3>
                <p>Hook per la gestione dello stato locale del componente.</p>
               
                <h3>View</h3>
                <p>Contenitore principale per il layout.</p>
                
                <h3>Text</h3>
                <p>Componente per visualizzare testo.</p>
                
                <h3>Button</h3>
                <p>Pulsante nativo: usa <code>onPress</code>.</p>
                
                <h3>TextInput</h3>
                <p>Campo di input testo con evento <code>onChangeText</code>.</p>
                
                <h3>FlatList</h3>
                <p>Lista ottimizzata: renderizza solo gli elementi visibili.</p>
                
                <h3>StyleSheet.create</h3>
                <p>Definisce stili in modo ottimizzato e "validato".</p>
                
                <h3>Image</h3>
                <p>Per immagini locali o remote (via <code>uri</code>).</p>
            </div>
            <div class="blocchi">
            <h2>Debug e Strumenti</h2>
            <p>
              Durante lo sviluppo di applicazioni mobile, il debug è una fase fondamentale per individuare errori, 
              ottimizzare le prestazioni e garantire la corretta esecuzione del codice.
            </p>
            
                <h3>Fast Refresh</h3>
                <p>
                  Aggiorna automaticamente l'applicazione. 
                  Permette di vedere istantaneamente le modifiche senza dover riavviare l'app.
                </p>
              
                <h3>Console.log</h3>
                <p>
                  Stampa valori, oggetti e messaggi nella console per verificare la corretta esecuzione del codice.
                </p>
              
                <h3>React Developer Tools</h3>
                <p>
                  Estensione browser che permette di ispezionare la gerarchia dei componenti React, visualizzare props e state, 
                  e analizzare le performance.
                </p>
              
                <h3>React Native Debugger</h3>
                <p>
                  Applicazione standalone che combina React DevTools, Redux DevTools e la console in un'unica interfaccia.
                </p>
    
                <h3>Error Boundaries</h3>
                <p>
                  Componenti che catturano errori JavaScript nei loro componenti figli, permettendo di 
                  mostrare un'interfaccia di fallback invece di far crashare l'intera app.
                </p>
              
                <h3>Flipper</h3>
                <p>
                  Piattaforma di debug creata da Meta. Offre network inspector, database viewer, 
                  performance monitor e molti altri plugin per analizzare ogni aspetto dell'app.
                </p>
            </div>
            <div class="blocchi">
            <h2>Esempi Pratici di Codice</h2>
            <p style="margin-bottom: 32px;">
              Di seguito ci sono due esempi pratici che mostrano i concetti fondamentali di React Native,
              dalla gestione dello stato alla creazione di interfacce interattive.
            </p>
 
            <h3>Esempio 1: Hello World con Interazione</h3>
            <p style="margin-bottom: 32px;">Un semplice esempio che mostra come cambiare il messaggio visualizzato premendo un pulsante:</p>
             
            <h3>Esempio 2: Contatore Interattivo</h3>
            <p style="margin-bottom: 32px;">Un classico esempio che dimostra la gestione dello stato e l'aggiornamento dell'interfaccia:</p>
            </div>
            </section>
             <aside>
              <h2><b>Come Funziona</b></h2>
              <p>Il funzionamento di React Native e il flusso di sviluppo.</p>

              <h2><b>Componenti</b></h2>
              <p>Creazione dell'interfaccia con JSX.</p>

            <h2><b>Stili</b></h2>
              <p>Layout Flexbox e StyleSheet.</p>

            <h2><b>Sintassi di Base</b></h2>
              <p>Componenti fondamentali e hook.</p>

            <h2><b>Debug e strumenti</b></h2>
              <p>Strumenti per lo sviluppo e il debugging.</p>
 
           <h2><b>Esempi di codice</b></h2>
              <p>Esempi pratici di codice.</p>

            </aside>
            </div>
           `
  };

  


const Gamedex = {
    data() {
        return {
            games: null        
        }
    }, 
    template:  `
    <h2>Autori del Blog</h2>
    <section>
        <table>
            <tr>
                <th id="id">ID</th>
                <th id="titolo">Titolo</th>
                <th id="genere">Genere</th>
                <th id="anno">Anno</th>
                <th id="piattaforma">Piattaforma</th>
                <th id="sviluppatore">Sviluppatore</th>
                <th id="valutazione">Valutazione</th>
                <th id="modalita">Modalita'</th>
            </tr>
            <tr v-for="autore in autori">
                <th>{{autore.Autore}}</th><td>{{autore.Email}}</td><td>{{autore.Argomenti}}</td>
            </tr>
        </table>
    </section>    `,
    methods: {
        getAutori: function(){
            axios.get('./games.json')
              .then(response => {
                this.autori = response.data
              });
        }
    },
    mounted(){
        this.getAutori();
    }

};

const Esami = {     
    template:  `
    <h2>Login</h2>
    <form action="#" method="POST">
        <ul>
            <li>
                <label for="username">Username:</label><input type="text" id="username" name="username" />
            </li>
            <li>
                <label for="password">Password:</label><input type="password" id="password" name="password" />
            </li>
            <li>
                <input type="submit" name="submit" value="Invia" />
            </li>
        </ul>
    </form>
   `
};



const routes = [
  { path: '/', component: Home },
  { path: '/fondamenti', component: Fondamenti },
  { path: '/games', component: Gamedex },
  { path: '/esami', component: Esami }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
