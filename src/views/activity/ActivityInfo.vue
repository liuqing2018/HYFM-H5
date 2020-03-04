<template>
  <div class="c-main">
    <hyHeaderNavbar></hyHeaderNavbar>
    <van-form name="form" label-width="50px">
      <van-cell-group>
        <van-cell>
          <van-image
            width="100%"
            height="120"
            :src="thumb"
          />
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell>
          <template #title>
            <h3 class="activity-title">靠谱头灯团购：户外活动必备光源（30元一个）</h3>
          </template>
          <template #label>
            <div class="sub-title-wrap">
              <!--<p class="sub-title">布兰卡布兰卡</p>-->
              <p>
                <van-tag class="mr-10" type="primary">徒步</van-tag>
                <van-tag type="primary">网红打卡</van-tag>
              </p>
              <div class="sub-info">
                阅读<span>1761</span>
                分享<span>65</span>
              </div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group title="">
        <van-field
          label="开始时间"
          :value="vm.startTime"
          readonly>
        </van-field>
        <van-field
          label="结束时间"
          :value="vm.endTime"
          readonly>
        </van-field>
        <van-field
          label="活动费用"
          readonly>
          <span slot="input">{{vm.cost}}元</span>
        </van-field>
        <van-field
          label="已报名"
          readonly>
          <span slot="input">{{vm.cost}} / 99</span>
        </van-field>
        <van-field
          label="报名截止"
          readonly>
          <span slot="input">{{vm.endTime}}</span>
        </van-field>
      </van-cell-group>
      <van-tabs>
        <van-tab title="详情">
          <van-list
            finished-text="没有更多了"
          >
            <van-cell v-for="item in 20" :key="item" :title="item"></van-cell>
          </van-list>
        </van-tab>
        <van-tab title="注意事项"></van-tab>
      </van-tabs>

      <van-goods-action>
        <van-goods-action-icon>
          <p style="width: 100px; font-size: 24px;"> ¥30</p>
        </van-goods-action-icon>
        <van-goods-action-button type="danger" text="立即报名" @click="handleToJoin" />
      </van-goods-action>
    </van-form>
  </div>
</template>

<script>
  import hyHeaderNavbar from '../../components/HYHeaderNavbar';
	import thumb from '../../assets/bg.jpg';

	export default {
		name: "PublishActivity",
		components: {
      hyHeaderNavbar,
		},
		data() {
			return {
        thumb,
				vm: {
					name: '',
					detail: '',
					num: '',
          cost: 30,
					startTime: '2020-03-03 21:51:00',
          endTime: '2020-03-30 21:51:00',
					notice: '',
					insurance: false,
				},
			}
		},
		methods: {
      handleToJoin() {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
          loadingType: 'spinner'
        });
        setTimeout(() => {
          this.$router.push({
            name: 'joinActivity',
          }, 1000);
        })
      }
		},
    created() {
      document.title = '我是一个标题';
    }
  }
</script>

<style lang="less" scoped>
  .activity-title {
    font-size: 18px;
  }
  .sub-title-wrap {
    display: flex;
    justify-content: space-between;
    .sub-title {
      flex: 2 1 auto;
    }
    .sub-info {
      flex: 1 1 auto;
      display: flex;
      justify-content: flex-end;

      & > span {
        margin: 0 5px;
        &:first-child {
          margin-right: 8px;
        }
      }
    }
  }
</style>
