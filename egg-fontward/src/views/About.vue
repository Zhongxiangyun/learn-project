<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-uploader v-model="fileList" multiple :after-read="afterRead" />
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名" label="名称" />
      <van-field v-model="value" placeholder="请输入年龄" label="年龄" />
      <van-field v-model="value" placeholder="请输入地区" label="地区" />
    </van-cell-group>
    <van-button type="primary">提交</van-button>
  </div>
</template>

<script>
/**
 *～╭════╮┌══════════════┐
 * ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
 * ╰⊙═⊙╯╰══⊙══════⊙══╯
 * @description:ant 测试
 * @author: PresByter
 * @date  : 2020/01/13 15:42:13
 * @file  : About.vue
 */
import { Uploader, CellGroup, Field, Button } from "vant";
export default {
  name: "About",
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  props: {},
  data() {
    return {
      value: "",
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // eslint-disable-next-line no-console
      console.log(file);
    }
  },
  created() {},
  activated() {},
  mounted() {}
};
</script>
<style lang="less" scoped></style>
