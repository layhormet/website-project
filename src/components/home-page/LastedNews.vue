<template>
  <div class="title-last-news">
    <h1>Latest News & Articles</h1>
    <div class="view-all">
      <a href="#">View All Services</a>
    </div>
  </div>
  <div class="card-news">
    <div class="news-card">
      <div class="card-1">
        <div class="news-card-content">
          <h2 class="news-card-title">Lasted News</h2>
          <hr/>
          <p class="news-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod Lorem ipsum dolor sit amet, consectetur.
          </p>
          <img src="../../assets/image/lasted-news1.png" alt="News Image" />
          <p class="news-card-date">March 20, 2024</p>
        </div>
      </div>
    </div>
    <div class="news-card2">
      <div class="card-1">
        <div class="news-card-content">
          <h2 class="news-card-title">Lasted News</h2>
          <hr />
          <p class="news-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet.
          </p>
          <img src="../../assets/image/lasted-news1.png" alt="News Image" />
          <p class="news-card-date">March 20, 2024</p>
        </div>
      </div>
    </div>
    <div class="news-card3">
      <div class="card-1">
        <div class="news-card-content">
          <h2 class="news-card-title">Lasted News</h2>
          <hr/>
          <p class="news-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet.
          </p>
          <img src="../../assets/image/lasted-news1.png" alt="News Image" />
          <p class="news-card-date">March 20, 2024</p>
        </div>
      </div>
    </div>
    <div class="news-card">
      <div class="card1">
        <div class="news-card-content">
          <h2 class="news-card-title">Lasted News</h2>
          <hr />
          <p class="news-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod Lorem ipsum dolor sit amet, consectetur.
          </p>
          <img src="../../assets/image/lasted-news1.png" alt="News Image" />
          <p class="news-card-date">March 20, 2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastedNews",
};
</script>

<style>
.title-last-news {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1400px;
  margin-top: 30px;
  margin-left: 60px;
}

.card-news {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 10px;

}

.news-card3,
.news-card2 {
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(36, 34, 34, 0.1);
  border-radius: 32px;
  overflow: hidden;
  margin: 20px;
}

.news-card {
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  overflow: hidden;
  max-width: 550px;
  margin: 20px;
}

.news-card img {
 
  object-fit: cover;
  width: 510px;
  height: 280px;
  border-radius: 30px;
  margin-top: 20px;
}

.news-card3 img,
.news-card2 img {
  object-fit: cover;
  width: 710px;
  height: 350px;
  border-radius: 30px;
  margin-top: 20px;
 
}

.news-card-content {
  padding: 20px;
}

.news-card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.news-card-text {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.news-card-date {
  font-size: 14px;
  text-align: right;
  margin-top: 10px;
}
</style>