<template>
   <layout>
    <div class="header_pay">
      <img
        class="banner"
        src="https://sellcodes.com/assets/images/Purchase_Success.png"
      />
      <h2>Purchase successful !</h2>
      <botton class="fill" @click="gohome()">Homepage</botton>
    </div>
  </layout>
</template>

<script>
export default {
  methods: {
    gohome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.header_pay {
  margin-top: 10rem;
  align-items: center;
  text-align: center;
  font-size: 36px;
  width: 40%;
  margin-left: 35%;
}

.fill {
  font-size: 25px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 3px solid white;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin-bottom: 30px;
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
</style>
