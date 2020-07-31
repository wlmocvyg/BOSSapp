import './assets/rem'

import Vue from 'vue'
import App from './App'
import router from './router'
import { Cell, CellGroup, ActionSheet, Grid, GridItem, Loading, Toast, Button, PullRefresh, Swipe, SwipeItem, NavBar, Icon, Sticky, Tabbar, TabbarItem, Area } from 'vant';

Vue.use(CellGroup).use(Cell).use(ActionSheet).use(GridItem).use(Grid).use(Loading).use(Toast).use(PullRefresh).use(TabbarItem).use(Tabbar).use(Button).use(Swipe).use(SwipeItem).use(NavBar).use(Icon).use(Sticky).use(Area);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
