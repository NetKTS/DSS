<template >
     <longdo-map :zoom="10" :lastView="false">         
        <longdo-map-marker             
            v-for="(item, i) in markers"             
            :key="i"             
            :location="item.location"
            :title="item.title"             
            :detail="item.detail"     
        />     
    </longdo-map> 

</template>

<script>
import { LongdoMap, LongdoMapMarker } from 'longdo-map-vue'
LongdoMap.init ({ apiKey: '68cd5510a9da9701e87d7ca5cbc8eaef' })
export default {
    name:"map",
    components:{
        LongdoMap, LongdoMapMarker
    },
    data() {
        return {
            locationList:[
                { lon:99,lat:14 },
                { lon:100,lat:13 },
                { lon:102,lat:13 },
                { lon:103,lat:14 }
            ],
            markers:[
                {
                location: {lon:100.58,lat:13.761 },
                title:"Vue Marker",
                detail: "This is a detail"
                }
            ]
        }
    },
}
</script>

<style>
body{
    height: 100%;
    margin: 0px;
}

</style>