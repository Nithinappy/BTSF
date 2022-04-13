<template>
  <div>
    <AppHeader />
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card p-4 mt-5">
          <div class="card-header text-center text-dark bg-info mb-3">
            <h3>User Registration</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="UserRegistration">
              <div class="form-group">
                <label for="user_name">User Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="user_name"
                  v-model="formData.user_name"
                />
              </div>
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
              <div class="form-group">
                <label for="mobile">Mobile</label>
                <input
                  type="tel"
                  class="form-control"
                  id="mobile"
                  v-model="formData.mobile"
                />
              </div>
              <div class="text-center mt-4">
                <button type="submit" class="btn btn-primary">Register</button>
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
  head() {
    return {
      title: "User Registration Page",
      meta: [
        {
          hid: "RegistrationPage",
          name: "RegistrationPage",
          content: "User Can Registration Here",
        },
      ],
    };
  },
  data() {
    return {
      formData: {
        user_name: this.user_name,
        email: this.email,
        passcode: this.passcode,
        mobile: this.mobile,
      },
    };
  },
};
</script>

<style scoped>
</style>