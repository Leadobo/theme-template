<template>
  <footer>
    This footer is able to pull props from the $page!
    {{ $page.props.team.name }}
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>
