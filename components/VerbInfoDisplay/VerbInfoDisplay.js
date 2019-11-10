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
  const notTheFirstCard = currentVerbIndex > 0;
  const thereAreMoreCards = currentVerbIndex + 1 < verbList.length;
  return (
    <React.Fragment>
      <Grid container justify={"center"} alignItems={"center"} spacing={5}>
        <Grid item xs={12} md={4}>
          {notTheFirstCard && (
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
          {thereAreMoreCards && (
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
            disabled={!notTheFirstCard}
            onClick={() => getPreviousVerb()}
          >
            Previous Verb
          </Button>
        </Grid>
        <Grid item md={3} xs={6}>
          <Button
            variant="contained"
            color="primary"
            disabled={!thereAreMoreCards}
            onClick={() => getNextVerb()}
          >
            Next Verb
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
