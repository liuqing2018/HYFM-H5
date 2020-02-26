<template>
  <div>
    <van-cell title="title"
              is-link
              v-model="fm.startTime"
              @click="handleShowDatePopup">
      <van-icon
        slot="right-icon"
        name="underway-o"
        style="line-height: inherit;"
      />
    </van-cell>
    <van-popup
      v-model="value"
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
	export default {
		name: "datetimePickerPopup",
		props: {
			value: {
				type: Boolean,
				default: false,
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
				visiable: false,
			}
		},
		methods: {
			confirm(value) {
				this.$emit('input', false);
				this.$emit('confirm', value);
			},
		},
		created() {
		}
	}
</script>

<style scoped>

</style>
