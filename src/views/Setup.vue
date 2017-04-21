<template>
<div id="setup">
    <headerBar>
        <div class="setup-header" slot="setup-header">
            <Icon type="ios-arrow-back" size="28" color="#000" class="fl back" @click.native="$router.go(-1)"></Icon>
            设置
        </div>
    </headerBar>
    <div class="item">
        <router-link to="/editprofile" class="setup_item" v-show="showLog_off&&logined"> 编辑资料
        <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toeditprofile"></Icon>
        </router-link>
        <div class="setup_item">账号和绑定设置</div>
        <div class="setup_item">黑名单</div>
    </div>
    <div class="item lingwai">
        <div class="setup_item">清除缓存</div>
        <div class="setup_item">字体大小</div>
        <div class="setup_item hasSwith">列表显示摘要
            <i-switch class="fr"></i-switch>
        </div>
        <div class="setup_item">非WIFI网络流量</div>
        <div class="setup_item">非WIFI网络播放提醒</div>
        <div class="setup_item hasSwith">推送通知
            <i-switch class="fr" v-model="sign"></i-switch>
        </div>
    </div>
    <div class="log_off" @click="logOff" v-show="logined">退出登录</div>
    <Modal title="退出确认" v-model="modal" class-name="vertical-center-modal" @on-ok="ok">
        <p>退出当前账号，将不能同步收藏，发布评论和云端分享等</p>
    </Modal>
</div>
</template>
<script>
import headerBar from '../components/Header-bar.vue'
import * as type from '../store/mutation-types.js'
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    components: {
        headerBar
    },
    methods: {
        ...mapActions([
            'setSignOut'
        ]),
        logOff() {
            this.modal = true;
        },
        ok() {
            localStorage.removeItem('userName');
            this.setSignOut();
            this.$router.push({path:'/my'});
        }
    },
    data() {
        return {
            modal: false,
            sign: true
        }
    },
    computed: {
        ...mapGetters([
            'showLog_off',
            'logined'
        ])
    }
}
</script>
<style lang="less">@import '../assets/css/border.less';
#setup {
    .setup-header {
        font-size: 18px;
        font-weight: bold;
        background: #fff;
        color: #000;
        position: relative;
        .borderBottom(1px,#ccc);
        .back {
            line-height: 1.2rem;
            margin-left: 0.3rem;
        }
    }
    .item {
        width: 100%;
        margin-top: 1.4rem;
        position: relative;
        .borderTop(1px,#ccc);
        .setup_item {
            display: block;
            height: 1.1rem;
            width: 100%;
            line-height: 1.1rem;
            color: #000;
            position: relative;
            padding-left: 0.3rem;
            font-weight: bold;
            font-size: 16px;
            .borderBottom(1px,#ccc);
            .toeditprofile{
                margin-right: .3rem;
                margin-top: .2rem;
            }
        }
        .hasSwith {
            span {
                display: inline-block;
                margin-top: 0.2rem;
                margin-right: 0.2rem;
            }
        }
    }
    .lingwai {
        margin-top: 1rem;
    }
    .log_off {
        margin-top: 1rem;
        height: 1.1rem;
        width: 100%;
        line-height: 1.1rem;
        color: #d43d3d;
        padding-left: 0.3rem;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        position: relative;
        .verticalBorder(1px,#d43d3d);
    }
}
</style>
