<template>
  <CardBoxComponent :products="products" />
</template>

<script>
import CardBoxComponent from '@/components/CardBoxComponent.vue'
import { useProductSearch } from '@/stores/productStore'
import { computed } from 'vue'

export default {
  components: {
    CardBoxComponent
  },
  setup() {
    const store = useProductSearch()
    const products = computed(() => store.products)

    return {
      products
    }
  }
}
</script>

<style></style>
