<template>
  <CardBoxComponent :products="products" />
</template>

<script>
import CardBoxComponent from '@/components/CardBoxComponent.vue'
import { useProductStore } from '@/stores/productStore'

export default {
  components: {
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
