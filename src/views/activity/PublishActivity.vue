<template>
    <div class="c-main">
        <p>{{fm}}==</p>
        <p>{{test2}}==</p>
        <van-cell-group>
            <van-field
                v-model="fm.name"
                maxlength="20"
                arrow-direction="up"
                label="活动标题"
                placeholder="请输入用户名">
            </van-field>
            <van-field
                v-model="fm.detail"
                rows="4"
                autosize
                label="活动详情"
                type="textarea"
                show-word-limit
                maxlength="260"
                placeholder="请输入留言">
            </van-field>
        </van-cell-group>
        <van-cell-group title="活动信息配置">
            <van-field
                v-model="fm.num"
                type="number"
                :formatter="onlyNumber"
                label="预收人数"
                placeholder="请输入">
            </van-field>
            <!-- todo 自动计算活动天数 -->
            <van-field
                v-model="fm.days"
                type="number"
                arrow-direction="up"
                label="活动天数"
                placeholder="请输入">
            </van-field>
        <datetime-picker-popup v-model="fm.startTime" lable="开始时间"></datetime-picker-popup>
        <datetime-picker-popup v-model="fm.endTime" lable="开始时间"></datetime-picker-popup>
        <van-cell title="活动领队" is-link></van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-field
                center
                clearable
                label="活动费用"
                placeholder="请输入">
                <span slot="button">元</span>
            </van-field>
            <van-cell title="活动保险" is-link></van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell title="报名审核" is-link></van-cell>
            <van-cell title="允许代挂" is-link></van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-field
                v-model="fm.notice"
                rows="4"
                autosize
                label="活动声明/须知"
                type="textarea"
                show-word-limit
                maxlength="260"
                placeholder="请输入">
            </van-field>
        </van-cell-group>

        <van-row class="mr">
            <van-col span="10" offset="1">
                <van-button type="default" plain size="large">存草稿</van-button>
            </van-col>
            <van-col span="10" offset="2">
                <van-button type="info" size="large" @click="handlePublish">发布</van-button>
            </van-col>
        </van-row>

        <!--<van-number-keyboard-->
            <!--v-model="fm.num"-->
            <!--:show="vm.show"-->
            <!--extra-key="."-->
            <!--close-button-text="完成"-->
            <!--@blur="vm.show = false"-->
            <!--@touchstart.native.stop="show = true"-->
        <!--/>-->
        <!--<van-cell title="注册角色" is-link :value="fm.role" @click="handleShowRoleList" required></van-cell>-->
        <!--<van-cell title="所在城市" is-link v-model="fm.city" @click="handleShowAreaPopup"></van-cell>-->
        <!--<van-action-sheet-->
            <!--v-model="vm.role"-->
            <!--:actions="vm.roleList"-->
            <!--:close-on-click-action="true"-->
            <!--@select="handleRoleSelect">-->
        <!--</van-action-sheet>-->
        <!-- 所在城市 开始 -->
        <!--<datetime-picker-popup v-model="test" @confirm="handleSelectStartTime"></datetime-picker-popup>-->
        <!--<van-popup-->
            <!--v-model="vm.datePopupVisiable"-->
            <!--position="bottom"-->
        <!--&gt;-->
            <!--<van-datetime-picker-->
                <!--type="datetime"-->
                <!--@confirm="handleSelectStartTime"-->
                <!--title="活动开始时间"-->
                <!--:close-on-popstate="true"-->
            <!--/>-->
        <!--</van-popup>-->
        <!-- 所在城市 结束 -->
    </div>
</template>

<script>
    import datetimePickerPopup from '../../components/datetimePickerPopup';
	export default {
		name: "PublishActivity",
        components: {
            datetimePickerPopup,
        },
        data() {
            return {
                test: false,
                test2: false,
                fm: {
                    name:'',
                    detail:'',
                    num: '',
                    startTime: null,
                    notice: '',
                },
                vm: {
                    show: false,
                    datePopupVisiable: false,
                }
            }
        },
        methods: {
            // 过滤非数字
            onlyNumber(value) {
                return value.replace(/\D/g, '');
            },
            handleShowDatePopup() {
                this.test = true;
                // this.vm.datePopupVisiable = true;
            },
            handleTest(value) {
                this.test2 = value;
            },
            handleSelectStartTime(val) {
                console.log(new Date(val).getTime());
                this.fm.startTime = new Date(val).toString();
                // this.vm.datePopupVisiable = false;
            },
            handlePublish() {
                this.$toast.success('发布成功!');
                this.$router.push({
                    name: 'userCenter'
                })
            },
        }
	}
</script>

<style scoped>
.c-main {
    padding: 20px 10px;
    /*background: #e8e8e8;*/
}
.mr {
    margin-top: 20px;
}
.text-center {
    text-align: center;
}
</style>
