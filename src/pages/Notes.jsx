import { useCollection } from "../hooks/useCollection";
import { Grid, Container } from "@mui/material";
import { Masonry } from "@mui/lab";
import Note from "../components/Note";
import SkeletonNote from "../components/SkeletonNote";
import { useFirestore } from "../hooks/useFirestore";
import { toast } from "react-toastify";

export default function Notes() {
  const { documents: notes, isPending: loading } = useCollection("notes");
  const { deleteDocument: deleteNote, response } = useFirestore("notes");

  const handleDelete = (id) => {
    deleteNote(id);

    if (response.success) {
      toast.success("This not was deleted");
    }
  };

  const breakpoints = {
    xs: 1,
    md: 2,
    lg: 3,
    xl: 4,
  };

  return (
    <Container>
      <Masonry spacing={2} columns={breakpoints}>
        {notes &&
          notes.map((note) => (
            <div key={note.id}>
              <Note note={note} handleDelete={handleDelete} />
            </div>
          ))}
        {!notes &&
          Array(9)
            .fill()
            .map((_, i) => (
              <div key={i}>
                <SkeletonNote />
              </div>
            ))}
      </Masonry>
    </Container>
  );
}
