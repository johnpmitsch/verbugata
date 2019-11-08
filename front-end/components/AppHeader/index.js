import AppHeader from "./AppHeader";
import { observer, inject } from "mobx-react";

export default inject("verbStore")(observer(AppHeader));
