const { createApp } = Vue;

createApp({
  template: `
  <div class="d-flex flex-column min-vh-100">
    <header class="py-3 mb-3">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h4 m-0">React Native Hub</h1>
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
          <p>
            React Native è un framework open source sviluppato da Facebook che permette di creare
            applicazioni mobili native utilizzando JavaScript e il paradigma di React. L’idea centrale
            è quella di scrivere il codice una sola volta e distribuirlo su più piattaforme, come
            Android e iOS, mantenendo però componenti e prestazioni native.
          </p>

          <h3 class="mt-4">Storia e futuro</h3>
          <p>
            React Native nasce come estensione di React.js, la libreria front‑end introdotta nel 2013.
            Nel 2015 viene rilasciato come progetto open source e da allora è cresciuto grazie a una
            comunità molto attiva. Oggi è utilizzato da aziende come Facebook, Instagram, Discord e
            molte altre. Il futuro di React Native punta a una sempre maggiore integrazione con le
            piattaforme native e a strumenti di sviluppo più rapidi e accessibili.
          </p>

          <h3 class="mt-4">Vantaggi</h3>
          <ul>
            <li>Scrittura del codice una sola volta (DRY: Don't Repeat Yourself).</li>
            <li>Prestazioni elevate grazie al rendering nativo.</li>
            <li>Aggiornamenti rapidi e live reload durante lo sviluppo.</li>
            <li>Comunità attiva e strumenti come Expo, React Navigation, Redux.</li>
            <li>Accessibilità per chi proviene dal mondo web (React).</li>
          </ul>
        </section>

        <!-- REACT NATIVE / API -->
        <section v-else-if="vista === 'react'" class="main-section">
          <h2 class="mb-3">React Native</h2>
         <h3 class="mt-4">API e concetti principali</h3>
          <div class="row">
            <div class="col-md-6" v-for="api in sezioniAPI" :key="api.titolo">
              <h4 class="h6 mt-3">{{ api.titolo }}</h4>
              <p class="small">{{ api.testo }}</p>
            </div>
          </div>

          <h3 class="mt-4">Esempio di codice</h3>
          <pre><code>
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Hello React Native!</Text>
    </View>
  );
}
          </code></pre>
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
          testo: "React Native utilizza un bridge tra JavaScript e i componenti nativi, permettendo di scrivere logica in JS e interfacce con elementi nativi."
        },
        {
          titolo: "Sintassi di base",
          testo: "La sintassi è simile a React: componenti, props, stato e JSX per descrivere l’interfaccia utente."
        },
        {
          titolo: "Componenti",
          testo: "I componenti principali sono View, Text, Image, ScrollView, Button e molti altri, tutti mappati su elementi nativi."
        },
        {
          titolo: "Stili",
          testo: "Gli stili si definiscono con oggetti JavaScript e seguono il modello Flexbox, pensato per layout responsive."
        },
        {
          titolo: "Debug e strumenti",
          testo: "Strumenti come Expo, React DevTools e Flipper aiutano a testare, debuggare e distribuire le app in modo rapido."
        },
        {
          titolo: "Esempi di codice",
          testo: "Un componente è una funzione che restituisce JSX e può essere riutilizzato in più parti dell’app."
        }
      ],

      giochi: [],
      caricamentoGiochi: false,
      filtroGiochi: "",
      ordinamentoGiochi: "id",

      esami: [],
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
      const salvati = localStorage.getItem("esami-react");
      this.esami = salvati ? JSON.parse(salvati) : [];
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