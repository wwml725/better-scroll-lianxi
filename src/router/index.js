import Vue from 'vue'
import Router from 'vue-router'
//导航页面
import HelloWorld from '@/components/HelloWorld'

//功能页面
import mixinsTest from '@/components/page/mixinsTest.vue'
import BaseRoolling from '@/components/page/BaseRoolling.vue'
import EnhancedRolling from '@/components/page/EnhancedRolling.vue'
import VersatileRoolling from '@/components/page/VersatileRoolling.vue'
import PullupMore from '@/components/page/PullupMore.vue'
import PullDownRefresh from '@/components/page/PullDownRefresh.vue'
import SlideShow from '@/components/page/SlideShow.vue'
import WheelSelect from '@/components/page/WheelSelect.vue'
import ListView from '@/components/page/ListView.vue'
import ListView2 from '@/components/page/ListView2.vue'
import VerticalRoolling from '@/components/page/VerticalRoolling.vue'
import LevelRoolling from '@/components/page/LevelRoolling.vue'
import VerticalLevel from '@/components/page/VerticalLevel.vue'
import UseScroll from '@/components/page/UseScroll.vue'
import ApiBasic from '@/components/page/API/Api-basic'
import MusicList from '@/components/page/music-list'
import MusicList2 from '@/components/page/music-list2'
import SwitchModel from '@/components/page/Switch-model'
import SwitchModel2 from '@/components/page/Switch-model2.0'
import player from '@/components/page/player'





Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{title:"better-scroll2.0"},
      children:[

      ]
    },
    
    {path:"/basic",component:BaseRoolling,meta:{title:"BaseRoolling"}},
    {path:"/enhanced",component:EnhancedRolling,meta:{title:"EnhancedRolling"}},
    {path:"/versatile",component:VersatileRoolling,meta:{title:"VersatileRoolling"}},
    {path:"/mixinsTest",component:mixinsTest,meta:{title:"mixinsTest"}},
    {path:"/pullupmore",component:PullupMore,meta:{title:"PullupMore"}},
    {path:"/pulldownRefresh",component:PullDownRefresh,meta:{title:"pulldownRefresh"}},
    {path:"/slideShow",component:SlideShow,meta:{title:"slideShow"}},
    {path:"/wheelSelect",component:WheelSelect,meta:{title:"wheelSelect"}},
    {path:"/ListView",component:ListView,meta:{title:"ListView"}},
    {path:"/ListView2",component:ListView2,meta:{title:"ListView2"}},
    {path:"/vertical",component:VerticalRoolling,meta:{title:"VerticalRoolling"}},
    {path:"/level",component:LevelRoolling,meta:{title:"LevelRoolling"}},
    {path:"/vertical-level",component:VerticalLevel,meta:{title:"VerticalLevel"}},
    {path:"/use-scroll",component:UseScroll,meta:{title:"UseScroll"}},
    {path:"/api-baisc",component:ApiBasic,meta:{title:"ApiBasic"}},
    {path:"/MusicList",component:MusicList,meta:{title:"MusicList"}},
    {path:"/MusicList2",component:MusicList2,meta:{title:"MusicList2"}},
    {path:"/SwitchModel",component:SwitchModel,meta:{title:"SwitchModel"}},
    {path:"/SwitchModel2",component:SwitchModel2,meta:{title:"SwitchModel2"}},
    {path:"/player",component:player,meta:{title:"player"}},
  ]
})
