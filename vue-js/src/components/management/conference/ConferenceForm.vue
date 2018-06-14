<template>
  <div>

    <cp-page-header
      :headers="['Conferences', 'Management', this.idParam ? 'Update' : 'Add']"
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
              <label class="label">City*</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.conferenceForm.city.$invalid && $v.conferenceForm.city.$dirty
                  }"
                  type="text"
                  placeholder="Text input"
                  @blur="$v.conferenceForm.city.$touch()"
                  v-model="conferenceForm.city"
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Country iso-code*</label>
              <span>Please choose a alpha-3 from : https://fr.wikipedia.org/wiki/ISO_3166-1</span>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.conferenceForm.country.$invalid && $v.conferenceForm.country.$dirty
                  }"
                  type="text"
                  placeholder="Text input"
                  @blur="$v.conferenceForm.country.$touch()"
                  v-model="conferenceForm.country"
                  required
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Description*</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.conferenceForm.description.$invalid && $v.conferenceForm.description.$dirty
                  }"
                  type="text"
                  placeholder="A cool description"
                  @blur="$v.conferenceForm.description.$touch()"
                  v-model="conferenceForm.description"
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Start date*</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.conferenceForm.startDate.$invalid && $v.conferenceForm.startDate.$dirty
                  }"
                  type="text"
                  placeholder="01/01/2017"
                  @blur="$v.conferenceForm.startDate.$touch()"
                  v-model="conferenceForm.startDate"
                  required
                />
              </p>
            </div>
            <div class="field">
              <label class="label">End date*</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.conferenceForm.endDate.$invalid && $v.conferenceForm.endDate.$dirty
                  }"
                  type="text"
                  placeholder="01/01/2017"
                  @blur="$v.conferenceForm.endDate.$touch()"
                  v-model="conferenceForm.endDate"
                  required
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Logo*</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.conferenceForm.logo.$invalid && $v.conferenceForm.logo.$dirty
                  }"
                  type="text"
                  placeholder="http://image-google.png"
                  @blur="$v.conferenceForm.logo.$touch()"
                  v-model="conferenceForm.logo"
                  required
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Name*</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.conferenceForm.name.$invalid && $v.conferenceForm.name.$dirty
                  }"
                  type="text"
                  placeholder="My Conference"
                  @blur="$v.conferenceForm.name.$touch()"
                  v-model="conferenceForm.name"
                  required
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Website</label>
              <p class="control">
                <input
                  class="input"
                  :class="{
                    'is-danger':$v.conferenceForm.website.$invalid && $v.conferenceForm.website.$dirty
                  }"
                  type="text"
                  placeholder="http://my-website.com"
                  @blur="$v.conferenceForm.website.$touch()"
                  v-model="conferenceForm.website"
                />
              </p>
            </div>

            <div class="field is-grouped">
              <p class="control">
                <button
                  class="button"
                  :class="{'is-danger':$v.$error , 'is-info':!$v.$error}"
                  :disabled="$v.error"
                  @click.prevent="submitConference()"
                >
                  <span v-if="!idParam">Add</span>
                  <span v-if="idParam">Update</span>
                </button>
              </p>
              <p class="control">
                <a routerLink="/secure/conferences" class="button is-link">Cancel</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
  import PageHeader from '../../shared/PageHeader';
  import SuccessModal from '../../shared/SuccessModal';
  import {required, url, sameAs, email, minLength, maxLength} from 'vuelidate/lib/validators'
  import {withParams} from 'vuelidate'
  import moment from 'moment';
  import {getConference, updateConference, addConference} from '../management.apollo-query';
  import {DEFAULT_DATE_FORMAT} from '../../../constant';
  import {formatDate, toISOString} from '../../../utils';
  import {isDateBefore, isDateAfter, datePattern} from '../../../validators';


  export default {
    name: 'conference-form',
    data() {
      return {
        showModalSuccess: false,
        conferenceForm: {
          city: '',
          country: '',
          description: '',
          startDate: '',
          endDate: '',
          logo: '',
          name: '',
          website: '',
        }
      }
    },
    validations: {
      conferenceForm: {
        city: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(25),
        },
        country: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(200)
        },
        description: {
          required,
          minLength: minLength(10),
          maxLength: maxLength(200)
        },
        startDate: {
          required,
          minLength: minLength(10),
          maxLength: maxLength(10),
          datePattern,
          isDateBefore: isDateBefore('endDate'),

        },
        endDate: {
          required,
          minLength: minLength(10),
          maxLength: maxLength(10),
          datePattern,
          isDateAfter: isDateAfter('startDate')
        },
        logo: {
          required,
          minLength: minLength(10),
          maxLength: maxLength(250),
          url
        },
        name: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(100)
        },
        website: {
          required,
          maxLength: maxLength(250),
          url
        },
      }
    },
    apollo: {
      // TODO: Write getConference
    },
    computed: {
      idParam() {
        return this.$route.params.id;
      },
      successModalText: function () {
        const state = this.idParam ? 'updated' : 'added';
        return `The conference has successfully been ${state}`;
      }
    },
    methods: {
      submitConference() {
        const variables = {
          ...this.conferenceForm,
          id: this.idParam,
          startDate: toISOString(this.conferenceForm.startDate),
          endDate: toISOString(this.conferenceForm.endDate)
        };

        // TODO: Write updateConference and addConference
        // Replace Promise.reject() by the correct call
        Promise.reject()
          .then(({data}) => {
            this.showModalSuccess = true;
          })
          .catch((err) => {
            console.log(err);
          });
      },
      onClose() {
        this.showModalSuccess = false;
      }
    },
    components: {
      'cp-page-header': PageHeader,
      'cp-success-modal': SuccessModal,
    }
  }
</script>
