<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <h1
          style="
            font-size: 40px;
            font-style: italic;
            font-weight: 800;
            line-height: 48.41px;
            text-align: left;
          "
        >
          <span style="color: white">LO</span>
          <span style="color: #3b53a4">GO</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Self Banking</a></li>
            <li><a href="#">Promotion</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Self Banking</a></li>
            <li><a href="#">Promotion</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Self Banking</a></li>
            <li><a href="#">Promotion</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright @Rozajesmine | Designed by Rozajesmine</p>
      <div class="social-icons">
        <a href="#" class="social-icon">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-telegram-plane"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooTer",
};
</script>

<style scoped>
.footer {
  background-color: black;
  color: #fff;
  padding: 70px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: 80px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-logo {
  flex: 1;
  max-width: 300px;
  margin-bottom: 20px;
}
.footer-links {
  display: flex;
  justify-content: space-around;
  flex: 1;
  gap: 5px;
  margin-left: 150px;
}
.footer-column {
  flex: 1;
  min-width: 150px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-top: 1px solid #454040;
  padding-top: 10px;
}
.footer-bottom p {
  margin: 0;
  font-size: 12px;
}
.social-icons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: blue;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}
</style>
