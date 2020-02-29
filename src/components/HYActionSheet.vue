<template>
  <div>
    <!-- form -->
    <van-cell
      :value="value"
      :title="label"
      is-link
      @click="handleClick" >
    </van-cell>

    <!-- action-sheet -->
    <van-action-sheet
      v-model="actionVisiable"
      :actions="data"
      :cancel-text="cancelText"
      @select="handleSelect"
      @cancel="handleCancel"
    />

  </div>
</template>

<script>
	export default {
		name: "HYActionSheet",
    props: {
			value: [String, Number, Boolean],
      label: {
				type: String,
      },
      data: {
				type: Array,
        default() {
					return [];
        }
      },
			cancelText: {
				type: String,
        default: '取消',
      },
    },
    data() {
			return {
				actionVisiable: false,
      }
    },
    methods: {
			handleClick() {
				this.actionVisiable = true;
      },
			handleSelect(item, index) {
				this.actionVisiable = false;
				this.$emit('select', item, index); // 返给调用页面，用作细分处理
        this.$emit('input',item.name); // 改变model的值
      },
			handleCancel() {
				this.actionVisiable = false;
				this.$emit('cancel');
      }
    }
	}
</script>

<style scoped>

</style>
