<template>
    <div class="tab-bar-item" @click="clickItem">
        <div v-if="!isActive">
          <slot name="tabbar-img"></slot>
        </div>
        <div v-else>
          <slot name="tabbar-img-active" ></slot>
        </div>
        <!-- <div :class="{active: isActive}"> -->
        <div :style="styleColor">
          <slot name="tabbar-text"></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#fff'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      styleColor() {
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods: {
      clickItem() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
.tab-bar-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: blueviolet;
}
.tabbar-img {
  width: 32px;
  height: 32px;
}
.tabbar-text {
  font-size: 12px;
  height: 15px;
  line-height: 15px;
}
.active {
  color: #fff;
}
</style>
