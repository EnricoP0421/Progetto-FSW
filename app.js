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
          <h2 class="mb-3">React Native</h2>
         <h3 class="mt-4">API e concetti principali</h3>
          <div class="row">
            <div class="col-md-6"
     v-for="api in sezioniAPI"
     :key="api.titolo"
     @click="selezionaBlocco(api)"
     style="cursor:pointer">
  <h4 class="h6 mt-3">{{ api.titolo }}</h4>
  <p class="small">{{ api.testo }}</p>
</div>
          </div>

          <div v-if="bloccoSelezionato" class="mt-4 p-3 border rounded bg-light">
  <h3>{{ bloccoSelezionato.titolo }}</h3>
  <div class="mt-2" v-html="bloccoSelezionato.approfondimento"></div>
          </div>
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

      sezioniAPI: [
  {
    titolo: "Come funziona?",
    testo: "React Native utilizza un bridge tra JavaScript e i componenti nativi.",
    approfondimento: "Il bridge permette a JavaScript di comunicare con i componenti nativi Android e iOS. La logica dell’app gira nel thread JS, mentre l’interfaccia è renderizzata con componenti nativi reali, garantendo prestazioni elevate rispetto alle WebView."
  },
  {
    titolo: "Sintassi di base",
    testo: "Componenti, props, stato e JSX come in React.",
    approfondimento: "La sintassi di React Native è identica a React: si usano componenti funzionali, hook come useState e JSX per descrivere l’interfaccia. Questo rende il framework molto accessibile per chi proviene dal web."
  },
  {
    titolo: "Componenti",
    testo: "View, Text, Image, Button, FlatList e altri.",
    approfondimento: "I componenti React Native corrispondono a elementi nativi: View diventa un UIView su iOS e un ViewGroup su Android. FlatList è ottimizzata per liste lunghe, TextInput gestisce input dinamici e Button usa pulsanti nativi."
  },
  {
    titolo: "Stili",
    testo: "Stili in JS con Flexbox.",
    approfondimento: "React Native usa Flexbox per il layout. Proprietà come flex, justifyContent, alignItems e flexDirection permettono di creare interfacce responsive. Gli stili sono definiti tramite StyleSheet.create per migliori performance."
  },
  {
    titolo: "Debug e strumenti",
    testo: "Fast Refresh, DevTools, Flipper.",
    approfondimento: "Fast Refresh aggiorna l’app in tempo reale mantenendo lo stato. React Developer Tools permette di ispezionare componenti e stato. Flipper offre strumenti avanzati per rete, performance, database e log."
  },
  {
  titolo: "Esempi di codice",
  testo: "Componenti riutilizzabili con JSX.",
  approfondimento: `
Ecco un esempio semplice di componente React Native:

<pre><code>
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [msg, setMsg] = useState("Benvenuto!");

  return (
    < View >
      < Text >{msg}< /Text >
      < Button title="Cambia testo" onPress={() => setMsg("Hai premuto il pulsante!")} / >
    < /View >
  );
}
</code></pre>
`
}
],
        bloccoSelezionato: null,
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

selezionaBlocco(api) {
  this.bloccoSelezionato = api;
  console.log("Blocco selezionato:", api.titolo);
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
