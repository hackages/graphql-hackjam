<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <cp-conference-details-header
            :attendeesCount="conference.attendeesCount.count"
            :sponsorsCount="conference.sponsorsCount.count"
            :speakersCount="conference.speakerCount"
          >
          </cp-conference-details-header>
          <p class="title is-3 has-text-muted">
            <!--Conference description-->
            {{conference.description}}
          </p>
          <hr>
          <br>
          <p class="title is-4">
            Talks :
          </p>
          <!--Conference talks-->

          <div class="columns" v-for="talks in talkChunk">
            <div class="column is-6" v-for="talk in talks">
              <cp-talk-card
                :talk="talk"
              ></cp-talk-card>
            </div>
          </div>
          <hr>

          <p class="title is-4">
            Speakers :
          </p>

          <!--Conference Speakers-->
          <div class="columns" v-for="speakersChunk in speakerChunk">
            <div class="column is-6" v-for="speaker in speakersChunk">
              <cp-speaker-card
                :speaker="speaker"
              ></cp-speaker-card>
            </div>
          </div>
          <hr>
          <!--Conference sponsors-->
          <p class="title is-4 is-spaced">
            Sponsors :
          </p>
          <!--Conference sponsors : GOLD-->
          <p class="subtitle is-5">GOLD</p>
          <cp-sponsor-box
            v-for="sponsor in conference.goldSponsors"
            key="$index"
            :picture="sponsor.entreprise.logo"
            :name="sponsor.entreprise.name"
            :description="sponsor.entreprise.description"
          >
          </cp-sponsor-box>

          <br>
          <!--Conference sponsors : SILVER-->
          <p class="subtitle is-5">SILVER</p>
          <cp-sponsor-box
            v-for="sponsor in conference.silverSponsors"
            key="$index"
            :picture="sponsor.entreprise.logo"
            :name="sponsor.entreprise.name"
            :description="sponsor.entreprise.description"
          >
          </cp-sponsor-box>
          <br>
          <!--Conference sponsors : BRONZE-->
          <p class="subtitle is-5">BRONZE</p>
          <cp-sponsor-box
            v-for="sponsor in conference.bronzeSponsors"
            key="$index"
            :picture="sponsor.entreprise.logo"
            :name="sponsor.entreprise.name"
            :description="sponsor.entreprise.description"
          >
          </cp-sponsor-box>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {split} from '../../utils';
  import ConferenceDetailsHeader from './ConferenceDetailsHeader';
  import TalkCard from '../talk/TalkCard.vue';
  import SpeakerCard from '../speaker/SpeakerCard.vue';
  import SponsorBox from '../shared/SponsorBox.vue';
  import {DetailedConferenceQuery} from './conference.apollo-query';

  export default {
    name: 'cp-conference-details',
    data() {
      return {
        conference: {
          talks: [],
          speakers: [],
          attendeesCount: {},
          sponsorsCount: {},
          goldSponsors: []
        }
      };
    },
    computed: {
      talkChunk: function () {
        return split(2, this.conference.talks)
      },
      speakerChunk: function () {
        return split(2, this.conference.speakers)
      }
    },
    apollo: {
      // TODO: Write DetailedConferenceQuery
    },
    components: {
      'cp-conference-details-header': ConferenceDetailsHeader,
      'cp-talk-card': TalkCard,
      'cp-speaker-card': SpeakerCard,
      'cp-sponsor-box': SponsorBox
    },
  }
</script>
