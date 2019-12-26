<template>
    <div class="c-main">
        <van-tabs v-model="active" sticky>
            <van-tab title="未开始">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                    <van-cell
                        v-for="item in list"
                        :key="item"
                        :title="item"
                    />
                </van-list>
            </van-tab>
            <van-tab title="进行中">进行中</van-tab>
            <van-tab title="已结束">已结束</van-tab>
        </van-tabs>
        
    </div>
</template>

<script>
	export default {
		name: "activityList",
        data() {
            return {
                active: 1,
                list: [],
                loading: false,
                finished: false
            }
        },
        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;
            
                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            }
        }
	}
</script>

<style scoped>
.c-main {
    padding: 20px 10px;
    /*background: #e8e8e8;*/
}
</style>
