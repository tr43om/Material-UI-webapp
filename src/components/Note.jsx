import { DeleteOutline } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import { yellow, green, pink, blue } from "@mui/material/colors";

const Note = ({ note, handleDelete }) => {
  const classes = {
    avatar: {
      backgroundColor: () =>
        (note.category === "todos" && green[600]) ||
        (note.category === "reminders" && pink[600]) ||
        (note.category === "money" && yellow[700]) ||
        blue[500],
    },
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={note ? note.title : "ACHKO"}
        subheader={note ? note.category : "ACHKO"}
      />
      <CardContent>
        <Typography variant="body2">{note ? note.details : "ACHKO"}</Typography>
      </CardContent>
    </Card>
  );
};
export default Note;
