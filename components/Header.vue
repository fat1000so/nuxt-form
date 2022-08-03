<template>
  <header class="header">
    <nav class="navbar">
      <div><NuxtLink class="navbar-logo" to="/">LOGO</NuxtLink></div>
      <div>
        <button class="hamburguer-button">
          <img :src="hamburguerIcon" alt="ham-icon" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import HamburguerIcon from '../assets/img/menu.svg'
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isOpen: false,
      hamburguerIcon: HamburguerIcon,
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 68px;
  position: fixed;
  transition: 0.3s ease-in-out;
  &:hover {
    height: 123px;
    .navbar-logo {
      font-size: 40px;
    }
    .hamburguer-button {
      width: 38px;
      height: 38px;
    }
  }
}
.navbar {
  backdrop-filter: blur(10px);
  width: 100%;
  background-color: #232323b7;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  color: #f2f2f2;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.navbar-logo {
  transition: 0.3s ease-in-out;
  font-size: 24px;
  font-weight: bold;
}
.hamburguer-button {
  border: 0;
  background-color: transparent;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
    transition: 0.3s ease-in-out;

  &:hover img {
    width: 80%;
    height: 80%;
  }
  img {
    transition: 0.3s ease-in-out;
    width: 100%;
    height: 100%;
  }
}
</style>
