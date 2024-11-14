import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    extraSmall: true;
  }
}
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Record<number, string>;
  }
  interface PaletteOptions {
    neutral: Record<number, string>;
  }
}

const theme = (outerTheme: Theme) =>
  createTheme({
    direction: "rtl",
    palette: {
      mode: outerTheme?.palette?.mode,
      primary: {
        main: "#417F56",
        light: "#90bd9f",
        dark: "#102016",
        contrastText: "#fff",
        100: "#396F4B",
        200: "#315F41",
        300: "#294F36",
        400: "#21402B",
        500: "#183020",
        600: "#102016",
        700: "#E5F2E9",
      },
      neutral: {
        1: "#FAFAFA",
        2: "#F6F6F6",
        3: "#EFEFEF",
        4: "#E1E1E1",
        5: "#D9D9D9",
        6: "#CBCBCB",
        7: "#ADADAD",
        8: "#909090",
        9: "#717171",
        10: "#505050",
        11: "#353535",
        12: "#212121",
        13: "#121212",
      },
      error: {
        main: "#ED2E2E",
        contrastText: "#FFF2F2",
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { size: "extraSmall" },
            style: {
              padding: "2px 8px", // اندازه پدینگ برای سایز extraSmall
              fontSize: "0.75rem", // سایز فونت برای extraSmall
              minWidth: "24px",
              height: "24px",
            },
          },
        ],
      },
    },
  });

export default theme;
