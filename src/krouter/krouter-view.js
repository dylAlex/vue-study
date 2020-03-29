export default {
  render(h) {
    // 标记当前router-view深度
    this.$vnode.data.routerview = true;
    let depth = 0;
    let parent = this.$parent;
    while (parent) {
      const vnodeData = parent.$vnode && parent.$vnode.data;
      if (vnodeData) {
        if (vnodeData.routerview) {
          depth++;
        }
      }
      parent = parent.$parent;
    }

    // 动态获取current对应的组件
    // const route = this.$router.routeMap[this.$router.current]
    // if (route) {
    //   component = route.component
    // }
    let component = null;
    const route = this.$router.matched[depth]
    if (route) {
      component = route.component
    }
    return h(component)
  }
}