import { defineStore } from "pinia";
import { getList } from "../server";
import type { RootObject } from "./type";


export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    list: <RootObject>{},
  }),
  actions: {
    async getList() {
      const result = await getList();
      this.list = result
    },
  },
});

