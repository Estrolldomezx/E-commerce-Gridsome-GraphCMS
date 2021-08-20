<template>
  <Layout>
    <div v-if="this.$page.gcms.product" class="product_layout">
      <div>
        <g-image :src="product.images[0].url" class="img" alt="new image" />
      </div>
      <div class="details">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description.markdown }}</p>
        <p>ราคา {{ product.price }} THB</p>
        <div class="purschase">
          <button class="fill2" v-on:click="counter += 1">Add 1</button>
          <p>คำสั่งซื้อของ {{ product.name }} จำนวน {{ counter }} คำสั่งซื้อ</p>
          <p>ราคาทั้งหมด: {{ counter * product.price }} บาท</p>
          <br>
        </div>
      </div>
    </div>

    <div class="button_position">
      <g-link class="fill" to="/payment" type="button">Purchase</g-link>
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
  width: 400px;
}

.button {
  font-size: 1.75rem;
}

.details {
  font-size: 1.75rem;
}

.product_layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2rem;
}

.btn {
  display: flex;
  align-items: center;
  text-decoration: none;
  border: 1px solid #5828e8;
  width: 10rem;
  text-align: center;
  justify-content: center;
  height: 3rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 5px;
}

.fill {
  font-size: 25px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 3px solid white;
  cursor: pointer;
  /* position: relative; */
  background-color: rgba(0, 0, 0, 0);
  margin-left: 50rem;
  
}

.fill::after {
  content: "";
  background-color: #66f2d5;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.fill:hover::after {
  top: 0px;
  left: 0px;
  background: #ffe54c;
}

.fill2 {
  font-size: 25px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 3px solid white;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}

.fill2::after {
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.fill2:hover::after {
  top: 0px;
  left: 0px;
  background: #dcbaff;
}
</style>
