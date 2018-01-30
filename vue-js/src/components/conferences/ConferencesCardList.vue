<template>
  <div class="container section">
    <div class="columns section">
      <div class="column is-8">
        <div class="title">Conferences</div>
      </div>
    </div>
    <div class="columns" v-for="conferenceChunk in chunkConferences">
      <div class="column is-4"
           v-for="conference in conferenceChunk">
        <router-link :to="`conference/${conference.id}`">
          <cp-conference-card :conference="conference"></cp-conference-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import ConferenceCard from './ConferenceCard.vue';
  import {split} from '../../utils';
  import {AllConferencesQuery} from './conference.apollo-query';

  export default {
    name: 'conferences',
    data() {
      return {
        allConferences: []
      }
    },
    computed: {
      chunkConferences() {
        return split(3, this.allConferences);
      }
    },
    apollo: {
      // TODO: Write AllConferencesQuery
    },
    components: {
      'cp-conference-card': ConferenceCard
    }
  }
</script>
