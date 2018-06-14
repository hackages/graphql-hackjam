<template>
  <nav class="nav">
    <div class="nav-left">
      <router-link to="/" class="nav-item">
        <img
          src="https://cdn-images-1.medium.com/max/600/1*RCeGDSIqqW68bS5kYucTvA.png"
          alt="GraphQL logo"/>
        Conference planner
      </router-link>
    </div>

    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div class="nav-right nav-menu" v-if="!authUser.authenticated">
      <div class="nav-item">
        <div class="field is-grouped">
          <p class="control">
            <router-link class="button"
                         to="/authentication/register">
               <span class="icon">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </span>
              <span>Register</span>
            </router-link>
          </p>
          <p class="control">
            <router-link class="button" to="/authentication/login">
                <span class="icon">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </span>
              <span>Login</span>
            </router-link>
          </p>
        </div>
      </div>
    </div>

    <div class="nav-right nav-menu" v-if="authUser.authenticated">
      <div class="nav-item">
        <span>{{publicName}}</span>
        <div class="field is-grouped">
          <p class="control">
            <button class="button" @click="logout()">
               <span class="icon">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </span>
              <span>Logout</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import auth from '../authentication/authentication.service';

  auth.checkAuth();

  export default {
    name: 'header',
    data() {
      return {
        authUser: auth.user,
      }
    },
    computed: {
      publicName() {
        return auth.getPublicName();
      }
    },
    methods: {
      logout() {
        auth.removePublicName();
        this.$router.push('/');
      }
    }
  }
</script>
