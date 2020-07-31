<template>
  <div>
    <van-nav-bar title="筛选组件">
      <template #left>
        <van-icon @click="closeFilterWrap" name="cross" size="25" />
      </template>
    </van-nav-bar>

    <div class="gridTitle">学历要求</div>
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item @click="itemBtnClick($event)" text="全部" />
      <van-grid-item @click="itemBtnClick($event)" text="专科" />
      <van-grid-item @click="itemBtnClick($event)" text="本科" />
      <van-grid-item @click="itemBtnClick($event)" text="研究生" />
      <van-grid-item @click="itemBtnClick($event)" text="博士" />
    </van-grid>

    <div class="gridTitle">薪资待遇</div>
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item @click="itemBtnClick($event)" text="全部" />
      <van-grid-item @click="itemBtnClick($event)" text="8K" />
      <van-grid-item @click="itemBtnClick($event)" text="10K" />
      <van-grid-item @click="itemBtnClick($event)" text="15K" />
      <van-grid-item @click="itemBtnClick($event)" text="20K" />
    </van-grid>
    <div class="filter_footer">
      <van-button plain type="info">清除</van-button>
      <van-button @click="confirmBtn" plain type="info">确定</van-button>
    </div>
  </div>
</template>>
<script>
import "../assets/reset_vant.css";

export default {
  name: "filterWrapObj",
  data() {
    return {
      msg: "筛选页面",
      filter_resule: [],
    };
  },
  methods: {
    closeFilterWrap() {
      //   console.log("关闭筛选");
      this.$emit("closeFilterWrap");
    },
    itemBtnClick($e) {
      //   console.log($e.target.innerText);
      let _txt = $e.target.innerText;
      let _cls = $e.target.getAttribute("class");
      //   console.log(_cls.split(" "));
      let _clsArr = _cls.split(" ");
      let _is = false; //默认没有添加class
      // 判断当前按钮有没有“选中的css样式”
      for (let i = 0; i < _clsArr.length; i++) {
        //   找到了“选中状态的css”，就把他删掉，切换为未选中
        if (_clsArr[i] == "van_grid_item_focus") {
          _clsArr.splice(i, 1);
          _is = true;
          break;
        }
        _is = false;
      }

      // 没有，就要添加van_grid_item_focus
      // van_grid_item_focus定义在reset_vant.css里
      if (_is) {
        //   如果有 就删除
        for (let i = 0; i < this.filter_resule.length; i++) {
          if (this.filter_resule[i] == _txt) {
            this.filter_resule.splice(i, 1);
          }
        }
      } else {
        //   没有，就添加 class的选中样式
        _clsArr.push("van_grid_item_focus");
        // 这个是吧筛选条件保存到数据
        this.filter_resule.push(_txt);
      }
      // 在把_clsArr转为string 写回到class中
      let _cls_txt = _clsArr.join(" ");
      $e.target.setAttribute("class", _cls_txt);
    },
    confirmBtn() {
      // 这个筛选的结果要向后端提交
      console.log(this.filter_resule);
    },
  },
};
</script>>
<style scoped>
.gridTitle {
  padding: 0.2rem 0.2rem;
  clear: both;
  font-size: 0.3rem;
  font-weight: bold;
}
.gridTitle label {
  font-weight: normal;
  font-size: 0.2rem;
  padding: 0 10px;
}
.filter_footer {
  text-align: center;
  margin-top: 1rem;
  width: 100%;
}
</style>>