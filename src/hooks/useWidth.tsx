import { useContext, useEffect, useState } from "react";
import { WidthContext } from "../App";

// Using context instead of state to avoid rerendering multiple times when
// using this hook multiple times in a single component

export default function useWidth() {
  const width = useContext(WidthContext);
  return width;
}
