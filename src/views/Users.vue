<template>
  <div class="hello">
    <h1>Users list (Ajax)</h1>

    <ul v-if="users">
      <li v-for="user in users" v-bind:key="user.id">
        <router-link :to="`/users/${user.id}`">
          {{ user.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'posts',
  data () {
    return {
      users: null
    }
  },
  created () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.users = json
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

a {
  color: #35495E;
}
</style>
