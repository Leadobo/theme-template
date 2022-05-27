<template>
  <footer>
    <section class="container">
      <ul>
        <li>© {{ new Date().getFullYear() }} {{ brand.name }}</li>
        <li><a href="/ccpa">California Privacy Rights</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Use</a></li>
      </ul>
    </section>
  </footer>
</template>

<script setup>
defineProps({
  team: Object,
  brand: Object,
})
</script>
