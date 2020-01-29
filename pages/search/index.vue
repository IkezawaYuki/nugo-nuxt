<template>
  <section class="section">
    <div class="container">

      <div class="block">
        <div class="block video-block" v-for="(item, index) in items" :key="index">
          <AppVideo
            :item="item"
            :video-id="item.id.videoId"
          />
        </div>
      </div>

      <div class="block">
        <nav class="pagination">
          <a 
          href.prevent="#"
          class="pagination-next"
          @click="loadMore"
          >
            More
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import ROUTES from '~/route/api'
import AppVideo from "~/components/AppVideo"

export default {
  
}
</script>

<style scoped>
.video-block{
  max-width: 900px;
}
</style>