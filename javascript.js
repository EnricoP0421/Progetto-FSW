const Home = {     
    template: `
            <h1>React Native Hub</h1>
        
 
          <h2 class="second">Che cosa e' React Native?</h2>
                <figure>
                   <img src="images/react-1.svg" alt="Schema di funzionamento di React Native" style="height:100px">
                    <figcaption>  React Native e' un framework open source sviluppato da Facebook che permette di creare
                  applicazioni mobili native utilizzando JavaScript e il paradigma di React. L'idea centrale
                  e' quella di scrivere il codice una sola volta e distribuirlo su piu' piattaforme, come
                  Android e iOS, mantenendo pero' componenti e prestazioni native.
                  A differenza delle soluzioni ibride basate su WebView, React Native utilizza componenti nativi reali,
                  garantendo prestazioni elevate, fluidita' dell'interfaccia e un'esperienza utente simile a
                  quella delle app sviluppate interamente in linguaggio nativo.
                  </figcaption>
                </figure> 
          <h2 class="second">Storia e futuro</h2>
              <p>
                React Native nasce come evoluzione naturale di React.js, la libreria JavaScript introdotta nel 2013 che ha 
                rivoluzionato lo sviluppo web grazie al Virtual DOM e alla programmazione dichiarativa. Facebook intui' che gli stessi 
                principi potevano essere applicati anche allo sviluppo mobile, superando i limiti delle soluzioni ibride tradizionali 
                come Ionic o Cordova.
              </p>
              <section class="img-scroll" style="text-align: center;">
                <img src="images/1_OhmYGQJZ6KIlPsxvS2vbtA.png" alt="Evoluzione fino a React Native" width="700px">
              </section>
                <p >
                  Guardando al futuro, il team di React Native sta lavorando alla New Architecture:
                </p>
                <ul class="spaziatura_ul2">
                  <li><strong>Fabric</strong>, un nuovo sistema di rendering piu' veloce</li>
                  <li><strong>TurboModules</strong>, per una gestione piu' efficiente dei moduli nativi</li>
                </ul>
                <p>
                  Questi miglioramenti promettono di rendere React Native ancora piu' performante e scalabile, consolidando la sua posizione come uno dei framework piu' popolari per lo sviluppo mobile cross-platform.
                </p>
                
          <h2 class="second">Vantaggi</h2>
          <figure>
          <section class="img-scroll">
          <img src="images/vantaggi react.jpg" alt="Vantaggi di React Native" style="height:300px">
          </section>
          <figcaption>
          <ul class="spaziatura_ul2">
          <li>Codice unico per piu' piattaforme (Android e iOS)</li>
          <li>Prestazioni elevate, grazie al rendering nativo</li>
          <li>Fast Refresh per aggiornamenti in tempo reale</li>
          <li>Grande community e ampia disponibilita' di librerie</li>
          <li>Facile apprendimento per sviluppatori web</li>
          <li>Ecosistema completo (Expo, UI libraries, testing)</li>
          <li>Riduzione dei costi e dei tempi di sviluppo</li>
          </ul>
          </figcaption>
          </figure>`
          
};

