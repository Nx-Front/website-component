<script>
import adaptation from '@/helpers/mixins/adaptation'
export default {
    name: 'NxBg',
    mixins: [adaptation],
    props: {
			  // 横屏幕手机
		   	phoneVertical: {
					 type: String,
					 default: ''
				 },
				 // 竖屏幕手机
				 phoneHorizaontal: {
					 type: String,
					 default: ''
				 },
        pc: {
            type: String,
            default: ''
        },
        pad: {
            type: String,
            default: ''
        }
    },
    computed: {
        bgImage() {
            const imageMap = {
                'phone-vertical': this.phoneVertical,
                'phone-horizontal': this.phoneHorizaontal,
                'pc': this.pc,
                'pad': this.pad
            }
            return imageMap[this.currentDev] || ''
        }
    },
    methods: {
        getCreateElement(list, ...children) {
            children.forEach(child => {
                list.push(children)
            })
        }
    },
    render(h) {
			  const children = []
        const img = h('img', { class: 'bg', attrs: { src: this.bgImage }})
        this.getCreateElement(children, img)
			  return h('div', { class: 'nx-wapper' }, children)
    }
}
</script>

<style lang='scss' scoped>
.nx-wapper {
	height:100%;
	width: 100%;
	overflow: hidden;
	/* 背景图 */
	.bg {
		height: 100%;
		width: 100%;
	}
}
</style>