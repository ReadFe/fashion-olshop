<template>
  <div class="d-flex justify-content-center">
    <input
      type="text"
      @input="onInput"
      v-model="query"
      class="search flex align-item-center px-2 p-1 border border-none text-decoration-none"
      placeholder="Search..."
    />
    <RouterLink to="/search">
      <button type="submit" class="bg-transparent border border-none">
        <i class="bi-search p-2" style="font-size: 19px" />
      </button>
    </RouterLink>
  </div>
  <CardBoxComponent :products="products" />
</template>

<script>
import CardBoxComponent from '@/components/CardBoxComponent.vue'
import { useProductStore } from '@/stores/productStore'
import { computed, ref } from 'vue'

export default {
  components: {
    CardBoxComponent
  },
  setup() {
    const store = useProductStore()
    const query = ref(store.query)
    const products = computed(() => store.products)

    const onInput = () => {
      store.filterData(query.value)
    }

    return {
      products,
      onInput,
      query
    }
  }
}
</script>

<style>
.search {
  width: 70%;
}
</style>
