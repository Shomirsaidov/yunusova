<template>
	<div class="flex justify-center lg:px-64 py-8">


		<div class="shadow-xl p-8 rounded-xl grid justify-center">
			<h1 class="font-bold text-black text-2xl mb-2">Привет Y.Nasi.T</h1>
			<h1 class="text-black text-xl mb-8">Введите данные о новом магазине</h1>

            <form :action="`${apiUrl}delivery/addStore`" method="POST" class="grid">
                <input type="text" name="store" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Магазин">

                <input type="text" name="address" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Адрес">

                <input type="text" name="tel" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Телефон">
                
                <input type="text" name="person" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Человек">

                <input type="submit" class="text-white hover:bg-blue-600 cursor-pointer rounded-xl p-4 px-8 text-xl" 
                value="Добавить" style="background: linear-gradient(rgb(0, 68, 128), rgb(31, 105, 167));">
            </form>


		</div>
	</div>


</template>
<script>
	import '@/assets/tailwind.css'
    import check from '@/utils/authValidator'

	export default {
		components: {
    	},
		data: () => ({
            apiUrl: process.env.VUE_APP_API_URL
		}),
        mounted() {
            check(this.$router)
        }
	}
</script>





