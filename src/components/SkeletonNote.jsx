import { DeleteOutline } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import { Skeleton } from "@mui/material";

const SkeletonNote = () => {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton>
            <DeleteOutline />
          </IconButton>
        }
        avatar={
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        }
        title={<Skeleton width="80%" />}
        subheader={<Skeleton width="30%" />}
      />

      <CardContent>
        <Typography variant="body2">
          <Skeleton height={90} />
        </Typography>
      </CardContent>
    </Card>
  );
};
export default SkeletonNote;
