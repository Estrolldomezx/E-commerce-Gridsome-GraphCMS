<template>
  <Layout>
    <div class="divide__between">
      <img class="banner" src="https://static.vecteezy.com/system/resources/previews/001/349/622/non_2x/bubble-tea-in-milk-splash-advertisement-banner-free-vector.jpg" alt="">  
    </div>
  <div>
    <div v-if="$page.gcms.products" class="product-grid">
      <div
        v-for="(product) in products"
        :key="product.id"
        class="flex-col"
      >
        <g-link :to="'product/' + product.id" class="link" >
        <div class="product-wrapper">
          <g-image v-for="(images, slug) in product.images" class="img" :key="slug" :src="images.url" />   
           <div class="product-content">
          <p class="product-name"> {{ product.name }}</p>
          <p class="product-price">  {{ product.price }} THB</p>
        </div>    
        </div>
       
        </g-link>  
      </div>
    </div>
  </div>
     <div class="Marquee-box">
   <marquee class="MyMarquee" id="my_marquee" direction="left" behavior="9" scrollamount="9" onmouseover="this.stop()" onmouseout="this.start()">
     <div><img src="https://st4.depositphotos.com/14582236/27572/v/600/depositphotos_275726922-stock-illustration-bubble-milk-tea-ads.jpg" width="160" height="80" alt="marquee image"></div>
     <div><img src="https://static.vecteezy.com/system/resources/thumbnails/002/033/942/small_2x/bubble-milk-tea-pearl-milk-tea-different-sorts-of-boba-yummy-drinks-free-vector.jpg" width="170" height="80" alt="marquee image"></div>
     <div><img src="https://as1.ftcdn.net/jpg/03/30/92/17/1000_F_330921791_DIyXT23Pv08s4YT4H4LavprRyW6pFT7I.jpg" width="170" height="80" alt="marquee image"></div>
     <div><img src="https://media.istockphoto.com/vectors/bubble-tea-banner-ads-vector-id1211684659?b=1&k=6&m=1211684659&s=612x612&w=0&h=ccW5dAIQeOkGNlsLKe5gp8pW_7hfdefPRcB8ga04yOY=" width="170" height="80" alt="marquee image"></div>
     <div><img src="https://thumbs.dreamstime.com/b/bubble-milk-tea-advertisement-leaves-elements-summer-background-d-illustration-196379871.jpg" width="170" height="80" alt="marquee image"></div>
     <div><img src="https://i1.wp.com/cupcommunity.com/wp-content/uploads/2020/08/Kim-Cha-Milktea-Station-Banner.jpg?fit=1200%2C523&ssl=1" width="170" height="80" alt="marquee image"></div>
     <div><img src="https://as2.ftcdn.net/jpg/03/69/21/75/500_F_369217590_HB85JJv1iYxzYQ0peyHsNep0vKbBugP2.jpg" width="170" height="80" alt="marquee image"></div>
     <div><img src="https://image.shutterstock.com/image-vector/bubble-milk-tea-design-collectionpearl-260nw-1789344620.jpg" width="170" height="80" alt="marquee image"></div>
     <div><img src="https://static.vecteezy.com/system/resources/thumbnails/002/036/549/small/bubble-milk-tea-pearl-milk-tea-different-sorts-of-boba-yummy-drinks-free-vector.jpg" width="250" height="80" alt="marquee image"></div>
   </marquee>
 </div>
  </Layout>
</template>

<script>
export default {

  data() {
    return {
    
      products: [{
        name: '',
        description: {
          markdown: ''
        },
        category: {
          name: ''
        },
        price: '',
        images: [{
          url: ''
        }]
      }],
    }
  },
 
 created(){
  this.products = this.$page.gcms.products
 },
 
 
}
</script>

<page-query>
  {
    gcms{
      products {
        id
        name
        description
        categories{
          name
        }
        price
        images {
          url
        }
        slug
      }
    }
  }

</page-query>


<style>
.divide__between{
  display: flex;
  justify-content: space-between;
}

.button{
    display: flex;
    align-items: center;
    text-decoration: none;
    border: 1px solid #5828e8;
    width: 10rem;
    text-align: center;
    justify-content: center;
    height: 3rem;
    margin-top: .75rem;
    margin-bottom: .75rem;
    border-radius: 5px;
}

.button:hover{
  background: #5828e8;
  color: #f5f5f5;
}
.product-content{
  padding-top: 1.5rem;
  text-align: center;
}
.img{
  width: 300px;
  transition-delay: 500ms;
  object-fit: cover;
}
.banner{
  width: 100%;
  border-radius: 20px;
}
.product-grid{
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  justify-content: space-between;
}
.flex-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
.link{
  display: flex;
  width: 100%;
  text-decoration: none;
  height: 100%;
}
.product-wrapper{
  padding: 1.5rem;
  width: 100%;
  border-radius: .5rem;
  position: relative;
  background-color: #f5f5f5;
}

.product-name{
  font-size: 1.125rem;
  color: #101b42;
  font-weight: 700;
  margin-bottom: .5rem;
}
.product-name:hover{
   color: #5828e8;
}
.product-price{
  font-size: .875rem;
  color: #888;
  font-weight: bold;
}

@media(max-width: 760px){
  .product-grid{
    justify-content: center;   
     padding-right: 1rem;
  }
}

.Marquee-box {
     position: relative;
     display: inline-block;
     width: 100%;
     height: 80px;
  }
  .MyMarquee {
     text-align: center;
     font-weight: bold;
     width: 100%;
     height: 100%;
     font-size: 25px;
     padding: 0px 0;
     color: mediumspringgreen;
     font-family: Arial, Helvetica, sans-serif;
     vertical-align: middle;
     -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
             box-sizing: border-box;
     background-color: radial-gradient(#15ffa5, #00ced1);

  }
  .MyMarquee div {
     display: inline-block;
     vertical-align: middle;
  }
  .MyMarquee a, .MyMarquee img {
     display: inline-block;
     text-decoration: underline;
     vertical-align: middle;
  }
</style>