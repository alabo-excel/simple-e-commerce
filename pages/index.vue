<template>
  <div class="home">
    <Hero />
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else class="container-main">
      <div class="heading">
        <div class="line"></div>
        <p>Best sellers</p>
      </div>
      <div class="container">
        <div class="card" v-for="product in products" :key="product.id">
          <Card :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchProducts, Product } from '@/services/products';
const products = ref<Product[]>([]);
const loading = ref<boolean>(true);

onMounted(async () => {
  try {
    products.value = await fetchProducts();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>
<style scoped>
.home {
  padding: 20px 60px;
}

.line {
  background-color: #2A54C7;
  width: 2px;
  margin-right: 10px;
  height: 30px;
  margin: auto 10px auto 0px;
}

.heading {
  display: flex;
}

.heading p {
  font-size: 20px;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.container-main {
  margin-top: 50px;
  padding: 50px;
}

@media (max-width: 1024px) {
  .card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .card {
    width: 100%;
  }

  .home {
    padding: 10px;
  }

  .container-main {
    padding: 10px;
  }

  .heading p {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .heading p {
    font-size: 16px;
  }

  .price {
    font-size: 16px;
  }

  .title {
    font-size: 14px;
  }

  .btn {
    padding: 8px;
  }
}
</style>