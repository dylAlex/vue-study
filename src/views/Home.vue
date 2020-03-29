<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <p @click="$store.commit('add')">{{$store.state.count}}</p>
    <p @click="$store.dispatch('asyncAdd')">async:{{$store.state.count}}</p>
    <p>doubleCount:{{$store.getters.doubleCount}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
