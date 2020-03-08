export default {
  // data
  state: {
    vm: {
      name: '',
      startTime: '',
      endTime: '',
      cost: 0,
      notice: '',
      insurance: false,
      payType: '1'
    },
    memberList: [],
  },
  // getter
  getters: {},
  // 更改store
  mutations: {
    setViewModel(state, payload) {
      state.vm = payload;
    },
    setMemberList(state, payload) {
      state.memberList = payload;
    },
    deleteMember(state, index) {
      state.memberList.splice(index, 1);
    },
  },
  // 异步更store
  actions: {
    getActivityInfo(context) {
      setTimeout(() => {
        const data = {
          name: '靠谱头灯团购：户外活动必备光源（30元一个）',
          startTime: '2020-03-03 21:51:00',
          endTime: '2020-03-03 21:51:00',
          cost: 0,
          notice: '',
          insurance: false,
          payType: '1'
        };
        context.commit('setViewModel', data);
      }, 1000);
    }
  }
}
