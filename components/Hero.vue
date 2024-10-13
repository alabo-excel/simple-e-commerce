<template>
  <div class="">
    <img class="img" src="/assets/hero-img.png" alt="">
    <div class="overlay">
      <h1>New Arrivals in Computing</h1>
      <button class="btn">Shop now</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
<style scoped>
.overlay {
  position: absolute;
  top: 150px;
  width: 100%;
  text-align: center;
}

.img {
  width: 100%;
}

.btn {
  background-color: #2A54C7;
  border-radius: 10px;
  border: none;
  padding: 13px 20px;

  color: white;
}

@media (max-width: 768px) {
  .hero {
    max-height: 500px;
  }
  .img{
    height: 400px;
    width: 100%;
    object-fit: cover;
  }

  .hero-btn {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>