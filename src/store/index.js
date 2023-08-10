import { createStore } from "vuex";
import state from "./state";
import * as action from "./action";
import * as mutation from "./mutation";
import * as getters from "./getters";

const store = createStore({
  state,
  action,
  mutation,
  getters,
});

export default store;
