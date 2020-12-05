<template>
  <svg :style="{ height:height,width:width }">
    <use :href="iconName" />
  </svg>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        name:{
					type:String,
					default:''
				},
				height:{
					type:String,
					default:'100%'
				},
				width:{
					type:String,
					default:'100%'
				}
    },
    computed: {
        iconName() {
            return `#${this.name}`
        }
    }
}
</script>
<style lang="scss" scoped>
</style>