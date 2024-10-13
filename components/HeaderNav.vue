<template>
  <div class="hero">
    <NuxtLink href="/">
      <h2>Logo</h2>
    </NuxtLink>
    <div class="links">

      <p>Electronics</p>
      <p>Health & Beauty</p>
      <p>Home & Office</p>
      <p>Computing</p>
    </div>
    <div class="buttons">
      <div class="search">
        <input type="text" placeholder="Search">
        <img src="/assets/search.png" class="search-icon" alt="">
      </div>
      <div class="buttons">
        <img src="/assets/user.png" alt="">
        <p>Account</p>
      </div>
      <NuxtLink href="/cart" class="buttons">
        <div class="buttons">
          <div v-if="totalQuantity || totalQuantity >= 1" class="count"> {{ totalQuantity }} </div>
          <img src="/assets/cart.png" alt="">
          <p>Cart</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/index';

const cartStore = useCartStore();

const totalQuantity = computed(() => cartStore.totalQuantity);

</script>
<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  padding: 10px 60px;
  border-bottom: 1px solid #E8E8E8;
}

.links {
  display: flex;
  justify-content: space-between;
}


.links p {
  margin: auto 15px;
}

.search input {
  padding: 10px 10px 10px 35px;
  border-radius: 10px;
  border: 2px solid #E7EAF4;
  margin: auto 10px;
}

.search {
  position: relative;
  margin: auto 0px;
}

.buttons {
  position: relative;
  display: flex;
}

.buttons img {
  width: 20px;
  height: 20px;
  margin: auto 10px;
}

.buttons p {
  margin: auto 0px;
}

.count {
  background-color: red;
  color: white;
  border-radius: 100%;
  text-align: center;
  padding-top: 2px;
  font-size: 12px;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 30px;
  top: 10px;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 10px;
}

@media (max-width: 768px) {
  .links {
    display: none;
  }

  .search {
    display: none;
  }

  .hero {
    padding: 1px 10px;
  }
}
</style>