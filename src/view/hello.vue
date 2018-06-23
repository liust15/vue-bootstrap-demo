<template>
  <div id="root">
    <div>
      <div>
        <input v-model="inputValue"/>
        <button @click="handleSubmit">提交</button>
      </div>
      <ul>
        <todo-item v-for="(item,index) of list"
                   :content="item"
                   :key="index"
                   :index="index"
                   @delete="handleDelete"
        ></todo-item>
      </ul>
    </div>

  </div>
</template>

<script>
  import TodoItem from '../components/TodoItem'

  export default {
    components: {
      'todo-item': TodoItem
    },
    data() {
      return {
        inputValue: '',
        list: []
      }
    },
    methods: {
      handleSubmit() {
        this.list.push(this.inputValue)
        this.inputValue = ''
      },
      handleDelete(index){
        this.list.splice(index,1)
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*  h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }*/
</style>
