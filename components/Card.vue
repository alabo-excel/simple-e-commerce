<template>
  <div>
    <img :src="product.image" :alt="product.title" class="product-image" />
    <p class="title">{{ product.title }}</p>
    <p class="price"> ${{ product.price }}</p>
    <button @click="handleAddToCart" class="btn">Add to cart</button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/index'; // Adjust path to your cart store

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const cartStore = useCartStore();
const handleAddToCart = () => {
  cartStore.addToCart(props.product);
};
</script>

<style>
.card {
  width: 32%;
  margin: 20px 0px;
}

.product-image {
  width: 100%;
  height: 306px;
  object-fit: cover;
}


.btn {
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  padding: 10px;
  background-color: #2A54C7;
}

.price {
  color: #787879;
  font-size: 16px;
  margin: 5px 1px !important;
}

.title {
  font-size: 16px;
  font-weight: 700;
  margin: 1px 1px !important;
}
</style>