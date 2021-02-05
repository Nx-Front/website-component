
<script>
import adaptation from '@/helpers/mixins/adaptation'
import 'progressive-image.js/dist/progressive-image'
import 'progressive-image.js/dist/progressive-image.css'
export default {
    name: 'NxBg',
    mixins: [adaptation],
    props: {
        pc: {
            type: String,
            default: ''
        },
        pcMask: {
            type: String,
            default: ''
        },
        // 横屏幕手机
        phoneVertical: {
            type: String,
            default: ''
        },
        phoneVerticalMask: {
            type: String,
            default: ''
        },
        // 竖屏幕手机
        phoneHorizaontal: {
            type: String,
            default: ''
        },
        phoneHorizaontalMask: {
            type: String,
            default: ''
        },
        pad: {
            type: String,
            default: ''
        },
        padMask: {
            type: String,
            default: ''
        }
    },
    computed: {
        maskImage() {
            const imageMap = {
                'phone-vertical': this.phoneVerticalMask || '',
                'phone-horizontal': this.phoneHorizaontalMask || '',
                pc: this.pcMask || '',
                pad: this.padMak || ''
            }
            return imageMap[this.currentDev] || ''
        },
        bgImage() {
            const imageMap = {
                'phone-vertical': this.phoneVertical,
                'phone-horizontal': this.phoneHorizaontal,
                pc: this.pc,
                pad: this.pad
            }
            return imageMap[this.currentDev] || ''
        }
    },
    methods: {
        getCreateElement(list, ...children) {
            children.forEach(() => {
                list.push(children)
            })
        }
    },
    render(h) {
        const children = []
        if (this.maskImage) {
            const maskImg = h('img', {
                class: 'preview',
                attrs: { src: this.maskImage }
            })
            const linkWrapper = h(
                'a',
                {
                    class: 'progressive replace',
                    attrs: { href: this.bgImage }
                },
                [maskImg]
            )
            this.getCreateElement(children, linkWrapper)
        } else {
            const img = h('img', { class: 'bg', attrs: { src: this.bgImage }})
            this.getCreateElement(children, img)
        }
        return h('div', { class: 'nx-wapper' }, children)
    }
}
</script>

<style lang='scss' scoped>
.nx-wapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .bg {
    height: 100%;
    width: 100%;
  }
}
</style>