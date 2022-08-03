<template>
  <div class="item-container">
    <div class="item-left">
      <div><img :src="item.img" alt="item-img" /></div>
      <h1>{{ item.name }}</h1>
      <div class="stars">
        <img :src="StarIcon" alt="star-icon" /><span>{{ item.stars }}</span>
      </div>
    </div>
    <div>
      <h3>Descripcion</h3>
      {{ item.description }}
    </div>
  </div>
</template>

<script>
import StarIcon from '../../../assets/img/star.svg'
export default {
  name: 'IdItem',
  data() {
    const item = this.getCrudItemById(this.$route.params.idItem)
    if (!item) this.$router.push('/notFound')
    return { item, StarIcon }
  },
}
</script>

<style lang="scss" scoped>
.item-container {
  margin-top: 80px;
  display: inline-flex;
  .item-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    .stars {
      display: inline-flex;
      align-items: center;
      gap: 3px;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  img {
    width: 380px;
    height: 380px;
    object-fit: contain;
  }
}
</style>
