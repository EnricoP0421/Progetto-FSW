# Fondamenti di Sistemi Web – Progetto A.A. 2025/2026

Single Page Application (SPA) realizzata per l’esame di **Fondamenti di Sistemi Web** – Università di Bologna, A.A. 2025/26.

Il progetto consiste in un’applicazione web **client-side**, accessibile e responsive, che presenta un approfondimento sul framework **React Native**, includendo viste statiche, visualizzazione di dati JSON e operazioni CRUD con persistenza locale.

---

## 🎯 Obiettivo del Progetto

L’obiettivo dell’elaborato è sviluppare una **Single Page Application** che:

- presenti un **approfondimento su una tecnologia web moderna** (React Native)
- sia **responsive**, **accessibile** e **mobile‑first**
- utilizzi **JavaScript lato client** senza backend
- includa **4 viste principali**, come richiesto dalle specifiche del corso:
  - 2 viste statiche di approfondimento
  - 1 vista dinamica con dati JSON
  - 1 vista dinamica con operazioni CRUD e persistenza locale

---

## 🧩 Struttura dell’Applicazione

L’applicazione è organizzata come **SPA** (Single Page Application) senza ricaricamenti di pagina, tramite **Vue Router** utilizzato in modalità CDN e **JavaScript vanilla**.

### 📄 Viste disponibili

#### 🏠 Home
Vista statica introduttiva che presenta React Native:
- cos’è e a cosa serve
- storia ed evoluzione del framework
- vantaggi principali
- contenuti testuali e immagini illustrative

Le sezioni sono **tutte visibili al caricamento** (nessuna animazione di apertura/chiusura).

---

#### 📘 API React Native
Vista di approfondimento tecnico strutturata in **sezioni statiche**, tutte visibili:

- Come funziona React Native
- Componenti
- Gestione degli stili
- Sintassi di base
- Debug e strumenti
- Esempi di codice

Caratteristiche principali:
- layout a **due colonne**
- **sidebar di segnalibri** a sinistra
- i segnalibri funzionano come **ancore** che portano alle sezioni corrispondenti
- nessuna animazione di comparsa/scomparsa delle sezioni

La sidebar resta **allineata al contenuto** ed è progettata per migliorare la navigazione interna della pagina.

---

#### 🎮 GameDex (Vista Dinamica – JSON)

Vista dinamica che mostra un catalogo di videogiochi:
- dati caricati dal file `games.json`
- visualizzazione in **tabella responsive**
- esempio di lettura e rendering dinamico di dati esterni

---

#### 📝 Inserimento Esami (CRUD + localStorage)

Vista dinamica che consente di gestire una lista di esami:

- aggiunta di nuovi esami
- modifica di esami esistenti
- eliminazione di esami
- selezione degli esami dalla lista

Caratteristiche:
- dati persistenti tramite **localStorage**
- interfaccia **statica** (nessuna animazione di apertura sezioni)
- utilizzo del **date picker nativo** del browser
- gestione dello stato tramite JavaScript

---

## 🛠️ Tecnologie Utilizzate

- **HTML5**
- **CSS3**
  - layout responsive
  - refactor del CSS per eliminare duplicazioni
  - utilizzo di **font di sistema** (nessuna dipendenza esterna)
- **JavaScript (ES6+)**
  - Vue 3 via CDN
  - Vue Router
  - gestione SPA
  - CRUD
  - localStorage
- **JSON**
  - caricamento dati esterni per la vista GameDex

> Tutte le tecnologie utilizzate sono **lato client**, come richiesto dalle specifiche del corso.

---

## 🎨 Design e Accessibilità

Il design dell’applicazione è stato progettato seguendo i criteri indicati nel corso:

- **Mobile‑first**
- **User‑centered design**
- **Accessibilità**
  - colori ad alto contrasto
  - layout chiaro e leggibile
  - gerarchia tipografica migliorata (h2 / h3)
- UI coerente tra le varie viste

---

## 💾 Persistenza dei Dati

- I dati degli esami vengono salvati nel browser tramite **localStorage**
- I dati restano disponibili anche dopo il refresh della pagina
- In assenza di dati, vengono caricati **valori di esempio**

---

## 🚀 Avvio del Progetto

1. Clonare o scaricare il progetto
2. Aprire il file `index.html` in un browser moderno

> ⚠️ Nota: per il corretto caricamento del file JSON (`games.json`), è consigliato utilizzare un **server locale** (es. Live Server di VS Code).

---

## 📊 Conformità alle Specifiche

✔ SPA client‑side  
✔ 2 viste statiche di approfondimento  
✔ 1 vista dinamica con dati JSON  
✔ 1 vista CRUD con localStorage  
✔ Navigazione senza reload  
✔ Design responsive e accessibile  
✔ Codice organizzato e commentato

---

## 👥 Autori

Progetto realizzato per il corso di **Fondamenti di Sistemi Web** da:

- **Lorenzo Billi**  
- **Enrico Poli**

Anno Accademico **2025/2026**

---

## 📌 Note Finali

Il progetto dimostra la comprensione dei concetti fondamentali di:

- Single Page Application
- gestione dello stato lato client
- manipolazione del DOM
- persistenza dei dati
- progettazione dell’esperienza utente
