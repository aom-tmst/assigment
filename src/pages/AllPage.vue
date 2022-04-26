<template>
  <q-page class="max-w-screen">
    <div class="col q-gutter-y-md" v-if="allData">
      <div
        class="row q-pa-md items-center"
        v-for="(data, i) in allData"
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
import { spacexService } from 'src/services/spacex-service';
import { defineComponent, onMounted, ref } from 'vue';
import DetailDialog from 'src/components/DetailDialog.vue';
export default defineComponent({
  name: 'AllPage',
  components: { DetailDialog },

  setup() {
    const allData = ref();
    const isShowDialog = ref(false);
    const onSelectedData = ref();
    const openDialog = (data) => {
      isShowDialog.value = true;
      onSelectedData.value = data;
      console.log('test');
    };

    onMounted(async () => {
      allData.value = await spacexService.fetchSpacexData();
    });

    return { allData, onSelectedData, isShowDialog, openDialog };
  },
});
</script>

<style></style>
