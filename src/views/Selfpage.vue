<template>
<div id="selfpage">
    <headerBar>
        <div slot="selfpage">
            <Icon type="ios-arrow-back" size="28" color="#fff" class="fl back" @click.native="$router.go(-1)"></Icon>
            <span class="my-selfpage">我的主页</span>
            <Icon type="share" size="28" color="#fff" class="fr share" @click.native="showSharebox"></Icon>
        </div>
    </headerBar>
    <div class="self-info clearfix">
        <div class="leftInfo fl">
            <img src="../assets/imgs/head.jpg" alt="" class="fl self_top_head">
            <p class="fl">{{userName}}</p>
            <div class="fl clearfix carefans">
                <div class="fl">{{vitality.follow}} <br> 关注</div>
                <div class="fl">{{vitality.fans}} <br> 粉丝</div>
            </div>
        </div>
        <div class="rightWriter fr">
            <router-link to="/editprofile">编辑资料</router-link>
        </div>
    </div>
    <router-link to="/editprofile" class="editIntroduce" v-if="!hasIntroduce">
        <Icon type="edit" size="16" color="blue"></Icon>
        添加个人简介...
    </router-link>
    <div v-else class="editIntroduce">
        {{introduce}}
    </div>
    <div class="myActive">
        <div class="self_con">
            <div class="self_items clearfix" v-for="(item,index) in selfComment">
                <img src="../assets/imgs/head.jpg" alt="" class="fl self_head">
                <div class="rightInfo">
                    <p class="self_name">{{userName}}</p>
                    <p class="self_time">{{item.datetime}}</p>
                    <p class="self_comment">{{item.comment}}</p>
                    <router-link :to="{
                    name:'newsdetail',
                    params:
                        {   
                            id:item.tag_id,
                            title:item.title,
                            media_info:item.media_info,
                            media_name:item.media_name,
                            datetime:item.datetime,
                            abstract:item.abstract,
                            image_list:item.image_list,
                            repin_count:item.repin_count,
                            comment_count:item.comment_count,
                            keywords:item.keywords,
                            collected:item.collected,
                        }
                }" class="self_news clearfix">
                        <img :src="img.url" v-show="index === 1" alt="" v-for="(img,index) in item.image_list" class="fl news_img">
                        <div class="news_title">{{item.title}}</div>
                    </router-link>
                    <div class="self_todo clearfix">
                        <span @click="showSharebox">
                            <Icon type="android-share" size="20"></Icon>
                            分享
                        </span>
                        <span class="fr self_tocomment">
                            <Icon type="ios-chatbubble-outline" size="20"></Icon>
                            评论
                        </span>
                        <span class="fr self_good">
                            <Icon type="thumbsup" size="20" color="#d43d3d"></Icon>
                            {{item.good}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <shareBox v-show="Sharebox"></shareBox>
</div>
</template>
<script>
import axios from 'axios'
import headerBar from '../components/Header-bar.vue'
import shareBox from '../components/Share.vue'
import * as type from '../store/mutation-types.js'
import {
    mapGetters
} from 'vuex'

export default {
    components: {
        headerBar,
        shareBox
    },
    data(){
        return {
            selfComment:[]
        }
    },
    created(){
        this.getSelfComment();
    },
    methods: {
        showSharebox() {
            this.$store.commit(type.SHOWSHAREBOX, !this.Sharebox)
        },
        getSelfComment(){
            axios.get('/src/static/self_comment.json')
                .then(res => {
                    const Data = res.data;
                    this.selfComment = Data.data;
                })
        }
    },
    computed: {
        ...mapGetters([
            'Sharebox',
            'vitality',
            'userName',
            'hasIntroduce',
            'introduce'
        ])
    },
    watch: {
        '$route': function() {
            this.$store.commit(type.SHOWSHAREBOX, false)
        }
    }
}
</script>
<style lang="less">@import '../assets/css/border.less';
#selfpage {
    .back {
        line-height: 1.2rem;
        margin-left: 0.3rem;
    }
    .share {
        line-height: 1.2rem;
        margin-right: 0.3rem;
    }
    .my-selfpage {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
    }
    .self-info {
        margin-top: 1.2rem;
        height: 4rem;
        background: rgba(51,51,51,1);
        .leftInfo {
            width: 70%;
            position: relative;
            color: #fff;
            .self_top_head {
                height: 1.6rem;
                width: 1.6rem;
                border-radius: 50%;
                margin: 2rem 0.3rem 0.3rem;
            }
            p {
                margin-top: 1.9rem;
                font-size: 16px;
            }
            .carefans {
                margin-top: 1rem;
                position: absolute;
                left: 2.2rem;
                bottom: 0.3rem;
                div {
                    margin-right: 0.3rem;
                }
            }
        }
        .rightWriter {
            margin-top: 2.75rem;
            margin-right: 0.6rem;
            font-size: 16px;
            height: 0.8rem;
            padding: 0 .1rem;
            line-height: 0.8rem;
            border: 1px solid #fff;
            border-radius: 5px;
            text-align: center;
            a {
                color: #fff;
            }
        }
    }
    .editIntroduce {
        display: block;
        width: 100%;
        padding: 0.2rem 0.25rem;
        color: blue;
        font-size: 14px;
        position: relative;
        .borderBottom(1px,#ccc);
    }
    .myActive{
        .self_con{
            width: 94%;
            margin: .25rem auto;
            .self_items{
                padding: .2rem 0 .25rem;
                border-bottom: 1px solid #ccc;
                margin-top: .2rem;
                .self_head{
                    height: 1rem;
                    width: 1rem;
                    border-radius: 50%;
                }
                .rightInfo{
                    margin-left: 1.3rem;
                    .self_name{
                        font-size: 16px;
                        color: #000;
                    }
                    .self_time{
                        margin-top: -.1rem;
                    }
                    .self_comment{
                        font-size: 16px;
                        color: #000;
                        font-weight: bold;
                        margin-top: .15rem;
                    }
                    .self_news{
                        display: block;
                        background: #ccd;
                        margin-top: .15rem;
                        margin-bottom: .3rem;
                        .news_img{
                            height: 1.5rem;
                            width: 1.5rem;
                        }
                        .news_title{
                            margin-left: 1.6rem;
                            padding: .1rem;
                            font-size: 15px;
                            color: #000;
                        }  
                    }
                    .self_todo{
                        font-size: 14px;
                        .self_tocomment{
                            margin-left: .3rem;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }
}
</style>
