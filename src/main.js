import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Apollo Requirements
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

const URI = process.env.HASURA_URI;
const SECRET = process.env.HASURA_SECRET;
const WSS = process.env.HASURA_WSS;

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: URI,
  headers: {
    "x-hasura-admin-secret": HASURA_SECRET,
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
