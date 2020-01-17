//vuex里的用法
export const state = {
    userInfo:{},
}
// state一定要mutations来赋值才ok的哦
export const mutations= {
    eidtUserInfo(state,data) {
        state.userInfo=data;
    }
}