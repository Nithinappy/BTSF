<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">
          <img
            src="https://getbootstrap.com//docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          BTS
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link class="nav-link active" aria-current="page" to="/"
                >Home</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/Admin/Login"
                >AdminLogin
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/User/Registration"
                >UserRegistration
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/User/Login">UserLogin</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/About">AboutUs</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/Contact">ContactUs</nuxt-link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
</style>
