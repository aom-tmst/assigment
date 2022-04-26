import { api } from 'src/boot/axios';

export const spacexService = {
  async fetchSpacexData() {
    try {
      const response = await api.get('');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};
