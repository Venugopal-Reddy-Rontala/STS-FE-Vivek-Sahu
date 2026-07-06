<script setup>

import { ref, onMounted } from 'vue';

const countries = ref({});

async function getCountry(){
    try {
        
        let res = await fetch(
            'https://api.restcountries.com/countries/v5?q=canada',
            { headers: { 'Authorization': 'Bearer rc_live_ca5fa02c47f647ee9a088cad843c054d' } }
            )

        const data = await res.json();

        console.log(data)

        countries.value = data

    } catch (error) {
        console.log(error)
    }
}


onMounted(()=>{
    getCountry();
})


</script>

<template>
    <h1>country card</h1>

    <!-- <pre>
        {{ countries }}
    </pre> -->



    <div v-for="country in countries" >
        {{ country  }}


    </div>

</template>

<style>

</style>