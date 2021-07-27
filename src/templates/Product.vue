<template>
  <Layout>
    <div v-if="this.$page.gcms.product" class="product_layout">
      <div>
        <g-image :src="product.images[0].url" class="img" alt="new image" />
      </div>
      <div>
        <h1>{{ product.name }}</h1>
        <p>{{ product.description.markdown }}</p>
        <p>{{ product.price }} THB</p>
        <div id="purschase">
          <button v-on:click="counter += 1">Add 1</button>
          <p>{{ product.name }} จำนวน {{ counter }}</p>
          <p>ราคาทั้งหมด: {{ counter * product.price }} บาท</p>
        </div>
      </div>
    </div>

    <div class="botton_position">
      <g-link class="btn" to="/about/" type="button">Purchase</g-link>
    </div>
  </Layout>
</template>


<script>
export default {
  methods: {
    payment() {
      this.$router.push("/payment");
    },
  },
  data() {
    return {
      counter: 0,
      product: {
        name: "",
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
.botton_position {
  align-items: center;
  justify-content: center;
}
.btn {
  -webkit-border-radius: 9;
  -moz-border-radius: 9;
  border-radius: 9px;
  font-family: Arial;
  color: #750075;
  font-size: 36px;
  padding: 10px 30px 10px 30px;
  border: solid #5828e8 2px;
  margin-left: 700px;
  background-color: white;
}

.btn:hover {
  background: #5828e8;
  color: #f5f5f5;
}
</style>
