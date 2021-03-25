<template>
  <div id="footer" class="footer">
      <span  :style="{color}">{{ title }}</span>
  </div>
</template>

<script>
export default {
    name: "Footer",
    mounted() {
       
    },
    props:[
        "title",
        "color"
    ],
    
};
</script>

<style>
    .footer{
        font-size: 12;
        color: gray;
    }
</style>