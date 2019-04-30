import { IRootState, IPerson } from "~/types";
import { MutationTree, ActionTree } from "vuex";
import localRandomData from "~/static/random-data.json";

export const state = (): IRootState => ({
  people: []
});

export const mutations: MutationTree<IRootState> = {
  setPeople(rootState: IRootState, people: IPerson[]): void {
    rootState.people = people;
  }
};

export const actions: ActionTree<IRootState, IRootState> = {
  async nuxtServerInit({ commit }, context) {
    let people: IPerson[] = [];
    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    people = context.isStatic
      ? localRandomData
      : await this.$axios.$get("/random-data.json");

    this.$axios.$get("/api/todos").then(data => {
      console.log(data);
    });

    commit("setPeople", people.slice(0, 10));
  }
};
