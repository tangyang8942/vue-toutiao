<template>
<div id="Editprofile">
    <headerBar>
        <div class="editprofile-header" slot="editprofile-header">
            <Icon type="ios-arrow-back" size="28" color="#000" class="fl back" @click.native="$router.go(-1)"></Icon>
            编辑资料
        </div>
    </headerBar>
    <div class="editprofile_item_1">
        <div class="containner">
            <div class="editprofile_item">
                头像
                <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toEdit"></Icon>
                <img src="../assets/imgs/head.jpg" alt="" class="fr headPic">
                <input type="file" class="file">
            </div>
            <!-- <div class="editprofile_item"  @click="edit">
                用户名
                <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toEdit"></Icon>
            </div> -->
            <el-button is="div" type="text"  class="editprofile_item">
                用户名
                <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toEdit"></Icon>
                <span class="fr username" v-model="userName">{{userName}}</span>
            </el-button>
            <el-button is="div" type="text" @click="editintroduce"  class="editprofile_item">
                介绍
                <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toEdit"></Icon>
                <span class="fr username" v-model="introduce">{{introduce}}</span>
            </el-button>
        </div>
    </div>
</div>
</template>
<script>
import * as type from '../store/mutation-types.js'
import headerBar from '../components/Header-bar.vue'
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    components: {
        headerBar,
    },
    methods:{
        // edit(){
        //     this.$prompt('请输入用户名', '修改用户名', {
        //       confirmButtonText: '确定',
        //       cancelButtonText: '取消',
        //       'inputValue':this.userName,
              // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              // 'inputErrorMessage':'adfadsf'
        //     }).
        //     then(({ value }) => {
        //         if(value.length < 10){
        //             this.userName = value;
        //         }
        //     }).
        //     catch(() => {
                      
        //     });
        // },
        editintroduce(){
            this.$prompt('请输入介绍', '修改介绍', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValue:this.introduce,
            }).
            then(({ value }) => {
                if(value.length < 25){
                    this.$store.commit(type.CHANGEINTRODUCE, value)
                }else{
                    alert('请少于25字')
                }
            }).
            catch(() => {
                       
            });
        },
    },
    computed: {
        ...mapGetters([
            'userName',
            'introduce'
        ])
    },
}
</script>
<style lang="less">@import '../assets/css/border.less';
#Editprofile {
    .editprofile-header {
        background: #fff;
        font-size: 18px;
        color: #000;
        box-shadow: 0 0 3px #ccc;
        .borderBottom(1px,#ccc);
        .back {
            line-height: 1.2rem;
            margin-left: 0.3rem;
        }
    }
    .editprofile_item_1{
        margin-top: 1.5rem;
        .containner{
            width: 94%;
            margin: 0 auto;
           .editprofile_item{
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
                .toEdit{
                    margin-top: .2rem;
                }
                .username{
                    margin-right: .2rem;
                    font-size: 14px;
                    font-weight: normal;
                }
                .headPic{
                    margin-right: .2rem;
                    margin-top: .15rem;
                    border-radius: 50%;
                    height: 25px;
                    width: 25px;
                }
                .file{
                    position: absolute;
                    top :-5px;
                    display: inline-block;
                    opacity: 0
                }
            } 
        }
    }
}
.el-message-box{
    width: 100% !important;
}
</style>
