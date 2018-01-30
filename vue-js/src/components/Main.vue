<template>
  <div>
    <cp-subheader></cp-subheader>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './header/Header.vue';
  import SubHeader from './header/SubHeader.vue';

  export default {
    name: 'main',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'cp-header': Header,
      'cp-subheader': SubHeader
    }
  }
</script>
