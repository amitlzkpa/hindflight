import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);

Vue.prototype.$api = axios.create();

Vue.prototype.wait = async function(ms) {
	return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

import { Auth0Plugin } from "./auth";

async function main() {

  let resp = await fetch('/api/auth0-secrets');
  let secrets = await resp.json();
  let domain = secrets.AUTH0_DOMAIN;
  let clientId = secrets.AUTH0_CLIENT_ID;

  Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    }
  });
  
  Vue.config.productionTip = false;
  
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
  });

}


main();