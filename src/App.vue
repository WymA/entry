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
      <van-cell size="middle" title="欢迎您的加入，请注册账号。" />
    </van-cell-group>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="Username"
        label="输入账号"
        right-icon="warning-o"      
        placeholder="5-15位数字或字母"
        :rules="[{ required: true, message: '输入账号必填！' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="Password"
        label="输入密码"
        right-icon="closed-eye"
        placeholder="8-12位数字与字母的组合"
        :rules="[{ required: true, message: '输入密码必填！' }]"
      />
      <van-field
        v-model="repassword"
        type="password"
        name="Repassword"
        label="确定密码"
        right-icon="closed-eye"
        placeholder="8-12位数字与字母的组合"
        :rules="[{ required: true, message: '确定密码必填！' }]"
      />
      <div style="margin: 16px;">
        <!-- <Verify 
        :type="3" 
        :showButton="false" 
        :barSize={100px 40px}>
        </Verify> -->
        <drag-verify :width="width" 
          :height="height" 
          :text="text" 
          :success-text="successText" 
          :background="background" 
          :progress-bar-bg="progressBarBg" 
          :completed-bg="completedBg" 
          :handler-bg="handlerBg" 
          :handler-icon="handlerIcon" 
          :text-size="textSize" 
          :success-icon="successIcon" 
          :circle="getShape">
        </drag-verify>
      </div>
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
import dragVerify from 'vue-drag-verify'

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
      width: 320,
      height: 40,
      text: '向右滑动验证',
      successText: '验证成功',
      background: '#ccc',
      textSize: '20px',
      handlerIcon: 'fa fa-angle-double-right',
      successIcon: 'fa fa-check',
      progressBarBg: '#FFFF99',
      completedBg: '#66cc66',
      handlerBg: '#fff',
      getShape: true,
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    }, 
    captchaCallback(res) {
      console.log(res);
    },
  },
  components: {
    dragVerify,
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
