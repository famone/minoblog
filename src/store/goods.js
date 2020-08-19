
import axios from 'axios'

const goods = {
	namespaced: true,
	state: {
		popup: false,
		editor: false,
		posts: [
			{
				title: 'Lorem ipsum dolor sit amet.',
				slug: '1',
				descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sed, numquam magnam nemo voluptate rerum earum aspernatur pariatur debitis recusandae, quis, vero repellat. Illo fuga accusamus delectus earum, quod atque dolorem facere minima sequi, quaerat, doloribus maiores dolor quia necessitatibus odio tempora fugit. Quas nihil, ipsum non ex vel distinctio expedita rem quisquam provident, accusantium veniam deleniti doloribus quae necessitatibus! Nesciunt sunt rem facilis qui quam modi reiciendis eveniet officiis magni quasi sed ullam, obcaecati eius natus temporibus porro fuga! Minus labore possimus sunt totam, necessitatibus quam natus ab. Ex culpa minus ea eaque, praesentium ullam dolores aliquam veritatis reprehenderit?',
				img: 'https://images.unsplash.com/photo-1596609298395-1fdd2fe2fa12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
				comments: [
					{	
						name: 'Жанна',
						title: 'Классный, очень интересный блог, буду его читать🔥'
					},
					{
						name: 'Вася',
						title: 'А вот мне не понравилось💩'
					}
				]
			},
			{
				title: 'Lorem ipsum dolor sit amet.',
				slug: '2',
				descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sed, numquam magnam nemo voluptate rerum earum aspernatur pariatur debitis recusandae, quis, vero repellat. Illo fuga accusamus delectus earum, quod atque dolorem facere minima sequi, quaerat, doloribus maiores dolor quia necessitatibus odio tempora fugit. Quas nihil, ipsum non ex vel distinctio expedita rem quisquam provident, accusantium veniam deleniti doloribus quae necessitatibus! Nesciunt sunt rem facilis qui quam modi reiciendis eveniet officiis magni quasi sed ullam, obcaecati eius natus temporibus porro fuga! Minus labore possimus sunt totam, necessitatibus quam natus ab. Ex culpa minus ea eaque, praesentium ullam dolores aliquam veritatis reprehenderit?',
				img: 'https://images.unsplash.com/photo-1597481561318-98b9b065c9b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
				comments: [
					{
						name: 'Жанна',
						title: 'Классный, очень интересный блог, буду его читать🔥'
					}
				]
			},
			{
				title: 'Lorem ipsum dolor sit amet.',
				slug: '3',
				descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sed, numquam magnam nemo voluptate rerum earum aspernatur pariatur debitis recusandae, quis, vero repellat. Illo fuga accusamus delectus earum, quod atque dolorem facere minima sequi, quaerat, doloribus maiores dolor quia necessitatibus odio tempora fugit. Quas nihil, ipsum non ex vel distinctio expedita rem quisquam provident, accusantium veniam deleniti doloribus quae necessitatibus! Nesciunt sunt rem facilis qui quam modi reiciendis eveniet officiis magni quasi sed ullam, obcaecati eius natus temporibus porro fuga! Minus labore possimus sunt totam, necessitatibus quam natus ab. Ex culpa minus ea eaque, praesentium ullam dolores aliquam veritatis reprehenderit?',
				img: 'https://images.unsplash.com/photo-1597682497997-25dc681680f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
				comments: [
					{
						name: 'Жанна',
						title: 'Классный, очень интересный блог, буду его читать🔥'
					}
				]
			}
		]
  	},
	  mutations: {
	  	POST_NEW(state, playload){
	  		state.posts.push(playload)	
	  		console.log(state.posts)
  		},
  		HIDE_POP(state){
  			state.popup = false
  		},
  		SHOW_POP(state){
  			state.popup = true
  		},
  		NEW_COMMENT(state, playload){
	  		var newOne = state.posts.find(item => item.slug == playload.silka)	
	  		newOne.comments.push(playload.comment)	
  		},
  		DELITE_COM(state, playload){
	  		var newOne = state.posts.find(item => item.slug == playload.silka)	
	  		newOne.comments.splice(playload.nomer, 1);
  		},
  		DELITE_POST(state, playload){
	  		state.posts.splice(playload, 1);
  		},
  		UPDATE_POST(state){
  			state.editor = true
  		},
  		HIDE_UPDATE(state){
  			state.editor = false
  		},
	  },
	actions: {
		postNew({commit}, playload){
	  		commit('POST_NEW', playload)
	  	},
	  	hidePop({commit}){
	  		commit('HIDE_POP')
	  	},
	  	showPop({commit}){
	  		commit('SHOW_POP')
	  	},
	  	addNewComment({commit}, playload){
	  		commit('NEW_COMMENT', playload)
	  		// console.log(playload)
	  	},
	  	deliteCom({commit}, playload){
	  		commit('DELITE_COM', playload)
	  	},
	  	delitePost({commit}, playload){
	  		commit('DELITE_POST', playload)
	  	},
	  	updatePost({commit}){
	  		commit('UPDATE_POST')
	  	},
	  	hideEdit({commit}){
	  		commit('HIDE_UPDATE')
	  	},
	},
	getters: {
  		getPosts: (state) => (slug) => {
  			return state.posts.find(goodItem => goodItem.slug == slug)
  		}
	}
}

export default goods


