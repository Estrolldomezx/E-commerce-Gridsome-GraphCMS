<template>
  <Layout>
    <div class="divide__between">
      <img
        class="banner"
        src="https://static.vecteezy.com/system/resources/previews/002/876/939/non_2x/bubble-milk-tea-design-collection-pearl-milk-tea-boba-milk-tea-yummy-drinks-coffees-with-doodle-style-banner-illustration-vector.jpg"
        alt=""
      />
    </div>

    <div class="priceRange">
      <h2>
        <b-icon icon="sliders"></b-icon>
        &nbsp;ประเภทสินค้า (Categories)
      </h2>
    </div>
    <div class="categories" style="text-align: center">
      <button type="button" class="fill" @click="page_1()">
        All Categories
      </button>
      &nbsp;
      <button type="button" class="fill" @click="Bubbletea()">
        Bubble Milk tea
      </button>
      &nbsp;
      <button type="button" class="fill" @click="Extreme()">
        Extra Extreme
      </button>
      &nbsp;
      <button type="button" class="fill" @click="Icecream()">Ice Cream</button>
    </div>
    <div class="priceRange">
      <h2>
        <b-icon icon="sliders"></b-icon>
        &nbsp;เลือกตามราคา (Price range)
      </h2>
    </div>
    <div class="categories" style="text-align: center">
      <button type="button" class="fill2" @click="page_1()">All</button>
      <button type="button" class="fill2" @click="select0_50THB()">
        0 - 50 Baht
      </button>
      <button type="button" class="fill2" @click="select51_100THB()">
        51 - 100 Baht
      </button>
      <button type="button" class="fill2" @click="select101_150THB()">
        101 - 150 Baht
      </button>
      <button type="button" class="fill2" @click="select150THB_grt()">
        Over 150 Baht
      </button>
    </div>
    <div>
      <div v-if="$page.page1.products" class="product-grid">
        <div v-for="product in products" :key="product.id" class="flex-col">
          <g-link :to="'product/' + product.id" class="link">
            <div class="product-wrapper">
              <g-image
                v-for="(images, slug) in product.images"
                class="img"
                :key="slug"
                :src="images.url"
              />
              <div class="product-content">
                <p class="product-name">{{ product.name }}</p>
                <p class="product-price">{{ product.price }} THB</p>
              </div>
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <div class="categories">
      <button type="button" class="slide" @click="page_1()">Previous</button>
      <button type="button" class="slide" @click="page_2()">Next</button>
    </div>
    <br>
    <div class="Marquee-box">
      <marquee
        class="MyMarquee"
        id="my_marquee"
        direction="left"
        behavior="9"
        scrollamount="9"
        onmouseover="this.stop()"
        onmouseout="this.start()"
      >
        <div>
          <img
            src="https://st4.depositphotos.com/14582236/27572/v/600/depositphotos_275726922-stock-illustration-bubble-milk-tea-ads.jpg"
            width="160"
            height="80"
            alt="marquee image"
          />
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/033/942/small_2x/bubble-milk-tea-pearl-milk-tea-different-sorts-of-boba-yummy-drinks-free-vector.jpg"
            width="170"
            height="80"
            alt="marquee image"
          />
        </div>
        <div>
          <img
            src="https://as1.ftcdn.net/jpg/03/30/92/17/1000_F_330921791_DIyXT23Pv08s4YT4H4LavprRyW6pFT7I.jpg"
            width="170"
            height="80"
            alt="marquee image"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/vectors/bubble-tea-banner-ads-vector-id1211684659?b=1&k=6&m=1211684659&s=612x612&w=0&h=ccW5dAIQeOkGNlsLKe5gp8pW_7hfdefPRcB8ga04yOY="
            width="170"
            height="80"
            alt="marquee image"
          />
        </div>
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/bubble-milk-tea-advertisement-leaves-elements-summer-background-d-illustration-196379871.jpg"
            width="170"
            height="80"
            alt="marquee image"
          />
        </div>
        <div>
          <img
            src="https://i1.wp.com/cupcommunity.com/wp-content/uploads/2020/08/Kim-Cha-Milktea-Station-Banner.jpg?fit=1200%2C523&ssl=1"
            width="170"
            height="80"
            alt="marquee image"
          />
        </div>
        <div>
          <img
            src="https://as2.ftcdn.net/jpg/03/69/21/75/500_F_369217590_HB85JJv1iYxzYQ0peyHsNep0vKbBugP2.jpg"
            width="170"
            height="80"
            alt="marquee image"
          />
        </div>
        <div>
          <img
            src="https://image.shutterstock.com/image-vector/bubble-milk-tea-design-collectionpearl-260nw-1789344620.jpg"
            width="170"
            height="80"
            alt="marquee image"
          />
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/036/549/small/bubble-milk-tea-pearl-milk-tea-different-sorts-of-boba-yummy-drinks-free-vector.jpg"
            width="250"
            height="80"
            alt="marquee image"
          />
        </div>
      </marquee>
    </div>
  </Layout>
</template>



