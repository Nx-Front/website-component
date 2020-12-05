import NxIcon from './components/NxIcon/NxIcon'
import NxCard from './components/NxCard/NxCard'
import NxBg from './components/NxBg/NxBg'
import NxFooter from './components/NxFooter/NxFooter'
import NxArt from './components/NxArt/NxArt'

export default function install(Vue) {
    Vue.component(NxIcon.name, NxIcon)
    Vue.component(NxCard.name, NxCard)
    Vue.component(NxBg.name, NxBg)
    Vue.component(NxFooter.name, NxFooter)
    Vue.component(NxArt.name, NxArt)
}