import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Container from "@mui/material/Container";
import Typograph from "@mui/material/Typography";
import { useState } from "react";
import api from "../axios/axios"

function Cadastro() {
  const [user, setUser] = useState({
    cpf:"",
    email: "",
    password: "",
    data_nascimento: "2000-01-01",
    name: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    cadastro();
  };

  async function cadastro() {
    await api.postCadastro(user).then(
      (response) => {
        alert(response.data.message);
      },
      (error) => {
        console.log(error);
        alert(error.response.data.error);
      }
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      />
        <Avatar
          sx={{
            margin: 1,
            backgroundColor: "#964b00",
          }}
        >
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typograph component="h1" variant="h5">
          Cadastro Sistema VIO
        </Typograph>

        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>

        <TextField
            required
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            margin="normal"
            type="number"
            value={user.cpf}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            margin="normal"
            type="email"
            value={user.email}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            margin="normal"
            type="password"
            value={user.password}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="data_nascimento"
            name="data_nascimento"
            label="Data de Nascimento"
            margin="normal"
            type="date"
            value={user.data_nascimento}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            margin="normal"
            value={user.name}
            onChange={onChange}
          />
          <Button
            sx={{ mt: 3, mb: 2, backgroundColor: "#964b00" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Cadastrar
          </Button>
        </Box>
    </Container>
  );
}

export default Cadastro;
