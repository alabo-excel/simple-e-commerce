<template>
  <section>
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else class="product">
      <div class="container">
        <div class="product-image-section">
          <p class="breadcrumb">Home / Category / {{ product.category }}</p>
          <img :src="product.image" alt="" class="product-image" />
        </div>
        <div class="product-details">
          <h1 class="product-title">{{ product.title }}</h1>
          <button class="btn">Add to cart</button>
          <h3 class="product-details-heading">Product details</h3>
          <p class="product-description">{{ product.description }}</p>
        </div>
      </div>
    </div>
    <Explore />
  </section>
</template>

<script setup lang="ts">
import { fetchProducts, Product } from '@/services/products';
const products = ref<Product[]>([]);
const loading = ref<boolean>(true);
const product = ref<Product | null>(null);
const route = useRoute()

onMounted(async () => {
  try {
    products.value = await fetchProducts();
    const filteredProduct = products.value.find((cartItem) => cartItem.id === parseInt(route.params.id));
    product.value = filteredProduct || null;
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* Global Styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.product {
  margin: 20px auto;
  max-width: 1200px;
  padding: 0 20px;
}

.btn {
  width: 100%;
  padding: 10px;
  margin: 20px 0px;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.breadcrumb {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.product-image-section {
  flex: 1;
  max-width: 50%;
}

.product-image {
  width: 100%;
  max-width: 500px;
  height: 400px;
  object-fit: contain;
  border-radius: 8px;
  padding: 10px;
}

.product-details {
  flex: 1;
  padding-left: 20px;
  margin: auto 0px;
}

.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.product-details-heading {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #444;
}

.product-description {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .product-image-section,
  .product-details {
    max-width: 100%;
  }

  .product-details {
    padding-left: 0;
  }

  .product-title {
    font-size: 22px;
  }

  .product-description {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .breadcrumb {
    font-size: 12px;
  }

  .product-title {
    font-size: 20px;
  }

  .product-details-heading {
    font-size: 18px;
  }

  .product-description {
    font-size: 13px;
  }
}
</style>
