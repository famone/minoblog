<template>
	<div>


<div class="pop" v-if="editor">
		<div class="pop-box">
			<div class="cross2" @click="hideEdit()">✕</div>
			<label for="">Название</label>
			<input type="text" v-model.lazy="getPosts(itemSlug).title">
			<label for="">Описание</label>
			<textarea v-model.lazy="getPosts(itemSlug).descr"></textarea>
			<button @click="hideEdit()"><span>ОБНОВИТЬ!</span></button>
		</div>
	</div>


		<section id="inner" :style="{'background-image': 'url(' + getPosts(itemSlug).img + ')'}">
			<div class="container">
				<h1>{{getPosts(itemSlug).title}}</h1>
				<button class="goBack" @click="$router.go(-1)"><span>НАЗАД</span></button>
				<button class="goBack" @click="updatePost()"><span>Редактировать запись</span></button>
			</div>
		</section>

		<section id="content">
			<div class="container">
				<p>{{getPosts(itemSlug).descr}}</p>
			</div>
		</section>

		<section id="comments">
			<div class="container">
				<div class="col-lg-4">
					<h2>Добавить комментарий</h2>
					<input type="text" placeholder="Ваше имя" v-model="newComment.name">
					<input type="text" placeholder="Ваш коммент" v-model="newComment.title">
					<button class="newCom" @click="addNewComment()">ДОБАВИТЬ!</button>
				</div>
				<div class="col-lg-offset-2 col-lg-6">
					<h2>Комментарии: ({{getPosts(itemSlug).comments.length}})</h2>
					<div class="comment wow fadeInRight" v-for="(item, index) in getPosts(itemSlug).comments">
					<p><strong>{{item.name}}</strong></p>
					{{item.title}}
					<div class="cross" @click="deliteCom(index)">✕</div>
					</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapState} from 'vuex'
import axios from 'axios'

export default{
	data(){
		return{
			itemSlug: '',
			newComment: {
				name: '',
				title: ''
			}
		}
	},
	created(){
		this.itemSlug = this.$route.params.id
	},
	computed: {
		...mapGetters('goods', ['getPosts']),
		...mapState('goods', [ 'editor']),
	},
	methods: {
		hideEdit(){
			this.$store.dispatch('goods/hideEdit')
		},
		updatePost(){
			this.$store.dispatch('goods/updatePost')
		},
		addNewComment(){
			// console.log(this.newComment)
			var slug = this.$route.params.id
			var resultat = {
				silka: slug,
				comment: this.newComment
			}

			this.$store.dispatch('goods/addNewComment', resultat)

			this.newComment = {
				name: '',
				title: ''
			}
		},
		deliteCom(index){
			var slug = this.$route.params.id
			var resultat = {
				silka: slug,
				nomer: index
			} 
			this.$store.dispatch('goods/deliteCom', resultat)
		}
	}
}
	
</script>

<style scoped>
.cross{
	position: absolute;
	top: 2px;
	right: 8px;
	cursor: pointer;
	font-size: 15px;
}
.comment{
	padding:15px;
	border-radius: 5px;
	background-color: #efefef;
	font-size: 18px;
	margin:15px 0;
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
#comments{
	padding-bottom:30px;
}
h2{
	margin-bottom: 20px;
}
.goBack{
	border-radius: 5px;
	color: #fff;
	border: #fff 1px solid;
	padding:10px 20px;
	margin-top: 10px;
	transition: all .3s ease;
	position: relative;
	overflow: hidden;
	background-color: transparent;
}
.goBack span{
	position: relative;
	z-index: 10;
}
.goBack:before{
	content: '';
	height: 100%;
	position: absolute;
	width: 0%;
	background-color: #fff;
	top: 0;
	left: 0;
	transition: all .3s ease;
	z-index: 2;
}
.goBack:hover{
	color: #000;
}
.goBack:hover::before{
width: 100%;
}
#content{
	padding:30px 0;
}
#content p{
	font-size: 20px;
}
#inner{
	padding: 150px 0;
	background-position: center bottom;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	background-size: cover;
	position: relative;
}
#inner:before{
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,.6);
	content: '';
	position: absolute;
	top: 0;
	left: 0;
}
h1{
	color: #fff;
	position: relative;
}
.newCom{
  border-radius: 5px;
  color: #fff;
  width: 100%;
  border: #000 1px solid;
  padding:10px 20px;
  transition: all .3s ease;
  position: relative;
  overflow: hidden;
  background-color: #000;
}




.cross2{
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
.pop input{
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
.pop textarea{
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
.pop button{
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
.pop button span{
	position: relative;
	z-index: 42;
}
.pop button:before{
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
.pop button:hover{
	color: #000;
}
.pop button:hover::before{
width: 100%;
}

</style>