import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FaCat } from "react-icons/fa";

const AppHeader = ({ verbStore }) => {
  const { loading } = verbStore;

  return (
    <AppBar position="static">
      <Link href={"/"}>
        <span style={{ cursor: "pointer" }}>
          <Toolbar>
            {loading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              <FaCat size={32} style={{ margin: "0px 10px" }} />
            )}
            <Typography variant="h5">Verbugata</Typography>
          </Toolbar>
        </span>
      </Link>
    </AppBar>
  );
};

export default AppHeader;
