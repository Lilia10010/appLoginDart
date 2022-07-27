import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
      },
      "*, *::before, *::after": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        padding: 0,
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
      "#root": {
        padding: 0,
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
