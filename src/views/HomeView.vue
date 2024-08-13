<template>
  <NavBar />
  <div class="home">
    <div class="card-container">
      <div class="card-body">
        <div
          class="card text-white bg-black"
          style="
            padding: 70px;
            border-radius: 32px;
            width: 1318px;
            height: 720px;
            margin-top: 150px;
          "
        >
          <div class="home-title d-flex">
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                quod. Odio nisi laboriosam, <br />
                expedita itaque iste corrupti eum voluptates?Nostrum quas <br />
                maxime soluta molestias dolorum earum eos deserunt qui
                architecto.
              </p>
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
            <div class="image" style="margin-left: 150px">
              <img src="../assets/image/Frame 9.png" alt="" />
            </div>
          </div>
        </div>
        <div class="linner" style="margin: 80px 150px">
          <hr />
        </div>
        <div class="banking-services">
          <h2>Our Banking <br />Services</h2>
          <br />
          <!-- <a href="">View All Services</a> -->
          <div class="services">
            <div class="service">
              <div class="service-content">
                <div class="icon" style="margin-bottom: 15px">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/banking-service/32/bank_services_approved-256.png"
                    alt="Mobile Banking Icon"
                  />
                </div>
                <h3>Mobile Banking</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" class="arrow-link">&rarr;</a>
              </div>
            </div>
            <div class="service">
              <div class="service-content">
                <div class="icon" style="margin-bottom: 15px">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/banking-service/32/bank_services_approved-256.png"
                    alt="Saving Account Icon"
                  />
                </div>
                <h3>Saving Account</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" class="arrow-link">&rarr;</a>
              </div>
            </div>
            <div class="service">
              <div class="service-content">
                <div class="icon" style="margin-bottom: 15px">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/banking-service/32/bank_services_approved-256.png"
                    alt="Deposit Icon"
                  />
                </div>
                <h3>Deposit</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" class="arrow-link">&rarr;</a>
              </div>
            </div>
            <div class="service">
              <div class="service-content">
                <div class="icon" style="margin-bottom: 15px">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/banking-service/32/bank_services_approved-256.png"
                    alt="Business Loans Icon"
                  />
                </div>
                <h3>Business Loans</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" class="arrow-link">&rarr;</a>
              </div>
            </div>
          </div>
        </div>
        <div class="future-banking" style="display: flex">
          <div class="phone-img" style="margin-left: 100px; margin-top: 20px">
            <img src="../assets/image/phone.png" alt="" />
          </div>
          <div
            class="title"
            style="
              max-width: 500px;
              margin-left: 400px;
              height: 200px;
              margin-top: 20px;
            "
          >
            <h1>The Future of Banking at <br />Your Fingertips</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              similique numquam sapiente odio dolorum voluptas fugiat et,
              officiis enim amet temporibus alias.
            </p>
            <button
              type="button"
              class="btn btn-dark"
              style="border-radius: 32px; margin-top: 30px"
            >
              Download Now
            </button>
          </div>
        </div>
        <div class="section-container bg-black">
          <!-- Section Title -->
          <h1 class="section-title">Opening Bank Account Easier</h1>
          <!-- Section Subtitle -->
          <p class="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .
          </p>

          <div class="row">
            <div class="col-md-4 feature">
              <img src="icon.png" alt="Download App" />
              <h3 class="feature-title">Download App</h3>
              <p class="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <!-- Second Feature -->
            <div class="col-md-4 feature">
              <img src="icon.png" alt="Create Your Account" />
              <h3 class="feature-title">Create Your Account</h3>
              <p class="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <!-- Third Feature -->
            <div class="col-md-4 feature">
              <img src="icon.png" alt="Start Banking" />
              <h3 class="feature-title">Start Banking</h3>
              <p class="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
        <PromotionsMenu></PromotionsMenu>
        <LastedNews></LastedNews>
        <FooTer></FooTer>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import FooTer from "@/components/FooTer.vue";
import PromotionsMenu from "@/components/home-page/PromotionMenu.vue";
import LastedNews from "@/components/home-page/LastedNews.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    FooTer,
    PromotionsMenu,
    LastedNews,
  },
};
</script>
<style>
.title {
  display: flex;
  flex-wrap: wrap;
}
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #f8f7f5;
}
.card {
  border-radius: 32px;
  padding: 70px;
  margin-top: 30px;
  width: 1318px;
  height: 720px;
  left: 80px;
}

.button-container {
  display: flex;
  gap: 16px;
  margin-top: 30px;
}

.banking-services {
  display: flex;
  max-width: 3000px;
  margin: auto;
  margin-left: 90px;
}
.banking-services h2 {
  font-size: 48px;
}
.services {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 850px;
  margin: auto;
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

.service .icon img {
  width: 40px;
  height: 40px;
}
.arrow-link {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 35px;
}

.section-container {
  padding: 70px;
  text-align: center;
  border-radius: 32px;
  width: 1318px;
  height: 720px;
  margin: 0 auto;
}

.section-title {
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
  font-size: 64px;
}

.section-subtitle {
  font-size: 16px;
  margin-bottom: 40px;
  color: white;
  max-width: 600px;
  margin-left: 300px;
}

.feature-title {
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
}
.feature-description {
  font-size: 16px;
  color: white;
  max-width: 250px;
  margin-left: 80px;
}
</style>
