<template>
  <div class="cart">
    <p>Shopping Cart</p>
    <p v-if="cartItems && cartItems.length < 1">No items in your cart</p>

    <div v-else class="cart-container">
      <div class="shopping">
        <div v-for="item in cartItems" class="cart-item">
          <CartCard :item="item" :removeDataCard="() => removeDataCard(item.id)" />
        </div>
      </div>
      <div class="checkout">
        <p>Summary</p>
        <div class="prices">
          <p>Subtotal</p>
          <p>$ {{ total }}</p>
        </div>
        <div class="prices">
          <p>Shipping fee</p>
          <p>$10.00</p>
        </div>
        <div class="prices">
          <p>Total</p>
          <strong>$ {{ total + 10 }}</strong>
        </div>
        <button class="btn">Proceed to checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store/index';
const cartStore = useCartStore();
let cartItems = computed(() => cartStore.cart);

const total = computed(() => cartStore.totalPrice);

const removeDataCard = (id) => {
  cartStore.removeFromCart(id);
};
</script>

<style scoped>
.cart {
  margin: 20px 90px;
}

.checkout {
  width: 30%;
  border: 1px solid #E8E8E8;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

.prices {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.prices strong {
  margin: auto 0px;
}

.prices p {
  color: #4B4B4D;
}

.checkout .btn {
  width: 100%;
}

.shopping {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-container {
  display: flex;
  justify-content: space-between;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .cart {
    margin: 20px 40px;
  }

  .cart-container {
    flex-direction: column;
  }

  .checkout {
    width: 100%;
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .cart {
    margin: 10px 20px;
  }

  .checkout {
    padding: 15px;
  }

  .prices p {
    font-size: 14px;
  }

  .btn {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .cart {
    margin: 10px;
  }

  .checkout {
    padding: 10px;
  }

  .btn {
    padding: 8px;
  }
}
</style>
