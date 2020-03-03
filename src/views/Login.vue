<template>
	<div class="login">
		<div class="logo">
			<img alt="瀚游FM logo" src="../assets/logo.png">
		</div>
		<van-cell-group>
			<van-field
				v-model="fm.username"
				clearable
				label="用户名"
				left-icon="contact"
				placeholder="请输入用户名"
			/>

			<van-field
				v-model="fm.password"
				type="password"
				label="密码"
				left-icon="comment-o"
				placeholder="请输入密码"
			/>

			<van-field
				v-model="fm.sms"
				center
				clearable
				label="验证码"
                left-icon="qr-invalid"
				placeholder="请输入验证码"
			>
				<van-button slot="button" size="small" type="primary">发送验证码</van-button>
			</van-field>

            <van-cell>
                <van-button type="info" size="large" @click="handleToLogin">登录</van-button>
            </van-cell>
            <van-cell>
                <div class="other">
                    <a href="#" @click="handleToSignUp">注册</a>
                    <a href="#">忘记密码</a>
                </div>
            </van-cell>
		</van-cell-group>
	</div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                // formModel
                fm: {
					username: '',
					password: '',
					sms: '',
                }
            }
        },
        methods: {
            handleToSignUp() {
                this.$router.push({
                    name: 'signUp'
                })
            },
						handleToLogin() {
							this.$router.push({
								name: 'activityInfo',
							})
						},
        }
    }
</script>

<style scoped>
    .login {
        padding: 10px 20px;

    }
	.logo {
		text-align: center;
		margin-top: 40px;
	}
    .other {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
    }
    .other >a {
        margin-left: 8px;
    }
</style>
