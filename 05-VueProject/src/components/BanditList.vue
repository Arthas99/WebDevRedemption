<template>
  <div class="hello">
    <h3>TO WILD WILD WEST</h3>
    <div class="content">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Bounty</th>
            <th>Claimed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bandit, index) in bandits" :key="bandit.id" :index="index" :bandit="bandit">
            <td>{{bandit["_id"]}} {{ bandit.name }}</td>
            <td>{{ bandit.currency }}{{ bandit.bounty }}</td>
            <td>{{bandit.claimed}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["msg", "bandits"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 40px 0;
}
ul {
  text-align: center;
  list-style-position: inside;
}
ul li:nth-child(1) {
  color: red;
  font-size: 20px;
}
th {
  text-align: center;
}
</style>
