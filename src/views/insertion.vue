<template>
  <div class="container">
    <div class="section-header">
      <span class="section-label">Gestione Esami</span>
      <h1 class="section-title">Inserimento</h1>
      <p class="section-description">
        Gestisci i tuoi esami: visualizza, aggiungi, modifica ed elimina
      </p>
    </div>

    <div class="exam-management">
      <!-- Lista esami sulla sinistra -->
      <div class="exams-list">
        <h2>Dati degli esami:</h2>
        <div class="exams-container">
          <div v-if="exams.length === 0" class="no-exams">
            <p>Nessun esame inserito</p>
          </div>
          <div 
            v-for="exam in exams" 
            :key="exam.id" 
            class="exam-item"
            :class="{ selected: selectedExam && selectedExam.id === exam.id }"
            @click="selectExam(exam)"
          >
            <div class="exam-info">
              <h3>{{ exam.name }}</h3>
              <div class="exam-details">
                <span class="exam-grade">Voto: {{ exam.grade }}</span>
                <span class="exam-date">{{ formatDate(exam.date) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form sulla destra -->
      <div class="exam-form">
        <!-- Sezione Aggiungi -->
        <div class="form-section add-section">
          <button class="section-btn add-btn" @click="toggleSection('add')">
            Aggiungi
          </button>
          <div v-if="activeSection === 'add'" class="form-content">
            <div class="form-row">
              <div class="form-group">
                <label>Corso:</label>
                <input 
                  v-model="newExam.name" 
                  type="text" 
                  placeholder="Nome del corso"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label>Voto:</label>
                <input 
                  v-model="newExam.grade" 
                  type="number" 
                  min="18" 
                  max="30" 
                  placeholder="18-30"
                  class="form-input"
                />
              </div>
            </div>
            <div class="form-group">
              <label>Data:</label>
              <input 
                v-model="newExam.date" 
                type="date" 
                class="form-input"
              />
            </div>
            <button @click="addExam" class="action-btn add-action-btn">
              Aggiungi +
            </button>
          </div>
        </div>

        <!-- Sezione Modifica -->
        <div class="form-section modify-section">
          <button class="section-btn modify-btn" @click="toggleSection('modify')">
            Modifica
          </button>
          <div v-if="activeSection === 'modify'" class="form-content">
            <div class="form-row">
              <div class="form-group">
                <label>Corso:</label>
                <input 
                  v-model="editExam.name" 
                  type="text" 
                  placeholder="Nome del corso"
                  class="form-input"
                  :disabled="!selectedExam"
                />
              </div>
              <div class="form-group">
                <label>Voto:</label>
                <input 
                  v-model="editExam.grade" 
                  type="number" 
                  min="18" 
                  max="30" 
                  placeholder="18-30"
                  class="form-input"
                  :disabled="!selectedExam"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Data:</label>
                <input 
                  v-model="editExam.date" 
                  type="date" 
                  class="form-input"
                  :disabled="!selectedExam"
                />
              </div>
              <div class="form-group">
                <label>Esame da modificare:</label>
                <input 
                  type="text" 
                  placeholder="Seleziona un esame dalla lista"
                  class="form-input"
                  :value="selectedExam ? selectedExam.name : ''"
                  disabled
                />
              </div>
            </div>
            <button 
              @click="updateExam" 
              class="action-btn modify-action-btn"
              :disabled="!selectedExam"
            >
              Modifica
            </button>
          </div>
        </div>

        <!-- Sezione Elimina -->
        <div class="form-section delete-section">
          <button class="section-btn delete-btn" @click="toggleSection('delete')">
            Elimina
          </button>
          <div v-if="activeSection === 'delete'" class="form-content">
            <div class="form-group">
              <label>Esame da eliminare:</label>
              <input 
                type="text" 
                placeholder="Seleziona un esame dalla lista"
                class="form-input"
                :value="selectedExam ? selectedExam.name : ''"
                disabled
              />
            </div>
            <button 
              @click="deleteExam" 
              class="action-btn delete-action-btn"
              :disabled="!selectedExam"
            >
              Elimina
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Insertion',
  data() {
    return {
      exams: [],
      newExam: {
        name: '',
        grade: '',
        date: ''
      },
      editExam: {
        name: '',
        grade: '',
        date: ''
      },
      selectedExam: null,
      activeSection: null,
      nextId: 1
    }
  },
  mounted() {
    // Carica i dati dal localStorage all'avvio
    this.loadFromLocalStorage()
  },
  methods: {
    toggleSection(section) {
      if (this.activeSection === section) {
        this.activeSection = null
      } else {
        this.activeSection = section
      }
    },
    selectExam(exam) {
      this.selectedExam = exam
      if (this.activeSection === 'modify') {
        this.editExam.name = exam.name
        this.editExam.grade = exam.grade
        this.editExam.date = exam.date
      }
    },
    addExam() {
      if (this.newExam.name && this.newExam.grade && this.newExam.date) {
        const grade = parseInt(this.newExam.grade)
        if (grade >= 18 && grade <= 30) {
          this.exams.push({
            id: this.nextId++,
            name: this.newExam.name,
            grade: grade,
            date: this.newExam.date
          })
          this.newExam = { name: '', grade: '', date: '' }
          this.saveToLocalStorage()
        } else {
          alert('Il voto deve essere tra 18 e 30')
        }
      } else {
        alert('Compila tutti i campi')
      }
    },
    updateExam() {
      if (this.selectedExam) {
        const grade = parseInt(this.editExam.grade)
        if (grade >= 18 && grade <= 30) {
          const index = this.exams.findIndex(e => e.id === this.selectedExam.id)
          if (index !== -1) {
            this.exams[index].name = this.editExam.name
            this.exams[index].grade = grade
            this.exams[index].date = this.editExam.date
          }
          this.selectedExam = null
          this.editExam = { name: '', grade: '', date: '' }
          this.saveToLocalStorage()
        } else {
          alert('Il voto deve essere tra 18 e 30')
        }
      }
    },
    deleteExam() {
      if (this.selectedExam) {
        const index = this.exams.findIndex(e => e.id === this.selectedExam.id)
        if (index !== -1) {
          this.exams.splice(index, 1)
        }
        this.selectedExam = null
        this.saveToLocalStorage()
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    },
    saveToLocalStorage() {
      const dataToSave = {
        exams: this.exams,
        nextId: this.nextId
      }
      localStorage.setItem('examsData', JSON.stringify(dataToSave))
    },
    loadFromLocalStorage() {
      const savedData = localStorage.getItem('examsData')
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData)
          this.exams = parsedData.exams || []
          this.nextId = parsedData.nextId || 1
        } catch (error) {
          console.error('Errore nel caricamento dei dati:', error)
          // Se ci sono errori, inizializzo con dati di esempio
          this.initializeSampleData()
        }
      } else {
        // Se non ci sono dati salvati, inizializzo con dati di esempio
        this.initializeSampleData()
      }
    },
    initializeSampleData() {
      this.exams = [
        { id: 1, name: 'Programmazione', grade: 28, date: '2024-01-15' },
        { id: 2, name: 'Elementi di Matematica per l\'Informatica', grade: 25, date: '2024-02-20' },
        { id: 3, name: 'Architettura degli Elaboratori e Sistemi Operativi', grade: 30, date: '2024-03-10' },
        { id: 4, name: 'Reti di Calcolatori e Programmazione Reti', grade: 27, date: '2024-04-05' }
      ]
      this.nextId = 5
      this.saveToLocalStorage()
    }
  }
}
</script>

