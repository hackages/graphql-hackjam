<template>
  <div>
    <cp-page-header
      :headers="['Conference', 'Talks on Conference Management']"
    >
    </cp-page-header>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 ">
            <nav class="panel">
              <p class="panel-heading">
                Talk List
              </p>
              <cp-talks-on-conference-row
                v-for="talk in talks"
                :key="talk.id"
                :attending="false"
                :talk="talk"
                :onClick="addTalk"
              >
              </cp-talks-on-conference-row>

            </nav>
          </div>
          <div class="column is-4 is-offset-2">
            <nav class="panel">
              <p class="panel-heading">
                Conference Talks
              </p>
              <cp-talks-on-conference-row
                v-for="talk in talksOnConference"
                :key="talk.id"
                :attending="true"
                :talk="talk"
                :onClick="deleteTalk"
              >
              </cp-talks-on-conference-row>

              <a class="panel-block" v-if="!talksOnConference.length">
                No talks yet on this conference
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getAllTalksWithConferences, updateTalksOnConference} from '../management.apollo-query';
  import TalksOnConferenceRow from './TalksOnConferenceRow.vue';
  import PageHeader from '../../shared/PageHeader.vue';

  export default {
    name: 'talks-on-conference',
    data() {
      return {
        talksOnConference: []
      }
    },
    apollo: {
      // TODO: Write getAllTalksWithConferences
    },
    methods: {
      async addTalk(talkId) {
        // TODO: Write updateTalksOnConference
        // Replace Promise.reject() by the correct call
        try {
          await Promise.reject();

          const addedTalk = this.talks.find(talk => talk.id === talkId);
          this.talksOnConference = this.talksOnConference.concat(addedTalk);
        } catch (e) {
          throw new Error('Could not add speaker on talk', e);
        }
      },
      async deleteTalk(talkId) {

        try {
          const talks = this.talksOnConference.map(talk => talk.id)
            .filter(id => id !== talkId);

          // TODO: Write updateTalksOnConference
          // Replace Promise.reject() by the correct call

          await Promise.reject();

          this.talksOnConference = this.talksOnConference.filter(talk => talk.id !== talkId);
        } catch (e) {
          throw new Error('Could not delete speaker on talk', e);
        }

      }
    },
    components: {
      'cp-talks-on-conference-row': TalksOnConferenceRow,
      'cp-page-header': PageHeader
    }
  }
</script>
