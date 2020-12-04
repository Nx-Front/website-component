<template>
  <svg class="svg">
    <use :href="iconName" />
  </svg>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        name: String
    },
    computed: {
        iconName() {
            return `#${this.name}`
        }
    }
}
</script>
<style lang="scss" scoped>
.svg {
  height: 80%;
  width: 100%;
}
</style>