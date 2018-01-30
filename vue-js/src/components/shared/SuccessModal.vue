<template>
  <div
    class="modal"
    :class="{'is-active':isVisible}"
  >
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{title}}</strong>
                <small>{{subTitle}}</small>
                <br/>
                {{text}}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <button
      class="modal-close"
      @click="onClose()"
    ></button>
  </div>

</template>

<script>

  export default {
    name: 'success-modal',
    props: {
      isVisible: {
        type: Boolean,
        required: true
      },
      onClose: {
        type: Function,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      subTitle: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
    },
    methods: {}
  }
</script>
