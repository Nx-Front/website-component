<template>
  <div class="nx-footer">
    <div class="footer-wapper">
      <div v-for="(item,index) in data" :key="item.pathName" class="item" @click="clickFooter(item)">
        {{ index !== 0 ? '.' : '' }} {{ item.text }}
      </div>
    </div>
    <div class="copy-right">{{ copyRight }}</div>
  </div>
</template>
<script>
import { sendEmail } from '../../helpers/utils'
export default {
    name: 'NxFooter',
    props: {
        copyRight: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        clickFooter(item) {
            if (item.path && this.$router) {
                this.$router.push({
                    name: item.path
                })
            } else if (item.email) {
                sendEmail(item.email)
            }
            this.$emit('click', item)
        }
    }
}
</script>
<style lang="scss" scoped>
	.nx-footer {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width:100%;
		.footer-wapper {
			display: flex;
			.item {
				cursor: pointer;
				color:#667e95;
			}
		}
		.copy-right {
			color:#a7b5c3;
		}
	}
	@media screen and (min-width:1366px) {
		.nx-footer {
			bottom:.1rem;
			font-size: .3rem;
			.item {
				margin: 0 .1rem;
			}
			.copy-right{
				font-size: .2rem;
			}
		}
	}
	@media screen and (min-width:600px) and (max-width:960px) {
		.nx-footer {
			bottom:.1rem;
			font-size: .5rem;
			.item {
				margin: 0 .1rem;
			}
			.copy-right{
				font-size: .3rem;
			}
		}
	}
	@media screen and (max-width:960px) and (orientation: portrait) {
		.nx-footer {
			bottom:.1rem;
			font-size: 1rem;
			.item {
				margin: 0 .1rem;
			}
			.copy-right{
				font-size: .3rem;
			}
		}
	}
	@media screen and (max-width:960px) and (orientation: landscape) {
		.nx-footer {
			bottom:.1rem;
			font-size: .5rem;
			.item {
				margin: 0 .1rem;
			}
			.copy-right{
				font-size: .3rem;
			}
		}
	}
</style>