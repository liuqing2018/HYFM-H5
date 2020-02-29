<template>
  <div>
    <van-field
      readonly
      clickable
      v-model="value"
      :label="lable"
      @click="handleShowDatePopup"
      placeholder="点击选择时间">
      <van-icon
        slot="right-icon"
        class="right-icon-time"
        name="underway-o"
      />
    </van-field>
    <van-popup
      v-model="popupVisiable"
      position="bottom"
    >
      <van-datetime-picker
        type="datetime"
        @confirm="handleConfirm"
        @cancel="handleCancel"
        :title="title"
        :close-on-popstate="true"
      />
    </van-popup>
  </div>
</template>

<script>
  import utils from '../libs/utils';
	export default {
		name: "datetimePickerPopup",
		props: {
			value: [String, Number],
			lable: {
				type: String,
				default: '选择时间',
			},
			title: {
				type: String,
				default: '选择时间',
			}
		},
		// model: {
		// 	prop: 'value',
		// 	event: 'returnBack'
		// },
		data() {
			return {
				popupVisiable: false,
        test: null,
			}
		},
		methods: {
			handleShowDatePopup() {
				this.popupVisiable = true;
			},
			handleConfirm(value) {
				const fmtDate = utils.formatTime(value);
				this.popupVisiable = false;
				this.$emit('input', fmtDate);
				this.$emit('confirm', value);
			},
			handleCancel() {
				this.popupVisiable = false;
      },
		},
		created() {}
	}
</script>

<style scoped>
  .right-icon-time {
    padding: 0 2px;
    line-height: inherit;
  }
</style>
