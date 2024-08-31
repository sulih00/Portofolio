import React from "react";
import { Heading, VStack, Box, Text, Image} from "@chakra-ui/react";
import courseraLogo from '../images/courseraLogo.png';


const headingCertifications = "Certifications"

const frontEndCertification = "Meta Front-End Developer "
const frontEndCertificationDates = "Agustus 2024"


const Education = () => (
  <div id="Education">
    <VStack spacing={16}>
      <div data-aos="fade-up">
        <Heading as="h2" size="xl">
          {headingCertifications}
        </Heading>
      </div>
      <VStack spacing={6} alignItems="center">
        <div data-aos="fade-right">
          <Box alignItems="center">
            <Image
              src={courseraLogo}
              maxWidth="300px"
              alignContent={"center"}
            />
          </Box>
        </div>
        <div data-aos="fade-left">
          <Box>
            <VStack maxWidth="600px">
              <Text>{frontEndCertification}</Text>
              <Text fontStyle={"italic"}>{frontEndCertificationDates}</Text>
            </VStack>
          </Box>
        </div>
        <div data-aos="fade-left">       
        </div>
      </VStack>
    </VStack>
  </div>
);

export default Education;