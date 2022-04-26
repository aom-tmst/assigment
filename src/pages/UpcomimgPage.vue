<template>
  <q-page class="max-w-screen">
    <div class="col q-gutter-y-md" v-if="upcomingData">
      <div
        class="row q-pa-md items-center"
        v-for="(data, i) in upcomingData"
        :key="i"
        @click="openDialog(data)"
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
    <DetailDialog v-model="isShowDialog" :data="onSelectedData" />
  </q-page>
</template>

<script>
import DetailDialog from 'src/components/DetailDialog.vue';
import { spacexService } from 'src/services/spacex-service';
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
  name: 'UpcomimgPage',
  components: { DetailDialog },

  setup() {
    const allData = ref();
    const upcomingData = ref();
    const isShowDialog = ref(false);
    const onSelectedData = ref();
    const openDialog = (data) => {
      isShowDialog.value = true;
      onSelectedData.value = data;
      console.log('test');
    };
    onMounted(async () => {
      allData.value = await spacexService.fetchSpacexData();
      upcomingData.value = allData.value.filter((res) => res.upcoming == true);
    });

    return { upcomingData, isShowDialog, onSelectedData, openDialog };
  },
});
</script>
