<template>
  <a
    class="panel-block"
    @click="onClick(speaker.id)"
  >
    <span class="panel-icon">
        <i class="fa fa-check" v-if="attending"></i>
        <i class="fa fa-user" v-if="!attending"></i>
    </span>
    {{speaker.publicName}}
  </a>
</template>

<script>
  export default {
    name: 'speaker-on-talk-row',
    props: {
      attending: {
        type: Boolean
      },
      speaker: {
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
