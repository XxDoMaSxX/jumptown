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
import { useState } from 'react'

const CONTACT_EMAIL = 'dragunasdomas@gmail.com'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const message = String(form.get('message') || '')

    const subject = encodeURIComponent(`JumpTown užklausa — ${name || email}`)
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Container maxW="container.md" pt={{ base: 32, md: 40 }} pb={{ base: 20, md: 28 }}>
      <Stack spacing={12}>
        {/* Kontaktinė informacija */}
        <VStack spacing={4} align="start">
          <Heading size="xl">Susisiekite su mumis</Heading>
          <Text color="gray.600">
            Turite klausimų dėl batutų parko ar norite rezervuoti? Parašykite žemiau
            arba susisiekite telefonu ar el. paštu — atsakome operatyviai.
          </Text>
          <HStack spacing={10} pt={2} flexWrap="wrap">
            <Box>
              <Text fontWeight="bold" fontSize="sm" color="gray.500">
                Telefonas
              </Text>
              <Link href="tel:+37061119833" fontSize="lg" fontWeight="semibold">
                +370 611 19833
              </Link>
            </Box>
            <Box>
              <Text fontWeight="bold" fontSize="sm" color="gray.500">
                El. paštas
              </Text>
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                fontSize="lg"
                fontWeight="semibold"
              >
                {CONTACT_EMAIL}
              </Link>
            </Box>
          </HStack>
        </VStack>

        {/* Kontaktinė forma */}
        <Box
          as="form"
          onSubmit={handleSubmit}
          p={{ base: 6, md: 8 }}
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
              <Input
                type="email"
                name="email"
                placeholder="Įveskite savo el. paštą"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Žinutė</FormLabel>
              <Textarea
                name="message"
                placeholder="Įveskite savo žinutę. Jeigu norite rezervuoti – neužmirškite nurodyti batuto pavadinimo bei datos."
                rows={5}
              />
            </FormControl>

            <Button
              colorScheme="primary"
              size="lg"
              type="submit"
              alignSelf="flex-start"
            >
              Siųsti žinutę
            </Button>

            {sent && (
              <Text color="green.600" fontWeight="medium">
                Ačiū! Atsidarė jūsų el. pašto programa su paruošta žinute — tereikia
                paspausti „Siųsti“. Jei neatsidarė, parašykite tiesiai: {CONTACT_EMAIL}
              </Text>
            )}
          </VStack>
        </Box>
      </Stack>
    </Container>
  )
}
