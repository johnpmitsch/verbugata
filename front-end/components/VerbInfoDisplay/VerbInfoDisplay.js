import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import VerbCard from "../VerbCard";

export default function VerbInfoDisplay({
  currentVerbIndex,
  currentVerb,
  verbList,
  verbDetails,
  getNextVerb,
  getPreviousVerb
}) {
  return (
    <React.Fragment>
      <Grid container justify={"center"} alignItems={"center"} spacing={5}>
        <Grid item xs={12} md={4}>
          {currentVerbIndex > 0 && (
            <Hidden smDown>
              <VerbCard
                verbName={verbList[currentVerbIndex - 1]}
                title={"Previous Verb"}
              />
            </Hidden>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {verbDetails && (
            <VerbCard
              verbName={currentVerb}
              title={"Current Verb"}
              regular={verbDetails.regular}
              active
            />
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {currentVerbIndex + 1 < verbList.length && (
            <Hidden smDown>
              <VerbCard
                verbName={verbList[currentVerbIndex + 1]}
                title={"Next Verb"}
              />
            </Hidden>
          )}
        </Grid>
        <Grid item md={3} xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => getPreviousVerb()}
          >
            Previous Verb
          </Button>
        </Grid>
        <Grid item md={3} xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => getNextVerb()}
          >
            Next Verb
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
