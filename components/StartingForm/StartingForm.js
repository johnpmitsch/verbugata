import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
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
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <NumberOfVerbs amount={amount} setAmount={setAmount} />
            <Options includeTu={includeTu} toggleIncludeTu={toggleIncludeTu} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <PickTenses setSelectedTenses={setSelectedTenses} />
      </Grid>
    </React.Fragment>
  );
}
