<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>© 2023 nr.bln. Alle Rechte vorbehalten.</p>
      <p>
        <nuxt-link to="/Impressum">Impressum</nuxt-link>
      </p>
    </div>
  </footer>
</template>

<style>
.footer {
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 50px;
}
</style>
<script setup>
defineComponent({
  name: 'FooterComponent',
});
</script>
