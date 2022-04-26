<template>
  <q-dialog>
    <q-card style="max-width: 450px; width: 100%">
      <q-card-section class="row items-center q-pb-none justify-center">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="flex justify-center">
        <div class="col text-center" style="width: 100%">
          <div>{{ data.name }}</div>
          <div>{{ data.date_utc }}</div>
          <div>
            <q-img
              v-if="data.links.flickr.original[0]"
              class="flex justify-center items-cemter"
              :src="data.links.flickr.original[0]"
              style="width: 200px; height: 200px"
            ></q-img>
          </div>

          {{ data.links.flickr.original[0] ? '' : 'image not found' }}

          <div>{{ data.launchpad }}</div>
          <div>{{ data.details }}</div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: { data: Object },
  name: 'DetailDialog',
});
</script>

<style></style>
