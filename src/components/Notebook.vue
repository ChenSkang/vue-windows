/*
* MIT License
*
* Copyright (c) 2017 TechCatsLab Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
/**
* Revision History:
*     Initial: 2017/07/19       Chen Shuaikang
*/
<template>
<div>
  <div v-on:dblclick="noteShow">
    <div class="icon" >
      <img src="../img/filemanager.png" />
      <p class="icon-name">Notebook</p >
    </div>
  </div>
  <div v-if="seen" class="note-book" v-drag>
    <el-row id="header">
      <el-col :span="24">
        <div class="noteTitle" :style="theme">
          <span class="note-title">Notebook</span>
          <el-button size="mini" class="title-button" @click="showTools = !showTools"><i class="el-icon-menu"></i></el-button>
        </div>
      </el-col>
    </el-row>
    <transition name="tool">
      <div class="tools" v-if="showTools">
        <ul class="tools-sidebar ">
          <li>
            <el-button class="tools-btn" @click="openTheme" :style="theme">切换主题</el-button>
          </li>
          <li>
            <el-button class="tools-btn" @click="openTable" :style="theme">编辑数据</el-button>
          </li>
          <li>
            <el-button class="tools-btn" @click="showDialog" :style="theme">清空数据</el-button>
          </li>
          <li>
            <el-button class="tools-btn" @click="seen = false" :style="theme">关闭窗口</el-button>
          </li>
        </ul>
      </div>
    </transition>
    <div class="table">
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="12" offset="3">
          <el-input></el-input>
        </el-col>
        <el-col :span="4">
          <el-button>提交</el-button>
        </el-col>
      </el-row>
      <el-row style="padding-top: 12px">
        <el-col :span="13" offset="4">
          <div class="todo" :style="theme">
            <span class="todoFont">未完成</span>
            <div class="close-span"></div>
          </div>
        </el-col>
      </el-row>
      <el-row style="padding-top: 2px">
        <el-col :span="13" offset="4">
          <div class="todo" :style="theme">
            <span class="todoFont">已完成</span>
            <div class="close-span"></div>
          </div>
        </el-col>
      </el-row>
      <el-row style="padding-top: 2px">
        <el-col :span="13" offset="4">
          <div class="todo" :style="theme">
            <span class="todoFont">已取消</span>
            <div class="close-span"></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</div>
</template>

<script>
export default{
  data () {
    return {
      seen: false,
      showTools: false,
      theme: {
        background: '#58B7FF'
      }
    }
  },
  methods: {
    noteShow () {
      this.seen = true
      this.showTools = false
    }
  }
}
</script>

<style scoped>
  .note-book{
    width: 800px;
    height: 450px;
    background-color: white;
    user-select: none;
    border: solid 1px #6b6a6c;
    position: absolute;
    left: 320px;
    top: 120px;
    overflow-x: hidden;
  }

  .icon{
    width: 81px;
    height: 81px;
    position: absolute;
    left: 10px;
    top: 200px;
  }

  .icon-name{
    font-size: 13px;
    height: auto;
  }

  .icon:hover{
    background: url("../img/icon_bg_full.png");
  }

  .noteTitle{
    height: 50px;
  }

  .note-title{
    font-size: 30px;
    line-height: 50px;
    color: #ffffff;
  }

  .title-button{
    position: absolute;
    top: 16px;
    right: 290px;
  }

  .tool-enter, .tool-leave-to{
    transform: translate3d(-100%,0,0);
  }
  .tool-enter-active, .tool-leave-active{
    transition: all .6s ease;
  }

  .tools{
    width: 150px;
    height: 400px;
    background: rgba(0,0,0,.5);
    position: absolute;
    bottom:0;
    left: 0;
  }

  .tools li{
    padding: 20px;
  }

  .tools-btn{
    color: white;
    font-family: inherit;
    cursor: pointer;
    font-size: inherit;
  }

  .table{
    width: 700px;
    height: 400px;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .todo{
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    border-bottom: 1px solid #fff;
  }

  .todoFont{
    line-height: 44px;
    float: left;
    padding-left: 20px;
    color: #fff;
    cursor: pointer;
  }

  .close-span{
    width: 10px;
    height: 10px;
    float: right;
    margin: 15px;
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    transform: rotate(135deg);
    transition: transform .3s;
    cursor: pointer;
  }
</style>
