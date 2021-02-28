<template>
  <transition enter-active-class="animate__animated animate__bounceInLeft">
    <div
      v-show="show"
      class="request"
      :class="{ 'light-request': isDarkMode, 'dark-request': !isDarkMode }"
    >
      Don't have a Design+Code HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestAccess",
  data: function () {
    return {
      show: false,
    };
  },
  computed: {
    isDarkMode: function () {
      return this.$store.getters.isDarkMode;
    },
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style lang="scss" scoped>
</style>