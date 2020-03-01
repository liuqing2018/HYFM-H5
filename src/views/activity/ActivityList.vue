<template>
    <div class="c-main">
        <van-nav-bar
          title=""
          left-text="返回"
          right-text="添加"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
        <van-tabs v-model="active" sticky>
            <van-tab title="未开始">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                    <van-list
                      v-model="loading"
                      :finished="finished"
                      finished-text="没有更多了"
                      @load="onLoad"
                    >
                        <!--<van-cell-->
                          <!--v-for="item in list"-->
                          <!--:key="item"-->
                          <!--:title="item"-->
                        <!--/>-->
                        <van-card
                          num="2"
                          price="2.00"
                          desc="描述信息"
                          title="商品标题"
                          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                        >
                            <div slot="tags">
                                <van-tag plain type="danger">标签</van-tag>
                                <van-tag plain type="danger">标签</van-tag>
                            </div>
                            <div slot="footer">
                                <van-button size="mini">按钮</van-button>
                                <van-button size="mini">按钮</van-button>
                            </div>
                        </van-card>
                        <!--<van-divider dashed v-if="finished">我是有底线的</van-divider>-->
                    </van-list>
                </van-pull-refresh>

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
                isLoading: false,
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
            },
            onRefresh() {
                setTimeout(() => {
                    this.isLoading = false;
                    this.count++;
                }, 1000);
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
