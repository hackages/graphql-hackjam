<template>
  <div>
    <cp-page-header
      :headers="['Talks', 'List']">
    <span class="title is-4 is-info is-pulled-right ">
      <router-link class="icon is-large" to="/secure/talk">
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
              <cp-talk-table-row v-for="talk in talks"
                                 :talk="talk"
                                 :deleteTalk="deleteTalk"
                                 :key="talk.id">
              </cp-talk-table-row>
            </cp-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import PageHeader from '../../shared/PageHeader.vue';
  import Table from '../../shared/Table.vue';
  import TalkTableRowItem from './TalkTableRowItem.vue';
  import {DEFAULT_ITEMS_PER_PAGE, START_PAGE} from '../../../constant';
  import {deleteTalk, getAllTalks} from '../management.apollo-query';

  export default {
    name: 'talks',
    data() {
      return {
        amountPerPage: DEFAULT_ITEMS_PER_PAGE,
        total: 0,
        pageNumber: START_PAGE,
      }
    },
    computed: {
      skip() {
        return (this.pageNumber - 1) * this.amountPerPage;
      }
    },
    apollo: {
      // TODO: Write getAllTalks
    },
    methods: {
      navigateToPage(pageNumber) {
        this.pageNumber = pageNumber;
      },
      deleteTalk(id) {
        // TODO: Write deleteTalk
        // Replace Promise.reject() by the correct call
        Promise.reject()
          .then(({data}) => this.refetchAllTalks(DEFAULT_ITEMS_PER_PAGE))
          .then(({data}) => {
            this.pageNumber = 1;
            this.total = data._allTalksMeta.count;
          });
      },
      refetchAllTalks(first, skip = 0) {
        // TODO: implement a fetchMore for the queries talks
        // Replace Promise.reject() by the correct call
        return Promise.reject();
      },
    },
    components: {
      'cp-page-header': PageHeader,
      'cp-table': Table,
      'cp-talk-table-row': TalkTableRowItem
    }
  }
</script>
