<template>
  <header>
    This is the header {{ team.name }} on Insurance theme!
    It pulls props from the prop
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    team: Object
  }
}
</script>
