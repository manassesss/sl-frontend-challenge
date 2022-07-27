import CardUser from "../../components/CardUser";
import NavBar from "../../components/NavBar";
import {
  Grid,
  Stack,
  InputBase,
  Paper,
  IconButton,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { usersList } from "../../services/users";
import React from "react";
import { Grid3x3Outlined } from "@mui/icons-material";

export default function Home() {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <NavBar />
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          backgroundColor: "#F5F5F5",
          display: "flex",
          alignItems: "center",
          width: { xs: "90%", md: "70%" },
          marginTop: 5,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Pesquisar por usuário"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <Container
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          padding: 5,
        }}
      >
        <Stack spacing={2}>
          {usersList.map((item, index) => (
            <CardUser person={item} />
          ))}
        </Stack>
      </Container>

      <Grid
        container
        sx={{
          display: { xs: "none", md: "flex" },
          width: "70%",
          padding: 5,
        }}
        justifyContent="center"
        direction="row"
        spacing={3}
      >
        {usersList.map((item, index) => (
          <Grid
            container
            item
            xs={12}
            sm={4}
            md={4}
            key={index}
            justifyContent="center"
          >
            <CardUser person={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
