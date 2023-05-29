import { Progress, Grid } from "@nextui-org/react";

export default function ProgressBar() {
  return (
    <Grid.Container xs={12} sm={6} gap={2}>
      <Grid>
        <h6>Orphan Camp</h6>
        <Progress value={92} shadow color="primary" status="primary" />
      </Grid>
      <Grid>
        <h6>Youth Camp</h6>
        <Progress value={88} shadow color="secondary" status="secondary" />
      </Grid>
      <Grid>
        <h6>Scholarship Fund</h6>
        <Progress value={63} shadow color="success" status="success" />
      </Grid>
    </Grid.Container>
  );
}