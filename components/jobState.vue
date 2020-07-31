<template>
  <div class="jobState">
    <van-nav-bar left-arrow @click-left="closeMaskFn" />
    <h1 class="titleSty">管理求职意向</h1>
    <!-- 切换求职状态 按钮 -->
    <van-nav-bar left-text="求职状态" :right-text="jobstateObj" @click-right="openJobStateFn" />

    <!-- 求职状态的列表 从下向上生成 -->
    <!-- <van-cell is-link title="基础用法" @click="show = true" /> -->
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>>
<script>
export default {
  name: "jobState",
  data() {
    return {
      msg: "求职意向管理",
      show: false,
      actions: [
        { name: "离职-随时到岗", is_state: "0" },
        { name: "在职-月内到岗", is_state: "1" },
        { name: "在职-考虑机会", is_state: "2" },
        { name: "在职-暂不考虑", is_state: "3" },
      ],
      jobstateObj: "请选择 >>",
    };
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      console.log(item);
      this.jobstateObj = item.name + " >>";
      this.show = false;
      //   this.$Toast(item.name);
    },

    openJobStateFn() {
      this.show = true;
    },
    closeMaskFn() {
      this.$emit("closeJobStateFn");
    },
  },
};
</script>>
<style scoped>
.titleSty {
  font-size: 0.3rem;
  font-weight: bold;
  margin-left: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.div_p {
  font-size: 0.1rem;
  color: #969696;
  margin-left: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jobState {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jobState_footer {
  text-align: center;
  margin: 2rem 0;
}
</style>>