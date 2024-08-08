<template>
  <NavBar />
  <div class="home" style="background-color: black">
    <div class="card-container">
      <div class="card-body">
        <div class="card text-white bg-dark">
          <div class="title">
            <h1
              style="
                font-size: 64px;
                font-weight: 700;
                line-height: 77.45px;
                text-align: left;
              "
            >
              Smart Finance <br />
              Solutions for Your <br />
              Business
            </h1>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              quod. Odio nisi laboriosam, <br />
              expedita itaque iste corrupti eum voluptates?Nostrum quas <br />
              maxime soluta molestias dolorum earum eos deserunt qui architecto.
            </p>
          </div>
          <div class="button-container">
            <div class="button">
              <button
                type="button"
                class="btn"
                style="border-radius: 32px; background-color: #3b53a4"
              >
                Get Started
              </button>
            </div>
            <div class="button">
              <button
                type="button"
                class="btn btn-primary"
                style="border-radius: 32px; background-color: black"
              >
                Get Started
              </button>
            </div>
          </div>
          <!-- the image on the right side-->
          <!-- <div class="image">
          <img src="../assets/image/photo_2024-08-07_14-23-47.jpg" alt="">
        </div> -->
        </div>
        <hr />
        <div class="banking-services">
          <h2>
            Our Banking <br />
            Services
          </h2>
          <div class="view-all">
            <a href="#">View All Services</a>
          </div>
        </div>
        <div class="services">
          <div class="service">
            <div class="service-content">
              <div class="icon">
                <img
                  src="path/to/mobile-banking-icon.png"
                  alt="Mobile Banking Icon"
                />
              </div>
              <h3>Mobile Banking</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="arrow-link">&rarr;</a>
            </div>
          </div>
          <div class="service">
            <div class="service-content">
              <div class="icon">
                <img
                  src="path/to/saving-account-icon.png"
                  alt="Saving Account Icon"
                />
              </div>
              <h3>Saving Account</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="arrow-link">&rarr;</a>
            </div>
          </div>
          <div class="service">
            <div class="service-content">
              <div class="icon">
                <img src="path/to/deposit-icon.png" alt="Deposit Icon" />
              </div>
              <h3>Deposit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="arrow-link">&rarr;</a>
            </div>
          </div>
          <div class="service">
            <div class="service-content">
              <div class="icon">
                <img
                  src="path/to/business-loans-icon.png"
                  alt="Business Loans Icon"
                />
              </div>
              <h3>Business Loans</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="arrow-link">&rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>
<style>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #f8f7f5;
}
.card-body {
  margin-left: 10px;
}
.card {
  border-radius: 32px 0px 0px 0px;
  padding: 70px;
  margin-top: 30px;
  width: 1318px;
  height: 720px;
  left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  flex-grow: 0;
}
.content {
  flex-grow: 1;
  margin-top: 30px;
}
.button-container {
  display: flex;
  gap: 16px;
  margin-top: 30px;
}
.button {
  flex: 0 0 auto;
}
.banking-services {
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  margin: auto;
  /* background-color: #003366;  */
  margin-left: 80px;
  margin-top: 20px;
}
.services {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 800px;
  margin: auto;
  /* background-color: #003366; */
  margin-right: 60px;
}

.service {
  padding: 20px;
  border-radius: 8px;
  flex: 1 1 calc(50% - 20px);
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
}
.service .icon {
  margin-right: 20px;
}

.service .icon img {
  width: 40px;
  height: 40px;
}

.arrow-link {
  text-decoration: none;
  color: #003366;
  font-weight: bold;
  font-size: 35px;
}
</style>
