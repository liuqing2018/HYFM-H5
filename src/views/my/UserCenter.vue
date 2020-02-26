<template>
	<div class="user-center">
        <div class="user-info">
            <div class="logo">
                <img src="../../assets/bg.jpg" alt="">
                <h3>瀚游户外</h3>
            </div>
            <div class="focus">
                <span>ID: 123456</span>
                <span>关注: 152065</span>
            </div>
            <div class="slogan">不要把梦想交给来日方长</div>
        </div>
        <div class="user-conten">
            <van-cell-group>
                <van-cell title="活动管理" is-link :to="{name: 'publicActivity'}"></van-cell>
                <!--<van-cell title="活动管理" is-link :to="{name: 'activityList'}"></van-cell>-->
            </van-cell-group>
            <van-cell-group>
                <van-cell title="消息管理" is-link></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="财务管理" is-link></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="领队管理" is-link></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="资料管理" is-link></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="粉丝管理" is-link></van-cell>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="建议反馈" is-link></van-cell>
            </van-cell-group>
        </div>
        <van-tabbar v-model="tabActive">
            <van-tabbar-item icon="home-o">消息</van-tabbar-item>
            <van-tabbar-item icon="search">活动</van-tabbar-item>
            <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
	export default {
		name: "UserCenter",
        data() {
            return {
                tabActive: ''
            }
        }
	}
</script>

<style scoped>
.user-center {
    font-size: 14px;
    
}
.user-info {
    padding: 20px;
    background: rgba(131, 133, 151, .8);
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    color: #fff;
}
.logo {
    text-align: center;
}
.logo img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.logo h3 {
    letter-spacing: 1px;
    padding: 0;
    margin: 0;
}
.focus {
    display: flex;
    justify-content: center;
    margin-top: 8px;
}
.focus span {
    margin-left: 8px;
}
.slogan {
    text-align: center;
    margin-top: 8px;
    font-size: 18px;
}
</style>
