<template>
    <section class="container">
<h1>🎮 GameDex</h1>

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
</section>
</template>

<script>
export default {
  data() {
    return { games: [] }
  },
  mounted() {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "data/games.json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.games = JSON.parse(xhr.responseText)
      }
    }
    xhr.send()
  }
}
</script>