<template>
  <form class="container" novalidate>
    <div class="columns is-vcentered">
      <div class="column is-4 is-offset-4">
        <h1 class="title">
          Sign in
        </h1>
        <div class="box">
          <label class="label">Email*</label>
          <p class="control">

            <input
              class="input"
              :class="{
                'is-danger':$v.credentials.email.$invalid && $v.credentials.email.$dirty
              }"
              type="email"
              placeholder="jsmith@example.org"
              @blur="$v.credentials.email.$touch()"
              v-model="credentials.email"
              required
            />
          </p>
          <label class="label">Password*</label>
          <p class="control">
            <input
              class="input"
              :class="{
                'is-danger':$v.credentials.password.$invalid && $v.credentials.password.$dirty
              }"
              type="password"
              placeholder="●●●●●●●"
              @blur="$v.credentials.password.$touch()"
              v-model="credentials.password"
              required
            />
          </p>

          <p v-if="userNotFound">
            User not found
          </p>

          <hr/>

          <p class="control">
            <button class="button is-outlined is-large is-fullwidth"
                    @click.prevent="login()" :disabled="$v.$invalid">
              Login
            </button>
          </p>
        </div>
        <p class="has-text-centered">
          <router-link to="/authentication/register" active-class="is-active">
            Register
          </router-link>
        </p>
      </div>
    </div>
  </form>

</template>
<script>
  import {login} from './authentication.apollo-query';
  import {required, email, minLength, maxLength, between} from 'vuelidate/lib/validators'
  import auth from './authentication.service';

  export default {
    data() {
      return {
        userNotFound: false,
        publicName: '',
        credentials: {
          email: '',
          password: '',
        }
      }
    },
    validations: {
      credentials: {
        email: {
          required,
          email,
          maxLength: maxLength(50),
        },
        password: {
          required,
          maxLength: maxLength(50),
          minLength: minLength(3),
        }
      }
    },
    apollo: {},
    methods: {
      login() {
        // TODO: Write login mutation and execute it
        // Replace Promise.reject() by the correct call
        Promise.reject()
          .then(({data}) => {
            this.userNotFound = false;
            this.publicName = data.signinUser.user.publicName;
            this.storePublicNameInLocalStorage(this.publicName);
            this.navigateToHome();
          })
          .catch((error) => {
            console.log(error);
            this.userNotFound = true;
          })
      },
      storePublicNameInLocalStorage(name) {
        auth.savePublicName(name);
      },
      navigateToHome() {
        this.$router.push('/');
      }
    }
  }
</script>
