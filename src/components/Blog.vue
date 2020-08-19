<template>
	<section>
		<div class="container">
			<div class="col-lg-4 wow fadeInUp" v-for="(post, index) in posts">
				<div class="cross" @click="delitePost(index)">✕</div>
				<div class="commentBtn"><img src="../assets/img/comment.svg" alt=""> | {{post.comments.length}} </div>
				<div class="blogpost">
			       <div class="blog-img" :style="{'background-image': 'url(' + post.img + ')'}"></div>
			       <div class="blog-body">
			       	<h4>{{post.title}}</h4>
			       	<p>{{post.descr.substr(0,120)+'...'}}</p>
			       	<router-link tag="a" :to="post.slug">
			       		<button>Подробнее</button>
			       	</router-link>
			       </div>
			    </div>
			</div>
		</div>
	</section>


</template>



<script>
import {mapState} from 'vuex'

export default{
	computed: {
		...mapState('goods', ['posts']),
	},
	methods: {
		delitePost(index){
			this.$store.dispatch('goods/delitePost', index)
		}
	}
}	
</script>





<style scoped>
section{
	padding:100px 0;
}
.commentBtn{
	background-color: #fff;
	border-radius: 5px;
	padding:3px;
	position: absolute;
	top: 10px;
	left: 25px;
	z-index: 10;
}
.commentBtn img{
	height: 15px;
}
.blogpost{
	overflow: hidden;
	position: relative;
	border-radius: 7px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 12px -4px;
	margin-bottom: 30px;
}
.cross{
	position: absolute;
	background-color: #fff;
	top: 10px;
	right: 25px;
	z-index: 10;
	padding:1px 5px;
	border-radius: 5px;
	cursor: pointer;
	transition: all .3s ease;
}
.cross:hover{
	transform: scale(1.1);
}
.blog-img{
	height: 140px;
	width: 100%;
	-webkit-background-size: cover;
	background-size: cover;
	background-position: center bottom;
	background-repeat: no-repeat;
}
.blog-body{
	padding: 20px;
}
h4{
	margin: 0;
	margin-bottom: 30px;
}
button{
	border-radius: 5px;
	color: #000;
	border: #000 1px solid;
	padding:10px 20px;
	margin-top: 10px;
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