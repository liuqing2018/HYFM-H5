<template>
  <div>
    <p>我是父亲,对儿子说： {{sth}}</p>
    <child v-model="sth"></child>
  </div>
</template>

<script>
  import child from './child';
	export default {
		name: "parent",
    components: {
      child,
    },
		data() {
			return {
				sth: '给你100块钱',
			}
		},
    methods: {
      handleBack(value) {
        this.sth = value;
      }
    }
  
	}
</script>

<style scoped>

</style>
