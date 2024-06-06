import { Container, Text, VStack, Button, Heading, Image, HStack, IconButton, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImage="url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleGNpdGluZyUyMGJhY2tncm91bmR8ZW58MHx8fHwxNjg2MDYwNzU1&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" bgPosition="center" position="relative">
      <Box position="absolute" top="0" left="0" width="100%" height="100%" bgGradient="linear(to-r, rgba(0,0,0,0.7), rgba(0,0,0,0.1))" zIndex="1"></Box>
      <VStack spacing={6} zIndex="2">
        <Image src="https://images.unsplash.com/photo-1470165473874-023613603389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b2xmJTIwbG9nb3xlbnwwfHx8fDE3MTc2MjUzMTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="GoWolf Logo" boxSize="100px" />
        <Heading as="h1" size="2xl" as={motion.div} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to GoWolf
        </Heading>
        <Text fontSize="lg" textAlign="center" as={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          Empowering your business with cutting-edge technology solutions. Join us and unleash your potential.
        </Text>
        <Button colorScheme="pink" size="lg" onClick={() => (window.location.href = "/products")} as={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Get Started
        </Button>
        <HStack spacing={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
        </HStack>
      </VStack>
      <Box mt={10} p={5} bg="whiteAlpha.800" borderRadius="md" zIndex="2">
        <Heading as="h2" size="lg" mb={4}>
          Why Choose GoWolf?
        </Heading>
        <Text fontSize="md" textAlign="center">
          We provide innovative solutions to help your business thrive in the digital age. Our team of experts is dedicated to delivering top-notch services and support.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
