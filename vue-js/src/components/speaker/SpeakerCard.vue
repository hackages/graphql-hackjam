<template>
  <router-link
    :to="`/speaker/${speaker.id}`">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="speaker.picture" :alt="speaker.publicName"/>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{speaker.username}}</p>
            <p class="subtitle is-6">@{{speaker.publicName}}</p>
          </div>
        </div>
        <div class="content">
          {{speaker.bio}}
          <br/>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'SpeakerCard',
    props: {
      speaker: {
        type: Object,
        default: {}
      }
    }
  }
</script>
