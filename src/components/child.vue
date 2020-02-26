<template>
  <div>
    <p>收到父亲的信息： {{value}}</p>
    <button type="button" @click="handleClick">回复</button>
  </div>
</template>

<script>
	export default {
		name: "child",
    props: {
			value: String,
    },
    // model: {
    //   prop: 'give',
    //   event: 'returnBack'
    // },
    data() {
			return {}
    },
    methods: {
			handleClick() {
				console.log('=准备回复=');
				this.$emit('input', '还你2300块钱');
      }
    }
    
	}
</script>

<style scoped>

</style>
