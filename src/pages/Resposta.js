import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Show from "../components/Show";

function Answer() {
  const { id } = useParams();

  return (
    <>
      <Show id={id}></Show>
    </>
  );
}

export default Answer;
