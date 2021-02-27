<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <img
            src="@/assets/slack.png"
            alt="slack image"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Slack
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Messaging app for all team communication
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
          ><img
            src="@/assets/contentful.png"
            alt="contentful image"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Contentful
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Content Management System
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
          ><img
            src="@/assets/notion.png"
            alt="notion image"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Notion
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            All in one Workspace
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
          ><img
            src="@/assets/figma.png"
            alt="figma image"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Figma
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Collaborative design tool
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
          ><img
            src="@/assets/dropbox.png"
            alt="dropbox image"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Dropbox
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Storage space in the cloud
          </p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode: function () {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 25px;
}

h2 {
  @include heading-2;
}

h3 {
  @include heading-3;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  margin-top: 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

@mixin transition {
  @for $i from 1 through 5 {
    &:nth-child(#{$i}) {
      animation-delay: #{$i * 0.5}s;
    }
  }
}

.card {
  width: 100%;
  max-width: 300px;
  margin: 20px;
  height: 400px;
  border-radius: 10px;
  @include transition;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-gray;
}
.dark-header {
  background: #283049;
}
</style>