<template>
  <div>
    <AppHeader />
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card p-4 mt-5">
          <div class="card-header text-center bg-info mb-3">
            <h3>User Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="formData.email"
                />
              </div>
              <div class="form-group">
                <label for="passcode">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="passcode"
                  v-model="formData.passcode"
                />
              </div>
              <div class="text-center mt-4">
                <button type="submit" class="btn btn-warning">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      formData: {
        email: this.email,
        passcode: this.passcode,
      },
    };
  },

  head() {
    return {
      title: "User Login Page",
      meta: [
        {
          hid: "LoginPage",
          name: "LoginPage",
          content: "User Can Login Here",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>