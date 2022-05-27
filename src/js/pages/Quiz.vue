<script setup>
  import HeaderComponent from "../layouts/Header"
  defineProps({
    team: Object,
    brand: Object,
    funnel: Object,
    page: Object,
    form: Object,
  })
</script>

<template>
  <TemplateLayout v-bind="$props">
    <template #header>
      <HeaderComponent :team="team" :brand="brand" />
    </template>
    <section>
      <Form v-if="form ?? false" :form="form" />
    </section>
  </TemplateLayout>
</template>
