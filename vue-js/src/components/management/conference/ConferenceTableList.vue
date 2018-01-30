<template>
  <div>
    <cp-page-header
      :headers="['Conferences', 'List']">
    <span class="title is-4 is-info is-pulled-right ">
      <router-link class="icon is-large" to="/secure/conference">
                <i class="fa fa-plus-circle"></i>
      </router-link>
      </span>
    </cp-page-header>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <cp-table
              :labels="['ID', 'Name', 'City', 'Country', 'Start Date']"
              :amountPerPage="amountPerPage"
              :total="total"
              :pageNumber="pageNumber"
              :navigateToPage="navigateToPage"
            >
              <cp-conference-table-row v-for="conference of conferences"
                                       :conference="conference"
                                       :deleteConference="deleteConference"
                                       :key="conference.id">
              </cp-conference-table-row>
            </cp-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {DEFAULT_ITEMS_PER_PAGE, START_PAGE} from '../../../constant';
  import {deleteConference, getAllConferences} from '../management.apollo-query';
  import ConferenceTableRow from './ConferenceTableRow';
  import PageHeader from '../../shared/PageHeader';
  import Table from '../../shared/Table';

  export default {
    name: 'conference',
    data() {
      return {
        conferences: [],
        amountPerPage: DEFAULT_ITEMS_PER_PAGE,
        total: 0,
        pageNumber: START_PAGE,
      }
    },
    apollo: {
      // TODO: Write getAllConferences
    },
    computed: {
      skip() {
        return (this.pageNumber - 1) * this.amountPerPage;
      }
    },
    methods: {
      deleteConference(id) {
        // TODO: Write deleteConference mutation and execute it
        // Replace Promise.reject() by the correct call

        Promise.reject()
          .then(({data}) => this.refetchAllConferences(DEFAULT_ITEMS_PER_PAGE))
          .then(({data}) => {
            this.pageNumber = 1;
            this.total = data._allConferencesMeta.count;
          });
      },
      refetchAllConferences(first, skip = 0) {
        // TODO: implement a fetchMore for the queries conference
        // Replace Promise.reject() by the correct call
        return Promise.reject();
      },
      navigateToPage(pageNumber) {
        this.pageNumber = pageNumber;
      }
    },
    components: {
      'cp-page-header': PageHeader,
      'cp-table': Table,
      'cp-conference-table-row': ConferenceTableRow,
    }
  }
</script>
