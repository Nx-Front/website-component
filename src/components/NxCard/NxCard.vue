<template>
  <div
    class="nx-card"
    :style="{
      height:cardHeight,
      width:cardWidth
    }"
    @click="handleClickCard"
  >
    <div class="left">
      <template v-if="data.icon">
        <i
          :class="`iconfont icon-${data.icon} left-icon`"
          :style="{ fontSize:iconSize }"
        />
      </template>
      <template v-else-if="data.svg">
        <nx-icon
          class="right-svg"
          :name="data.svg"
          height="65%"
          width="65%"
        />
      </template>

    </div>
    <div class="right">
      <div
        class="title title-gradient"
        :style="{ backgroundImage:`linear-gradient(${titleFontBg})`}"
      >{{ data.title }}</div>
      <div
        class="body body-gradient"
        :style="{ backgroundImage:`linear-gradient(${bodyFontBg})`}"
      >{{ data.body }}</div>
    </div>
  </div>
</template>

<script>
import NxIcon from '../NxIcon/NxIcon.vue'
import adaptation from '@/helpers/mixins/adaptation'
import { downloadFile } from '@/helpers/utils'
export default {
    name: 'NxCard',
    components: {
        NxIcon
    },
    mixins: [adaptation],
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        /* 以下props抽空整理出来成为Object */
        phoneVerticalHeight: {
            type: String,
            default: ''
        },
        phoneHorizaontalHeight: {
            type: String,
            default: ''
        },
        pcHeight: {
            type: String,
            default: ''
        },
        padHeight: {
            type: String,
            default: ''
        },
        phoneVerticalWidth: {
            type: String,
            default: ''
        },
        phoneHorizaontalWidth: {
            type: String,
            default: ''
        },
        pcWidth: {
            type: String,
            default: ''
        },
        padWidth: {
            type: String,
            default: ''
        },
        /* icon大小 */
        phoneVertIconSize: {
            type: String,
            default: ''
        },
        phoneHoriIconSize: {
            type: String,
            default: ''
        },
        pcIconSize: {
            type: String,
            default: ''
        },
        padIconSIze: {
            type: String,
            default: ''
        },
        /* title字体颜色 */
        titleFontBg: {
            type: String,
            default: 'to top, #dfe9f3 0%, white 100%'
        },
        bodyFontBg: {
            type: String,
            default: 'to right, #00dbde 0%, #fc00ff 100%'
        }
    },
    computed: {
        cardHeight() {
            const heightMap = {
                'phone-vertical': this.phoneVerticalHeight,
                'phone-horizontal': this.phoneHorizaontalHeight,
                'pc': this.pcHeight,
                'pad': this.padHeight
            }
            return heightMap[this.currentDev]
        },
        cardWidth() {
            const widthMap = {
                'phone-vertical': this.phoneVerticalWidth,
                'phone-horizontal': this.phoneHorizaontalWidth,
                'pc': this.pcWidth,
                'pad': this.padWidth
            }
            return widthMap[this.currentDev]
        },
        iconSize() {
            const iconSizeMap = {
                'phone-vertical': this.phoneVertIconSize,
                'phone-horizontal': this.phoneHoriIconSize,
                'pc': this.pcIconSize,
                'pad': this.padIconSIze
            }
            return iconSizeMap[this.currentDev]
        }
    },
    methods: {
        handleClickCard() {
            if (this.data?.link) {
                downloadFile(this.data.link)
            }
            this.$emit('click', this.data)
        }
    }
}
</script>

<style lang='scss'>
	.nx-card {
		display: flex;
		cursor: pointer;
		background:black;
		color:#fff;
		&:hover {
			transform: scale(1.02);
		}
		.left{
			width:30%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.right {
			flex:1;
			display: flex;
			flex-direction: column;
			font-family: "Times New Roman", "Courier New", Helvetica, "Hiragino Sans GB", "Microsoft Yahei", 微软雅黑, Arial, sans-serif;
			.title {
				flex:1;
				display: flex;
				align-items: flex-end;
				font-family: 'Times New Roman';
				justify-content: flex-start;
			}
			.title-gradient {
				background-clip:text;
				font-style:italic;
				color: transparent;
			}
			.body {
				flex:1;
				text-align: left;
				font-weight: 600;
			}
			.body-gradient{
				background-clip:text;
				color: transparent;
			}
		}
	}

	/* 750一个缩放比例 */
	/* card 兼容pc和移动 */
	/* pc样式 */
	@media screen and (min-width:1366px) {
		.nx-card {
			width:3.5rem;
			height:1rem;
			border-radius: .2rem;
			.left {
				.left-icon{
					font-size:.56rem;
				}
			}
			.right {
				.title{
					font-size: .25rem;
				}
				.body{
					font-size:.25rem;
				}
			}
		}
	}
/* pad格式 暂时不处理 业务没有pad 当作手机横屏处理 */
@media screen and (min-width:600px) and (max-width:960px) {
	.nx-card {
		border-radius: .5rem;
		height: 1.8rem;
		width: 6.4rem;
		.left {
			.left-icon {
				font-size: 1.2rem;
			}
		}
		.title {
			font-size: .4rem;
		}
		.body {
			font-size: .6rem;
		}
	}
}

/* 所有手机竖屏 正常 */
@media screen and (max-width:960px) and (orientation: portrait) {
	.nx-card {
		border-radius: .5rem;
		height:3.6rem;
		width:12.4rem;
		background-color:black;
		.left {
			.left-icon {
				font-size:2rem;
			}
		}
	}
}

/* 所有手机横屏 */
@media screen and (max-width:960px) and (orientation: landscape) {
	.nx-card {
		border-radius: .2rem;
		height: 1.8rem;
		width: 6.4rem;
		.left {
			.left-icon {
				font-size: 1.2rem;
			}
		}
		.title {
			font-size: .4rem;
		}
		.body {
			font-size: .6rem;
		}
	}
}
</style>