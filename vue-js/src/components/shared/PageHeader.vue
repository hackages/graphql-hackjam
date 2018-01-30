<template>
  <div class="section product-header">
    <div class="container">
      <div class="columns">
        <div class="column">
          <template v-for="(header, index) of headers ">
             <span class="title is-3" v-if="index===0">
              {{header}}
             </span>

            <span class="title is-3 has-text-muted" v-if="index!==0 && pipe">&nbsp;|&nbsp;</span>
            <span class="title is-4 has-text-muted" v-if="index!==0 ">
               {{header}}
            </span>
          </template>
          <slot>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'page-header',
    props: {
      headers: {
        type: Array,
        required: true
      },
      pipe: {
        type: Boolean,
        default: true
      },
    },
  }
</script>
