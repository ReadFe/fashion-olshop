<template>
  <CardBoxComponent :products="products" />
</template>

<script>
import CardBoxComponent from '@/components/CardBoxComponent.vue'
import axios from 'axios'

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
      const { data } = await axios.get('https://sistemtoko.com/public/demo/product')
      this.products = data.aaData
    } catch (error) {
      console.error('Error fetching products:', error)
    }

    console.log(this.products)
  }
}
</script>

<style></style>
