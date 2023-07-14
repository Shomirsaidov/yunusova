<template>
		<h1 class="text-grey text-start p-4 text-xl font-bold">
    
    </h1>

      <BottomNav/>
			<div class="flex flex-col md:w-1/2 w-3/4">
				<div class="bg-gray-200 rounded-xl rounded-b-none p-4 mt-2">
					<h1 class="font-bold text-xl align-start">Хорошего торгового дня !</h1>
				</div>
				<div class="border-2 rounded-xl rounded-t-none p-4 space-y-4">

					<div class="flex items-center justify-between rounded-lg hover:bg-gray-100 cursor-pointer" @click="$router.push('/debtors')">
            <h1 class="text-md font-semibold">Топ должники</h1>
						<button class="text-white rounded-xl text-lg hover:bg-green-200">
              <img src="../assets/arrow-right-3.svg" width="50" alt="">
            </button>
					</div>

          <div class="flex items-center justify-between rounded-lg hover:bg-gray-100 cursor-pointer" @click="$router.push('/datesChart')">
            <h1 class="text-md font-semibold">Отчёт по датам</h1>
						<button class="text-white rounded-xl text-lg hover:bg-green-200">
              <img src="../assets/arrow-right-3.svg" width="50" alt="">
            </button>
					</div>

          <div class="flex items-center justify-between rounded-lg hover:bg-gray-100 cursor-pointer" @click="$router.push('/recent')">
            <h1 class="text-md font-semibold">Последние</h1>
						<button class="text-white rounded-xl text-lg hover:bg-green-200">
              <img src="../assets/arrow-right-3.svg" width="50" alt="">
            </button>
					</div>
          
          
          <div class="flex items-center justify-between rounded-lg hover:bg-gray-100 cursor-pointer" @click="$router.push('/clients')">
            <h1 class="text-md font-semibold">База клиентов</h1>
						<button class="text-white rounded-xl text-lg hover:bg-green-200">
              <img src="../assets/arrow-right-3.svg" width="50" alt="">
            </button>
					</div>
          
          
          <div class="flex items-center justify-between rounded-lg hover:bg-gray-100 cursor-pointer" @click="$router.push('/payers')">
            <h1 class="text-md font-semibold">Лучшие клиенты</h1>
						<button class="text-white rounded-xl text-lg hover:bg-green-200">
              <img src="../assets/arrow-right-3.svg" width="50" alt="">
            </button>
					</div>

          <div class="flex items-center justify-between rounded-lg hover:bg-gray-100 cursor-pointer" @click="$router.push('/frequency')">
            <h1 class="text-md font-semibold">Самые активные</h1>
						<button class="text-white rounded-xl text-lg hover:bg-green-200">
              <img src="../assets/arrow-right-3.svg" width="50" alt="">
            </button>
					</div>


				</div>
			</div>


      <div v-if="data !== null" class="md:w-1/2 w-3/4 my-8">
        <div class="p-4 rounded-xl bg-gray-200 flex items-center rounded-b-none">
              <img @click="$router.back()" src="../assets/arrow-left-3.svg" width="30" alt="">
              <span class="font-lg font-semibold">Общие данные</span>
        </div>
        <div class="p-2 border-2">
          <div>
            <span class="text-gray-500 font-bold">До сих пор получено :</span>
            <h2 class="text-xl font-bold">{{ data.total_payed.payed }} c.</h2>
          </div>
        </div>
        <div class="p-2 border-2">
          <div>
            <span class="text-gray-500 font-bold">В том числе "насия" :</span>
            <h2 class="text-xl font-bold">{{ data.total_rest.debt }} c.</h2>
          </div>
        </div>
        <div class="p-2 border-2">
          <div>
            <span class="text-gray-500 font-bold">Продано мешков :</span>
            <h2 class="text-xl font-bold">{{ data.total_quantity.quantity }}</h2>
          </div>
        </div>
        <div class="p-2 border-2">
          <div>
            <span class="text-gray-500 font-bold">Из них простых :</span>
            <h2 class="text-xl font-bold">{{ data.total_regular }}</h2>
          </div>
        </div>
        <div class="p-2 border-2">
          <div>
            <span class="text-gray-500 font-bold">Из них солёных :</span>
            <h2 class="text-xl font-bold">{{ data.total_salty }}</h2>
          </div>
        </div>
      </div>


      <div v-if="data == null" class="my-4 space-y-2" :style="{display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center'}">
              <div id="loader"></div>
              <h2 class="font-semibold">Shomirsaidov Abubakr & Doleap Corp.</h2>
      </div>

      <div style="height: 500px;"></div>


</template>
<script>
  import axios from 'axios'
  import { getTransitionRawChildren, onMounted } from 'vue';
  import BottomNav from '@/components/BottomNav.vue';
  import check from '../utils/authValidator'

  export default {
    data: () => ({
        data: null,
        total_rest: null
    }),
    async mounted() {
        console.log(process.env.VUE_APP_API_URL);
        check(this.$router)
        await axios.get(`${process.env.VUE_APP_API_URL}counts/general`)
          .then(resp => {
            console.log(resp.data);
            this.data = resp.data;
          });
    },
    components: { BottomNav }
}  

</script>



