import CardUser from "../../components/CardUser";
import NavBar from "../../components/NavBar";
import {
  Box,
  Grid,
  List,
  Typography,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { usersList } from "../../services/users";
import React from "react";

export default function Home() {
  return (
    <>
      <NavBar />
      <Grid
        sx={{ display: { xs: "none", md: "flex" } }}
        container
        justifyContent="center"
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 1, md: 12 }}
      >
        {usersList.map((item, index) => (
          <Grid container item xs={1} sm={4} md={4} key={index}>
            <CardUser person={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
