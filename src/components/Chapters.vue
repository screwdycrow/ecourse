<te>
  <q-list>
    <q-item-label  header> Units </q-item-label>
    <q-item clickable tag="a" v-for="chapter in store.state.chapters" :key="chapter.unitID"  :to="'/chapter/'+chapter.unitID">
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{unit.title}}</q-item-label>
        <q-item-label caption>quasar.dev</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</te>

<script>
    export default {
        name: "Chapters"
    }
</script>

<style scoped>

</style>
