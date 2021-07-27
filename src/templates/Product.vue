<template>
  <Layout>
    <link href="jquery.nice-number.css" rel="stylesheet" />
    <div v-if="this.$page.gcms.product" class="product_layout">
      <div>
        <g-image :src="product.images[0].url" class="img" alt="new image" />
      </div>
      <div>
        <h1>{{ product.name }}</h1>
        <p>{{ product.description.markdown }}</p>
        <h2>${{ product.price }}</h2>
        <br />
        <button class="buybutton">Buy now<br /></button>
      </div>
    </div>
  </Layout>
</template>


  <script>
  function 
  </script>  
<script>
export default {
  data() {
    return {
      product: {
        name: "",
        amount:0,
        description: {
          markdown: "",
        },
        images: [
          {
            url: "",
          },
        ],
      },
    };
  },
  created() {
    this.product = this.$page.gcms.product;
    console.log("Product here", this.product);
  },
};
</script>

<page-query>
query GetProduct($id: ID) {
    gcms {
        product(where: {id: $id}) {
                id
            name
            description
            price
            images{
                url
            }
        }
    }
}
</page-query>

<style scoped>
.img {
  width: 300px;
}
.product_layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
}
</style>

<style>
button{
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 8px rgb(207, 207, 207);
}

button:hover{
  border: none;
  padding: 15px;
  border-radius: 15px;
  box-shadow: inset 0 0 8px #f9f8fc;
  } 
</style>
<style>
.buybutton{
        position: relative;
  top: 15px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: none;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 8px #d9d4e7;
  width: 200px;
  height: 65px;
  background-color:aquamarine;
  animation-duration: 5s;
   font-size: 20px;
    display: block;
    text-decoration: none;
    color:#0e172c;
    font-weight: bold;
    
}
</style>