export default {

    /**
				 * 适配得到当前用户处于的屏幕下
				 * @method 方法名
				 * @for 所属类名
				 * @param {null}
				 * @return {currentDev} 类型 'phone-vertical','phone-horizontal','pc','pad
		**/
    data() {
        return {
            searchMediaList: [
                window.matchMedia('(max-width:960px) and (orientation: landscape)'), // 手机渲染 横屏
                window.matchMedia('(max-width:768px) and (orientation: portrait)'), // 手机 竖屏
                window.matchMedia('(min-width:1360px)'), // pc端结果
                window.matchMedia('(min-width:768px) and (max-width:1360px)') // pad
            ],
            currentDev: ''
        }
    },
    methods: {
        initScreen() {
            const currentDev = ['phone-vertical', 'phone-horizontal', 'pc', 'pad']
            const index = this.searchMediaList.findIndex(i => i.matches)
            this.currentDev = currentDev[index]
            return currentDev[index]
        },
        addEventScreen() {
            // 这里会多次触发 暂时放一下 没时间
            this.searchMediaList.forEach(mediaItem => {
                mediaItem.addListener(this.initScreen)
            })
        },
        getCreateElement(list, ...children) {
            children.forEach(child => {
                list.push(children)
            })
        }
    },
    created() {
        this.initScreen()
        this.addEventScreen()
    }

}