<template>
 <div>
   <div>
    <div class="md-modal modal-msg md-modal-transition" :class="{'md-show':mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close" @click="closeModal">关闭</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
             <slot name="btnGroup"></slot>
            <!-- <a slot="btnGroup" class="btn btn--m" href="javascript:;">确认</a>
            <a slot="btnGroup" class="btn btn--m btn--red" href="javascript:;">关闭</a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-if="mdShow" @click="closeModal"></div>
  </div>
 </div>
</template>

<script>
export default {
 name:"Modal",
 props:{
   'mdShow':Boolean
 },
 methods: {
   closeModal(){
     this.$emit('close')
   }
 },
}
</script>

<style>
 
</style>