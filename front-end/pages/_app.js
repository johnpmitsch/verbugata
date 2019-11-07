import App from "next/app";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "mobx-react";
import { FaCat } from "react-icons/fa";
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
          <AppBar position="static">
            <Link href={"/"}>
              <span style={{ cursor: "pointer" }}>
                <Toolbar>
                  <FaCat size={32} style={{ margin: "0px 10px" }} />
                  <Typography variant="h5">Verbugata</Typography>
                </Toolbar>
              </span>
            </Link>
          </AppBar>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;
