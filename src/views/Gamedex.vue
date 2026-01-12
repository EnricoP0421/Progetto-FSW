<template>
    <section class="container">
<h1 class="section-title">GameDex</h1>


<table>
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
        <tr v-for="g in games" :key="g.id">
  <td data-label="ID">{{ g.id }}</td>
  <td data-label="Titolo">{{ g.titolo }}</td>
  <td data-label="Genere">{{ g.genere }}</td>
  <td data-label="Anno">{{ g.anno }}</td>
  <td data-label="Piattaforma">{{ g.piattaforma }}</td>
  <td data-label="Sviluppatore">{{ g.sviluppatore }}</td>
  <td data-label="Valutazione">{{ g.valutazione }}</td>
  <td data-label="Modalità">{{ g.modalita }}</td>
</tr>
      </tbody>
</table>
</section>
</template>

<script>
export default {
  data() {
    return { games: [] }
  },

  mounted() {
  fetch('/games.json')
    .then(r => r.json())
    .then(data => this.games = data)
}
}
</script>
<style scooped>
  .container{
  max-width:1200px;
  margin:120px auto 80px;
  padding:0 40px;
}

h1{
  font-size:90px;
  font-weight:1000;
  color:#7dd3fc;
  margin-bottom:30px;
  display:flex;
  align-items:center;
  gap:12px;
  text-align:center;
  justify-content:center;
}

table{
  width:100%;
  border-collapse:separate;
  border-spacing:0 12px;
}

thead th{
  text-align:left;
  font-size:13px;
  text-transform:uppercase;
  letter-spacing:.12em;
  color:#64748b;
  padding:12px 18px;
}

tbody tr{
  background:linear-gradient(135deg,#0f172a,#020617);
  border-radius:18px;
  box-shadow:0 0 0 1px rgba(148,163,184,.05);
  transition:.3s;
}

tbody tr:hover{
  transform:translateY(-4px) scale(1.01);
  box-shadow:0 12px 35px rgba(0,0,0,.45),
             0 0 0 1px rgba(125,211,252,.2);
}

tbody td{
  padding:18px;
  font-size:15px;
  color:#e5e7eb;
}

tbody td:first-child{
  border-radius:18px 0 0 18px;
  color:#7dd3fc;
  font-weight:700;
}

tbody td:last-child{
  border-radius:0 18px 18px 0;
}

tbody tr td:nth-child(2){
  font-weight:600;
  color:#f8fafc;
}

@media(max-width:900px){
  table, thead, tbody, tr, td, th{
    display:block;
  }

  thead{
    display:none;
  }

  tbody tr{
    padding:18px;
  }

  tbody td{
    padding:6px 0;
  }

  tbody td::before{
    content:attr(data-label);
    display:block;
    color:#64748b;
    font-size:11px;
    text-transform:uppercase;
    margin-bottom:2px;
  }
}
</style>