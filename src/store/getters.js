// ./src/store/getters
//Con esto podemos traer la data de los productos (todos o por id) y de los manufacturers
export const productGetters = {
    allProducts: (state, getters) => {
      return state.products
    },
    productById: (state, getters) => id => {
      if (getters.allProducts.length > 0) {
        return getters.allProducts.filter(p => p._id === id)[0]
      } else {
        return state.product
      }
    },
    allManufacturers: state => {
      return state.manufacturers
    }
  }
  
  export const manufacturerGetters = {
    allManufacturers: state => state.manufacturers
  }