import Grid from "@material-ui/core/Grid";
import NumberOfVerbs from "./NumberOfVerbs";
import Options from "./Options";
import PickTenses from "./PickTenses";

export default function StartingForm({
  setAmount,
  amount,
  setSelectedTenses,
  includeTu,
  toggleIncludeTu
}) {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <NumberOfVerbs amount={amount} setAmount={setAmount} />
      </Grid>
      <Grid item xs={12}>
        <Options includeTu={includeTu} toggleIncludeTu={toggleIncludeTu} />
      </Grid>
      <Grid item xs={12}>
        <PickTenses setSelectedTenses={setSelectedTenses} />
      </Grid>
    </React.Fragment>
  );
}
