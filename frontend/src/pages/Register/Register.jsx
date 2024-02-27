import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

export const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      p={8}
      maxWidth="450px"
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      margin="auto"
      mt={20}
    >
      <Box textAlign="center">
        <Heading>Cadastro</Heading>
      </Box>
      <Box mt={4}>
        <form>
          <Stack spacing={4}>
            <FormControl id="nome">
              <FormLabel>Nome</FormLabel>
              <Input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                min={6}
              />
            </FormControl>
            <Button
              bg="blue.400"
              color="white"
              _hover={{ bg: "blue.500" }}
            //   onClick={handleSignup}
            >
              Cadastrar
            </Button>
            {/* {error?.length > 1 && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>{error}</AlertTitle>
              </Alert>
            )} */}
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
