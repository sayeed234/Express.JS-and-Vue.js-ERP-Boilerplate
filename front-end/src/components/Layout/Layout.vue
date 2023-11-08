<template>
     <div>  
         <Header></Header>
         <div class="container-fluid mt-5">            
      <router-view/> 
      </div>  
         <Footer></Footer>          
   <FlashMessage :position="'right bottom'"></FlashMessage>  
</div>
</template>
    <script>
    import Header from '@/components/Layout/Header';
    import Footer from '@/components/Layout/Footer';
export default {
  name: 'Index',
   components: {
     Header,
     Footer
   
  }
}
    </script>

<style scoped>

</style>