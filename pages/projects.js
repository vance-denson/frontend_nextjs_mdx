import { Typography, Grid, Button, Box, Checkbox } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import { sizing } from "@material-ui/system";
import { TextField } from "@material-ui/core";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>VND</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-sm.ico" type="image/x-icon" />
      </Head>
      <TextField></TextField>
      <Checkbox></Checkbox>
      <Grid direction="column" align="center">
        <Typography variant="h4" color="textPrimary">
          Projects
        </Typography>
        <Link href="/blog">
          <Button variant="contained" color="Primary">
            View My Blog
          </Button>
        </Link>
      </Grid>
      <Box
        height="500px"
        width="200px"
        bgcolor="warning.main"
        color="inherit"
        align="center"
        alignSelf="center"
      >
        <Typography variant="h5">warning.main</Typography>
      </Box>
    </div>
  );
}
