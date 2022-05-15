import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

import data from "./modules/data.js";

Vue.use(Vuex);

const Secure = new SecureLS({
  encodingType: "aes",
  encryptionSecret: "LxBTGJxebKDXZdQRx1qwUgKGO8vw",
});

const stateUniqueId = createPersistedState({
  key: "uniqueId",
  paths: ["data.uniqueId"],
  storage: {
    getItem: (key) => Secure.get(key),
    setItem: (key, value) => Secure.set(key, value),
    removeItem: (key) => Secure.remove(key),
  },
});

const stateName = createPersistedState({
  key: "name",
  paths: ["data.name"],
  storage: {
    getItem: (key) => Secure.get(key),
    setItem: (key, value) => Secure.set(key, value),
    removeItem: (key) => Secure.remove(key),
  },
});

const stateItems = createPersistedState({
  key: "Items",
  paths: ["data.items"],
  storage: {
    getItem: (key) => Secure.get(key),
    setItem: (key, value) => Secure.set(key, value),
    removeItem: (key) => Secure.remove(key),
  },
});

export default new Vuex.Store({
  modules: { data },
  plugins: [stateUniqueId, stateName, stateItems],
});
