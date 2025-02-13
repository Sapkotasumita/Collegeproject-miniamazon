import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Test = () => {
  let [count, setCount] = useState(1);

  // useEffect
  // handles side effect
  // react component life cycle :mounting,updating,unmounting
  // syntax
  // useEffect(effect,dependency)
  return (
    <Box>
      <Typography variant="h1">{count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          let newCount = count + 1;
          setCount(newCount);
        }}
      >
        increase count
      </Button>
    </Box>
  );
};

export default Test;
