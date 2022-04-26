<template>
  <q-layout class="flex justify-center" view="lHh Lpr lFf">
    <div class="flex justify-center q-mb-md" style="width: 100%; height: 60px">
      <div class="max-w-screen flex justify-center">
        <div
          class="row flex justify-between"
          style="width: 100%; cursor: pointer"
        >
          <div
            v-for="(menu, i) in menuList"
            class="q-pa-md col flex items-center justify-center"
            :key="i"
            :class="{ 'is-actived': isActived(menu.path) }"
            style="border: 1px solid #9a9a9a;flex"
            @click="pushPage(menu.path)"
          >
            <span>{{ menu.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { defineComponent, ref } from 'vue';
const menu = [
  {
    title: 'All',
    path: 'all',
  },
  {
    title: 'Launched',
    path: 'launched',
  },
  {
    title: 'Upcoming',
    path: 'upcomimg',
  },
];

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const menuList = ref(menu);
    const isActived = (path: string) => route.name === path;
    const pushPage = (pathName: string) => {
      void router.push({ path: pathName });
    };
    return {
      menuList,
      pushPage,
      isActived,
    };
  },
});
</script>
