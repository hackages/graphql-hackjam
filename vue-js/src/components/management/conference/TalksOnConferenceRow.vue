<template>
  <a
    class="panel-block"
    @click="onClick(talk.id)"
  >
<span class="panel-icon">
    <i class="fa fa-check" v-if="attending"></i>
    <i class="fa fa-user" v-if="!attending"></i>
</span>
    {{talk.title}}
  </a>
</template>

<script>
  export default {
    name: 'talks-on-conference-row',
    props: {
      attending: {
        type: Boolean
      },
      talk: {
        type: Object,
        default() {
          return {}
        }
      },
      onClick: {
        type: Function
      }
    }
  }
</script>
