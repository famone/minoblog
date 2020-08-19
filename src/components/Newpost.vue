<template>
	<div class="pop">
		<div class="pop-box">
			<div class="cross" @click="hidePop()">✕</div>
			<label for="">Название</label>
			<input type="text" v-model="newPost.title">
			<label for="" style="color: red;">URL изображение вставлено по умолчанию</label>
			<input type="text" v-model="newPost.img">
			<label for="">Описание</label>
			<textarea v-model="newPost.descr"></textarea>
			<button @click="postNew()"><span>ДОБАВИТЬ!</span></button>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'

export default{
	data(){
		return{
			newPost: {
				title: '',
				descr: '',
				img: 'https://images.unsplash.com/photo-1597535586446-f0de31085695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
				slug: '',
				comments: []
			}
		}
	},
	computed: {
		...mapState('goods', ['posts']),
	},
	methods: {
		postNew(){
			let newSlug = Math.floor(Math.random() * 1999)
			this.newPost.slug = newSlug.toString();
			
			// console.log(this.newPost);

			this.$store.dispatch('goods/postNew', this.newPost)
			this.$store.dispatch('goods/hidePop')
		},
		hidePop(){
			this.$store.dispatch('goods/hidePop')
		}
	}
}
</script>

<style scoped>
.cross{
	position: absolute;
	background-color: #fff;
	top: 10px;
	right: 25px;
	z-index: 10;
	padding:1px 5px;
	border-radius: 5px;
	cursor: pointer;
}
.pop{
	position: fixed;
	z-index: 20;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,.8);
	height: 100vh;
	width: 100vw;
	display: flex;
	font-size: 15px;
	justify-content: center;
	align-items: center;
}
.pop-box{
	padding: 30px;
	background-color: #fff;
	width: 50%;
	border-radius: 5px;
	position: relative;
}
input{
	border-radius: 5px;
	color: #000;
	border: #000 1px solid;
	padding:10px 20px;
	transition: all .3s ease;
	position: relative;
	overflow: hidden;
	background-color: transparent;
	width: 100%;
	margin-bottom: 15px;
}
textarea{
	border-radius: 5px;
	color: #000;
	border: #000 1px solid;
	padding:10px 20px;
	transition: all .3s ease;
	position: relative;
	overflow: hidden;
	background-color: transparent;
	width: 100%;
	margin-bottom: 15px;
	height: 100px;
}
button{
	border-radius: 5px;
	width: 100%;
	color: #fff;
	border: #000 1px solid;
	padding:10px 20px;
	margin-top: 10px;
	transition: all .3s ease;
	position: relative;
	overflow: hidden;
	background-color: #000;
}
button span{
	position: relative;
	z-index: 42;
}
button:before{
	content: '';
	height: 100%;
	position: absolute;
	width: 0%;
	background-color: #fff;
	top: 0;
	left: 0;
	transition: all .3s ease;
	z-index: 40;
}
button:hover{
	color: #000;
}
button:hover::before{
width: 100%;
}
</style>
