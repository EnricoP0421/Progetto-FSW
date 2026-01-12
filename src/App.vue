<template>
  <div id="app">
    <nav class="nav-bar">
      <button 
        @click="currentView = 'Home'" 
        :class="{ active: currentView === 'Home' }"
        class="nav-button"
      >
        Home
      </button>
      <button 
        @click="currentView = 'Api'" 
        :class="{ active: currentView === 'Api' }"
        class="nav-button"
      >
        API React Native
      </button>
      <button 
        @click="currentView = 'GameDex'" 
        :class="{ active: currentView === 'GameDex' }"
        class="nav-button"
      >
        GameDex
      </button>
      <button 
        @click="currentView = 'insertion'" 
        :class="{ active: currentView === 'insertion' }"
        class="nav-button"
      >
        Inserimento Dati
      </button>
    </nav>
    
    <component :is="currentView" />
  </div>
</template>

<script>
import GameDex from './views/GameDex.vue'
import Api from './views/Api.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
    GameDex,
    Api
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

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 14, 39, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
  z-index: 1000;
  border-bottom: 1px solid rgba(97, 218, 251, 0.1);
}

.nav-button {
  padding: 12px 30px;
  background: rgba(21, 27, 61, 0.6);
  border: 1px solid rgba(97, 218, 251, 0.2);
  border-radius: 12px;
  color: #e2e8f0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: rgba(97, 218, 251, 0.1);
  border-color: rgba(97, 218, 251, 0.4);
  transform: translateY(-2px);
}

.nav-button.active {
  background: linear-gradient(135deg, #61dafb, #7c3aed);
  border-color: transparent;
  color: #0a0e27;
}

@media (max-width: 768px) {
  .nav-bar {
    padding: 15px 20px;
    gap: 10px;
  }
  
  .nav-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>