#!/bin/bash

echo "🚀 Setup Progetto FSW"
echo "===================="
echo ""

# Controlla se Node.js è installato
if ! command -v node &> /dev/null
then
    echo "❌ Node.js non è installato!"
    echo "📥 Scaricalo da: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js versione: $(node --version)"
echo "✅ npm versione: $(npm --version)"
echo ""

# Installa dipendenze
echo "📦 Installazione dipendenze..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installazione completata!"
    echo ""
    echo "🎉 Tutto pronto! Avvia il progetto con:"
    echo ""
    echo "   npm run dev"
    echo ""
else
    echo "❌ Errore durante l'installazione"
    exit 1
fi
