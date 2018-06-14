<template>
  <form class="container">
    <div class="columns is-vcentered">
      <div class="column is-4 is-offset-4">
        <h1 class="title">
          Register an Account
        </h1>
        <div class="box">
          <label class="label">Username*</label>
          <p class="control">
            <input
              class="input"
              :class="{'is-danger':$v.registerForm.username.$invalid && $v.registerForm.username.$dirty}"
              type="text"
              placeholder="jsmith"
              @blur="$v.registerForm.username.$touch()"
              v-model="registerForm.username"
              required
            />
          </p>
          <label class="label">Tweet handle*</label>
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                @
              </a>
            </p>
            <p class="control">
              <input
                class="input"
                :class="{'is-danger':$v.registerForm.publicName.$invalid && $v.registerForm.publicName.$dirty}"
                type="text"
                placeholder="jsm"
                required
                @blur="$v.registerForm.publicName.$touch()"
                v-model="registerForm.publicName"
              />
            </p>
          </div>
          <label class="label">Picture*</label>
          <p class="control">
            <input
              class="input"
              :class="{'is-danger':$v.registerForm.picture.$invalid && $v.registerForm.picture.$dirty}"
              type="text"
              placeholder="https://graphql.org/image/lee-byron.jpg"
              required
              @blur="$v.registerForm.picture.$touch()"
              v-model="registerForm.picture"
            />
          </p>
          <label class="label">Email*</label>
          <p class="control">
            <input
              class="input"
              :class="{'is-danger':$v.registerForm.email.$invalid && $v.registerForm.email.$dirty}"
              type="email"
              placeholder="jsmith@example.org"
              required
              @blur="$v.registerForm.email.$touch()"
              v-model="registerForm.email"
            />
          </p>
          <hr/>
          <label class="label">Password*</label>
          <p class="control">
            <input
              class="input"
              :class="{
                'is-danger':$v.registerForm.password.$invalid && $v.registerForm.password.$dirty
              }"
              type="password"
              placeholder="●●●●●●●"
              @blur="$v.registerForm.password.$touch()"
              v-model="registerForm.password"
              required
            />
          </p>
          <label class="label">Confirm Password*</label>
          <p class="control">
            <input
              class="input"
              :class="{'is-danger':$v.registerForm.passwordConfirmation.$invalid && $v.registerForm.passwordConfirmation.$dirty}"
              type="password"
              placeholder="●●●●●●●"
              @blur="$v.registerForm.passwordConfirmation.$touch()"
              v-model="registerForm.passwordConfirmation"
              required
            />
          </p>
          <hr/>
          <label class="label">Bio*</label>
          <p class="control">
            <textarea
              class="textarea"
              :class="{'is-danger':$v.registerForm.bio.$invalid && $v.registerForm.bio.$dirty}"
              placeholder="Hi"
              @blur="$v.registerForm.bio.$touch()"
              v-model="registerForm.bio"
              required
            >
            </textarea>
          </p>
          <hr/>
          <p v-if="alreadyExist">
            User is already exist in database
          </p>
          <p class="control">
            <button
              class="button is-outlined is-large is-fullwidth"
              :disabled="$v.$invalid"
              :class="{'is-danger':$v.$error , 'is-info':!$v.$error}"
              @click.prevent="submit()"
            >Register
            </button>
          </p>
        </div>
        <div class="section forgot-password">
          <p class="has-text-centered">
            <router-link to="/authentication/login">
              Login
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </form>


</template>
<script>
  import {registerUser} from './authentication.apollo-query';
  import {required, url, sameAs, email, minLength, maxLength, between} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        publicName: '',
        alreadyExist: false,
        registerForm: {
          username: '',
          publicName: '',
          picture: '',
          email: '',
          password: '',
          passwordConfirmation: '',
          bio: '',

        }
      }
    },
    validations: {
      registerForm: {
        username: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20),
        },
        publicName: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20),
        },
        picture: {
          required,
          maxLength: maxLength(250),
          url
        },
        email: {
          required,
          maxLength: maxLength(100),
          email
        },
        password: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(250),
        },
        passwordConfirmation: {
          required,
          maxLength: maxLength(250),
          sameAsPassword: sameAs('password')

        },
        bio: {
          required,
        },
      }
    },
    apollo: {},
    methods: {
      submit() {
        const {passwordConfirmation, ...userData} = this.registerForm;

        // TODO: Write registerUser mutation and execute it
        // Replace Promise.reject() by the correct call

        Promise.reject()
          .then(({data}) => {
            this.alreadyExist = false;
            this.publicName = this.registerForm.publicName;
            this.navigateToLoginPage();
          })
          .catch((error) => {
            this.alreadyExist = true;
          });
      },
      navigateToLoginPage() {
        this.$router.push('/authentication/login');
      }
    }
  }
</script>
