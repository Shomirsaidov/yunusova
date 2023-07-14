<template>
	<div class="flex justify-center lg:px-64 py-32">


		<div class="shadow-xl p-8 rounded-xl grid justify-center">
			<h1 class="font-bold text-black text-2xl mb-2">Привет Y.Nasi.T</h1>
			<h1 class="text-black text-xl mb-8">Мы должны убедиться, что это вы !</h1>

			
			<input type="password" v-model="password" 
			class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Пароль">
			
			<h1 class="text-red-700 text-md mb-4">{{ error }}</h1>
			<button class="bg-green-500 text-white hover:bg-green-600 rounded-xl p-4 px-8 text-xl" @click="enter">Войти</button>
		</div>
	</div>


</template>
<script>
	import '@/assets/tailwind.css'
import axios from 'axios';

	export default {
		components: {
    	},
		data: () => ({
			truePassword: 'none',
			error: ''
		}),
		async mounted() {
			await axios.get(`${process.env.VUE_APP_API_URL}delivery/password`)
				.then(resp => {
					this.truePassword = resp.data
				})
		},
		methods: {
			enter() {
				if(this.password == this.truePassword) {
					localStorage.tnt = 'login'
					this.$router.push('/')
				} else {
					this.error = 'Неверный пароль !'
				}
			}
		}
	}
</script>





