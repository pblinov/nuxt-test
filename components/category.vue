<script setup>
  import {computed} from "vue";
  const props = defineProps(['imageName', 'caption'])

  const imageUrl = computed(() => {
    return new URL(`/assets/${props.imageName}`, import.meta.url).href
  })
</script>

<template>
  <div class="cosmetic">
    <figure class="cosmetic-border">
      <img :src="imageUrl" class="imgCosmetic" alt="cosmetic">
      <figcaption><a class="s10" href="#">{{ caption }}</a></figcaption>
    </figure>
  </div>
</template>

<style>
figcaption:hover {
  font-size: 0.8em;
}

.cosmetic {
  position: sticky;
  width: 20%;
}

.imgCosmetic {
  width: 100%;
  height: auto;
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


</style>
