import { Typography, Button, Container } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const btn = {
  fontSize: 60,
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "blue",
  },
};

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <Button
        // sx={btn}
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log("clicked")}
        endIcon={<KeyboardArrowRightOutlinedIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
