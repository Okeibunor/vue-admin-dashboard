<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <transition
      name="slide-in-right"
      enter-active-class="animate__animated animate__slideInRight"
    >
      <div
        v-show="show"
        class="request"
        :class="{ 'light-request': isDarkMode, 'dark-request': !isDarkMode }"
      >
        Don't have a Design+Code HQ account?
        <router-link to="signup">Request an account</router-link>
      </div>
    </transition>

    <div class="login">
      <img v-show="isDarkMode" src="@/assets/logo.svg" />
      <img v-show="!isDarkMode" src="@/assets/logo-dark.svg" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Design+Code HQ
      </h4>
      <input
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="email"
        placeholder="Email"
      />
      <input
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="password"
        placeholder="Password"
      />
      <button>Sign In</button>
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
import ThemeSwitch from "@/components/ThemeSwitch";
export default {
  name: "Signin",
  data() {
    return {
      show: false,
    };
  },
  components: {
    ThemeSwitch,
  },
  mounted() {
    this.show = true;
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