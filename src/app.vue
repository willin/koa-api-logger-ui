<template>
  <div id="main">
    <h1>Koa-Api-Logger-UI</h1>
    <ul class="nav">
      <li v-for="(app, index) in apps" :key="index">
        <router-link :to="app">{{app}}</router-link>
      </li>
    </ul>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: null,
      apps: null
    }
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open('GET', '/api/apps');
      xhr.onload = function () {
        try {
          self.apps = JSON.parse(xhr.responseText);
          if(self.$route.path === '/'){
            self.$router.push(self.apps[0]);
          }
        } catch(err) {

        }
      }
      xhr.send();
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
  }
}
</script>

<style lang="stylus">
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

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
  color: #42b983;
}
</style>
