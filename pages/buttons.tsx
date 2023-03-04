import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ButtonsModule from "../styles/Buttons.module.css";

export default function Home() {
  const [formula, setFormula] = useState("");

  const addnumber = (number: string) => {
    setFormula(formula + number);
  };

  const addoperator = (operator: string) => {
    if (
      formula.slice(-1) === "+" ||
      formula.slice(-1) === "-" ||
      formula.slice(-1) === "*" ||
      formula.slice(-1) === "/"
    ) {
      setFormula(formula.slice(0, -1) + operator);
      return;
    }
    setFormula(formula + operator);
  };

  const clear = () => {
    setFormula("");
  };

  const backspace = () => {
    setFormula(formula.slice(0, -1));
  };

  const adddecimalpoint = () => {
    if (formula.slice(-1) !== ".") {
      setFormula(formula + ".");
    }
  };

  const evaluate = () => {
    let evaluatedformula;

    try {
      evaluatedformula = eval(formula).toString();
    } catch (e) {
      alert(`${formula} is not a valid formula`);
      return;
    }
    setFormula(evaluatedformula);
  };

  return (
    <>
      <Box>{formula ? formula : "please input!!"}</Box>
      <Box>
        <Button variant="contained" onClick={clear}>
          C
        </Button>
        <Button variant="contained">%</Button>
        <Button variant="contained" onClick={backspace}>
          <ArrowBackIcon />
        </Button>
        <Button variant="contained" onClick={() => addoperator("/")}>
          /
        </Button>
      </Box>
      <Box>
        <Button variant="contained" onClick={() => addnumber("7")}>
          7
        </Button>
        <Button variant="contained" onClick={() => addnumber("8")}>
          8
        </Button>
        <Button variant="contained" onClick={() => addnumber("9")}>
          9
        </Button>
        <Button variant="contained" onClick={() => addoperator("*")}>
          *
        </Button>
      </Box>
      <Box>
        <Button variant="contained" onClick={() => addnumber("4")}>
          4
        </Button>
        <Button variant="contained" onClick={() => addnumber("5")}>
          5
        </Button>
        <Button variant="contained" onClick={() => addnumber("6")}>
          6
        </Button>
        <Button variant="contained" onClick={() => addoperator("-")}>
          -
        </Button>
      </Box>
      <Box>
        <Button variant="contained" onClick={() => addnumber("1")}>
          1
        </Button>
        <Button variant="contained" onClick={() => addnumber("2")}>
          2
        </Button>
        <Button variant="contained" onClick={() => addnumber("3")}>
          3
        </Button>
        <Button variant="contained" onClick={() => addoperator("+")}>
          +
        </Button>
      </Box>
      <Box>
        <Button variant="contained" onClick={() => addnumber("00")}>
          00
        </Button>
        <Button variant="contained" onClick={() => addnumber("0")}>
          0
        </Button>
        <Button variant="contained" onClick={() => adddecimalpoint()}>
          .
        </Button>
        <Button variant="contained" onClick={() => evaluate()} className={ButtonsModule.eval}>
          =
        </Button>
      </Box>
    </>
  );
}
