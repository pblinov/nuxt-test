<template>

  <div>
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>

    <div class="book">
      <div class="parking">
        <img src="~assets/parking.jpg" class="imgParking" alt="parking">
      </div>
      <div>
        <p class="StockParking">Up to 60% off on our official car park *</p>
        <p class="stockParking">Compare offers and book in advance for the best rates</p>
        <div>
          <button type="button" class="buttonForBook">Book your car park</button>
        </div>
      </div>
    </div>

    <div class="shop">


      <div class="cosmetic">
        <figure class="cosmetic-border">
          <img src="~assets/cosmetic.jpg" class="imgCosmetic" alt="cosmetic">
          <figcaption><a class="s10" href="#">Beauty</a></figcaption>
        </figure>
      </div>


      <div class="food">
        <figure class="food-border">
          <img src="~assets/food.jpg" class="imgFood" alt="food">
          <figcaption><a class="s10" href="#">Food</a></figcaption>
        </figure>
      </div>

      <div class="jewelry">
        <figure class="jewelry-border">
          <img src="~assets/Swarovski.jpg" class="imgJewelry" alt="jewelry">
          <figcaption><a class="s10" href="#" >Jewelry</a></figcaption>
        </figure>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

.gerb {
  max-width: 100%;
}

figure {
  margin-left: auto;
}

figcaption:hover {
  font-size: 0.8em;
}

.book {
  display: flex;
  align-items: center;
}

.shop {
  display: flex;
  margin-top: 10px;

}

.imgParking {
  width: 100%;
  height: auto;
  -webkit-mask-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
}

.imgCosmetic {
  width: 100%;
  height: auto;
}

.imgFood {
  width: 100%;
  height: auto;
}

.imgJewelry {
  width: 100%;
  height: auto;
}

.imgParking::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.parking {
  position: sticky;
  width: 60%;
  display: flex;
  justify-content: center;
}

.cosmetic {
  position: sticky;
  width: 20%;
}

.food {
  position: sticky;
  margin-left: 10px;
  width: 20.8%;
}

.jewelry {
  position: sticky;
  margin-left: 10px;
  width: 25%;
}

.StockParking {
  display: inline-block;
  text-align: center;
  letter-spacing: 2px;
  font-size: 25px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  color: #0a1454;
}

.stockParking {
  display: inline-block;
  text-align: center;
  letter-spacing: 2px;
  font-size: 18px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  color: #0a1454;
}

.buttonForBook {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgb(0, 88, 220);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
  inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.buttonForBook:hover {
  background-color: rgb(0, 88, 220);
}

.buttonForBook:active {
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
  inset 2px 2px 3px rgba(0, 0, 0, 0.6);
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

  .StockParking {
    float: none;
    font-size: 15px;
  }

  .stockParking {
    float: none;
    font-size: 10px;
  }

  .buttonForBook {
    font-size: 0.3rem;
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

.food-border {
  border: 5px solid #0b1a7a;
  background: white;
  padding: 10px;
}

.food-border figcaption {
  padding: 10px;
  color: white;
  background: #0b1a7a;
  text-align: center;
  text-transform: uppercase;
}

.cosmetic-border {
  border: 5px solid #0b1a7a;
  background: white;
  padding: 10px;
}

.cosmetic-border figcaption {
  padding: 10px;
  color: white;
  background: #0b1a7a;
  text-align: center;
  text-transform: uppercase;
}

.jewelry-border {
  border: 5px solid #0b1a7a;
  background: white;
  padding: 10px;
}

.jewelry-border figcaption {
  color: white;
  padding: 10px;
  background: #0b1a7a;
  text-align: center;
  text-transform: uppercase;
}

.s10 {
  color: #B79DCC;
  position: relative;
}
.s10:after {
  content: "";
  display: block;
  position: relative;
  width: 100%;
  margin: auto;
  border-bottom: 3px dashed #2440f7;
  bottom: -5px;
  transition: .5s ease-in-out;
}
.s10:hover:after {
  width: 0;
}

</style>
