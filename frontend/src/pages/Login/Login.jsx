import { Box, Button, FormControl, FormLabel, Heading, Input, Link, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // Aqui você pode adicionar a lógica de autenticação
        console.log("Email:", email);
        console.log("Password:", password);
    };

    const handleRegisterPage = () => {
        // Lógica para lidar cadastrar
        navigate("/register");
    };

    return (
        <Box
            p={8}
            maxWidth="400px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            margin="auto"
            mt={20}
        >
            <Box textAlign="center">
                <Heading>Login</Heading>
                <Text mt={2} color="gray.500">
                    Entre com seu e-mail e senha
                </Text>
            </Box>
            <Box mt={4}>
                <form>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    console.log(e.target.value)
                                }}
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
                            />
                        </FormControl>
                        <Button
                            bg="blue.400"
                            color="white"
                            _hover={{ bg: "blue.500" }}
                            onClick={handleLogin}

                        >
                            Entrar
                        </Button>
                        <Text textAlign="center">
                            <Link color="blue.400"
                                onClick={handleRegisterPage}
                            >
                                Cadastrar
                            </Link>
                        </Text>
                    </Stack>
                </form>
            </Box>
        </Box>
    )
}
