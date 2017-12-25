<template>
  <div id="form">
    <h1>Nastavení tvojí objednávky:</h1>
    
    <div id="formData">
      
      <div id="formPersonalData">
        <h2>Osobní údaje</h2>
        Jméno: <input type="text" name="name" required><br>
        IČO: <input type="text" name="bussinessId"><br>
        Sídlo: <input type="text" name="address"><br>
        Bankovní spojení: <input type="text" name="bankAccount"><br>
        Email:<input type="text" name="email"><br>
        Telefon: <input type="text" name="phone">
      </div>
        <br>  
        <div id="formOrderData">
          <h2>Údaje k objednávce</h2>
          Číslo objednávky: <input type="number" name="orderNumber"><br>
          Číslo smlouvy: <input type="text" name="contractNumber"><br>
          Popis poskytované služby: <input type="text" name="phone" placeHolder="vývoj produktu Storyous"><br>
          Cena objednávky: <input type="text" name="phone"><br>
          Podpis: <input type="text" name="phone">
        </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'form',
  data () {
    return {
      msg: 'Welcome to Order Droid',
      msg2: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
}
</script>

<style lang="scss">

#form {
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
