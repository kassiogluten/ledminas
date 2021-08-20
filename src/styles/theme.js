import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  useSystemColorMode: false,
  fonts: {
    heading: "CaviarDreams",
    body: "CaviarDreams",
  },
  colors: {
    laranja: "#F35822",
    amarelo: "#FA9D1C",
    bordo: "#5C1331",
    texto: "#6F5551",
    cinza: "#F9F8F8",
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          //textDecoration: "underline",
        },
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: 14,
        color: "texto",
        fontWeight: 700,
        pt: 4,
        lineHeight: 4,
      },
    },
  },
  styles: {
    global: {
      svg: {
        display: "inline",
      },
      a: {
        _hover: {
          //textDecoration: "underline",
        },
      },
      body: {
        /* bg: "var(--white)",
        color: "var(--white)",
        lineHeight: "inherit", */
      },
    },
  },
});
