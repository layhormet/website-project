<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid ">
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
        <li>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle" href="/service" id="serviceDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Service
            </a>
            <ul class="dropdown-menu" aria-labelledby="serviceDropdown">
              <li><a class="dropdown-item" href="/service">Service</a></li>
              <li><a class="dropdown-item" href="/LSWallet">Card</a></li>
              <li><a class="dropdown-item" href="/currentaccount">Current Account</a></li>
            </ul>
          </div>
        </li>
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
.navbar{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
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

.dropdown-menu {
  min-width: 200px;
  background-color: #1235a880;
  color: white;
}
</style>