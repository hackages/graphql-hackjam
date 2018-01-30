<template>
  <div>
    <cp-page-header
      :headers="['Talks', 'Management', this.idParam ? 'Update' : 'Add']"
    >
    </cp-page-header>

    <cp-success-modal
      title="Success"
      subTitle=""
      :isVisible="showModalSuccess"
      :on-close="onClose"
      :text="successModalText">
    </cp-success-modal>

    <form
      novalidate
      class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">Title*</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.talkForm.title.$invalid && $v.talkForm.title.$dirty
                  }"
                  type="text"
                  placeholder="Talk title"
                  @blur="$v.talkForm.title.$touch()"
                  v-model="talkForm.title"
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Description*</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.talkForm.description.$invalid && $v.talkForm.description.$dirty
                  }"
                  type="text"
                  placeholder="An awesome talk"
                  @blur="$v.talkForm.description.$touch()"
                  v-model="talkForm.description"
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Room</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.talkForm.room.$invalid && $v.talkForm.room.$dirty
                  }"
                  type="text"
                  placeholder="A 41b"
                  @blur="$v.talkForm.room.$touch()"
                  v-model="talkForm.room"
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Starts at*</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.talkForm.startsAt.$invalid && $v.talkForm.startsAt.$dirty
                  }"
                  type="text"
                  placeholder="12:00"
                  @blur="$v.talkForm.startsAt.$touch()"
                  v-model="talkForm.startsAt"
                />
              </p>
            </div>

            <div class="field is-grouped">
              <p class="control">
                <button
                  class="button"
                  :class="{'is-danger':$v.$error , 'is-info':!$v.$error}"
                  :disabled="$v.error"
                  @click.prevent="submitTalk()"
                >
                  <span v-if="!idParam">Add</span>
                  <span v-if="idParam">Update</span>
                </button>
              </p>
              <p class="control">
                <router-link to="/secure/talks" class="button is-link">Cancel</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
  import PageHeader from '../../shared/PageHeader.vue';
  import moment from 'moment';
  import {DEFAULT_TIME_FORMAT} from '../../../constant';
  import {formatTime} from '../../../utils';
  import {timePattern} from '../../../validators';
  import {addTalk, getTalk, updateTalk} from '../management.apollo-query';
  import {required, url, sameAs, email, minLength, maxLength} from 'vuelidate/lib/validators'
  import {withParams} from 'vuelidate'
  import SuccessModal from '../../shared/SuccessModal.vue';

  export default {
    name: 'talk-form',
    data() {
      return {
        showModalSuccess: false,
        talkForm: {
          title: '',
          description: '',
          room: '',
          startsAt: ''
        }
      }
    },
    computed: {
      idParam() {
        return this.$route.params.id;
      },
      successModalText: function () {
        const state = this.idParam ? 'updated' : 'added';
        return `The talk has successfully been ${state}`;
      }
    },
    apollo: {
      // TODO: Write getTalk
    },
    methods: {
      onClose() {
        this.showModalSuccess = false;
      },
      submitTalk() {
        const variables = {
          ...this.talkForm,
          id: this.idParam,
          startsAt: moment(this.talkForm.startsAt, DEFAULT_TIME_FORMAT).toISOString(),
        };

        // TODO: Write updateTalk and addTalk
        // Replace Promise.reject() by the correct call
        Promise.reject()
          .then(({data}) => {
            this.showModalSuccess = true;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    validations: {
      talkForm: {
        title: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(25),
        },
        description: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(200)
        },
        room: {
          minLength: minLength(3),
          maxLength: maxLength(10),
        },
        startsAt: {
          required,
          timePattern
        },
      }
    },
    components: {
      'cp-page-header': PageHeader,
      'cp-success-modal': SuccessModal
    }
  }
</script>
