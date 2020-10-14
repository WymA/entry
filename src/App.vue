<template>
  <div id="app">
    <van-cell-group>
      <van-cell size="large" title="BestGame" />
    </van-cell-group>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        {{image}}
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell size="large" title="欢迎您的加入，请注册账号。" />
    </van-cell-group>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="Username"
        label="输入账号"
        placeholder="5-15位数字或字母"
        :rules="[{ required: true, message: '输入账号必填！' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="Password"
        label="输入密码"
        placeholder="8-12位数字与字母的组合"
        :rules="[{ required: true, message: '输入密码必填！' }]"
      />
      <van-field
        v-model="repassword"
        type="password"
        name="Repassword"
        label="确定密码"
        placeholder="8-12位数字与字母的组合"
        :rules="[{ required: true, message: '确定密码必填！' }]"
      />
      <div style="margin: 16px;">
        <van-button plain round block type="warning" native-type="submit">
          重置
        </van-button>
      </div>
      <div style="margin: 16px;">
        <van-button plain round block type="info" native-type="submit">
          确定
        </van-button>
      </div>
    </van-form>
  </div>

</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      repassword: '',
      images: [
        1,
        2,
      ],
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
