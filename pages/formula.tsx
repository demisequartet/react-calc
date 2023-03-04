import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

let formula = "1+1";

export default function Home() {
  return (
    <>
      <Box>{formula}</Box>
    </>
  );
}
