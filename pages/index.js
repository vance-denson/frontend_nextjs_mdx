import Head from "next/head";
import Image from "next/image";
import "@fontsource/roboto";
import {
  Button,
  Container,
  Grid,
  Flex,
  Typography,
  Paper,
} from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>VND</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-sm.ico" type="image/x-icon" />
      </Head>
      <Paper className={classes.root}>
        <Grid direction="column" align="center">
          <Typography variant="h4" color="textPrimary">
            Home
          </Typography>
          <Link href="/blog">
            <Button variant="contained" color="Primary">
              View My Blog
            </Button>
          </Link>
        </Grid>
      </Paper>
    </div>
  );
}
