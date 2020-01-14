<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <van-button type="default">默认按钮</van-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <van-button type="primary">警告按钮</van-button>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item">
        <div class="left">{{ item.title }}</div>
        <div class="left">{{ item.content }}</div>
        <div class="left">{{ item.updateTime }}</div>
        <img :src="item.img" alt="" srcset="" />
      </van-cell>
    </van-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";
const moment = require("moment");

import { Button, Tabbar, TabbarItem, List, Cell, Toast } from "vant";
Vue.use(Toast);

export default {
  name: "home",
  components: {
    // HelloWorld,
    [Cell.name]: Cell,
    [List.name]: List,
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(moment("2019-12-31").format("YYYY-MM-DD"));
    // eslint-disable-next-line no-console
    console.log(moment("2019-12-31").format("yyyy-MM-DD"));
  },
  methods: {
    onLoad() {
      // 异步更新数据
      fetch("article/lists")
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            this.loading = false;
            this.finished = true;
            this.list = res.data;
          } else {
            Toast.fail("失败文案");
          }
        });
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 500);
    }
  }
};
</script>
