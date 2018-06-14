<template>
  <div id="app">
    <cp-header></cp-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/Header.vue';

export default {
  name: 'app',
  components : {
    'cp-header': Header
  }
}
</script>

<style>

</style>
