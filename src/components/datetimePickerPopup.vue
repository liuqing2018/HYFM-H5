<template>
  <div>
    <van-cell :title="lable"
          is-link
          v-model="value"
          @click="handleShowDatePopup">
      <van-icon
        slot="right-icon"
        name="underway-o"
        style="line-height: inherit;"
      />
    </van-cell>
    <van-popup
      v-model="popupVisiable"
      position="bottom"
    >
      <van-datetime-picker
        type="datetime"
        @confirm="confirm"
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
			confirm(value) {
				const fmtDate = utils.formatTime(value);
				this.popupVisiable = false;
				this.$emit('input', fmtDate);
				this.$emit('confirm', value);
			},
		},
		created() {}
	}
</script>

<style scoped>

</style>
