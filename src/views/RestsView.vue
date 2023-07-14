<template>
    <BottomNav/>

    <div v-if="data == null" class="my-4 space-y-2" :style="{display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center'}">
              <div id="loader"></div>
              <h2 class="font-semibold">Shomirsaidov Abubakr & Doleap Corp.</h2>
    </div>

    <div v-if="data !== null" class="md:w-1/2 w-3/4 my-8">
        <div class="p-4 rounded-xl bg-gray-200 flex items-center rounded-b-none">
              <img @click="$router.back()" src="../assets/arrow-left-3.svg" width="30" alt="">
              <span class="font-lg font-semibold">На складе осталось</span>
        </div>
        <div class="p-2 border-2">
          <div>
            <span class="text-gray-500 font-bold">Простых :</span>
            <h2 class="text-xl font-bold">{{ data.rest_regular }} штук</h2>
          </div>
        </div>
        <div class="p-2 border-2">
          <div>
            <span class="text-gray-500 font-bold">Солёных :</span>
            <h2 class="text-xl font-bold">{{ data.rest_salty }} штук</h2>
          </div>
        </div>
        <div class="p-2 border-2">
          <div>
            <span class="text-gray-500 font-bold">Вобщем осталось мешков :</span>
            <h2 class="text-xl font-bold">{{ data.rest_total }}</h2>
          </div>
        </div>

        <form v-if="data !== null" id="controlForm" :action="`${apiUrl}counts/restsControl`" method="POST" class="grid justify-center mt-8">
            <input type="hidden" v-model="data.rest_regular" name="prevRegular">
            <input type="hidden" v-model="data.rest_salty" name="prevSalty">
            <input type="hidden" v-model="action" name="action">

            <input type="number" name="amount" class="text-xl p-2 border-2 mb-4 rounded-xl text-lg outline-none" placeholder="Количество мешков">
            <select name="type" class="text-xl p-2 border-2 mb-4 rounded-xl text-lg outline-none">
                <option value="regular">Простые</option>
                <option value="salty">Солёные</option>
            </select>
            <div class="my-4 flex justify-between items-center">
                <button class="bg-green-400 p-4 text-white rounded-2xl flex flex-col justify-center items-center cursor-pointer" @click="submitForm('increase')">
                    <img src="../assets/box-add.svg" width="50" alt="">
                    <span class="text-white font-bold">Добавить</span>
                </button>
                <button class="bg-green-400 p-4 text-white rounded-2xl flex flex-col justify-center items-center cursor-pointer" @click="submitForm('decrease')">
                    <img src="../assets/box-remove.svg" width="50" alt="">
                    <span class="text-white font-bold">Уменьшить</span>
                </button>
            </div>
        </form>
    </div>
      <div style="height: 500px;"></div>



</template>

<script>
  import axios from 'axios'
  import { getTransitionRawChildren, onMounted } from 'vue';
  import BottomNav from '@/components/BottomNav.vue';
  import check from '../utils/authValidator'

  export default {
    components: {BottomNav},
    data: () => ({
        data: null,
        apiUrl: process.env.VUE_APP_API_URL,
        action: 'increase'
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
    methods: {
        submitForm(action) {
            this.action = action
            document.getElementById('controlForm').submit()
        }
    },  
    components: { BottomNav, BottomNav }
}  

</script>