const Fondamenti = {     
       template:  `
       <h1> Fondamenti di React Native </h1>
            <div class="fondamenti-layout">
            <section class="blocchi">
            <h2>Come Funziona React Native</h2>
                  <h3> 1) Installa React Native</h3>
                  <p>Si inizia configurando l'ambiente di sviluppo. React Native CLI permette di creare un nuovo progetto con tutti i file necessari in pochi secondi.</p>
                  <div style="text-align: center;">
                  <img src="images/come_funz_1.png" alt="come funziona React Native" style="height:150px">
                  </div>

                  <h3>2) Crea Componenti React</h3>
                  <p>Si utilizza JSX per descrivere l'interfaccia utente. I componenti React Native come View, Text e Image si traducono automaticamente in componenti nativi della piattaforma.</p>
                  <div style="text-align: center;">
                  <img src="images/come_funz_2.png" alt="come funziona React Native" style="height:250px">
                  </div>

                  <h3>3) Stilizza con Flexbox</h3>
                  <p>React Native utilizza Flexbox per il layout, rendendo semplice creare interfacce responsive. Gli stili sono definiti in JavaScript utilizzando un subset di CSS.</p>
                  <div style="text-align: center;">
                  <img src="images/come_funz_3.png" alt="come funziona React Native" style="height:350px">
                  </div>

                  <h3>4) Pubblica la Tua App</h3>
                  <p>Quando si e' pronti, si compila l' app per produzione e si pubblica su App Store e Google Play Store. React Native gestisce l'ottimizzazione per entrambe le piattaforme.</p>
            </section>

            <article class="blocchi">
            <h2>Componenti di Base</h2>
            <p>
              React Native utilizza componenti nativi come <strong>View</strong>, <strong>Text</strong>, <strong>Button</strong>, <strong>TextInput</strong> e <strong>FlatList</strong>.
              Lo stato dell'app viene gestito tramite hook come <strong>useState</strong>, che permette di rendere l'interfaccia dinamica e interattiva.
            </p>
            
            <h3 class="subsection-title">Esempio: Lista della Spesa</h3>
            <section class="img-scroll">
            <img src="images/componenti_base.png" alt="componenti React Native" style="height:750px">
            </section>
            </article>
            <section class="blocchi">            
            <h2>Gestione degli Stili</h2>
            <p>
              Gli stili in React Native vengono definiti in JavaScript usando <strong>StyleSheet.create</strong>.
              Il layout e' basato su <strong>Flexbox</strong>, un sistema flessibile che permette di creare interfacce responsive
              che si adattano a diverse dimensioni dello schermo.
            </p>
            
            <h3>Proprieta' Flexbox Principali</h3>
              <ul class="spaziatura_ul">
                <li><strong>Flex:</strong> definisce quanto spazio occupa un componente rispetto agli altri</li>
                <li><strong>FlexDirection:</strong> 'row' | 'column' - dispone i figli orizzontalmente o verticalmente</li>
                <li><strong>JustifyContent:</strong> 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'</li>
                <li><strong>AlignItems:</strong> 'center' | 'flex-start' | 'flex-end' | 'stretch'</li>
                <li><strong>Gap:</strong> spazio tra gli elementi figli</li>
              </ul>
 
            <h3>Esempio di Stili</h3>
            <img src="images/stili.png" alt="gestione stili React Native" style="height:350px">
            </section>
            <article class="blocchi">
            <h2>Sintassi di Base</h2>
            <p style="margin-bottom: 32px;">
              React Native fornisce un set di componenti e API fondamentali per costruire interfacce utente native.
              Ecco i principali elementi utilizzati quotidianamente nello sviluppo.
            </p>
              <ul class="spaziatura_ul">
                <li class="immagini_stili"><strong>UseState: </strong>Hook per la gestione dello stato locale del componente.</li>
                <img src="images/usestate.png" style="height:50px">
                <li class="immagini_stili"><strong>View: </strong>Contenitore principale per il layout.</li>
                <img src="images/view.png" style="height:50px">
                <li class="immagini_stili"><strong>Text: </strong>Componente per visualizzare testo.</li>
                <img src="images/textstyle.png" style="height:50px">
                <li class="immagini_stili"><strong>Button: </strong>Pulsante nativo: usa <code>onPress</code>.</li>
                <img src="images/button.png" style="height:50px">
                <li class="immagini_stili"><strong>TextInput: </strong>Campo di input testo con evento <code>onChangeText</code>.</li>
                <img src="images/textinput.png" style="height:50px">
                <li class="immagini_stili"><strong>FlatList: </strong>Lista ottimizzata: renderizza solo gli elementi visibili.</li>
                <img src="images/flatlist.png" style="height:50px">
                <li class="immagini_stili"><strong>StyleSheet.create: </strong>Definisce stili in modo ottimizzato e "validato".</li>
                <img src="images/conststyles.png" style="height:50px">
                <li class="immagini_stili"><strong>Image: </strong>Per immagini locali o remote (via <code>uri</code>).</li>
                <img src="images/image.png" style="height:50px">
                </ul>
                </article>
            <section class="blocchi">
            <h2>Debug e Strumenti</h2>
            <p>
              Durante lo sviluppo di applicazioni mobile, il debug e' una fase fondamentale per individuare errori, 
              ottimizzare le prestazioni e garantire la corretta esecuzione del codice.
            </p>
                <p><strong>Fast Refresh:</strong>
                  Aggiorna automaticamente l'applicazione. 
                  Permette di vedere istantaneamente le modifiche senza dover riavviare l'app.
                </p>
                <p> <strong>Console.log:</strong>
                  Stampa valori, oggetti e messaggi nella console per verificare la corretta esecuzione del codice.
                </p>
                <p><strong>React Developer Tools:</strong>
                  Estensione browser che permette di ispezionare la gerarchia dei componenti React, visualizzare props e state, 
                  e analizzare le performance.
                </p>
                <p><strong>React Native Debugger:</strong>
                  Applicazione standalone che combina React DevTools, Redux DevTools e la console in un'unica interfaccia.
                </p>
                <p><strong>Error Boundaries:</strong>
                  Componenti che catturano errori JavaScript nei loro componenti figli, permettendo di 
                  mostrare un'interfaccia di fallback invece di far crashare l'intera app.
                </p>
                <p><strong>Flipper:</strong>
                  Piattaforma di debug creata da Meta. Offre network inspector, database viewer, 
                  performance monitor e molti altri plugin per analizzare ogni aspetto dell'app.
                </p>
            </section>
            <article class="blocchi">
            <h2>Esempi Pratici di Codice</h2>
            <p style="margin-bottom: 32px;">
              Di seguito ci sono due esempi pratici che mostrano i concetti fondamentali di React Native,
              dalla gestione dello stato alla creazione di interfacce interattive.
            </p>
 
            <h3>Esempio 1: Hello World con Interazione</h3>
            <p style="margin-bottom: 32px;">Un semplice esempio che mostra come cambiare il messaggio visualizzato premendo un pulsante:</p>
             <section class="img-scroll">
             <img src="images/esempio_1.png" alt="esempio 1 React Native" style="height:550px">
             </section>
            <h3>Esempio 2: Contatore Interattivo</h3>
            <p style="margin-bottom: 32px;">Un classico esempio che dimostra la gestione dello stato e l'aggiornamento dell'interfaccia:</p>
            <section class="img-scroll">
            <img src="images/esempio_2.png" alt="esempio 2 React Native" style="height:550px">
            </section>
            </article>
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
    <h1 class="titolo">Gamedex</h1>
    <section>
        <table>
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

            <tr v-for="game in games" :key="game.id">
                <td>{{game.id}}</td>
                <td>{{game.titolo}}</td>
                <td>{{game.genere}}</td>
                <td>{{game.anno}}</td>
                <td>{{game.piattaforma}}</td>
                <td>{{game.sviluppatore}}</td>
                <td>{{game.valutazione}}</td>
                <td>{{game.modalita}}</td>
            </tr>

        </table>
    </section>`,
    
    methods: {
        getgames:function() {
            axios.get('./games.json')
              .then(response => {
                this.games = response.data;
              });
        }
    },

    mounted() {
        this.getgames();
    }
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
        <h1>Esami</h1>
            
          <form @submit.prevent="salvaEsame">
            <div>
              <label for="esame-corso">Corso </label>
              <input v-model="formEsame.corso" id="esame-corso" name="corso" autocomplete="off" required>
            </div>
            <div>
              <label for="esame-voto">Voto </label>
              <input v-model="formEsame.voto" id="esame-voto" name="voto" type="number" min="18" max="30" autocomplete="off" required>
            </div>
            <div>
              <label for="esame-data">Data </label>
              <input v-model="formEsame.data" id="esame-data" name="data" type="date" autocomplete="off" required>
            </div>
            <div>
              <button class="btn-nav">
                {{ formEsame.id ? 'Aggiorna' : 'Aggiungi' }}
              </button>
              <button v-if="formEsame.id" type="button" class="btn-nav-outline" @click="resetFormEsame">Annulla</button>
            </div>
          </form>
 
          <section>
          <div>
            <table>
              <thead>
                <tr>
                  <th scope="col">Corso</th>
                  <th scope="col">Voto</th>
                  <th scope="col">Data</th>
                  <th scope="col">Azioni</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="esami.length === 0">
                  <td colspan="4" style="color:gray;">
                    Nessun esame inserito.
                  </td>
                </tr>
                <tr v-for="e in esami" :key="e.id">
                  <td>{{ e.corso }}</td>
                  <td>{{ e.voto }}</td>
                  <td>{{ e.data }}</td>
                  <td class="text-end">
                    <button class="btn-nav" @click="modificaEsame(e)">Modifica</button>
                    <button class="btn-nav-outline" @click="cancellaEsame(e.id)">Elimina</button>
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
