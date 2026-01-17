# Fondamenti di Sistemi Web – Progetto A.A. 2024/2025

Single Page Application (SPA) realizzata per l’esame di **Fondamenti di Sistemi Web** – Università di Bologna, A.A. 2024/25.

Il progetto consiste in un’applicazione web **client-side**, accessibile e responsive, che presenta un approfondimento sul framework **React Native**, includendo viste statiche, visualizzazione di dati JSON e operazioni CRUD con persistenza locale.

---

## 🎯 Obiettivo del Progetto

L’obiettivo dell’elaborato è sviluppare una **Single Page Application** che:

- presenti un **approfondimento su una tecnologia web**
- sia **accessibile**, **responsive** e **mobile-first**
- includa **4 viste principali**, come richiesto dalle specifiche del corso:
  - 2 viste statiche di approfondimento
  - 1 vista dinamica di visualizzazione dati JSON
  - 1 vista dinamica con operazioni CRUD su dati locali (localStorage)

---

## 🧩 Struttura dell’Applicazione

L’applicazione è organizzata come SPA, senza ricaricamenti di pagina, utilizzando **JavaScript vanilla**.

### 📄 Viste disponibili

#### 🏠 Home
Vista statica che introduce React Native:
- cos’è
- storia ed evoluzione
- vantaggi principali
- contenuti testuali e immagini illustrative

#### 📘 API React Native
Vista di approfondimento strutturata in sezioni:
- Come funziona
- Componenti
- Stili
- Sintassi di base
- Debug e strumenti
- Esempi di codice

Il contenuto viene mostrato **solo dopo l’interazione dell’utente**, evitando il caricamento automatico di sezioni.

#### 🎮 GameDex (Vista Dinamica – JSON)
- Visualizzazione di dati caricati da un file JSON (`games.json`)
- Dati mostrati in formato tabellare
- Esempio di lettura e rendering dinamico di dati esterni

#### 📝 Inserimento Esami (CRUD + localStorage)
Vista dinamica che consente di:
- inserire nuovi esami
- modificare esami esistenti
- eliminare esami
- selezionare un esame dalla lista

Caratteristiche:
- dati salvati in **localStorage**
- animazioni CSS per apertura/chiusura sezioni
- interfaccia ispirata a componenti Vue, ma realizzata in **JavaScript puro**
- feedback visivo sulla selezione degli elementi

---

## 🛠️ Tecnologie Utilizzate

- **HTML5**
- **CSS3**
  - layout responsive
  - animazioni CSS
  - design mobile-first
- **JavaScript (ES6+)**
  - gestione dello stato
  - navigazione SPA
  - CRUD
  - localStorage
- **JSON**
  - caricamento dati esterni per la vista dinamica

> Tutte le tecnologie utilizzate sono **lato client**, come richiesto dalle specifiche del corso.

---

## 🎨 Design e Accessibilità

Il design dell’applicazione è stato progettato seguendo i criteri indicati nel corso:

- **Mobile First**
- **User Centered**
- **Accessibilità**
  - colori con buon contrasto
  - layout chiaro e leggibile
  - interazioni comprensibili
- UI coerente tra le varie viste

---

## 💾 Persistenza dei Dati

- I dati degli esami vengono salvati nel browser tramite **localStorage**
- I dati restano disponibili anche dopo il refresh della pagina
- In assenza di dati, vengono caricati **dati di esempio**

---

## 🚀 Avvio del Progetto

1. Clonare o scaricare il progetto
2. Aprire il file `index.html` in un browser moderno
3. Non è necessario alcun server o build tool

> ⚠️ Nota: per il corretto caricamento del file JSON (`games.json`), è consigliato aprire il progetto tramite un **server locale** (es. Live Server di VS Code).

---

## 📊 Conformità alle Specifiche

✔ SPA client-side  
✔ 2 viste statiche di approfondimento  
✔ 1 vista dinamica con dati JSON  
✔ 1 vista CRUD con localStorage  
✔ Design responsive e accessibile  
✔ Navigazione senza reload  
✔ Animazioni ed effetto WOW  

---

## 👥 Autori

Progetto realizzato per il corso di **Fondamenti di Sistemi Web** da:
Lorenzo Billi ed Enrico Poli 
Anno Accademico 2024/2025


---

## 📌 Note Finali

Il progetto dimostra la comprensione dei concetti fondamentali di:
- Single Page Application
- gestione dello stato lato client
- manipolazione del DOM
- persistenza dei dati
- progettazione dell’esperienza utente