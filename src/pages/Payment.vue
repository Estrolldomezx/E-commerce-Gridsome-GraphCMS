<template>
<Leyout>
    <div class="header_pay">
    <h1>ชำระเงินสำเร็จ</h1>
    <botton class="btn" @click= gohome()>Homepage</botton>
    </div>
    
</Leyout>
</template>

<script>
export default {
    
     methods:{
        gohome(){
            this.$router.push('/'); 
      }
  }
}
</script>
      
<style>
.header_pay{
    margin-top: 400px;
    align-items: center;
    text-align: center;
    font-size: 36px;
}
 .btn {
  -webkit-border-radius: 9;
  -moz-border-radius: 9;
   text-align: center;
    justify-content: center;
  border-radius: 9px;
  font-family: Arial;
  color: #750075;
  font-size: 36px;
  padding: 10px 30px 10px 30px;
  border: solid #5828e8 2px;

}

.btn:hover {
  background: #5828e8;
  color: #f5f5f5;
}
</style>