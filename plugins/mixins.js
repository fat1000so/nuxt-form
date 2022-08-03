import Vue from 'vue'
import Placeholder from '../assets/img/placeholder.jpg'

const categoriasItems = [
  { id: 0, name: 'electronica' },
  { id: 1, name: 'cosmeticos' },
  { id: 2, name: 'cocina' },
  { id: 3, name: 'nocategory' },
]

const crudItems = [
  {
    id: 0,
    name: 'Pantalla oled 24',
    category: categoriasItems[0],
    price: 234,
    img: Placeholder,
    stars: 2,
    description: 'lorem ipsum',
  },
  {
    id: 1,
    name: 'Pantalla oled 54',
    category: categoriasItems[0],
    price: 555,
    img: Placeholder,
    stars: 2,
    description: 'lorem ipsum',
  },
  {
    id: 2,
    name: 'Cosmeticos 123',
    category: categoriasItems[1],
    price: 12,
    img: Placeholder,
    stars: 3,
    description: 'lorem ipsum',
  },
  {
    id: 3,
    name: 'cocina12',
    category: categoriasItems[2],
    price: 43,
    img: Placeholder,
    stars: 5,
    description: 'lorem ipsum',
  },
  {
    id: 4,
    name: 'sin categoria',
    category: categoriasItems[3],
    price: 1223,
    img: Placeholder,
    stars: 2,
    description: 'lorem ipsum',
  },
  {
    id: 5,
    name: 'Pantalla oled 24',
    category: categoriasItems[3],
    price: 33,
    img: Placeholder,
    stars: 1,
    description: 'lorem ipsum',
  },
]

const mixin = {
  methods: {
    getCrudItems(sort) {
      switch (sort) {
        case 'relevance':
          return crudItems.sort((a, b) => (b.stars > a.stars ? 1 : -1))
        case 'priceDesc':
          return crudItems.sort((a, b) => (b.price > a.price ? 1 : -1))
        case 'priceAsc':
          return crudItems.sort((a, b) => (b.price < a.price ? 1 : -1))
        default:
          return crudItems
      }
    },
    getCrudItemById(id) {
      return crudItems.find((a) => a.id === parseInt(id))
    },
  },
}

Vue.mixin(mixin)
