<template>
  <div>
    <van-area
      :title="title_name"
      :area-list="areaList"
      value="110101"
      @change="changeItemFn"
      visible-item-count="8"
      @cancel="closeCityMaskFn"
      @confirm="selectAreaBtn"
    />
  </div>
</template>>
<script>
import area from "../assets/area";

export default {
  name: "selectArea",
  data() {
    return {
      msg: "选择城区组件",
      areaList: area,
      title_name: "请选择省市区",
    };
  },
  methods: {
    //   选择城区确认按钮
    selectAreaBtn(_d) {
      //   console.log(_d[1].name);
      this.$emit("closeCityMaskFn", _d[1].name);
    },
    //   关闭按钮
    closeCityMaskFn() {
      //   console.log("xxx");

      //   这里是13节视频最后的作业，我这强制发送个参数到方法里 ？
      this.$emit("closeCityMaskFn", "上海");
    },
    //改变城市选项时，触发
    changeItemFn(_d) {
      //   console.log(_d.getValues());
      let _data = _d.getValues();
      this.title_name =
        _data[0].name + "-" + _data[1].name + "-" + _data[2].name;
    },
  },
};
</script>>
<style scoped>
</style>>