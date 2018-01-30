<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="title is-4 has-text-muted">
              {{talk.description}}
            </p>
            <hr/>
            <p class="title is-4">
              Speaker :
            </p>
            <div class="columns">
              <div class="column is-3" v-if="talk.speaker">
                <cp-speaker-card
                  :speaker="talk.speaker"
                >
                </cp-speaker-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getTalkById} from './talk.apollo-query';
  import {utils} from '../../utils';
  import SpeakerCard from '../speaker/SpeakerCard.vue';

  export default {
    name: 'TalkDetails',
    data: () => ({
      talk: {}
    }),
    computed: {
      chunkSpeaker: function () {
        return split(3, this.talk.speakers);
      }
    },
    apollo: {
      // TODO: Write getTalkById
    },
    components: {
      'cp-speaker-card': SpeakerCard
    }
  }
</script>
