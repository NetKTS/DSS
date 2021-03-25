<template>
  <div>
    <br />
    <div>
      <form action="" method="post">
        <div>
          <table class="container" border="1" width="300px" height="500px">
            <th>ss</th>
            <th>ss</th>
            <tr>
              <td align="right">ชื่อร้าน</td>
              <td> <input id="name" type="text">  </td>
            </tr>
            <tr>
              <td align="right">ประเภท</td>
              <td> <input type="text"> <input v-if="countcheckcategory>=2" type="text"> <input v-if="countcheckcategory>=3" type="text"> <button @click="countcheckcategory++" >+</button> </td>
            </tr>
            <tr>
              <td align="right">เรทราคา</td>
              <td> <input type="text"> </td>
            </tr>
            <tr>
              <td align="right">วัน</td>
              <td height="200px"> 
                  Monday : <input type="text"><br><br>
                  Tuesday : <input type="text"><br><br>
                  Wednesday : <input type="text"><br><br>
                  Thursday : <input type="text"><br><br>
                  Friday : <input type="text"><br><br>
                  Saturday : <input type="text"><br><br>
                  Sunday : <input type="text"><br><br>
                   </td>
              
            </tr>
            <tr>
              <td align="right">ตัวเลือกบริการ</td>
              <td> <input type="text"> <input v-if="countcheckservice>=2" type="text"> <input v-if="countcheckservice>=3" type="text"> <button @click="countcheckservice++" >+</button> </td>
            </tr>
            <tr>
              <td align="right">เบอร์โทร</td>
              <td> <input type="text"> <input v-if="countchecktel>=2" type="text"> <input v-if="countchecktel>=3" type="text"> <button @click="countchecktel++" >+</button> </td>
            </tr>
            <tr>
              <td align="right">ตำแหน่งที่ตั้ง</td>
              <td> <input type="text"> </td>
            </tr>
            <tr>
              <td align="right">Map</td>
              <td> 
                  Lat :<input type="text"> <br><br>
                  Long : <input type="text"> <br><br>
              </td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddData",
  data() {
      return {
          countcheckcategory:1,
          countcheckservice:1,
          countchecktel:1,
      }
  },
  mounted() {
      
  },
  methods: {
      
  },
};
</script>

<style>
</style>