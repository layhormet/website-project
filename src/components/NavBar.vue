<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid px-5 py-2">
      <h1
        style="
          font-size: 40px;
          font-style: italic;
          font-weight: 800;
          line-height: 48.41px;
          text-align: left;
        "
      >
        <span style="color: black;">LO</span>
        <span style="color: #3b53a4;">GO</span>
      </h1>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/service">Service</router-link></li>
        <li><router-link to="/LSWallet">LS Wallet</router-link></li>
        <li><router-link to="/SelfBanking">Self Banking</router-link></li>
        <li><router-link to="/promotion">Promotion</router-link></li>
        <li><router-link to="/news">News</router-link></li>
      </ul>
      <div
        class="btn-class"
        style="width: 160px; display: flex; justify-content: space-between"
      >
        <button @click="navigateToRoute" type="button" class="btn btn-lg text-white" style="border-radius: 32px; background-color: #3b53a4">
          Contact Us
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  methods: {
    navigateToRoute() {
      this.$router.push('/contact');
    },
  },
};
</script>

<style scoped>
nav {
  background: #ffffff;
}

nav a {
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: 2px;
  color: #3B53A4;

}

ul {
  margin-right: 100px;
}

li {
  display: inline-block;
  margin: 0 30px;
}

a {
  color: black;
}
</style>