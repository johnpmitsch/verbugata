import Grid from "@material-ui/core/Grid";
import NumberOfVerbs from "./NumberOfVerbs";
import PickTenses from "./PickTenses";

export default function StartingForm({ setAmount, amount }) {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <NumberOfVerbs amount={amount} setAmount={setAmount} />
        <PickTenses />
      </Grid>
    </React.Fragment>
  );
}
