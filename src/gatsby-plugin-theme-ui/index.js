export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 300,
    body: 400,
    heading: 700,
    bold: 700,
  },
  radii: [2, 4, 8],
  colors: {
    text: "#222",
    background: "#FFF",
    border: "#DDD",
    primary: "#eb7b15",
    secondary: "#e4ab15",
  },
  button: {
    link: {
      textDecoration: `none`,
      fontSize: `2`,
      px: `3`,
      py: `2`,
      transition: `0.3s all`,
      borderRadius: `1`,
      "&:hover": {
        backgroundColor: `border`,
      },
    },
  },
}
