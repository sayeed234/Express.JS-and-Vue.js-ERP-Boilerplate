<template>
  <div id="app" >     
    <Layout class="bg"></Layout>  
  </div>
</template>
<script>
import Layout from './components/Layout/Layout'
export default {
  name: 'App',  
  components: {
      Layout
  }
}



</script>

<style>
#app {
  /* font-family: "Times New Roman", Helvetica, Arial, sans-serif; */
  font-family:Trebuchet MS;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background: rgb(255, 255, 255);
  text-justify:left;
  
}
.bg{
   background: #dde1e7;
}
.shadow{
  box-shadow: -10px -10px 15px rgba(255,255,255,0.5),
            10px 10px 15px rgba(70,70,70,0.12);
}
h1, h2, h3, h4, h5 {
    font-family: Trebuchet MS;
    /* font-family: "Arial Verdana", Helvetica, sans-serif; */
    /* font-family: "Lucida Console", Helvetica, sans-serif; */
    /* font-family: "Monospace", Helvetica, sans-serif; */
    /* font-family: "Courier New", Helvetica, sans-serif; */
    /* font-family: "Lucida Bright", Helvetica, sans-serif; */
    /* font-family: "Lucida Console", Helvetica, sans-serif; */
    font-weight: 700;
    line-height: 1.5em;
}
.table-sm td, .table-sm th {
            padding:4px!important;
            vertical-align: middle!important;            
            border: 1px solid #010101!important; 
}

</style>
