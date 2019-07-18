<template>
  <div id="app">
    <p>
    <router-link to="/Element01">Go to Element01</router-link>
    </p>
    <transition>
      <router-view/>
    </transition>
    <!-- <Element01></Element01> -->
  </div>
</template>

<script>


export default {
  name: "app",
  components: {
    //Element01
  }
};
</script>

