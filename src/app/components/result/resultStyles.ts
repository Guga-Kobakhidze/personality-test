import { SxProps } from "@mui/material";

export const GifText: SxProps = {
  textAlign: "center",
  fontSize: "clamp(14px, 3vw, 18px)",
  lineHeight: "28px",
  padding: "15px 0",

  "@media (max-width: 400px)": {
    padding: "5px 0",
    lineHeight: "20px",
  },
};

export const resultMainContainer: SxProps = {
  marginTop: "1.5rem",
  border: "2px solid black",
  borderRadius: "6px",
};

export const resultTypographyStyles: SxProps = {
  maxWidth: "1000px",
  color: "#FF9D9C",
  fontSize: "clamp(28px, 4vw, 70px)",
  lineHeight: "75px",
  fontWeight: "bold",
  width: "100%",
  textAlign: "center",
  letterSpacing: "1px",
  paddingBottom: "1.5rem",

  "@media screen and (max-width: 1023px)": {
    lineHeight: "50px",
    paddingBottom: "1rem",
  },

  "@media screen and (max-width: 580px)": {
    borderRadius: 0,
    paddingBottom: "0.6rem",
  },
};

export const resultTextStyles: SxProps = {
  maxWidth: "800px",
  color: "black",
  fontSize: "1.2rem",
  marginBottom: "1rem",

  "@media (max-width:600px)": {
    fontSize: "0.8rem",
    marginBottom: "0.5rem",
  },
};

export const resultBoxStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  color: "black",
  flexDirection: "column",
  backgroundColor: "white",
  borderRadius: "0.5rem",

  "@media screen and (max-width: 580px)": {
    borderRadius: 0,
    padding: "5px",
  },
};

export const BoxContainerStyles: SxProps = {
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  color: "white",
};

export const BoxedContent: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  padding: "0 1.5rem",
  flexDirection: "column",

  div: {
    img: {
      width: "100%",
      height: "100%",
      borderRadius: "0.5rem",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
  },

  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    gap: "1rem",
  },
};

export const buttons: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",

  "@media screen and (max-width: 760px)": {
    flexDirection: "column",

    a: {
      width: "100%",
    },

    width: "100%",
    padding: "0.5rem",

    div: {
      width: "100%",
      button: {
        width: "100%",
      },
    },
  },
};
