<template>
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
				default: '',
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
