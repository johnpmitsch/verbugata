import App from "next/app";
import { Provider } from "mobx-react";
import Store, { fetchInitialStoreState } from "../stores";
import db from "../components/firebase";

class MyApp extends App {
  state = {
    store: new Store()
  };

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    const initialStoreState = await fetchInitialStoreState();

    return {
      ...appProps,
      initialStoreState
    };
  }

  // Hydrate serialized state to store
  static getDerivedStateFromProps(props, state) {
    state.store.hydrate(props.initialStoreState);
    return state;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider verbStore={this.state.store.verbStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