<style scoped>
.exam-management {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
  align-items: start;
}

.exams-list {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(97, 218, 251, 0.1);
  position: sticky;
  top: 120px;
}

.exams-list h2 {
  font-size: 22px;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.exams-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.no-exams {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-secondary);
}

.exam-item {
  background: rgba(97, 218, 251, 0.05);
  border: 1px solid rgba(97, 218, 251, 0.1);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.exam-item:hover {
  border-color: rgba(97, 218, 251, 0.3);
  background: rgba(97, 218, 251, 0.1);
  transform: translateX(5px);
}

.exam-item.selected {
  border-color: var(--accent-blue);
  background: rgba(97, 218, 251, 0.15);
}

.exam-info h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.exam-details {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--text-secondary);
}

.exam-grade {
  font-weight: 600;
  color: var(--accent-blue);
}

.exam-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-section {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(97, 218, 251, 0.1);
}

.section-btn {
  width: 100%;
  padding: 20px 30px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  color: var(--bg-dark);
}

.add-section {
  border-color: rgba(97, 218, 251, 0.3);
}

.add-btn {
  background: linear-gradient(135deg, #61dafb, #4fb3d4);
}

.add-btn:hover {
  background: linear-gradient(135deg, #4fb3d4, #61dafb);
}

.modify-section {
  border-color: rgba(34, 197, 94, 0.3);
}

.modify-btn {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

.modify-btn:hover {
  background: linear-gradient(135deg, #16a34a, #22c55e);
}

.delete-section {
  border-color: rgba(239, 68, 68, 0.3);
}

.delete-btn {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.delete-btn:hover {
  background: linear-gradient(135deg, #dc2626, #ef4444);
}

.form-content {
  padding: 30px;
  background: var(--bg-card);
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: rgba(10, 14, 39, 0.5);
  border: 1px solid rgba(97, 218, 251, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 15px;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent-blue);
  box-shadow: 0 0 0 3px rgba(97, 218, 251, 0.1);
}

.form-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.action-btn {
  padding: 14px 30px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--bg-dark);
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.add-action-btn {
  background: linear-gradient(135deg, #61dafb, #4fb3d4);
}

.add-action-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(97, 218, 251, 0.3);
}

.modify-action-btn {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

.modify-action-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
}

.delete-action-btn {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.delete-action-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
}

@media (max-width: 1024px) {
  .exam-management {
    grid-template-columns: 1fr;
  }

  .exams-list {
    position: relative;
    top: 0;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
