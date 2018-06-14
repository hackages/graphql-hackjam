<template>
  <router-link
    :to="`/talk/${talk.id}`">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{talk.title}}</p>
          </div>
        </div>
        <div class="content">
          {{talk.description.slice(0, 150)}}

          {{talk.description.length > 150 ? '...' : ''}}
          <hr/>
          <div class="columns">
            <div class="column is-6">
              <small>{{talk.room}}</small>
            </div>
            <div class="column is-6">
              <small>{{startsAt}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
  import moment from 'moment';
  import {formatDate} from '../../utils';

  export default {
    name: 'TalkCard',
    props: {
      talk: {
        type: Object,
        default: {}
      }
    },
    computed: {
      startsAt() {
        return formatDate(this.talk.startsAt);
      }
    }
  }
</script>
