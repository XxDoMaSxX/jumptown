'use client'

import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react'

export default function ContactPage() {
  return (
    <Container maxW="container.md" py={{ base: 20, md: 28 }}>
      <Stack spacing={12}>
        {/* Kontaktinė informacija */}
        <VStack spacing={4} align="start">
          <Heading size="xl">Susisiekite su mumis</Heading>
          <Text>
            Jei turite klausimų dėl batutų parko ar norite užsisakyti, susisiekite su mumis telefonu arba el. paštu.
          </Text>
          <HStack spacing={6}>
            <Box>
              <Text fontWeight="bold">Telefonas:</Text>
              <Link href="tel:+37061119833">+370 61119833</Link>
            </Box>
            <Box>
              <Text fontWeight="bold">El. paštas:</Text>
              <Link href="mailto:dragunasdomas@gmail.com">dragunasdomas@gmail.com</Link>
            </Box>
          </HStack>
        </VStack>

        {/* Kontaktinė forma */}
        <Box
          as="form"
          p={8}
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          rounded="xl"
          shadow="sm"
        >
          <VStack spacing={6} align="stretch">
            <FormControl isRequired>
              <FormLabel>Vardas</FormLabel>
              <Input type="text" name="name" placeholder="Įveskite savo vardą" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>El. paštas</FormLabel>
              <Input type="email" name="email" placeholder="Įveskite savo el. paštą" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Žinutė</FormLabel>
              <Textarea name="message" placeholder="Įveskite savo žinutę. Jeigu norite rezervuoti - neužmirškite nurodyti batuto pavadinimo bei datos." rows={5} />
            </FormControl>

            <Button colorScheme="purple" size="lg" type="submit" alignSelf="flex-start">
              Siųsti žinutę
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Container>
  )
}
