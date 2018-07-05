<template>
  <div v-if="user" class="hello">
    <h1>User details : {{ user.name }} (ajax)</h1>
    <h2>Name: {{ user.name }}</h2>
    {{user.username}}<br/>
    {{user.email}}
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      user: null
    }
  },
  created () {
    fetch('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
      .then(response => response.json())
      .then(json => {
        this.user = json
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

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }
</style>
