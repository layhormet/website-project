<template>
  <NavBar />
  <div class="service-page">
    <div class="all-service">
      <div class="about-serve">
        <h1>Over Loans</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptates facere dolores tempora molestias, quia facilis nobis error velit quaerat reprehenderit quasi? Consectetur aut rerum saepe quo natus pariatur quae?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id consequuntur delectus ullam inventore molestiae harum provident. Quis alias aliquam, unde rerum minus possimus iusto, doloremque dolorem sint nihil expedita dignissimos.</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.service-page {
  background-color: #f8f7f5;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}
.all-service{
  background-color: aqua;
  margin: 0 50px ;
}




</style>