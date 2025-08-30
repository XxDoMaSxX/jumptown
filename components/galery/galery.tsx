import {
    Box,
    Image,
    SimpleGrid,
    Text,
    VStack,
} from '@chakra-ui/react'

import React from 'react'

import { Section, SectionProps, SectionTitle } from '#components/section'

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

// Pašaliname title/description iš perduodamų į Section
export interface GalleryProps extends Omit<SectionProps, 'title' | 'description'> {
  title?: React.ReactNode
  description?: React.ReactNode
  images: GalleryImage[]
}

export const Gallery: React.FC<GalleryProps> = ({ title, description, images, ...rest }) => {
  return (
    <Section id="gallery" pos="relative" {...rest}>
      <Box zIndex="2" pos="relative">
        <SectionTitle title={title} description={description} />

        <SimpleGrid columns={[1, 2, 3]} spacing={6} mt={6}>
          {images.map((img, i) => (
            <VStack key={i} spacing={2} align="start">
              <Image
                src={img.src}
                alt={img.alt}
                borderRadius="md"
                w="100%"
                objectFit="cover"
                shadow="md"
              />
              {img.caption && (
                <Text fontSize="sm" color="muted">
                  {img.caption}
                </Text>
              )}
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </Section>
  )
}
