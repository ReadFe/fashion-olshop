<script>
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from '@/stores/productStore'
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
  setup() {
    const store = useProductStore()
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
      store,
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
  <header class="bg-white sticky-top">
    <div class="row d-flex">
      <div class="col-md-3 d-none d-md-block d-flex justify-content-center">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />
      </div>
      <div class="col-md-9">
        <div class="h-50 d-flex align-items-center justify-content-between border-bottom">
          <p class="fs-4 py-3 slogan align-items-center">FashionShop</p>
          <div class="d-flex align-items-center">
            <div class="d-flex mx-3">
              <RouterLink to="/search">
                <button type="submit" class="bg-transparent border border-none">
                  <i class="bi-search p-2" style="font-size: 19px" />
                </button>
              </RouterLink>
            </div>
            <div class="cart-box">
              <i :onclick="onOpen" class="bi-cart2 px-3 border-start" style="font-size: 24px" />
              <div v-if="store.countCartItems > 0" class="cart-icon">
                {{ store.countCartItems }}
              </div>
            </div>
          </div>
        </div>
        <nav class="h-50 d-flex align-items-center gap-5" id="sticky2">
          <RouterLink to="/" class="text-decoration-none nav-link">Home</RouterLink>
          <div class="dropdown hover-dropdown">
            <RouterLink to="/search" class="text-decoration-none nav-link">Search</RouterLink>
          </div>
          <RouterLink to="/blog" class="text-decoration-none nav-link">Blog</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.row {
  width: 90%;
  margin: 0 auto;
}

i:hover {
  cursor: pointer;
}

.slidedown {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid black;
  height: 50px;
  transition: nav-animate 0.4s ease-in-out;
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
