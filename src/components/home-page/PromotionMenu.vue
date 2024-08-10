<template>
    <div class="promotions">
      <div class="btn-promotion">
        <button
          type="button"
          class="btn btn-dark"
          style="
            border-radius: 39px;
            margin-left: 80px;
            margin-top: 80px;
            font-size: 30px;
          "
        >
          Promotions
        </button>
        <hr/>
      </div>
      <div class="promotions-list">
        <div
          class="promotion-item"
          v-for="(promo, index) in promotions"
          :key="index"
        >
          <!-- Image Placeholder -->
          <div class="image-placeholder">
            <img src="https://via.placeholder.com/150" alt="Promotion Image"/>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  </template>
  <script>
  export default {
    name: "PromotionsMenu",
    data() {
      return {
        promotions: [1,2,3,4]
      };
    },
  };
  </script>
  
  <style scoped>
  .promotions {
    width: 100%;
  }
  .promotions hr{
    margin-top: 30px;
  }
  .btn-promotion hr {
    margin-left: 250px;
  }
  .promotions-list {
    display: flex;
    justify-content: space-between;
    margin-left: 80px;
    margin-top: 30px;
  }
  
  .promotion-item {
    width: 284px;
    background-color: #e0e0e0;
    height: 152px;
  }
  </style>
  