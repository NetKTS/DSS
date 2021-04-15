<template >
<div>
    <div class="container" id="map"> <h1 class="font2"> ชื่อร้าน : {{ getitem.name }} </h1></div>
     <longdo-map @load="event" :zoom="10" :lastView="false" style="border:1px solid black">         
        <longdo-map-marker             
            v-for="(item, i) in markers"             
            :key="i"             
            :location="item.location"
            :title="item.title"             
            :detail="item.detail"     
        />     
    </longdo-map> 
    <div id="result">
    </div>
</div>
</template>

<script>
import { LongdoMap, LongdoMapMarker } from 'longdo-map-vue'
LongdoMap.init ({ apiKey: '68cd5510a9da9701e87d7ca5cbc8eaef',placeholder: document.getElementById('map') })

// LongdoMap.location({lon:101.65041625499725,lat:14.0298896425883 }, true)
export default {
    name:"map",
    components:{
        LongdoMap, LongdoMapMarker
    },
    data() {
        return {
            getitem:{},
            mylo:{lon:101.3, lat:14,title:"Your Location",detail:"yiyl"},
            distance:0,
            result:{},
            markers:[
                {
                location: {lon: Number,lat: Number },
                title:"",
                detail: ""
                },
                // {
                // location: {lon: 101.3,lat: 14 },
                // title:"Your Location",
                // detail: "This is Your Location"
                // },
                
            ],
            coordinates:{
                lat:14,
                lon:101.3
            }
        }
    },
    created() {
        this.coordinates = this.$route.params.mylocation
        // console.log(this.mylocation);
    this.getitem = this.$route.params.payload
    this.coordinates = this.$route.params.mylocation
    console.log(this.coordinates);
    
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
  methods: {
      event(map){
        //   map.Overlays.add(new longdo.markers(longd))
        
          map.location({ lon: this.coordinates.lng, lat: this.coordinates.lat },true);
        //   map.location(LongdoMap.LocationMode.Geolocation);

          map.Ui.Crosshair.visible(false);
          map.Route.placeholder(document.getElementById("result"));

          map.Route.add({ lon: this.coordinates.lng, lat: this.coordinates.lat ,title: "Your location",detail: "Your location"}); //mylocation
          map.Route.add( {lon: this.markers[0].location.lon = parseFloat(this.getitem.map[0].long), lat: this.markers[0].location.lat = parseFloat(this.getitem.map[0].lat)}); //restaurants location
          
          map.Route.search();
      }
  },
}

</script>

<style>
body{
    height: 100%;
    margin: 0px;
}
.font2 {
  font-family: Athiti, serif;
}

</style>