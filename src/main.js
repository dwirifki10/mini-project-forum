import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

import axios from "axios";
axios.defaults.baseURL = "https://project-app-forum.herokuapp.com/api/v1";

// Apollo Requirements
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

const URI = "https://mini-project-forum.hasura.app/v1/graphql";
const SECRET =
  "pL1kdxb5Hvbf1ACRGAW50mMOc2gAS0Ay29zmLxBTGJxebKDXZdQRx1qwUgKGO8vw";
// const WSS = "wss://mini-project-forum.hasura.app/v1/graphql";

console.log(URI, SECRET);

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: URI,
  headers: {
    "x-hasura-admin-secret": SECRET,
  },
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import CKEditor from "ckeditor4-vue";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Enable the component CKEditor
Vue.use(CKEditor);

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
