// Complete the Index page component for a clothing brand ecommerce store
import { Box, Flex, Grid, Heading, Image, Text, Button, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Classic Tee",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1629956356549-63b8a150c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwdGVlfGVufDB8fHx8MTcxNDE1MjkxMXww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwwfHx8fDE3MTQxNTI5MTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Leather Boots",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1613673720017-56e42d90fee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHN8ZW58MHx8fHwxNzE0MTUyOTEyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl">
          Clothing Store
        </Heading>
        <HStack spacing={4}>
          <IconButton icon={<FaSearch />} aria-label="Search" />
          <IconButton icon={<FaHeart />} aria-label="Favorites" />
          <IconButton icon={<FaShoppingCart />} aria-label="Cart" />
        </HStack>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={5}>
              <VStack align="stretch" spacing={3}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text fontSize="lg">{product.price}</Text>
                <Button colorScheme="blue" rightIcon={<FaShoppingCart />}>
                  Add to Cart
                </Button>
              </VStack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
