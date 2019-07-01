<template>
    <div v-if="chapter !== null ">
          <q-video style="height:600px;" :src="chapter.video" frameborder="0" ></q-video>

          <div class="q-pa-lg">
            <h3> {{chapter.title}}</h3>
            <div v-html="chapter.content"> </div>
          </div>
    </div>
</template>

<script>
    import store from "../assets/store";

    export default {
        name: "Chapters",
        data:()=>({
            store: store,
            chapter: null,
        }),
        beforeRouteUpdate (to, from, next) {
            this.chapter = store.getChapter(to.params.id);
            next();
        },
        created() {
            console.log('id',this.$route.params.id);
            console.log(this.chapter);
        }
    }
</script>

<style scoped>

</style>