<script>
export default {
  data() {
    return {
      products: [
        {
          name: "",
          description: {
            markdown: "",
          },
          category: {
            name: "",
          },
          price: "",
          images: [
            {
              url: "",
            },
          ],
        },
      ],
    };
  },

  created() {
    this.products = this.$page.page1.products;
  },
  methods: {
    select0_50THB() {
      this.products = this.$page.select0_50THB.products;
    },
    select51_100THB() {
      this.products = this.$page.select51_100THB.products;
    },
    select101_150THB() {
      this.products = this.$page.select101_150THB.products;
    },
    select150THB_grt() {
      this.products = this.$page.select150THB_grt.products;
    },
    Bubbletea() {
      this.products = this.$page.typebubbletea.products;
    },
    Extreme() {
      this.products = this.$page.typeextreme.products;
    },
    Icecream() {
      this.products = this.$page.typeicecream.products;
    },
    page_1() {
      this.products = this.$page.page1.products;
    },
    page_2() {
      this.products = this.$page.page2.products;
    },
  },
};
</script>

<page-query>
  {

    page1:gcms{
      products(first:6,orderBy:price_ASC) {
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

  page2:gcms{
      products(skip:6,first:6,orderBy:price_ASC) {
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

    typebubbletea:gcms {
      products(where: {id_in:["ckdu44mn40gxh010405uwgbtw","ckdu48unc0gzq0158mbzvyzg3","ckdu49mfc0h070102jgprxnj0","ckdu4a79c0h0g0158pqypj0dp"]},orderBy:price_ASC) {
        id
        name
        description
        categories {
          name
        }
        price
        images {
          url
        }
        slug
      }
    }
    typeextreme:gcms {
      products(where: {id_in:["ckdu4awq00h140104ijzi92kv","ckdu4bmyg0h1f0102jk0mwn2g","ckdu4ch1s0h1s01580ksoy6m5","ckrjthdm8a84s0d392skqz7tv","ckrjtlvnka72w0b40pcxlah91","ckrjtonyoa7860c9716cp6nuu"]},orderBy:price_ASC) {
        id
        name
        description
        categories {
          name
        }
        price
        images {
          url
        }
        slug
      }
    }
    
    typeicecream:gcms {
      products(where: {id_in:["ckrlpbq00f4rv0b40e9q83qpc","ckrlpqkq0fapd0b400qhhalp1"]},orderBy:price_ASC) {
        id
        name
        description
        categories {
          name
        }
        price
        images {
          url
        }
        slug
      }
    }
    select0_50THB:gcms {
      products (where:{ price_lte: 50  },orderBy:price_ASC) {
        id
        name
        description
        categories {
          name
        }
        price
        images {
          url
        }
        slug
      }
    }
    select51_100THB:gcms {
      products (where:{ AND: [{ price_gt: 50 }, { price_lte: 100 }] },orderBy:price_ASC) {
        id
        name
        description
        categories {
          name
        }
        price
        images {
          url
        }
        slug
      }
    }

    select101_150THB:gcms {
      products (where:{ AND: [{ price_gt: 100 }, { price_lte: 150 }] },orderBy:price_ASC) {
        id
        name
        description
        categories {
          name
        }
        price
        images {
          url
        }
        slug
      }
    }

    select150THB_grt:gcms {
      products (where:{ price_gt: 150},orderBy:price_ASC) {
        id
        name
        description
        categories {
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



</page-query>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css";
@import "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap";

.Body {
  margin-right: 10px;
}
.divide__between {
  display: flex;
  justify-content: space-between;
}

.priceRange {
  color: #5828e8;
}

.categories {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
}

.button {
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
  margin-right: 1rem;
}

.button:hover {
  background: #5828e8;
  color: #f5f5f5;
}

.fill {
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 3px solid white;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}

.fill::after {
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

.fill:hover::after {
  top: 0px;
  left: 0px;
  background: #dcbaff;
}

.fill2 {
  font-size: 18px;
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
  background-color: #66f2d5;
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
.page-nav {
  align-content: center;
}

.slide {
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 30px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}

.slide i {
  opacity: 0;
  font-size: 13px;
  transition: 0.2s;
  position: absolute;
  right: 10px;
  top: 21px;
  transition: transform 1;
}

.slide div {
  transition: transform 0.8s;
}

.slide:hover div {
  transform: translateX(-6px);
}

.slide::after {
  content: "";
  background-color: #dcbaff;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
}

.slide:hover i {
  opacity: 1;
  transform: translateX(-6px);
}


.img {
  width: 300px;
  transition-delay: 500ms;
  object-fit: cover;
}
.banner {
  width: 100%;
  border-radius: 20px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  justify-content: space-between;
}
.flex-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
.link {
  display: flex;
  width: 100%;
  text-decoration: none;
  height: 100%;
}
.product-content {
  /* padding-top: 1.5rem; */
  text-align: center;
  /* background-color: #fff; */
}
.product-wrapper {
  padding: 1.5rem;
  width: 100%;
  border-radius: 0.5rem;
  position: relative;
  background-color: #b1ade2;
  background-image: linear-gradient(315deg, #b1ade2 0%, #7ddff8 74%);
}
.product-wrapper:hover{
  background-color: #9ab5e1;
background-image: linear-gradient(315deg, #9ab5e1 0%, #f39fdc 74%);
}

.product-name {
  font-size: 1.3rem;
  color: #101b42;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.product-name:hover {
  color: #5828e8;
}
.product-price {
  font-size: 1rem;
  color: #101b42;
  font-weight: bold;
}

@media (max-width: 760px) {
  .product-grid {
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
  /* font-size: 25px; */
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
.MyMarquee a,
.MyMarquee img {
  display: inline-block;
  text-decoration: underline;
  vertical-align: middle;
}
.priceRange {
  text-align: center;
}
.filterPrice-btn {
  background-color: #97634e;
}
.filterPrice-btn:hover,
.filterPrice-btn:active,
.filterPrice-btn:focus {
  background-color: #6d3a11;
}
</style>