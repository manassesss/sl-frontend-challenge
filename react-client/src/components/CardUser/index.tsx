import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function CardUser() {
  return (
    <Card
      sx={{
        maxWidth: 210,
        backgrounColor: "#F5F5F5",
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
          src="https://storage.googleapis.com/challenge-sigalei/vishwas.png"
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
            Vishwas Raman
          </Typography>
          <Typography variant="body2" color="text.secondary">
            vishwas@sigalei.io
          </Typography>
          <Typography variant="body2" color="text.secondary">
            (555) 555-5555
          </Typography>
        </Container>
      </CardContent>
    </Card>
  );
}
