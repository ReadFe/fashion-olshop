<template>
  <SwiperComponent />
  <CardBoxComponent :products="products" />
</template>

<script>
import CardBoxComponent from '@/components/CardBoxComponent.vue'
import SwiperComponent from '@/components/SwiperComponent.vue'

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
      store.fetchProduct()
      this.products = store.products
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
}
</script>

<style></style>
