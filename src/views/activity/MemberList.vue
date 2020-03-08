<template>
  <div class="c-main">
    <form action="/">
      <van-search
        v-model="keyWords"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel">
      </van-search>
    </form>
    <van-list
      v-model="vm.loading"
      :finished="vm.finished"
      finished-text="没有更多了"
      @load="getMemberList"
    >
      <van-cell>
        <van-checkbox-group v-model="selectedList">
            <van-cell
              v-for="item in memberlist"
              :key="item.id"
            >
              <template #title>
                <van-checkbox
                  shape="quare"
                  :checked="item.id === 2"
                  :disabled="item.id === 2"
                  :name="item.id">
                  <div class="sub-title-wrap">
                    <p class="sub-title">
                      <span>{{item.name}}- </span>
                      <span>{{item.phone}}</span>
                    </p>
                    <div class="sub-info">{{item.IDCard}}</div>
                  </div>
                </van-checkbox>
              </template>
            </van-cell>
        </van-checkbox-group>
      </van-cell>
    </van-list>
    <div class="fixed-bottom member-action-wrap">
      <span class="member-number">已选：{{this.selectedList.length}}人</span>
      <div class="member-action">
        <van-button type="info" @click="handleActionOk">确定</van-button>
        <van-button type="default" @click="handleActionOk">返回</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  // import hyHeaderNavbar from '../../components/HYHeaderNavbar';

	export default {
		name: "MemBerList",
		components: {
      // hyHeaderNavbar,
		},
		data() {
			return {
        keyWords: '',
        memberlist: [],
				vm: {
          loading: false,
          finished: false,
				},
        selectedList: [2],
			}
		},
		methods: {
      onSearch() {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
          loadingType: 'spinner'
        });
      },
      onCancel() {
        this.$toast('取消');
      },
      getMemberList() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.memberlist.push({
              id: i + 1,
              name: '高人' + i,
              phone: '15011557228',
              IDCard: '341621****3933'
            });
          }

          // 加载状态结束
          this.vm.loading = false;

          // 数据全部加载完成
          if (this.memberlist.length >= 40) {
            this.vm.finished = true;
          }
        }, 1000);
      },
      handleActionOk() {
        this.$router.push({
          name: 'joinActivity',
        })
      }
		},
    created() {
    }
  }
</script>

<style lang="less" scoped>
  .member-action-wrap {
    display: flex;

    .member-number {
      display: flex;
      align-items: center;
      flex: 1 1 auto;
    }

    .member-action {
      flex: 0 1 auto;
      display: flex;
      justify-content: flex-end;

      button {
        margin-right: 10px;
      }
    }
  }

</style>
