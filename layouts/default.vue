<template>
  <div>
    <Header></Header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
   components:{
     Header,Footer
   }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: inherit;
}
a:hover{
  color: inherit
}
ul,li,ol{
  list-style: none;
}
em,i{
  font-style: normal;
}
</style>
