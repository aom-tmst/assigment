<template>
  <q-page class="max-w-screen">
    <div class="col q-gutter-y-md" v-if="launchedData">
      <div
        class="row q-pa-md items-center"
        v-for="(data, i) in launchedData"
        :key="i"
        style="box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25); cursor: pointer"
      >
        <div>
          <q-img
            :src="data.links.patch.small"
            style="width: 50px; height: 50px"
          />
          <span class="q-ml-md">{{ data.name }}</span>
        </div>
        <q-space />
        <div>
          {{ data.date_utc }}
          <span class="text-blue">{{
            data.upcoming == true ? 'Upcoming' : ''
          }}</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { spacexService } from 'src/services/spacex-service';
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
  name: 'LaunchedPage',

  setup() {
    const allData = ref();
    const launchedData = ref();
    onMounted(async () => {
      allData.value = await spacexService.fetchSpacexData();
      launchedData.value = allData.value.filter((res) => res.upcoming == false);
    });

    return { launchedData };
  },
});
</script>

<style></style>
