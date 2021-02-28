<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccess />
    <Notification :text="text" v-if="hasText" />
    <div class="login">
      <img v-show="isDarkMode" src="@/assets/logo.svg" />
      <img v-show="!isDarkMode" src="@/assets/logo-dark.svg" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Design+Code HQ
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
        <input
          required
          aria-required="true"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <button type="submit">Sign In</button>
      </form>
      <router-link
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        to="/recover"
        >Forgot your password?</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccess from "@/components/RequestAccess";
import Notification from "@/components/Notification";
import ThemeSwitch from "@/components/ThemeSwitch";
import { auth } from "@/main";

export default {
  name: "Signin",
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
    Notification,
    RequestAccess,
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        .then((response) => {
          const authData = response;
          localStorage.setItem("authData", JSON.stringify(authData));
          this.$router.replace("/");
        })
        .catch((error) => (this.error = error));
    },
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out";
    } else if (params.userRecoveredAccount) {
      this.hasText = true;
      this.text = `A recovery email has been sent to ${params.email}`;
    } else if (params.userRequestedAccount) {
      this.hasText = true;
      this.text = `Your request has been sent to an administrator for ${params.email}`;
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