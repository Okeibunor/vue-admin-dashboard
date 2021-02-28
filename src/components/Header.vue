<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <a @click="logout">Logout</a>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "Header",
  methods: {
    logout() {
      const user = auth.currentUser();
      user
        .logout()
        .then((response) => {
          console.log("User logged out" + response);
          this.$router.push({
            name: "signin",
            params: {
              userLoggedOut: true,
            },
          });
        })
        .catch((error) => {
          console.log("Failed to logout user: %o", error);
          throw error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>