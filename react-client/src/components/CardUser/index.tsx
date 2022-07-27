import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}
type Props = {
  person: User;
};

const CardUser: React.FC<Props> = ({ person }) => {
  return (
    <Card
      sx={{
        width: { sx: "100%", md: 210 },
        backgroundColor: "#F5F5F5",
      }}
    >
      <CardContent
        sx={{
          alignItems: { xs: "center", md: "center" },
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
        }}
      >
        <Avatar
          sx={{
            width: { xs: 50, md: 100 },
            height: { xs: 50, md: 100 },
          }}
          src={person.avatar}
        ></Avatar>
        <Container
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            gutterBottom
            variant={"h5"}
            component="div"
            sx={{
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            {person.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.phone}
          </Typography>
        </Container>
      </CardContent>
    </Card>
  );
};

export default CardUser;
