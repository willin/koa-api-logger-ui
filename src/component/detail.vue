<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>path</th>
          <th>Total</th>
          <th>success</th>
          <th>Min</th>
          <th>Max</th>
          <th>Avg</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.key }}</td>
          <td>{{ item.data.count }}</td>
          <td>{{ item.data.success }}</td>
          <td>{{ item.data.min }}</td>
          <td>{{ item.data.max }}</td>
          <td>{{ item.data.avg }}</td>
        </tr>
      </tbody>
    </table>
  </div> 
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      data: null
    }
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open('GET', '/api/' + this.$route.params.app);
      xhr.onload = function () {
        try {
          self.data = JSON.parse(xhr.responseText);
        } catch(err) {

        }
      }
      xhr.send();
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<<style lang="stylus">
.table
  width:100%;

.router-link-exact-active
  color: red
</style>
