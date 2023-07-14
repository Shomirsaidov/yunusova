<template>
	<div class="mt-8">


		<div class="shadow-xl p-8 rounded-xl grid justify-center">
			<h1 class="font-bold text-black text-2xl mb-2">Привет Y.Nasi.T</h1>
			<h1 class="text-black text-xl mb-8">Введите данные о доставке</h1>

            <div v-if="clientsList == null" class="my-4 space-y-2" :style="{display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center'}">
              <div id="loader"></div>
              <h2 class="font-semibold">Shomirsaidov Abubakr & Doleap Corp.</h2>
            </div>

            <form :action="`${apiUrl}delivery/addDelivery`" method="POST" class="grid" v-if="clientsList !== null">
                <select type="text" name="store" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="магазин">
                    <option value="none">Выберите магазин</option>
                    <option v-for="(store, index) in clientsList" 
                    :value="store.name">{{ store.name }}</option>
                </select>

                <span>Дата доставки :</span>
                <input type="date" name="date" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Дата">

                <input type="text" name="quantity" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Количество">

                <span>Выберите тип семечек :</span>
                <select type="text" name="type" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Вид">
                    <option value="regular" selected default>Простые</option>
                    <option value="salty">Солёные</option>
                </select>
                
                <input type="number" name="payed" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Выплачено">

                <input type="number" name="rest" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Осталось выплатить">

                <textarea name="note" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" style="height: 100px;" value="Комментарий к доставке">
                </textarea>

                <input type="submit" class="bg-green-500 text-white hover:bg-green-600 rounded-xl p-4 px-8 text-xl" value="Добавить"/>

            </form>


		</div>
	</div>


</template>
<script>
	import '@/assets/tailwind.css'
    import check from '@/utils/authValidator'
import axios from 'axios'

	export default {
		components: {
    	},
		data: () => ({
			apiUrl: process.env.VUE_APP_API_URL,
            clientsList: null
		}),
        async mounted() {
            check(this.$router)
            await axios.get(`${process.env.VUE_APP_API_URL}delivery/clients`)
                .then(resp => {
                    this.clientsList = resp.data
                })
        }
	}
</script>





