import App from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "mobx-react";
import AppHeader from "../components/AppHeader";
import Store, { fetchInitialStoreState } from "../stores";
import theme from "../lib/theme";

class MyApp extends App {
  constructor() {
    super();
    this.state = {
      store: new Store()
    };
  }

  static componentDidMount() {
    // Remove the server-side injected CSS.
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider verbStore={this.state.store.verbStore}>
            <AppHeader />
            <Container
              style={{
                textAlign: "center",
                margin: "40px auto 150px auto",
                padding: "0px"
              }}
            >
              <Component {...pageProps} />
            </Container>
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
