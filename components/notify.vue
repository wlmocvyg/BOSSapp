<template>
  <div class="notify">
    {{msg}}
    <!-- 下拉刷新，加载转菊花 -->
    <van-loading type="spinner" />
  </div>
</template>>
<script>
export default {
  name: "notify",
  data() {
    return {
      msg: "notify 提示组件，职位已经更新",
    };
  },
};
</script>
<style>
.notify {
  width: 100%;
  height: 0.5rem;
  background: #14c1bb;
  text-align: center;
  line-height: 0.5rem;
  color: #fff;
  font-size: 0.21rem;

  animation: notify_show 0.5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@keyframes notify_show {
  from {
    height: 0.5rem;
  }
  to {
    height: 0;
  }
}
</style>>