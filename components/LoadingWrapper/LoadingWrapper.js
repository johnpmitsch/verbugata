import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingWrapper({ condition, children }) {
  return condition ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <CircularProgress />
  );
}
