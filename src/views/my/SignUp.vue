<template>
	<div class="sign-up">
		<van-cell-group>
            <!--<van-cell title="logo">-->
                <!--<van-uploader-->
                    <!--v-model="fm.fileList"-->
                    <!--multiple-->
                    <!--:max-count="1"-->
                <!--/>-->
            <!--</van-cell>-->
            <van-field
                v-model="fm.username"
                required
                clearable
                label="用户名"
                placeholder="请输入用户名"
                arrow-direction="up"/>
            <van-field
                v-model="fm.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required/>
			<van-cell title="注册角色" is-link :value="fm.role" @click="handleShowRoleList" required></van-cell>
			<van-cell title="所在城市" is-link v-model="fm.city" @click="handleShowAreaPopup"></van-cell>
            
            <!-- 昵称 名称 所在城市 负责人 联系电话 邮箱 验证码-->
            <van-field
                v-model="fm.user"
                clearable
                label="负责人"
                placeholder="请输入负责人"
                arrow-direction="up"/>
			<van-field
				v-model="fm.phone"
				center
				clearable
				label="联系电话"
				placeholder="请输入联系电话">
				<van-button slot="button" size="small" type="primary" @click="handleSendCode">发送验证码</van-button>
			</van-field>
            <van-field
                v-model="fm.sms"
                clearable
                label="验证码"
                placeholder="请输入验证码"
                arrow-direction="up"/>
            <van-field
                v-model="fm.email"
                clearable
                label="邮箱"
                placeholder="请输入邮箱"
                arrow-direction="up"/>
            <van-cell>
                <van-checkbox v-model="vm.isAgree">
                    <span>我已阅读并同意《<a href="#">瀚游FM俱乐部或领队注册协议</a>》</span>
                </van-checkbox>
            </van-cell>
            <van-cell>
                <van-button type="info" size="large" :disabled="!vm.isAgree" @click="handleSubmit">提交</van-button>
            </van-cell>
		</van-cell-group>
        
        <van-action-sheet
            v-model="vm.role"
            :actions="vm.roleList"
            :close-on-click-action="true"
            @select="handleRoleSelect">
        </van-action-sheet>
        <!-- 所在城市 开始 -->
		<van-popup
			v-model="showAreaPopupVisiable"
			position="bottom"
		>
			<van-area
				@confirm="handleConfirmArea"
				@cancel="handleCancelArea"
				:area-list="areaList"
				:loading="false">
			</van-area>
		</van-popup>
        <!-- 所在城市 结束 -->
	</div>
</template>

<script>
	import areaList from '../../assets/data/areaList';
	
	export default {
		name: "SignUp",
		data() {
			return {
                test: null,
				fm: {
                    fileList: [],
                    username: '',
                    password: '',
					role: '俱乐部',
                    city: '',
					sms: '',
					areaList: '',
				},
				vm: {
					role: false,
                    isAgree: false,
                    roleList: [
                        {name: '个人', value: 0},
                        {name: '俱乐部', value: 1},
                        {name: '商家', value: 2}
                    ],
				},
				
				areaList,
				showAreaPopupVisiable: false,
			}
		},
		methods: {
            handleRoleSelect(item) {
                this.fm.role = item.name;
            },
			handleShowRoleList() {
				this.vm.role = true;
			},
			handleShowAreaPopup() {
				this.showAreaPopupVisiable = true;
			},
			handleConfirmArea(confirm) {
                this.fm.city = confirm[2].code;
				this.showAreaPopupVisiable = false;
			},
			handleCancelArea() {
				this.showAreaPopupVisiable = false;
			},
            handleSendCode() {
                this.$toast('验证码已发送，请查收');
            },
            handleSubmit() {
                this.$router.push({
                    name: 'userCenter'
                })
            }
		}
	}
</script>

<style scoped>
.sign-up {
    padding: 40px 10px;
}
</style>
