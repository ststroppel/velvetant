<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="12">test</el-col>
      <el-col :span="12">test</el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    //HelloWorld
  }
})
export default class Home extends Vue {}
</script>
