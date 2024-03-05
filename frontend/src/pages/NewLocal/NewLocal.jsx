import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
import { useAuth } from "../../provider/AuthContext";
import firebaseApp from "../../../firebase";
import Header from "../../components/Menu";
import Footer from "../../components/Footer";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const NewLocal = () => {
    const { user } = useAuth();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        city: "",
        openingHours: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData?.title || !formData?.description || !formData?.openingHours) return alert("Preencha todos os campos do formulário!")
        try {
            const db = getFirestore(firebaseApp)
            const docRef = await addDoc(collection(db, "locais"), {
                ...formData,
                img: "https://picsum.photos/300/200", // TODO: Upload de fotos
                likes: 0,
                dislikes: 0,
                createdBy: user.uid,
                createdAt: new Date,
            })

            alert("Estabelecimento criado com sucesso!")
            setTimeout(() => {
                navigate(`/local/${docRef?.id}`)
            }, 1500)
        } catch (error) {
            console.error("Erro ao criar estabelecimento:", error);
        }
    };

    return (
        <>
            <Header actualPage="/new-local" />
            <Box maxW="xl" mx="auto" mt={2} p={8}>
                <Text fontSize="4xl" fontWeight="bold" mb={8}>Cadastro do novo local!</Text>
                <form onSubmit={handleSubmit}>
                    <FormControl id="title" mb={4}>
                        <FormLabel>Nome do local</FormLabel>
                        <Input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Nome"
                            required
                        />
                    </FormControl>
                    <FormControl id="description" mb={4}>
                        <FormLabel>Descrição</FormLabel>
                        <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Descrição.."
                            required
                        />
                    </FormControl>
                    <FormControl id="city" mb={4}>
                        <FormLabel>Localização - Cidade e Estado</FormLabel>
                        <Textarea
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Ex: São Paulo - SP"
                            required
                        />

                    </FormControl>
                    <FormControl id="openingHours" mb={4}>
                        <FormLabel>Dias de funcionamento</FormLabel>
                        <Input
                            type="text"
                            name="openingHours"
                            value={formData.openingHours}
                            onChange={handleInputChange}
                            placeholder="Ex: Segunda - sexta.."
                            required
                        />
                    </FormControl>
                    <Button type="submit" color="white" backgroundColor="gray.800" _hover={{ backgroundColor: "gray.600" }}>
                        Criar Estabelecimento
                    </Button>
                </form>
            </Box>
            <Footer />
        </>
    );
};

export default NewLocal;
