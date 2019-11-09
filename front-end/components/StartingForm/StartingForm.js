import Grid from "@material-ui/core/Grid";
import NumberOfVerbs from "./NumberOfVerbs";
import PickTenses from "./PickTenses";

export default function StartingForm({ setAmount, amount, setSelectedTenses }) {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <NumberOfVerbs amount={amount} setAmount={setAmount} />
      </Grid>
      <Grid item xs={12}>
        <PickTenses setSelectedTenses={setSelectedTenses} />
      </Grid>
    </React.Fragment>
  );
}
