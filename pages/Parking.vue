<template>

</template>

<script>
export default {
  name: "parking"
}
</script>

<style scoped>
.gerb {
  max-width: 100%;
}

@media screen and (min-width: 800px) {
  .gerb {
    max-width: 100%;
  }
}

.top-menu {
  background: rgba(255, 255, 255, .5);
  box-shadow: 3px 0 7px rgba(0, 0, 0, .3);
  padding: 20px;
}

.top-menu:after {
  content: "";
  display: table;
  clear: both;
}

.menu-main {
  list-style: none;
  margin: 0;
  padding: 0;
  float: right;
}


.menu-main li {
  display: inline-block;
}

.title {
  display: inline-block;
  text-align: center;
  letter-spacing: 2px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  color: #0a1454;
  transition: .3s linear;
}

.menu-main a {
  text-decoration: none;
  display: block;
  position: relative;
  line-height: 61px;
  padding-left: 20px;
  font-size: 18px;
  letter-spacing: 2px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  color: #2440f7;
  transition: .3s linear;
}

.logo {
  display: inline-block;
  width: 4%;
}

.menu-main a:before {
  content: "";
  width: 9px;
  height: 9px;
  background: #2440f7;
  position: absolute;
  left: 50%;
  transform: rotate(45deg) translateX(6.5px);
  opacity: 0;
  transition: .3s linear;
}

.menu-main a:hover:before {
  opacity: 1;
}

@media (max-width: 800px) {
  .menu-main {
    float: none;
    padding-top: 20px;
  }

  .top-menu {
    text-align: center;
    padding: 20px 0 0 0;
  }

  .menu-main a {
    padding: 0 10px;
    font-size: 15px;
  }

  .menu-main a:before {
    transform: rotate(45deg) translateX(-6px);
  }
}

@media (max-width: 800px) {
  .menu-main li {
    display: block;
  }
}


</style>
