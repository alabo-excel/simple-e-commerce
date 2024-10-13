<template>
  <div class="explore-container">
    <div class="heading">
      <div class="line"></div>
      <p>More items to explore</p>
    </div>
    <div class="container">
      <div class="card" v-for="product in products.slice(1, 4)" :key="product.id">
        <Card :product="product" />
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
.explore-container{
  margin: 50px 90px;
}

@media (max-width: 600px) {
  .explore-container{
    margin: 10px;
  }
}
</style>