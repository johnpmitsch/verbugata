import App from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Provider } from "mobx-react";
import AppHeader from "../components/AppHeader";
import Store, { fetchInitialStoreState } from "../stores";

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
      <React.Fragment>
        <CssBaseline />
        <Provider verbStore={this.state.store.verbStore}>
          <AppHeader />
          <Container style={{ textAlign: "center", paddingTop: "20px" }}>
            <Component {...pageProps} />
          </Container>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;
