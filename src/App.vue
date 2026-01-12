<template>
  <div id="app">
    <nav class="top-nav">
  <div class="nav-inner">

    <div class="brand">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Logo" class="logo" />
      <span class="brand-name">React Native</span>
    </div>

    <div class="nav-links">
      <button @click="currentView='Home'" :class="{active:currentView==='Home'}">Home</button>
      <button @click="currentView='Api'" :class="{active:currentView==='Api'}">API</button>
      <button @click="currentView='GameDex'" :class="{active:currentView==='GameDex'}">Gamedex</button>
      <button @click="currentView='insertion'" :class="{active:currentView==='insertion'}">Inserimento</button>
    </div>

  </div>
</nav>
    
    <component :is="currentView" />
  </div>
</template>

<script>
import GameDex from './views/GameDex.vue'
import Api from './views/Api.vue'
import Home from './views/Home.vue'
import insertion from './views/insertion.vue'

export default {
  name: 'App',
  components: {
    Home,
    GameDex,
    Api,
    insertion
  },
  data() {
    return {
      currentView: 'Home' // Pagina iniziale
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #0a0e27;
  color: #e2e8f0;
}

.top-nav{
  position:fixed;
  top:0;
  left:0;
  right:0;
  background:rgba(10,14,39,.92);
  backdrop-filter: blur(14px);
  border-bottom:1px solid rgba(97,218,251,.08);
  z-index:1000;
}

.nav-inner{
  max-width:1200px;
  margin:0 auto;
  padding:18px 40px;
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.brand{
  display:flex;
  align-items:center;
  gap:12px;
  font-weight:700;
  font-size:26px;
  color:#7dd3fc;
}

.logo{
  width: 80px;
  height: 80px;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#0a0e27;
  font-size:20px;
}

.nav-links{
  display:flex;
  gap:28px;
}

.nav-links button{
  background:none;
  border:none;
  color:#94a3b8;
  font-weight:600;
  font-size:15px;
  cursor:pointer;
  position:relative;
  padding:6px 0;
}

.nav-links button::after{
  content:'';
  position:absolute;
  left:0;
  bottom:-6px;
  width:0%;
  height:2px;
  background:#7dd3fc;
  transition:.3s;
}

.nav-links button:hover{
  color:#e2e8f0;
}

.nav-links button.active{
  color:#7dd3fc;
}

.nav-links button.active::after{
  width:100%;
}
.brand-name {
  font-size: 40px; 
  font-weight: 800; 
  color: #7dd3fc;
}
</style>