'use client'

import { ButtonLink } from '#components/button-link/button-link'
import { Features } from '#components/features'
import { Hero } from '#components/hero'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Em } from '#components/typography'
import {
  Box, ButtonGroup, Container,
  Stack
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import Image from 'next/image'
import { FiGrid, FiSliders, FiSmile } from 'react-icons/fi'

export default function HomeClient() {
  return (
    <Box>
      {/* Hero */}
      <Box position="relative" overflow="hidden">
        <Container maxW="container.xl" pt={{ base: 40, lg: 40 }} pb="20">
          <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
            <Box flex="1">
              <Hero
                id="home"
                justifyContent="flex-start"
                px="0"
                title={
                  <FallInPlace>
                    Batutų miestas
                    <Br /> Jūsų nepamirštamai šventei
                  </FallInPlace>
                }
                description={
                  <FallInPlace delay={0.4} fontWeight="medium">
                    <Em>
                      Siūlome batutų parko bei atskirų batutų nuomą
                      <Br /> Panevėžyje su pristatymu bei montavimu visoje Lietuvoje.
                    </Em>
                    <Br /> Gimtadieniams, įmonių renginiams ir įvairioms šventėms.
                    <Br /> Linksmybės garantuotos tiek mažiems, tiek dideliems.
                  </FallInPlace>
                }
              >
                <FallInPlace delay={0.8}>
                  <ButtonGroup spacing={4} alignItems="center" pt={{ base: 5 }}>
                    <ButtonLink colorScheme="primary" size="lg" href="/batutai">
                      Rinktis batutus
                    </ButtonLink>
                  </ButtonGroup>
                </FallInPlace>
              </Hero>
            </Box>

            <Box flex="1">
              <FallInPlace delay={1}>
                <Image
                  src="/static/screenshots/list.JPG"
                  alt="Batutų parkas"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
                  priority
                />
              </FallInPlace>
            </Box>
          </Stack>
        </Container>

        <Features
          id="benefits"
          columns={{ base: 1, md: 2, lg: 3 }}
          iconSize={4}
          innerWidth="container.xl"
          pt="0"
          features={[
            {
              title: 'Vienas didžiausių batutų parkų Europoje',
              icon: FiSmile,
              description:
                'Mūsų mobilus batutų parkas užima net 700 m² – tai vienas didžiausių pripučiamų atrakcionų visoje Europoje. Įspūdžiai garantuoti tiek vaikams, tiek suaugusiems.',
              iconPosition: 'left',
              delay: 0.6,
            },
            {
              title: '9 skirtingi batutai vienoje vietoje',
              icon: FiSliders,
              description:
                'Galite pasirinkti atskirus batutus arba komplektuoti visą parką pagal renginio dydį. Įvairovė užtikrina, kad kiekvienas atras sau smagiausią pramogą.',
              iconPosition: 'left',
              delay: 0.8,
            },
            {
              title: 'Pristatymas visoje Lietuvoje',
              icon: FiGrid,
              description: 'Nesvarbu, kur esate – atvešime ir pastatysime batutus visoje Lietuvoje.',
              iconPosition: 'left',
              delay: 1,
            },
          ]}
          reveal={FallInPlace}
        />
      </Box>
    </Box>
  )
}
