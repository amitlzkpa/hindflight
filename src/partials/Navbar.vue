<template>
  <div>
    <b-navbar :fixed-top="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <h2 class="subtitle has-text-primary">HindFlight</h2>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item>
          Settings
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
  }
}
</script>

<style>

</style>