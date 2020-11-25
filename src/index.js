import NxIcon from './components/NxIcon/NxIcon'
import NxCard from './components/NxCard/NxCard'
export default function install(Vue) {
    Vue.component(NxIcon.name, NxIcon)
    Vue.component(NxCard.name, NxCard)
}