<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccess />
    <div class="login">
      <img v-show="isDarkMode" src="@/assets/logo.svg" />
      <img v-show="!isDarkMode" src="@/assets/logo-dark.svg" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Recover Account
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          requireds
          aria-required="true"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="email"
          placeholder="Email"
          v-model="email"
        />

        <button type="submit">Send Email</button>
      </form>
      <router-link
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        to="/signin"
        >Already have an account? Sign in now</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccess from "@/components/RequestAccess";
import ThemeSwitch from "@/components/ThemeSwitch";
import { auth } from "@/main";

export default {
  name: "Recover",
  data() {
    return {
      email: null,
      password: null,
      error: null,
      hasText: false,
      text: "",
    };
  },
  components: {
    ThemeSwitch,
    RequestAccess,
  },
  methods: {
    onSubmit() {
      const email = this.email;
      auth
        .requestPasswordRecovery(email)
        .then((response) => {
          this.$router.push({
            name: "signin",
            params: {
              userRecoveredAccount: true,
              message: response,
              email: email,
            },
          });
        })
        .catch((error) =>
          console.log("Error sending recovery mail: %o", error)
        );
    },
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out";
    }
  },
  computed: {
    isDarkMode: function () {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 0;
}
.login {
  width: 400px;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
}
.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white !important;
  }
}
.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: black !important;
  }
}
</style>