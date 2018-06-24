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
              {title:'Sídlo',type:'text', name: 'address',value:data.address},
              {title:'IČO',type:'text', name: 'bussinessId',value: data.bussinessId},
              {title:'Bankovní spojení', type:'text', name: 'bankAccount',value: data.bankAccount},
              {title:'Email',type:'text', name: 'email',value: data.email},
              {title:'Telefon',type:'text', name: 'phone',value: data.phone},
              {title:'Číslo objednávky',type:'number', name: 'firstOrderNumber',value: data.firstOrderNumber},
              {title:' Číslo smlouvy',type:'text', name: 'contractNunber',value: data.contractNumber},
              {title:'Popis poskytované služby',type:'text', name: 'contractdDescription',value: data.contractdDescription},
              {title:'Cena objednávky',type:'text', name: 'orderPrice',value: data.orderPrice},
              {title:'Podpis',type:'text', name: 'signature',value: data.signature},
              
            ]

            this.loading = false
          });
      })
      .catch(err => {
        this.error = err.toString()

      });
    
    },
    
    saveData() {
      //this.error = this.fetchedData = null;      
      //this.saving = true;
      // TODO: http://www.hartzis.me/fetch-post-express/
      const mapFetchedData = this.fetchedData.map(x => x.value);

      fetch(
      '/api/order', {
        method: 'PUT',
        body: JSON.stringify(mapFetchedData),
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
