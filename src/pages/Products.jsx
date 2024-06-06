import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

const products = [
  { title: "Product 1", description: "Description for product 1" },
  { title: "Product 2", description: "Description for product 2" },
  { title: "Product 3", description: "Description for product 3" },
  { title: "Product 4", description: "Description for product 4" },
  { title: "Product 5", description: "Description for product 5" },
  { title: "Product 6", description: "Description for product 6" },
  { title: "Product 7", description: "Description for product 7" },
  { title: "Product 8", description: "Description for product 8" },
];

function Products() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Products
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        {products.map((product, index) => (
          <Box key={index} p={5} shadow="md" borderRadius="20px">
            <Heading fontSize="xl">{product.title}</Heading>
            <Text mt={4}>{product.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Products;
