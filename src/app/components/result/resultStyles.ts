import { SxProps } from "@mui/system";
import { keyframes } from "@emotion/react";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInStyles = {
  animation: `${fadeInAnimation} 3s ease-in-out`,
};

export const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-4px);
  }
  60% {
    transform: translateY(-2px);
  }
`;

export const bounceStyles = {
  animation: `${bounceAnimation} 4s ease-in-out infinite`,
};

export const resultTypographyStyles: SxProps = {
  color: "white",
  fontSize: "40px",
  backgroundColor: "#ab7df4",
  width: "100%",
  textAlign: "center",
  letterSpacing: "2px",
  borderRadius: "0.5rem",

  "@media screen and (max-width: 580px)": {
    borderRadius: 0,
  },
};

export const resultTextStyles: SxProps = {
  color: "black",
  fontSize: "1.2rem",
};

export const resultBoxStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",

  "@media screen and (max-width: 580px)": {
    borderRadius: 0,
  },
};

export const resultLinkContainerStyles: SxProps = {
  width: "100%",
  margin: "1rem 0",
  ...bounceStyles,
  backgroundColor: "#ab7df4",
  borderRadius: "0.5rem",
  textAlign: "center",

  "&:hover": {
    animation: "none",
  },
};

export const BoxContainerStyles: SxProps = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...fadeInStyles,
};

export const BoxedContent: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  padding: "0 1.5rem",

  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
  },
};
