<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :right-text="rightText"
      :left-arrow="leftArrow"
      :fixed="fixed"
      :border="border"
      :z-index="zIndex"
      @click-left="handleClickLeft"
      @click-right="handleClickRight">
      <slot name="title"></slot>
      <slot name="left"></slot>
      <slot name="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
	export default {
		name: 'HYHeaderNavbar',
    props: {
			title: [String, Number],
      leftText: {
				type: [String, Number],
        default: '返回',
      },
			rightText: [String, Number],
      leftArrow: {
				type: Boolean,
        default: true,
      },
			fixed: {
				type: Boolean,
				default: false,
			},
			border: {
				type: Boolean,
				default: true,
			},
      zIndex: {
				type: [String, Number],
        default: 1,
      },
      noBack: {
				type: Boolean,
        default: false,
      }
    },
    methods: {
			handleClickLeft() {
				// 部分页面需要执行自定义事件
				if (!this.noBack) {
					this.$router.go(-1);
        }
				this.$emit('click-left');
      },
			handleClickRight() {
				this.$emit('click-right');
			}
    }
	}
</script>

<style scoped>

</style>
