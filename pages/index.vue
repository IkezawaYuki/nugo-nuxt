<template>
  <section>
    <div class="container">
      <div class="block">
        <div class="block video-block" v-for="(item, index) in items" :key="index">
          <AppVideo
              :item="item"
              :video-id="item.id"
          />
        </div>
      </div>
      <div class="block">
        <nav class="pagination">
          <a href.prevent="#"
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
import ROUTES from '~/routes/api';
import AppVideo from "~/components/AppVideo";

export default {
  components: {AppVideo},

  computed:{
    items(){
      return this.$store.getters.getPopularVideos
    },
    nextPageToken(){
      return this.$store.getters.getMeta.nextPageToken
    },
  },
  methods: {
    loadMore(){
      const payload = {
        uri: ROUTES.GET.POPULARS,
        params:{
          pageToken: this.nextPageToken
        }
      }
      this.$store.dispatch('fetchPopularVideos', payload)
    }
  },
  async fetch({store}){
    const payload = {
      uri: ROUTES.GET.POPULARS,
      params: {
        pageToken: this.nextPageToken
      }
    }

    if(store.getters.getPopularVideos && store.getters.getPopularVideos.length > 0){
      return
    }
    await store.dispatch('fetchPopularVideos', payload)
  }
}
</script>

<style>
.video-block{
  max-width: 900px;
}
</style>
