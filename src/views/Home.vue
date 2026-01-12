<template>
<section class="container">
<div class="section-header">
    <h1 class="section-title">Home React Native</h1>
     <p class="section-description">Un unico codice, esperienze native su ogni dispositivo</p>
  </div>

<div class="menu">

  <div class="main-card" :class="{ open: open === 1 }">
    <div class="header-card" @click="open = open === 1 ? null : 1">
      <h3>Che cos’è</h3>
      <p>Introduzione a React Native</p>
    </div>
   <div class="body-card">
  <div class="body-flex">
    
    <div class="body-text">
      <p>
        React Native è un framework open source rilasciato da Facebook nel 2015 che consente di sviluppare applicazioni mobili <strong>native</strong> utilizzando <strong>JavaScript</strong> e <strong>React</strong>.
      </p>
      <p>
        Il suo obiettivo principale è permettere la creazione di app multipiattaforma (Android e iOS) partendo da un’unica base di codice, riducendo tempi e costi di sviluppo.
      </p>
    </div>

    <img class="body-image" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="React Native">
    
    </div>
    <p class="full-text">
    A differenza delle soluzioni ibride basate su WebView, React Native utilizza componenti nativi reali, garantendo prestazioni elevate, fluidità dell’interfaccia e un’esperienza utente simile a quella delle app sviluppate interamente in linguaggio nativo.
  </p>
    <div class="body-flex">
    <img class="body-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpZiIFya7v1Bqyy4EGWM8tDx28qUpUEbTcQ&s" alt="React Native">
   
    <div class="body-text">
      <p>
        Grazie alla sua struttura a componenti, all’uso degli hook (come useState) e a un sistema di styling simile al CSS, React Native risulta accessibile soprattutto per chi proviene dal mondo dello sviluppo web.
      </p>
      <p>
       Oggi è utilizzato da numerose aziende di livello mondiale come Facebook, Instagram, Uber Eats, Discord e Tesla.
      </p>
    </div>

    
    
    </div>
</div>
  </div>

  <div class="main-card" :class="{ open: open === 2 }">
    <div class="header-card" @click="open = open === 2 ? null : 2">
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
    <img src="https://miro.medium.com/1*YELk-XsmG3isUOc6xOSW0w.png" alt="React Native">
  </div>

  <p>
    Nel corso degli anni, React Native è cresciuto rapidamente grazie al contributo della community open source e a un ecosistema sempre più ricco di strumenti come Expo, React Navigation e Redux.
  </p>
  <p>
    Il framework si è evoluto fino a diventare una soluzione matura, adatta anche ad applicazioni con milioni di utenti.
  </p>
<div class="body-flex">
    <img class="body-image-second" src="https://miro.medium.com/1*OhmYGQJZ6KIlPsxvS2vbtA.png" alt="React Native">
   
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


<div class="main-card" :class="{ open: open === 3 }">
  <div class="header-card" @click="open = open === 3 ? null : 3">
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
      <li><strong>Fast Refresh</strong>, per aggiornare l’app in tempo reale durante lo sviluppo</li>
      <li><strong>Grande community</strong> e ampia disponibilità di librerie</li>
      <li><strong>Facile apprendimento</strong> per sviluppatori web</li>
      <li><strong>Ecosistema completo</strong> (Expo, UI libraries, strumenti di testing)</li>
      <li><strong>Riduzione dei costi e dei tempi di sviluppo</strong></li>
    </ul>
    
  </div>
  <img class="body-image-third" src="https://formazione.jdk.it/wp-content/uploads/2024/07/react-two.webp" alt="React Native">
  </div>
  <p>Nonostante alcune limitazioni (come la necessità di codice nativo per funzionalità molto specifiche), React Native rappresenta un eccellente compromesso tra produttività, potenza e flessibilità.</p>
  </div>
</div>

</div>
</section>
</template>
<script>
export default {
  data() {
    return {
      open: null
    }
  }
}
</script>
<style scoped>

h1{
  font-size:90px;
  margin-bottom:70px;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.section-header{
  width:100%;
  text-align:center;
  margin-bottom:80px;
}

.menu{
  max-width:900px;
  width:100%;
  display:flex;
  flex-direction:column;
  gap:40px;
  margin: 0 auto;  
}

.card{
  background:var(--bg-card);
  border-radius:25px;
  padding:50px 30px;
  border:1px solid rgba(97,218,251,0.2);
  transition:0.4s;
  cursor:pointer;
}

.card:hover{
  transform:translateY(-12px) scale(1.03);
  box-shadow:0 25px 60px rgba(97,218,251,0.35);
}

.icon{
  font-size:48px;
  margin-bottom:25px;
}

.card h3{
  font-size:26px;
  margin-bottom:10px;
}

.card p{
  font-size:15px;
}

.main-card{
  background:#1b2252;                    /* CHIARA */
  border-radius:26px;
  border:1px solid rgba(97,218,251,.25);
  transition:.4s;
  overflow:hidden;
}

.main-card:hover{
  box-shadow:0 25px 60px rgba(97,218,251,.25);
}

.header-card{
  background:#0f1635;                    /* SCURA */
  border-radius:20px;
  padding:32px 36px;
  cursor:pointer;
  min-height: 110px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.header-card h3{
  margin:0;
  font-size:26px;
}


.body-card{
  margin-top:0;
  background:#1b2252;
  border-radius:20px;
  padding:0 26px;
  max-height:0;
  overflow:hidden;
  transition:max-height .6s cubic-bezier(.4,0,.2,1), padding .4s ease;
}

.main-card.open .body-card{
  max-height:1200px;
  padding:26px 26px 30px;
}

.body-flex{
  display:flex;
  gap:30px;
  align-items:center;
}

.body-text{
  flex:1;
}

.body-image{
  width:200px;
  border-radius:16px;
  box-shadow:0 12px 30px rgba(0,0,0,.35);
}
.body-image-second{
  width:400px;
  border-radius:16px;
  box-shadow:0 12px 30px rgba(0,0,0,.35);
}
.body-image-third{
  width:300px;
  border-radius:16px;
  box-shadow:0 12px 30px rgba(0,0,0,.35);
}
.full-text{
  margin-top:24px;
  color:white;
  line-height:1.6;
}
.center-image{
  margin:30px 0;
  display:flex;
  justify-content:center;
}

.center-image img{
  width:540px;
  border-radius:18px;
  box-shadow:0 14px 35px rgba(0,0,0,.35);
}
.custom-list{
  list-style:none;
  padding:0;
  margin:0;
}

.custom-list li{
  position:relative;
  padding-left:40px;
  margin-bottom:14px;
  line-height:1.6;
}

.custom-list li::before{
  content:"";
  position:absolute;
  left:0;
  top:4px;
  width:22px;
  height:22px;
  background-image:url("https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg");
  background-size:contain;
  background-repeat:no-repeat;
}

</style>