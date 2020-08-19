<template>
	<div>

<appNewpost v-if="popup"></appNewpost>

		<div class="container">
      <div class="col-lg-10">
        <h1>MINI-BLOG</h1>
        <p class="black-txt">By <a href="https://github.com/famone" target="blank_">@famone</a></p>
      </div>
      <div class="col-lg-2">
        <button @click="showPop()"><span>Добавить запись</span></button>
      </div>
    </div>
    <appBlog></appBlog>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
import Blog from '../components/Blog.vue'
import Newpost from '../components/Newpost.vue'

export default {
  computed: {
    ...mapState('goods', ['popup']),
  },
  components: {
    'appBlog': Blog,
    'appNewpost': Newpost
  },
  methods: {
    showPop(){
      this.$store.dispatch('goods/showPop')
    }
  }
}
</script>

<style scoped>
.black-txt{
  font-size: 18px;
  color: #000;
  font-weight: 400;
}
.black-txt a{
  text-decoration: underline;
  color: #000;
}
button{
  border-radius: 5px;
  color: #000;
  border: #000 1px solid;
  padding:10px 20px;
  margin-top: 20px;
  transition: all .3s ease;
  position: relative;
  overflow: hidden;
  background-color: transparent;
}
button:before{
  content: '';
  height: 100%;
  position: absolute;
  width: 0%;
  background-color: #000;
  top: 0;
  left: 0;
  transition: all .3s ease;
  z-index: -1;
}
button:hover{
  color: #fff;
}
button:hover::before{
width: 100%;
}
</style>