import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { FaCat } from "react-icons/fa";

const AppHeader = () => {
  return (
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
  );
};

export default AppHeader;
