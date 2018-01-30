<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="title is-3 has-text-muted">
              {{speaker.bio}}
            </p>
            <hr/>
            <p class="title is-4">
              Talks :
            </p>

            <div class="columns" v-for="talks in chunkTalks">
              <div class="column is-6" v-for="talk in talks">
                <cp-talk-card
                  :talk="talk"
                >
                </cp-talk-card>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {getSpeakerById} from './speaker.apollo-query';
  import {split} from '../../utils';
  import TalkCard from '../talk/TalkCard.vue';

  export default {
    name: 'SpeakerDetails',
    data() {
      return {
        speaker: {}
      };
    },
    computed: {
      chunkTalks() {
        return split(3, this.speaker.talks);
      }
    },
    apollo: {
      // TODO: Write getSpeakerById
    },
    components: {
      'cp-talk-card': TalkCard
    }
  }
</script>
