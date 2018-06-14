<template>
  <nav class="level is-mobile">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Speakers</p>
        <p class="title">{{speakersCount}}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Attendees</p>
        <p class="title">{{attendeesCount}}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Sponsors</p>
        <p class="title">{{sponsorsCount}}</p>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'ConferenceDetailsHeader',
    props: {
      speakersCount: {
        default: 0,
        type: Number
      },
      attendeesCount: {
        default: 0,
        type: Number
      },
      sponsorsCount: {
        default: 0,
        type: Number
      },
    }
  }
</script>
