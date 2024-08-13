<template>
  <NavBar />
  <div class="all-service" style="background-color: #f8f7f5">
    <div class="service-page" style="padding-left: 50px">
      <div class="ps-5 py-5" style="margin-top: 60px;">
        <h1>Our Loans</h1>
        <div class="service-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .
          </p>
        </div>
        <div class="service-img-1" style="margin-top: 30px">
          <img src="../assets/service/first-img.png" alt="" />
        </div>
        <div class="loan-service" style="text-align: center; margin-top: 50px">
          <h1>Our Loan Services</h1>
          <p class="" style="padding: 30px; margin-right: 100px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .
          </p>
        </div>

        <div
          class="service-card"
          style="
            display: flex;
            flex-wrap: wrap;
            margin-left: -15px;
            padding: 20px 0;
          "
        >
          <div class="micro-card">
            <div class="card-content">
              <div
                class="card-header"
                style="display: flex; justify-content: space-between"
              >
                <h3 class="card-title">Micro & Small Loan</h3>
                <router-link to="/"
                  ><img src="../assets/service/link.png" alt=""
                /></router-link>
              </div>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod Lorem ipsum dolor sit amet, consectetur.
              </p>
              <img src="../assets/service/third-img.png" alt="Image" />
            </div>
          </div>
          <div class="micro-card">
            <div class="card-content">
              <div
                class="card-header"
                style="display: flex; justify-content: space-between"
              >
                <h3 class="card-title">Micro & Small Loan</h3>
                <img src="../assets/service/link.png" alt="" />
              </div>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod Lorem ipsum dolor sit amet, consectetur.
              </p>
              <img src="../assets/service/scend-img.png" alt="Image" />
            </div>
          </div>
        </div>
        <div class="row" style="justify-content: center">
          <div
            class="micro-card col-lg-8 mb-4"
            style="max-width: 900px; margin-left: -200px"
          >
            <div class="card-content">
              <div
                class="card-header"
                style="display: flex; justify-content: space-between"
              >
                <h3 class="card-title">Micro & Small Loan</h3>
                <img src="../assets/service/link.png" alt="" />
              </div>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod Lorem ipsum dolor sit amet, consectetur.
              </p>
              <img src="../assets/service/5-img.png" alt="Image" style="width: 100%;"/>
            </div>
          </div>
          <div class="micro-card col-lg-4 mb-4" style="max-width: 500px">
            <div class="card-content">
              <div
                class="card-header"
                style="display: flex; justify-content: space-between"
              >
                <h3 class="card-title">Micro & Small Loan</h3>
                <img src="../assets/service/link.png" alt="" />
              </div>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod Lorem ipsum dolor sit amet, consectetur.
              </p>
              <img
                src="../assets/service/four-img.png"
                style="width: 100%"
                alt="Image"
              />
            </div>
          </div>
        </div>

        <div
          class="news-section"
          style="margin-top: 50px; position: relative; display: inline-block"
        >
          <img src="../assets/service/6-img.png" alt="" />
          <div
            class="description"
            style="
              position: absolute;
              top: 75%;
              right: 30%;
              border-bottom-left-radius: 30px;
              border-bottom-right-radius: 30px;
              background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
              color: white;
              padding: 20px;
              
            "
          >
            <h1>Housing Loan</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>
    </div>
    <FooTer></FooTer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import FooTer from "@/components/FooTer.vue";

export default {
  components: {
    NavBar,
    FooTer,
  },
};
</script>

<style>
.service-description {
  width: 85%;
  margin-top: 30px;
}
.micro-card {
  background-color: #fff;
  border-radius: 30px;
  width: 625px;
  margin: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
}
.card-content,
.news-card-content {
  padding: 30px;
}
</style>
