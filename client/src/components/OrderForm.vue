<template>
  <div id="orderForm">
    <h2>Nastavení tvojí objednávky:</h2>    
    <div id="formData">      
      <div id="formPersonalData">
        <h3>Osobní údaje</h3>
          <div id="formPersonalData" v-for="item in personalData" :key="item.value">
            {{item.title}}: <input v-bind:type="item.type" v-bind:name="item.name" v-bind:value="item.value"><br>
          </div>
      </div>
      <br>  
      <div id="formOrderData">
        <h3>Údaje k objednávce</h3>
          <div id="formOrderData" v-for="item in OrderData" :key="item.value">
            {{item.title}}: <input v-bind:type="item.type" v-bind:name="item.name" v-bind:value="item.value"><br>
          </div>
        </div>       
      </div>
  </div>
</template>

<script>
export default {
  name: 'orderForm',
  data: () => ({
    personalData:[
      {title:'Jméno',type:'text', name: 'orderNumber',value: ''},
      {title:'IČO',type:'text', name: 'bussinessId',value:''},
      {title:'Sídlo',type:'text', name: 'address',value:''},
      {title:'Bankovní spojení', type:'text', name: 'bankAccount',value:''},
      {title:'Email',type:'text', name: 'email',value:''},
      {title:'Telefon',type:'text', name: 'phone',value:''}
    ],
    OrderData:[
      {title:'Číslo objednávky',type:'number', name: 'orderNumber',value:''},
      {title:' Číslo smlouvy',type:'text', name: 'contractNumber',value:''},
      {title:'Popis poskytované služby',type:'text', name: 'bussinessId',value:''},
      {title:'Cena objednávky',type:'text', name: 'address',value:''},
      {title:'Podpis',type:'text', name: 'bankAccount',value:''}
    ]
  }),
  created: () => {
    const fml = [

    ];
    
    /*     
    console.log(window.location.href)
    console.log(document.URL) 
    */

    // selectedItem.aliasId = data.response.id;
    // selectedItem.count = data.response.stockItem.count;
    // selectedItem.stockPrice = data.response.stockItem.price;
    // selectedItem.label = unmappedItem.name;
    // selectedItem.invoiceCount = unmappedItem.count;
    // selectedItem.price = unmappedItem.invoicePriceWithTax;
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

#formOrderData {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //background-color: blue;
  align-self: right;
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
