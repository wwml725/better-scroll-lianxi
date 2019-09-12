<template>
    <div class="VerticalLevel-container">
      <Header :back="true"></Header>

      {{msg}}
    </div>
</template>

<script>
  import Header from "../base/Header";

  export default {
  name: "VerticalLevel",
  data() {
   return {
    msg: "VerticalLevel"
   }
  },
  methods: {},
  computed: {},
  components: {Header}
 }
</script>

<style scoped>

</style>
