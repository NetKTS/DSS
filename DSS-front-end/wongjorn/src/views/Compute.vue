<template lang="">
    <div class="bgcolor">
        <h1>{{ fullname }}</h1>
    </div>
</template>
<script>
export default {
    name:"Compute",
    methods: {
        
    },
    data() {
        return {
            firstname: "kittisak",
            lastname: "Thamwattana"
        }
    },
    computed:{
        fullname(){
            return this.firstname + "  " + this.lastname
        }
    }
    
}
</script>
<style lang="">
    
</style>