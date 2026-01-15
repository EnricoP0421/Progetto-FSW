Progetto – Fondamenti dei Sistemi Web

Argomento: React Native
Tecnologie: Vue 3, JavaScript, HTML, CSS

Descrizione

Il progetto consiste nello sviluppo di una Single Page Application (SPA) interamente lato client, realizzata per il corso di Fondamenti dei Sistemi Web.
L’obiettivo è presentare un approfondimento sull’argomento React Native, combinando contenuti statici e funzionalità dinamiche.

L’applicazione è strutturata in quattro viste, come richiesto dalle specifiche del progetto.

Struttura dell’applicazione

Home
Vista statica introduttiva che presenta React Native e il contesto generale dell’applicazione.

API
Vista statica di approfondimento tecnico su React Native, con spiegazione di concetti, caratteristiche e utilizzo.

Gamedex
Vista dinamica che carica e visualizza dati provenienti da un file JSON (games.json), mostrando un elenco in formato tabellare.

Inserimento
Vista dinamica che implementa operazioni di CRUD (Create, Read, Update, Delete) su dati persistenti salvati nel localStorage del browser.

Tecnologie utilizzate

Vue 3 per la realizzazione della Single Page Application

JavaScript per la logica applicativa

HTML & CSS per struttura e stile

Vite utilizzato esclusivamente come strumento di sviluppo e build per l’esecuzione dei componenti Vue

L’applicazione rimane completamente client-side, senza backend o database.

Persistenza dei dati

I dati inseriti dall’utente nella vista “Inserimento” vengono salvati tramite localStorage, garantendo la persistenza anche dopo il refresh della pagina.

Avvio del progetto

Installare le dipendenze:

npm install


Avviare il server di sviluppo:

npm run dev

Note finali

Il progetto rispetta i vincoli del corso:

nessun backend

nessun database

utilizzo esclusivo di tecnologie lato client

struttura coerente con le specifiche fornite