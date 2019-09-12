<template>
  <div class="LevelRoolling-container">
    <Header :back="true"></Header>
    {{msg}}
  </div>
</template>

<script>
  import Header from "../base/Header";


  export default {
    name: "LevelRoolling",
    data() {
      return {
        msg: "LevelRoolling"
      }
    },
    methods: {},
    computed: {},
    components: {Header}
  }
</script>

<style scoped>

</style>
