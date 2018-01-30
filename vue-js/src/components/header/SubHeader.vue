<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <p class="title">
              Conference planner
            </p>
            <p class="subtitle">
              The <strong>ultimate </strong> conference planner in town
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <div class="container">
        <nav class="tabs is-boxed">
          <ul>
            <router-link tag="li" to="/" exact active-class="is-active">
              <a>Conferences</a>
            </router-link>
            <router-link tag="li" to="/secure/conferences" active-class="is-active">
              <a>Conference Management</a>
            </router-link>
            <router-link tag="li" to="/secure/talks" active-class="is-active">
              <a>Talks management</a>
            </router-link>
          </ul>
        </nav>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: 'subheader'
  }
</script>
