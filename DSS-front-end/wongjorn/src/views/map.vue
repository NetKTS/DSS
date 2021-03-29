<template >
<div>
    <div class="container"> <h1> ชื่อร้าน : {{ getitem.name }} </h1></div>
     <longdo-map :zoom="10" :lastView="false">         
        <longdo-map-marker             
            v-for="(item, i) in markers"             
            :key="i"             
            :location="item.location"
            :title="item.title"             
            :detail="item.detail"     
        />     
    </longdo-map> 
    <div>
        <h1> {{   }} </h1>
    </div>
</div>
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
            getitem:{},
            markers:[
                {
                location: {lon: Number,lat: Number },
                title:"",
                detail: ""
                }
            ]
        }
    },
    created() {
    this.getitem = this.$route.params.payload
    
    this.markers[0].location.lon = parseFloat(this.getitem.map[0].long)
    this.markers[0].location.lat = parseFloat(this.getitem.map[0].lat)
    this.markers[0].title = this.getitem.name
    this.markers[0].detail = this.getitem.location

    // console.log(this.markers[0].location.lon)
    if(this.getitem == null){
      console.log("get item Error")
      window.location="#/MyData"
      
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