<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="headerText"
          >{{ $static.metadata.siteName }}
        </g-link>
        <marquee class="marquee-a" loop="infinite">
          คาเฟ่สวนดอกไม้
          ภูมิใจนำเสนอ
          "ชารสต้นตำรับสูตรดังเมืองเพชร"
          ที่มาพร้อมกับบรรยากาศสุดประทับใจ
          รอคอยให้เหล่าคอชาได้มาลิ้มลอง !
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
@import url('https://fonts.googleapis.com/css2?family=Prompt:ital@1&display=swap');
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
  padding-bottom: 4rem;
}

.header {
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.headerText {
  text-decoration: none;
  font-size: 4rem;
  color: #5828e8;
}
.marquee-a {
  color: #fff;
  font-family: 'Prompt', sans-serif;
  color: #191970;
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
  background: radial-gradient(
        1.5em 6.28571em at 1.95em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      0 0,
    radial-gradient(
        1.5em 6.28571em at -0.45em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      1.5em 5.5em,
    radial-gradient(
        2.3em 4.57143em at 2.99em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0.3) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      0 0,
    radial-gradient(
        2.3em 4.57143em at -0.69em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0.3) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      2.3em 4em,
    radial-gradient(
        3.5em 6.28571em at 4.55em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      0 0,
    radial-gradient(
        3.5em 6.28571em at -1.05em,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 55%,
        rgba(255, 255, 255, 0) 55%
      )
      3.5em 5.5em,
    radial-gradient(#15ffa5, #00ced1);
  background-color: mediumspringgreen;
  background-size: 1.5em 11em, 1.5em 11em, 2.3em 8em, 2.3em 8em, 3.5em 11em,
    3.5em 11em, 100% 100%;
  background-repeat: repeat;
}
</style>