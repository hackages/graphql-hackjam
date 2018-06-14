<template>
  <div>
    <cp-page-header
      :headers="['Talk', 'Speaker on Talk Management']"
    >
    </cp-page-header>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 ">
            <nav class="panel">
              <p class="panel-heading">
                Speaker List
              </p>
              <cp-speaker-on-talk-row
                v-for="speaker in speakers"
                :key="speaker.id"
                :attending="false"
                :speaker="speaker"
                :onClick="addSpeaker"
              >
              </cp-speaker-on-talk-row>

            </nav>
          </div>
          <div class="column is-4 is-offset-2">
            <nav class="panel">
              <p class="panel-heading">
                Talk Speaker
              </p>
              <cp-speaker-on-talk-row
                :attending="true"
                :speaker="speakerOnTalk"
                :onClick="deleteSpeaker"
                v-if="speakerOnTalk"
              >
              </cp-speaker-on-talk-row>

              <a class="panel-block" v-if="!speakerOnTalk">
                No speaker yet on this talk
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getSpeakers, updateTalkSpeaker} from '../management.apollo-query';
  import SpeakerOnTalkRow from './SpeakerOnTalkRow.vue';
  import PageHeader from '../../shared/PageHeader.vue';

  export default {
    name: 'speaker-on-talk',
    data() {
      return {
        speakerOnTalk: {}
      };
    },
    apollo: {
      // TODO: Write getSpeakers
    },
    methods: {
      async addSpeaker(speakerId) {
        try {
          const talkId = this.$route.params.id;
          // TODO: Write updateTalkSpeaker
          // Replace Promise.reject() by the correct call

          await Promise.reject();

          this.speakerOnTalk = this.speakers.find(speaker => speaker.id === speakerId)
        } catch (e) {

        }
      },
      async deleteSpeaker() {
        const talkId = this.$route.params.id;

        try {
          // TODO: Write updateTalkSpeaker
          // Replace Promise.reject() by the correct call

          await Promise.reject();

          this.speakerOnTalk = undefined;

        } catch (e) {
          throw new Error('Could not delete speaker on talk', e);
        }

      }
    },
    components: {
      'cp-speaker-on-talk-row': SpeakerOnTalkRow,
      'cp-page-header': PageHeader
    }
  }
</script>
