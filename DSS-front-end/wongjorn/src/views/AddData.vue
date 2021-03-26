<template>
  <div>
    <br />
    <div>
      <form action="" method="">
        <div>
          <table class="container" border="1" width="300px" height="500px">
            <th></th>
            <th>Add Data</th>
            <tr>
              <td align="right">ชื่อร้าน</td>
              <td><input v-model="newdata.name" type="text" required /></td>
            </tr>
            <tr>
              <td align="right">ประเภท</td>
              <td>
                <input v-model="newdata.category[0]" type="text" required />
                <input
                  v-if="countcheckcategory >= 2"
                  v-model="newdata.category[1]"
                  type="text"
                />
                <input
                  v-if="countcheckcategory >= 3"
                  v-model="newdata.category[2]"
                  type="text"
                />
                <button @click="countcheckcategory++">+</button>
              </td>
            </tr>
            <tr>
              <td align="right">เรทราคา</td>
              <td><input v-model="newdata.pricerate" type="text" required /></td>
            </tr>
            <tr>
              <td align="right">วัน</td>
              <td height="200px">
                Monday :
                <input
                  type="text"
                  v-model="newdata.date.monday"
                  required
                /><br /><br />
                Tuesday :
                <input
                  type="text"
                  v-model="newdata.date.tuesday"
                  required
                /><br /><br />
                Wednesday :
                <input
                  type="text"
                  v-model="newdata.date.wednesday"
                  required
                /><br /><br />
                Thursday :
                <input
                  type="text"
                  v-model="newdata.date.thursday"
                  required
                /><br /><br />
                Friday :
                <input
                  type="text"
                  v-model="newdata.date.friday"
                  required
                /><br /><br />
                Saturday :
                <input
                  type="text"
                  v-model="newdata.date.saturday"
                  required
                /><br /><br />
                Sunday :
                <input
                  type="text"
                  v-model="newdata.date.sunday"
                  required
                /><br />
              </td>
            </tr>
            <tr>
              <td align="right">ตัวเลือกบริการ</td>
              <td>
                <input type="text" v-model="newdata.service[0]" required />
                <input
                  v-if="countcheckservice >= 2"
                  v-model="service[1]"
                  type="text"
                />
                <input
                  v-if="countcheckservice >= 3"
                  v-model="service[2]"
                  type="text"
                />
                <button @click="countcheckservice++">+</button>
              </td>
            </tr>
            <tr>
              <td align="right">เบอร์โทร</td>
              <td>
                <input type="text" v-model="newdata.tel[0]" required />
                <input
                  v-if="countchecktel >= 2"
                  v-model="newdata.tel[1]"
                  type="text"
                />
                <input
                  v-if="countchecktel >= 3"
                  v-model="newdata.tel[2]"
                  type="text"
                />
                <button @click="countchecktel++">+</button>
              </td>
            </tr>
            <tr>
              <td align="right">ตำแหน่งที่ตั้ง</td>
              <td><input v-model="newdata.location" type="text" required /></td>
            </tr>
            <tr>
              <td align="right">Map</td>
              <td>
                Lat :<input v-model="newdata.map.lat" type="text" required />
                <br /><br />
                Long :
                <input v-model="newdata.map.long" type="text" required /> <br />
              </td>
            </tr>
            <tr>
              <td><input @click="submit" type="submit" /></td>
            </tr>
          </table>
        </div>
      </form>
    </div>
    <div style="margin-top: 16px; color: red">
      #Spy {{ JSON.stringify(newdata) }}
    </div>
  </div>
</template>

<script>

export default {
  name: "AddData",
  data() {
    return {
      countcheckcategory: 1,
      countcheckservice: 1,
      countchecktel: 1,
      newdata: {
        name: "",
        category: [],
        pricerate: "",
        date: {
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: "",
        },
        service: [],
        tel: [],
        location: "",
        map: {
          lat: "",
          long: "",
        },
      },
    };
  },
  mounted() {},
  methods: {
    submit() {
      alert(JSON.stringify(this.newdata));
      
      
    },
  },
};
</script>

<style>
</style>