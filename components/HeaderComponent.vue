<template>
  <header class="header">
    <nuxt-link to="/">
      <img src="/logo.png" alt="Logo" class="logo" />
    </nuxt-link>
    <nav class="nav">
      <ul>
        <li>
          <InstagramLogoLink />
        </li>
        <li>
          <nuxt-link to="/Impressum">Impressum</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
}

.logo {
  height: 50px;
}

.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav ul li {
  margin-left: 25px;
  position: relative;
  display: flex;
  align-items: center;
}

.nav ul li:not(:last-child) {
  border-right: 1px solid #fff;
  padding-right: 15px;
  margin-right: 10px;
}

.nav ul li:last-child::after {
  content: '';
}

/* Hover effects */

.nav ul li a:hover,
.content a:hover,
a:hover {
  color: #3700b3;
}
</style>

<script setup>
defineComponent({
  name: 'HeaderComponent',
});
</script>
