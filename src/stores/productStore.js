import axios from 'axios'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    cartItems: []
  }),
  getters: {
    countCartItems() {
      return this.cartItems.length
    }
  },

  actions: {
    async fetchProduct() {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_APP_API_URL}/public/demo/product`)
        this.products = data.aaData
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    async filterData(query) {
      const { data } = await axios.get(`${import.meta.env.VITE_APP_API_URL}/public/demo/product`)
      const allData = data.aaData
      this.products = allData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    },
    addToCart(item) {
      let existingItem = this.cartItems.find((product) => product.id === item.id)
      if (existingItem) {
        item.qty += 1
      } else {
        item.qty = 1
        this.cartItems.push(item)
      }
    },
    incrementQ(item) {
      item.qty += 1
    },
    decrementQ(item) {
      if (item.qty > 1) {
        item.qty -= 1
      }
    },
    deleteItem(item) {
      this.cartItems = this.cartItems.filter((itemDel) => itemDel.id !== item.id)
    }
  }
})
