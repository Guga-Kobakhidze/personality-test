"use client";

import { BoxStyle } from "@/app/mainpage/HomePageStyle";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import BtnComponent from "../button/btn-component";
import Link from "next/link";

const Starter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <BoxStyle component="main">
      <Image
        src={"assets/whiteLogo.svg"}
        width={200}
        height={20}
        alt="skillwill logo"
      />
      <Typography variant="h5" component="h5" mt={3} mb={4}>
        გინდა ისწავლო რაც მართლა გამოგადგება, მაგრამ არ იცი საიდან დაიწყო? მაშინ
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Link href={"/test"}>
          <BtnComponent text="გააკეთე ტესტი" />
        </Link>
      </Box>
    </BoxStyle>
  );
};

export default Starter;
