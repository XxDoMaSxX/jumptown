// app/(marketing)/batutai/page.tsx
import { AspectRatio, Badge, Box, Button, Container, GridItem, Heading, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";



type Inflatable = {
  id: string
  title: string
  description: string
  priceEur: number
  image: string   // path under /public
  tag?: string    // e.g., "Nauja", "TOP"
}
const inflatables: Inflatable[] = [
  {
    id: "labirintas-01",
    title: "Labirinto zona",
    description:
      "Unikalus ketvirtainės formos labirintas su daugybe stulpelių ir posūkių. Rekomenduojama komplektuoti su kitais batutais.",
    priceEur: 90,
      image: "/static/images/batutai/1/01-labirintas.jpeg",
  },
  {
    id: "palmiu-ciuozykla",
    title: "Palmių čiuožykla (dviguba)",
    description:
    "Dviguba čiuožykla su spalvingomis palmių dekoracijomis viršuje. Rekomenduojama komplektuoti su kitais batutais.",    
    priceEur: 120,
    image: "/static/images/batutai/2/02-palmes.jpeg",
  },
  {
    id: "mini-kliuciu-parkas",
    title: "Mini kliūčių parkas",
    description:
      "Kompaktiškas ruožas su tuneliais, barjerais ir nedidele čiuožykla. Rekomenduojama komplektuoti su kitais batutais.",
    priceEur: 120,
    image: "/static/images/batutai/3/03-mini-parkas.jpeg",
  },
  {
    id: "ziedu-arena",
    title: "Žiedų arena",
    description:
      "Kliūčių zona su pripučiamais žiedais ir vingiais. Rekomenduojama komplektuoti su kitais batutais.",
    priceEur: 90,
    image: "/static/images/batutai/4/04-ziedu-arena.jpeg",
  },
  {
    id: "didzioji-trasа",
    title: "Didžioji kliūčių trasa",
    description:
      "Ilgas ruožas su kopimu, tinklais ir čiuožykla.",
    priceEur: 130,
    image: "/static/images/batutai/5/05-didzioji-trasa.jpeg",
  },
  {
    id: "triguba-ciuozykla",
    title: "Triguba čiuožykla",
    description:
      "Du ekstremalūs 8 metrų auksčio paraleliniai nusileidimo takai. ",
    priceEur: 180,
    image: "/static/images/batutai/6/06-triguba.jpeg",
  },
  {
    id: "aukstoji-ciuozykla",
    title: "Aukštoji čiuožykla",
    description:
      "Aukšta, 8 metru auksčio tiesi čiuožykla su plačia nusileidimo zona – greitis ir adrenalinas drąsiausiems.",
    priceEur: 180,
    image: "/static/images/batutai/7/07-aukstoji.jpeg",
  },
  {
    id: "pilies-ciuozykla",
    title: "Pilies čiuožykla",
    description:
      "Įspūdinga pilies tematikos konstrukcija su dviem nusileidimais – tikras vizualinis akcentas bet kuriam renginiui.",
    priceEur: 150,
    image: "/static/images/batutai/8/08-pilis.jpeg",
  },
  {
    id: "bangu-ruozas",
    title: "Bangų trasa",
    description:
      "Bangų formos kliūtys ir cilindrai – balanso, ištvermės ir juoko pilna atrakcija visiems dalyviams.",
    priceEur: 140,
    image: "/static/images/batutai/9/09-bangu-trasa.jpeg",
  },
]



function formatPrice(v: number) {
  return new Intl.NumberFormat("lt-LT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(v)
}

function InflatableCard({ item }: { item: Inflatable }) {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="blackAlpha.100"
      rounded="xl"
      overflow="hidden"
      shadow="sm"
      transition="all .2s ease"
      _hover={{ shadow: "md", transform: "translateY(-2px)" }}
      h="100%"
    >
      <AspectRatio ratio={4/3} w="100%" bg="white" rounded="lg">
        <Box position="relative" w="100%" h="100%">
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: "contain", objectPosition: "center", padding: "12px" }}
          />
        </Box>
</AspectRatio>


      <Stack p={5} spacing={3}>
        <HStack justify="space-between" align="start">
          <Heading as="h3" fontSize="xl">{item.title}</Heading>
          {item.tag && <Badge colorScheme="purple" rounded="md">{item.tag}</Badge>}
        </HStack>

        <Text color="gray.600">{item.description}</Text>

        <HStack justify="space-between" pt={2}>
          <Text fontWeight="semibold">{formatPrice(item.priceEur)} / dienai</Text>
          <Button as="a" href={`/kontaktai`} colorScheme="purple" size="sm">
            Rezervuoti
          </Button>
        </HStack>
      </Stack>
    </Box>
  )
}

export default function InflatablesPage() {
 return (
    <Container maxW="container.xl" pt={{ base: 40, lg: 40 }}>
      <Stack spacing={6} mb={4}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>Batutų nuoma Panevėžyje su pristatymu  visoje Lietuvoje</Heading>
        <Text color="gray.600">
          Išsinuomokite visą batutų parką, atskirą batuto parko batutą arba susikomplektuokite norimą batutų parką.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
        {/* Pilno pločio promo korta */}
        <GridItem colSpan={{ base: 1, sm: 2, lg: 3 }}>
          <FullParkPromo />
        </GridItem>

        {/* Likusios kortelės */}
        {inflatables.map((it) => (
          <InflatableCard key={it.id} item={it} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
function FullParkPromo() {
  return (
    <Box
      rounded="2xl"
      border="1px solid"
      borderColor="blackAlpha.100"
      bgGradient="linear(to-r, purple.50, white)"
      p={{ base: 5, md: 8 }}
      overflow="hidden"
    >
      <Stack direction={{ base: "column", md: "row" }} align="center" spacing={{ base: 6, md: 8 }}>
        {/* Text */}
        <Box flex="1">
          <Heading as="h2" size="lg" mb={2}>
            Išsinuomokite visą batutų parką (700 m²)
          </Heading>
          <Text color="gray.700" mb={4}>
            Vienas didžiausių mobilių batutų parkų Europoje: <b>9 batutai</b>,
            saugi konstrukcija ir <b>pristatymas ir montavimas visoje Lietuvoje</b>.
          </Text>
          <HStack spacing={2} flexWrap="wrap" mb={5}>
            <Badge colorScheme="purple">700 m²</Badge>
            <Badge colorScheme="purple">9 batutai</Badge>
            <Badge colorScheme="purple">Pristatymas LT</Badge>
            <Badge colorScheme="purple">Montavimas</Badge>
          </HStack>
          <Button as="a" href="/kontaktai" colorScheme="purple" size="md">
            Gauti pasiūlymą
          </Button>
        </Box>

        {/* Image */}
        <Box flex="1" w="100%">
          <AspectRatio ratio={16 / 9} w="100%" rounded="xl" overflow="hidden">
            <Image
              src="/static/images/batutai/bendri/priekis.jpg" // <-- įsidėk savo banerio kelią
              alt="Batutų parkas 700 m²"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </AspectRatio>
        </Box>
      </Stack>
    </Box>
  );
}
