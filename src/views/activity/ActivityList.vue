<template>
  <div class="c-main">
    <hyHeaderNavbar right-text="添加" @click-right="onClickRight"></hyHeaderNavbar>
    <van-tabs v-model="active" sticky>
      <van-tab title="未开始"></van-tab>
      <van-tab title="进行中"></van-tab>
      <van-tab title="已结束"></van-tab>
    </van-tabs>
    <div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-card
            v-for="(item, index) in list"
            :key="item"
            price="0"
            origin-price="999"
            desc="吃货跑团..."
            title="吃货跑团长距离之42公里约跑（74）"
            :thumb="thumb"
          >
            <div slot="tags">
              <van-tag class="mr-10" plain type="primary">吃货</van-tag>
              <van-tag class="mr-10" plain type="primary">徒步</van-tag>
            </div>
            <div slot="num">
              已报名 <span class="color-primary">{{index}} / 20</span>
            </div>
            <div slot="footer">
              <van-button size="mini">编辑</van-button>
              <van-button size="mini">删除</van-button>
            </div>
          </van-card>
        </van-list>
      </van-pull-refresh>
    </div>

  </div>
</template>

<script>
	import thumb from '../../assets/thumb.jpg'
	import hyHeaderNavbar from '../../components/HYHeaderNavbar';

	export default {
		name: "activityList",
		components: {
			hyHeaderNavbar,
		},
		data() {
			return {
				thumb,
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
			},
			onClickRight() {
				this.$router.push({
					name: 'publicActivity',
				})
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
