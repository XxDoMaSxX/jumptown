'use client'

import { Container, Heading, ListItem, Stack, UnorderedList } from '@chakra-ui/react'

export default function RulesPage() {
  return (
    <Container maxW="container.md" py={{ base: 20, md: 28 }}>
      <Stack spacing={8}>
        <Heading size="2xl">Batutų nuomos sąlygos ir taisyklės</Heading>

        <Stack spacing={4}>
          <Heading size="md">Kainos ir nuomos sąlygos</Heading>
          <UnorderedList spacing={2}>
            <ListItem>Kainos renginiams gali skirtis.</ListItem>
            <ListItem>Renginiams batutai nuomojami tik su mūsų priežiūra. Priežiūros kaina priklauso nuo renginio dydžio ir trukmės.</ListItem>
          </UnorderedList>
        </Stack>

        <Stack spacing={4}>
          <Heading size="md">Oro sąlygos</Heading>
          <UnorderedList spacing={2}>
            <ListItem>Lietaus ar stipraus vėjo (nuo 15–20 m/s) metu batutų statyti ir naudoti negalima – tokie užsakymai gali būti atšaukti arba perkelti.</ListItem>
            <ListItem>Jei užsakymas atšaukiamas dėl oro sąlygų, iš anksto sumokėtas avansas grąžinamas arba rezervacija perkeliama kitai dienai.</ListItem>
          </UnorderedList>
        </Stack>

        <Stack spacing={4}>
          <Heading size="md">Montavimas ir vieta</Heading>
          <UnorderedList spacing={2}>
            <ListItem>Batutai turi būti statomi ant lygios žolės. Ant smėlio ar žemės nestatome. Jei norite statyti ant trinkelių ar kito kieto pagrindo – būtina išankstinė informacija.</ListItem>
            <ListItem>Klientas turi pranešti, jei yra sudėtingas priėjimas (siauri vartai, laiptai, įkalnės). Nepateikus tokios informacijos pasiliekame teisę batuto nemontuoti.</ListItem>
            <ListItem>Batutai privalo būti pritvirtinti specialiais kaiščiais arba kitais saugiais būdais.</ListItem>
            <ListItem>Batutai turi būti statomi toliau nei 1,5 m nuo aštrių objektų, ugnies, vandens šaltinių.</ListItem>
          </UnorderedList>
        </Stack>

        <Stack spacing={4}>
          <Heading size="md">Elektros tiekimas</Heading>
          <UnorderedList spacing={2}>
            <ListItem>Batutai veikia tik nuolat įjungus oro pūstuvą į elektros tinklą.</ListItem>
            <ListItem>Atstumas iki elektros lizdo negali viršyti 30 m – prireikus naudokite prailgintuvą.</ListItem>
            <ListItem>Pūstuvas turi būti laikomas sausoje vietoje, vaikams prie jo artėti draudžiama.</ListItem>
          </UnorderedList>
        </Stack>

        <Stack spacing={4}>
          <Heading size="md">Naudojimo taisyklės</Heading>
          <UnorderedList spacing={2}>
            <ListItem>Batutų negalima naudoti kol jie pilnai neprisipūtė arba yra išleidžiami.</ListItem>
            <ListItem>Maksimalus vieno dalyvio svoris – 100 kg.</ListItem>
            <ListItem>Privaloma nusiauti batus ir nusiimti visus aštrius daiktus (diržus, akinius, papuošalus ir pan.).</ListItem>
            <ListItem>Negalima į batutą neštis maisto, gėrimų, žaislų ar gyvūnų.</ListItem>
            <ListItem>Draudžiama prie batutų naudoti fejerverkus, konfeti ar kitus šventės efektus.</ListItem>
          </UnorderedList>
        </Stack>

        <Stack spacing={4}>
          <Heading size="md">Atsakomybė ir priežiūra</Heading>
          <UnorderedList spacing={2}>
            <ListItem>Batutai turi būti grąžinti švarūs ir nesugadinti. Pažeidimų ar papildomo valymo atveju taikomas papildomas mokestis.</ListItem>
            <ListItem>Vaikų pramogoms būtina nuolatinė suaugusiųjų priežiūra. Už vaikų saugumą atsako juos prižiūrintys asmenys.</ListItem>
          </UnorderedList>
        </Stack>

        <Stack spacing={4}>
          <Heading size="md">Rezervacija</Heading>
          <UnorderedList spacing={2}>
            <ListItem>Rezervuojant imamas avansas.</ListItem>
            <ListItem>Atsisakius rezervacijos likus mažiau nei 14 dienų iki nuomos datos, avansas negrąžinamas.</ListItem>
            <ListItem>Jei nuoma neįvyksta dėl prastų oro sąlygų, avansas grąžinamas pilnai.</ListItem>
          </UnorderedList>
        </Stack>
      </Stack>
    </Container>
  )
}
