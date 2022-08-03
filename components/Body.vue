<template>
  <div class="container">
    <section
      v-for="(value, index) in template"
      :key="index"
      class="section-container"
    >
      <div v-if="value.image" class="section-image">
        <div class="image-content">
          <NuxtLink v-if="value.link" :to="`${value.link}`">{{
            value.title
          }}</NuxtLink>
          <h2 v-else>{{ value.title }}</h2>
          <p>{{ value.content }}</p>
        </div>
        <img :src="`${value.image}`" alt="" class="body-image" />
      </div>
      <div v-else>
        <NuxtLink v-if="value.link" :to="`${value.link}`">{{
          value.title
        }}</NuxtLink>
        <h2 v-else>{{ value.title }}</h2>
        <p>{{ value.content }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import Placeholder from '../assets/img/placeholder.jpg'
import Placeholder1 from '../assets/img/placeholder1.jpg'
export default {
  name: 'BodyComponent',
  data() {
    return {
      template: [
        {
          title: 'FORMULARIO',
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
          corporis alias necessitatibus, consectetur aut est atque dolorem.
          Voluptas officiis mollitia neque doloribus. Vero similique consectetur
          ex quis odit ipsa?`,
          link: '/form',
          image: null,
        },
        {
          title: 'TIENDA',
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
          corporis alias necessitatibus, consectetur aut est atque dolorem.
          Voluptas officiis mollitia neque doloribus. Vero similique consectetur
          ex quis odit ipsa?`,
          link: '/shop',
          image: Placeholder,
        },
        {
          title: 'TITLE 3',
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
          corporis alias necessitatibus, consectetur aut est atque dolorem.
          Voluptas officiis mollitia neque doloribus. Vero similique consectetur
          ex quis odit ipsa?`,
          link: null,
          image: null,
        },
        {
          title: 'TITLE 4',
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
          corporis alias necessitatibus, consectetur aut est atque dolorem.
          Voluptas officiis mollitia neque doloribus. Vero similique consectetur
          ex quis odit ipsa?`,
          link: null,
          image: Placeholder1,
        },
        {
          title: 'TITLE 5',
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
          corporis alias necessitatibus, consectetur aut est atque dolorem.
          Voluptas officiis mollitia neque doloribus. Vero similique consectetur
          ex quis odit ipsa?`,
          link: null,
          image: null,
        },
        {
          title: 'TITLE 6',
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
          corporis alias necessitatibus, consectetur aut est atque dolorem.
          Voluptas officiis mollitia neque doloribus. Vero similique consectetur
          ex quis odit ipsa?`,
          link: null,
          image: null,
        },
        {
          title: 'TITLE 6',
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
          corporis alias necessitatibus, consectetur aut est atque dolorem.
          Voluptas officiis mollitia neque doloribus. Vero similique consectetur
          ex quis odit ipsa?`,
          link: null,
          image: null,
        },
        {
          title: 'TITLE 6',
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
          corporis alias necessitatibus, consectetur aut est atque dolorem.
          Voluptas officiis mollitia neque doloribus. Vero similique consectetur
          ex quis odit ipsa?`,
          link: null,
          image: null,
        },
        {
          title: 'TITLE 6',
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
          corporis alias necessitatibus, consectetur aut est atque dolorem.
          Voluptas officiis mollitia neque doloribus. Vero similique consectetur
          ex quis odit ipsa?`,
          link: null,
          image: null,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  row-gap: 33px;
  height: 200px;
  padding: 15px 0;
  color: #232323;
  h2,
  a {
    font-weight: bold;
    font-size: 56px;
    margin: 0;
    transition: 0.3s ease-in-out;
    &:hover {
      font-size: 64px;
    }
  }
  p {
    margin: 0;
    font-size: 24px;
    font-weight: 300;
  }
  .section-container {
    padding: 0px 20px;
    .section-image {
      display: flex;
      .image-content {
        display: flex;
        flex-direction: column;
        padding-right: 7px;
      }
      .body-image {
        width: 30%;
        flex: 0 0 30%;
        margin-top: 11px;
        height: 400px;
        object-fit: none;
        border-radius: 24px;
        // border: 1px solid #23232362;
        background-color: #232323b7;
        transition: 0.3s ease-in-out;
        &:hover {
          width: 50%;
          flex: 0 0 50%;
        }
      }
    }
  }
}
</style>
