<template>
	<div class="mt-8">

		<div class="shadow-xl p-8 rounded-xl grid justify-center">
			<h1 class="font-bold text-black text-2xl mb-2">Привет Y.Nasi.T</h1>
			<h1 class="text-black text-xl mb-8">Введите данные о доставке</h1>

            <div v-if="data == null" class="my-4 space-y-2" :style="{display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center'}">
              <div id="loader"></div>
              <h2 class="font-semibold">Shomirsaidov Abubakr & Doleap Corp.</h2>
            </div>

            <form :action="`${apiUrl}delivery/edit`" v-if="data !== null" method="POST" class="grid">
                <input type="hidden" name="id" v-model="data.id">

                <input v-model="data.store" type="text" name="store" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Магазин">

                <input v-model="data.date" type="date" name="date" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Дата">

                <input v-model="data.quantity" type="hidden" name="quantity" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Количество">

                <span>Выберите тип семечек :</span>
                <select v-model="data.type" type="text" name="type" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Вид">
                    <option value="regular">Простые</option>
                    <option value="salty">Солёные</option>
                </select>
                

                <span>Осталось выплатить :</span>
                <input type="number" v-model="data.rest" name="rest" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Осталось выплатить">

                <span>Выплачено :</span>
                <input type="number" v-model="payed" name="payed" 
                class="bg-gray-400 p-2 border-4 mb-4 rounded-xl text-lg outline-none" placeholder="Выплачено">


                <textarea name="note" v-model="data.note" 
                class="p-2 border-2 mb-4 rounded-xl text-lg outline-none" style="height: 100px;">
                </textarea>

                <input type="submit" class="bg-green-500 text-white hover:bg-green-600 rounded-xl p-4 px-8 text-xl" value="Изменить"/>

            </form>


		</div>
	</div>


</template>
<script>
	import '@/assets/tailwind.css'
    import check from '@/utils/authValidator'
    import axios from 'axios'

	export default {
        props: [
            "id"
        ],
		components: {
    	},
		data: () => ({
			data: null,
            apiUrl: process.env.VUE_APP_API_URL,
            intialRest: null
		}),
        async mounted() {
            console.log(this.id)
            check(this.$router)

            await axios.get(`${process.env.VUE_APP_API_URL}delivery/getOne/` + this.id)
                .then(resp => {
                    this.data = resp.data[0]
                    this.intialRest = this.data.rest
                })
        },
        computed: {
            payed() {
                return this.intialRest - this.data.rest + this.data.payed
            }
        }
	}
</script>





