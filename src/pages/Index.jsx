import { Container, Text, VStack, Button, Heading, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Image src="https://images.unsplash.com/photo-1470165473874-023613603389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b2xmJTIwbG9nb3xlbnwwfHx8fDE3MTc2MjUzMTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="GoWolf Logo" boxSize="100px" />
        <Heading as="h1" size="2xl">
          Welcome to GoWolf
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Empowering your business with cutting-edge technology solutions. Join us and unleash your potential.
        </Text>
        <Button colorScheme="teal" size="lg" onClick={() => (window.location.href = "/products")}>
          Get Started
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
