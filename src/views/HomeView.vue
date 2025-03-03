<template>
  <SwiperComponent />
  <CardBoxComponent :products="products" />
</template>

<script>
import CardBoxComponent from '@/components/CardBoxComponent.vue'
import SwiperComponent from '@/components/SwiperComponent.vue'
import { useProductStore } from '@/stores/productStore'

export default {
  components: {
    SwiperComponent,
    CardBoxComponent
  },
  data() {
    return {
      products: []
    }
  },
  async beforeMount() {
    try {
      const store = useProductStore()
      await store.fetchProduct()
      this.products = store.products
      console.log(this.products)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
}
</script>

<style></style>
