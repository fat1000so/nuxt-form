<template>
  <div class="container">
    <FormCustomInputSelect
      name="selector"
      :onChange="onInputChange"
      :options="selectOptions"
    />
    <div class="cards-list">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="card-container"
        @click="onCardClick(item.id)"
      >
        <div class="card-top"><img :src="item.img" alt="img-t" /></div>
        <div class="card-bottom">
          <span class="price">${{ item.price }}</span>
          <div>
            <h3>{{ item.name }}</h3>
            <div class="stars">
              <img :src="StarIcon" alt="star-icon" /><span>{{
                item.stars
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarIcon from '../../assets/img/star.svg'
const selectOptions = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Price Descencent', value: 'priceDesc' },
  { label: 'Price Ascendent', value: 'priceAsc' },
]
export default {
  name: 'CrudShop',
  data() {
    return {
      items: this.getCrudItems(),
      StarIcon,
      selectOptions,
    }
  },
  methods: {
    onInputChange(e) {
      this.items = this.getCrudItems(e.value)
    },
    onCardClick(id) {
      this.$router.push(`/shop/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 70px;
  display: flex;
  height: 200px;
  padding: 15px 0;
  color: #232323;
  flex-direction: column;
  .cards-list {
    display: flex;
    gap: 3%;
    flex-wrap: wrap;
  }
}
.card-container {
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 300px;
  border-radius: 24px;
  width: 200px;
  cursor: pointer;
  &:hover {
    background-color: rgb(244, 244, 244);
  }
  .card-top {
    height: 65%;
    width: 100%;
    display: flex;
    img {
      margin: auto;
      height: 100%;
      width: auto;
      object-fit: contain;
    }
  }
  .card-bottom {
    padding: 10px;
    .price {
      font-weight: 500;
    }
    .stars {
      display: inline-flex;
      align-items: center;
      gap: 3px;

      img {
        width: 20px;
        height: 20px;
      }
    }
    h3 {
      margin: 0;
      font-weight: 600;
    }
  }
}
</style>
