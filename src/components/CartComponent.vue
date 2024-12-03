AnimeComponent.vue
<template>
  <div ref="box" class="box">
    <div class="header flex-header">
      <p class="fs-5 font-custom mx-3">Daftar Belanja</p>
      <button @click="onClose" class="h-100 bg-danger border border-none text-white">
        &times;
      </button>
    </div>
    <div class="flex">
      <div v-if="product.cartItems.length === 0">
        <p class="w-full p-3 d-flex justify-content-center">Keranjang belanja kosong</p>
      </div>
      <div v-for="item in product.cartItems" :key="item.id" class="mb-3 border border-b-2">
        <div class="flex-content">
          <div>
            <img :src="item.photo" class="image" alt="" />
          </div>
          <div class="px-2">
            <p>{{ item.name }}</p>
            <p>{{ item.currency }} {{ item.price }}</p>
            <p>Jumlah :</p>
          </div>
        </div>
        <div class="flex-header">
          <div class="qty-box">
            <button @click="product.decrementQ(item)" class="qty-button">-</button>
            <span class="mx-3 bg-transparent">{{ item.qty }}</span>
            <button @click="product.incrementQ(item)" class="qty-button">+</button>
          </div>
          <i @click="product.deleteItem(item)" class="bi bi-trash text-danger fs-5 absolute"></i>
        </div>
      </div>
    </div>
    <button v-if="product.cartItems.length > 0" class="btn btn-primary">Checkout</button>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore'
import anime from 'animejs'

export default {
  props: {
    onClose: {
      type: String,
      required: true
    }
  },
  mounted() {
    anime({
      targets: this.$refs.box,
      translateX: -100,
      duration: 1000,
      easing: 'easeInOutQuad'
    })
  },
  setup() {
    const product = useProductStore()

    return {
      product
    }
  }
}
</script>
<style>
.box {
  width: 300px;
  height: 100vh;
  background-color: white;
  position: fixed;
  right: -100px;
  top: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.font-custom {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 300;
}

.flex-header {
  display: flex;
  justify-content: space-between;
}

.flex-content {
  display: flex;
  font-family: 'Times New Roman', Times, serif;
}

.image {
  width: 100px;
  height: 100px;
}

.qty-box {
  background-color: rgba(128, 128, 128, 0.277);
  width: fit-content;
}

.qty-button {
  background-color: white;
  font-weight: bold;
  font-size: large;
  border: 1px solid gray;
  padding: 0 0.5rem;
}
</style>
