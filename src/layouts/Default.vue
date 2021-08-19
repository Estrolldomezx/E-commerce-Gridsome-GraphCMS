<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="headerText"
          >{{ $static.metadata.siteName }}
        </g-link>
        <marquee class="marquee-a" loop="infinite">
          คาเฟ่สวนดอกไม้ ภูมิใจนำเสนอ "ชารสต้นตำรับสูตรดังเมืองเพชร"
          ที่มาพร้อมกับบรรยากาศสุดประทับใจ รอคอยให้เหล่าคอชาได้มาลิ้มลอง !
        </marquee>
      </strong>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url("https://fonts.googleapis.com/css2?family=Karla&family=Rubik&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital@1&display=swap");
body {
  font-family: "Rubik", karla, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: #ffdab9;
}

.layout {
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 2rem;
}

.header {
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.headerText {
  text-decoration: none;
  font-size: 3.5rem;
  color: #5828e8;
}
.marquee-a {
  color: #fff;
  font-family: "Prompt", sans-serif;
  color: #191970;
  font-size: 25px;
}

@media (max-width: 760px) {
  body {
    margin-right: 8px;
    margin-left: 8px;
  }
  .layout {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

/*  */

body {
  background-repeat: repeat;
  background-color: #fad0c4;
  background-image: linear-gradient(315deg, #fad0c4 0%, #f1a7f1 74%);
}
</style>