<template>
  <div class="cart-card">
    <img :src="item.image" alt="">
    <div class="container">
      <div class="flex">
        <div>
          <p>{{ item.title }}</p>
          <p @click="removeDataCard" class="remove">Remove item</p>
        </div>
        <div>
          <p>${{ item.price }}</p>
          <p></p>
        </div>
      </div>
      <div class="flex">
        <div class="quantity">
          <p>Qty:</p>
          <button class="count" @click="removeData">-</button>
          <input class="qty" v-model="quantity" type="number" @change="cartStore.updateQuantity(item.id, quantity)">
          <button class="count" @click="addData">+</button>
        </div>
        <strong>$ {{ item.price * quantity }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/index'; // Adjust path to your cart store
const cartStore = useCartStore();


const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  removeDataCard: Function
});

const quantity = ref(props.item.quantity);


const addData = () => {
  quantity.value++
  cartStore.updateQuantity(props.item.id, quantity)
}

const removeData = () => {
  quantity.value--
  cartStore.updateQuantity(props.item.id, quantity)
}

</script>


<style>
.remove {
  cursor: pointer;
  font-size: 13px;
  margin: 0px !important;
  color: #C33434;
}

.flex {
  display: flex;
  justify-content: space-between !important;
}

.container {
  width: 100%;
}

.cart-card {
  display: flex;
  width: 100%;
  padding: 15px 0px;
  border-bottom: 1px solid #D2D2D2;
}

.cart-card img {
  width: 150px;
  height: 130px;
  object-fit: contain;
  margin-right: 14px;
}

.cart-container {
  display: flex;
  justify-content: space-between;
}

.shoping {
  width: 60%;
}

.count {
  border: none;
  background-color: transparent;
  font-size: 20px;
}

.quantity {
  display: flex;
}

strong{
  margin: auto 0px;
}

.qty {
  width: 30px;
  height: 20px;
  margin: auto 0px;
  text-align: center !important;
  padding: 4px;
  border: 1px solid #D2D2D2;
}
</style>