<template lang="html">
    <ul class="nav">
        <router-link to="/home/" class="navItems">
          <Icon type="ios-home" size="30"></Icon>
          <div>首页</div>
        </router-link>
        <router-link to="/collect/my" class="navItems">
          <Icon type="cube" size="30"></Icon>
          <div>收藏</div>
        </router-link>
        <router-link to="/care" class="navItems">
          <Icon type="ios-heart" size="30"></Icon>
          <div>关注</div>
        </router-link>
        <router-link to="/my" class="navItems">
          <Icon type="person" size="30"></Icon>
          <div>我的</div>
        </router-link>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import '../assets/css/border.less';
.nav {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
    font-size: 13px;
    overflow: hidden;
    z-index: 1000;
    opacity: 1;
    background: #fff;
    box-shadow: 0 0 5px #ccc;
    .navItems {
        float: left;
        width: 25%;
        color: #999;
    }
    .router-link-active {
        color: #d43d3d;
    }
}
</style>
