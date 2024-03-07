import React from "react";
import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Frequently Asked Questions</Heading>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is the return policy?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>Our return policy allows you to return products within 30 days of receiving them. Items must be in their original condition and packaging.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How do I track my order?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>Once your order is shipped, you will receive an email with a tracking number and link to track your package.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Do you offer international shipping?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>Yes, we offer international shipping. Shipping fees and delivery times vary depending on the destination.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Can I change my order?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>If your order has not been processed yet, you may be able to change it. Please contact our customer service as soon as possible.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What payment methods do you accept?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>We accept all major credit cards, PayPal, and various other payment methods, including cryptocurrency.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Index;
