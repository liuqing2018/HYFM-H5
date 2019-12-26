<template>
  <div class="test">
    <van-checkbox v-model="checked">复选框</van-checkbox>
  
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <van-cell-group>
      <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
      />
    
      <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      checked: false,
      username: false,
      password: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  border: 1px solid red;
}
</style>
