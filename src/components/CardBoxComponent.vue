<script>
import { useProductCart } from '@/stores/productStore'
import { onMounted } from 'vue'

export default {
  name: 'CardBoxComponent',
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const cart = useProductCart()

    onMounted(() => {
      cart.fetchProduct()
    })
    return {
      cart
    }
  }
}
</script>

<template>
  <section class="p-3 header mt-3">Home</section>
  <section>
    <div class="row row-cols-3 justify-content-between mt-4">
      <div v-for="product in products" :key="product.id" class="card col mb-5" style="width: 18rem">
        <img :src="product.photo" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.currency }} {{ product.price }}</p>
          <p>Stock : {{ product.stock }}</p>
          <select v-for="varian in product.plain_varian" :key="varian.id">
            <option class="dropdown-item" :value="varian.value" @click="varianSelectChange">
              {{ varian.value }}
            </option>
          </select>
        </div>
        <button @click="cart.addToCart(product)" class="bg-dark text-white">Add To Cart</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.row {
  width: 100%;
  margin: 0 auto;
}
</style>
