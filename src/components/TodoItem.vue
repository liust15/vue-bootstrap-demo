<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div>

      <div><img :src=content.images.large  referrerpolicy = "never">
        <hr>
        <div v-for="genre of content.genres"  class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-sm alert alert-info">{{genre}}</button>
        </div>
      </div>
      <h4>{{content.title}}</h4>
    </div>
    </div>
</template>

<script>
  export default {
    props: ['content', 'index'],
    mounted:function () {
    },
    methods: {

    }
  }
</script>
<!--scoped 样式作用域只在vue中-->
<style scoped>
  .item {
    color: #0c0b0a;
  }
</style>
