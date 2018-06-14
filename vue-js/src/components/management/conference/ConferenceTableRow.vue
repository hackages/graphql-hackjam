<template>
  <tr>
    <th>{{conference.id}}</th>
    <td>
      <a :href="conference.website || 'https://www.hackages.io/'" title="GraphQL Europe">
        {{conference.name}}
      </a>
    </td>
    <td>{{conference.city}}</td>
    <td>{{conference.country}}</td>
    <td>{{conference.startDate | date}}</td>
    <td>
      <router-link
        class="button is-info is-outlined"
        :to="{
          name:'secure-manage-talks-on-conference',
          params: { id: conference.id }
        }">
        Manage talks
      </router-link>
    </td>
    <td>
      <router-link
        class="button is-primary is-outlined"
        :to="{
          name:'secure-conference-form-update',
          params: { id: conference.id }
        }">
        Edit
      </router-link>
    </td>
    <td>
      <a
        class="button is-danger is-outlined"
        @click="deleteConference(conference.id)"
      >Delete</a>
    </td>
  </tr>
</template>


<script>
  import {DEFAULT_ITEMS_PER_PAGE, START_PAGE} from '../../../constant';
  import {deleteConference} from '../management.apollo-query';
  import PageHeader from '../../shared/PageHeader';
  import Table from '../../shared/Table';
  import {date} from '../../../filters';

  export default {
    name: 'conference-table-row',
    props: {
      conference: {
        type: Object,
        required: true
      },
      deleteConference: {
        type: Function
      }
    },
    data() {
      return {}
    },
    filters: {
      date,
    },
  }
</script>
