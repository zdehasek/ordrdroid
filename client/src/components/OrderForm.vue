<template>
  <div id="orderForm">
    <div class="post">
      <div class="loading" v-if="loading">
        Loading...
      </div>
    
    <div v-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-if="fetchedData" class="content">

      <h2>Nastavení tvojí objednávky:</h2>    
      <div id="formData">
        <br>

            <div id="formPersonalData" v-for="item in fetchedData" :key="item.name">

              {{item.title}}:
              <input v-model="item.value">
              <br>
            </div>
            <button type="button" v-on:click="saveData()" >Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderForm',
  data () {
    return {
      loading: false,
      fetchedData: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = this.fetchedData = null
      this.loading = true
      fetch(
      '/api/order', {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then(response => {
        return response.json()
          .then(data => {
            if (!response.ok) {
              throw new Error(data.error);
            }

            this.fetchedData = [
              {title:'Jméno',type:'text', name: 'fullName',value: data.fullName},
              {title:'Sídlo',type:'text', name: 'address',value:''},
              {title:'IČO',type:'text', name: 'bussinessId',value: data.bussinessId},
              {title:'Bankovní spojení', type:'text', name: 'bankAccount',value:''},
              {title:'Email',type:'text', name: 'email',value:''},
              {title:'Telefon',type:'text', name: 'phone',value:''},
              {title:'Číslo objednávky',type:'number', name: 'orderNumber',value:''},
              {title:' Číslo smlouvy',type:'text', name: 'contractNumber',value:''},
              {title:'Popis poskytované služby',type:'text', name: 'bussinessId',value:''},
              {title:'Cena objednávky',type:'text', name: 'address',value:''},
              {title:'Podpis',type:'text', name: 'bankAccount',value:''},
            ]

            this.loading = false
          });
      })
      .catch(err => {
        this.error = err.toString()

      });
    
    },
    saveData() {
      console.log(this.fetchedData[0].value);

      this.error = this.fetchedData = null
      
      this.saving = true
      // TODO: http://www.hartzis.me/fetch-post-express/
      fetch(
      '/api/order', {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        return response.json()
          .then(data => {
            if (!response.ok) {
              throw new Error(data.error);
            }

            // TODO: Send data ????

            this.saving = false
          });
      })
      .catch(err => {
        this.error = err.toString()

      });


    }
  }
}
</script>

<style lang="scss">

#orderForm {
 // background-color: blue;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 40%;
  position: relative;
  left: 5%;
  width: 90%;
  
}

#formData {
  text-align: left;
  width: 40%;
  //background-color: red;
  position: relative;
  left: 30%;
}

#formPersonalData {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //background-color: green;
  align-self: left;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
