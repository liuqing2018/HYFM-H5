<template>
  <div class="c-main">
    <van-cell-group>
      <van-cell>
        <template #title>
          <h3 class="activity-title">靠谱头灯团购：户外活动必备光源（30元一个）</h3>
        </template>
        <template #label>
          <div class="sub-title-wrap">
            <p class="sub-title">活动时间：2020-03-03 21:51:00-2020-03-03 21:51:00</p>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <div class="sub-title-wrap" slot="title">
        <div>报名人（3人）</div>
        <div>
          <van-button
            plain
            hairline
            icon="plus"
            size="small"
            type="info"
            @click="handleAddMember">添加 </van-button>
        </div>

      </div>
      <van-swipe-cell v-for="item in 2" :key="item">
        <van-cell>
          <template #title>
            <p class="activity-title">张三-15011557228</p>
          </template>
          <template #label>
            <div class="sub-title-wrap">
              <p class="sub-title">默认套餐{{item}}</p>
              <div class="sub-info">
                ￥30
              </div>
            </div>
          </template>
        </van-cell>
        <div slot="right" class="y-inner">
          <van-button class="y-inner" square type="danger" text="删除"  style="height: 100%"/>
          <van-button class="y-inner" square type="primary" text="编辑" style=" height: 100%"/>
        </div>
      </van-swipe-cell>

    </van-cell-group>

    <van-cell-group>
      <van-coupon-cell
        :coupons="[]"
        :chosen-coupon="1">
      </van-coupon-cell>
      <van-cell title='' value="实际应付：￥354"></van-cell>
    </van-cell-group>

    <van-radio-group v-model="payType">
      <van-cell-group title="支付方式">
        <van-cell>
          <van-radio name="3">
            微信
            <div slot="icon">
              <img
                slot="icon"
                :src="ali"
                width="20"
              >
            </div>
          </van-radio>
          <van-radio slot="right-icon" name="1" />
        </van-cell>
        <van-cell>
          <van-radio name="3">
            支付宝
            <div slot="icon">
              <img
                slot="icon"
                :src="ali"
                width="20"
              >
            </div>
          </van-radio>
          <van-radio slot="right-icon" name="2" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <van-goods-action>
      <van-goods-action-icon>
        <p style="width: 100px; font-size: 24px;">¥354</p>
      </van-goods-action-icon>
      <van-goods-action-button type="danger" text="提交订单" @click="handleToJoin" />
    </van-goods-action>
  </div>
</template>

<script>
  // import hyHeaderNavbar from '../../components/HYHeaderNavbar';
	import thumb from '../../assets/bg.jpg';
  import ali from '../../assets/ali.png';

	export default {
		name: "PublishActivity",
		components: {
      // hyHeaderNavbar,
		},
		data() {
			return {
        thumb,
        ali,
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
        payType: '1'
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
          this.$toast.success('报名成功!');
          this.$router.push({
            name: 'userCenter',
          }, 1000);
        })
      },
      // 增加活动参与人员
      handleAddMember() {
        this.$router.push({
          name: 'memberList',
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
      font-size: 14px;

      & > span {
        margin: 0 5px;
        &:first-child {
          margin-right: 8px;
        }
      }
    }
  }
</style>
