<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import { useProductCart, useProductSearch } from '@/stores/productStore'
import { ref } from 'vue'
import CartComponent from './CartComponent.vue'

export default {
  components: {
    RouterLink,
    RouterView,
    CartComponent
  },
  data() {
    return {
      categories: []
    }
  },
  async beforeMount() {
    try {
      const { data } = await axios.get('https://sistemtoko.com/public/demo/cat')
      this.categories = data.aaData
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  },
  setup() {
    const store = useProductSearch()
    const cart = useProductCart()
    const query = ref(store.query)

    let isOpen = ref(false)
    const onOpen = () => (isOpen.value = true)
    const onClose = () => (isOpen.value = false)

    const onInput = () => {
      store.filterData(query.value)
    }

    return {
      onInput,
      query,
      cart,
      isOpen,
      onClose,
      onOpen
    }
  }
}
</script>

<template>
  <div v-if="isOpen" class="cart-container">
    <CartComponent :onClose="onClose" />
  </div>
  <body class="bg-white">
    <div class="row">
      <div class="col-3 d-flex justify-content-center">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />
      </div>
      <div class="col-9">
        <div class="h-50 d-flex align-items-center justify-content-between border-bottom">
          <p class="fs-4 slogan">FashionShop</p>
          <div class="d-flex align-items-center">
            <div class="border border-gray-500 mx-3">
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
            <div class="cart-box">
              <i :onclick="onOpen" class="bi-cart2 p-2 px-3 border-start" style="font-size: 24px" />
              <div v-if="cart.countCartItems > 0" class="cart-icon">{{ cart.countCartItems }}</div>
            </div>
          </div>
        </div>
        <nav class="h-50 d-flex align-items-center gap-5">
          <RouterLink to="/" class="text-decoration-none nav-link">Home</RouterLink>
          <div class="dropdown hover-dropdown">
            <RouterLink to="/brand" class="text-decoration-none nav-link">Brand</RouterLink>
            <ul class="dropdown-menu">
              <li v-for="cat in categories" :key="cat.product_category_id">
                <a class="dropdown-item" href="/">{{ cat.product_category_name }}</a>
              </li>
            </ul>
          </div>
          <RouterLink to="/blog" class="text-decoration-none nav-link">Blog</RouterLink>
        </nav>
      </div>
    </div>
  </body>
  <RouterView />
</template>

<style scoped>
.row {
  width: 80%;
  margin: 0 auto;
}

i:hover {
  cursor: pointer;
}

.nav-link {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  color: rgb(37, 35, 35);
}

.nav-link:hover {
  color: rgba(78, 57, 16, 0.767);
}

.search:focus {
  outline: none;
}

.search {
  flex-grow: 1;
}

.hover-dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
}

.cart-icon {
  background-color: black;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.cart-box {
  position: relative;
}

.cart-container {
  position: fixed; /* atau relative, tergantung pada kebutuhan */
  top: 0;
  right: 0;
  z-index: 9999; /* Nilai tinggi untuk memastikan berada di atas */
}
</style>
