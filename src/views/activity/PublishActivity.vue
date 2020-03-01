<template>
  <div class="c-main">
    <hyHeaderNavbar
      title="发布新活动"
      right-text="存草稿"
      fixed
      @click-right="handlePublish">
    </hyHeaderNavbar>
    <van-cell-group>
      <van-field
        v-model="fm.name"
        maxlength="20"
        arrow-direction="up"
        label="活动标题"
        placeholder="请输入用户名">
      </van-field>
      <van-field name="tag" label="活动标签">
        <template #input>
          <van-tag class="mr-10" plain type="primary">徒步</van-tag>
          <van-tag plain type="primary">网红打卡</van-tag>
        </template>
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
      <datetime-picker-popup v-model="fm.endTime" lable="结束时间"></datetime-picker-popup>
      <datetime-picker-popup v-model="fm.closeTime" lable="报名截止"></datetime-picker-popup>
    </van-cell-group>
    <van-cell-group title="报名信息配置">
      <van-field
        center
        clearable
        label="活动费用"
        v-model="fm.cost"
        :disabled="fm.isFree"
        placeholder="请输入">
        <template slot="button">
          <van-checkbox
            v-model="fm.isFree"
            shape="square"
            @change="handleFreeChange">免费
          </van-checkbox>
        </template>
      </van-field>
      <action-sheet
        v-model="fm.insuranceType"
        label="活动保险"
        :data="insuranceActions">
      </action-sheet>

    </van-cell-group>
    <van-cell-group>
      <van-field name="switch" readonly label="报名审核">
        <template #button>
          <van-switch v-model="fm.check" size="20"/>
        </template>
      </van-field>
      <van-field name="switch" readonly label="允许代挂">
        <template #button>
          <van-switch v-model="fm.add" size="20"/>
        </template>
      </van-field>
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
    <van-cell>
      <van-checkbox v-model="vm.isAgree">
        <span>我已阅读并同意《<a href="#">瀚游FM服务协议</a>》</span>
      </van-checkbox>
    </van-cell>
    <van-row class="mr">
      <van-col span="10" offset="1">
        <van-button type="default" plain size="large">存草稿</van-button>
      </van-col>
      <van-col span="10" offset="2">
        <van-button type="info" size="large" @click="handlePublish">发布</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import hyHeaderNavbar from '../../components/HYHeaderNavbar';
	import datetimePickerPopup from '../../components/HYDatetimePicker';
	import actionSheet from '../../components/HYActionSheet';

	export default {
		name: "PublishActivity",
		components: {
			hyHeaderNavbar,
			datetimePickerPopup,
			actionSheet,
		},
		data() {
			return {
				test: false,
				test2: false,
				fm: {
					name: '',
					detail: '',
					num: '',
					startTime: null,
					notice: '',
					insurance: false,
				},
				vm: {
					show: false,
					datePopupVisiable: false,
				},
				insuranceActions: [
					{
						name: '无保险要求',
						value: 1,
					},
					{
						name: '会员自行购买',
						value: 2,
					},
					{
						name: '主办方统一购买',
						value: 3,
					},
				]
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
			handleFreeChange(val) {
				// 免费的时候将费用设置为0
				if (val) {
					this.fm.cost = 0;
				}
			},
			handleInsuranceSelect(item, index) {
				console.log(item);
				console.log(index);
				this.fm.insuranceType = item.name;
				this.fm.insurance = false;
			},
			handleInsuranceCancel() {
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
