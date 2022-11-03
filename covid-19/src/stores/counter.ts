import { defineStore } from "pinia";
import { getList } from "../server";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    list: {},
  }),
  actions: {
    async getList() {
      const result = await getList();
      console.log(result);
    },
  },
});
