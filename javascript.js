const Home = {     
    template: `
            <h1>React Native Hub</h1>
        
 
          <h2>Che cosa e' React Native?</h2>
                <p>
                  React Native e' un framework open source sviluppato da Facebook che permette di creare
                  applicazioni mobili native utilizzando JavaScript e il paradigma di React. L’idea centrale
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
    data() {
        return {
            datiArticoli: null        
        }
    }, 
    template:  `
    <h2>Archivio Articoli</h2>
    <article v-for="articolo in datiArticoli">
        <img v-bind:src="articolo['Immagine']" alt="" />
        <h3>{{articolo["Titolo"]}}</h3>
        <p>{{articolo["Autore"]}} - {{articolo["Data"]}}</p>
        <p>{{articolo["Testo"]}}</p>
        <a href="#">Leggi tutto</a>
    </article>
    `,
    methods: {
        getArchivioArticoli: function(){
            axios.get('./archivio-articoli.json')
              .then(response => {
                this.datiArticoli = response.data
              });
        }
    },
    mounted(){
        this.getArchivioArticoli();
    }

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
