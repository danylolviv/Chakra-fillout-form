import React from 'react';
import './OnboardingForm.css'; 
import { Box } from "@chakra-ui/core";
import { Select, Icon } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import {Stack, InputGroup, InputRightElement, Input } from "@chakra-ui/core";


export const OnboardingForm = () => (
    <div class="boxit">
      <Box bg="white" w="60%" pt="2%" pb="2%" pr="4%" pl="4%" color="1D1D1D" borderWidth="2px" rounded="lg" h="80%" shadow="5px 10px 18px #888888" mb="20%"> 
      <div class="iconWrapper">
        <Icon name="close"  color="gray.400" size="10px" />
      </div>
      <div class="labelWrapper">
        <Heading  as="h4" size="md" mb={6} fontWeight={500} >
          Выберите условия остановки
        </Heading>
      </div>
      
      <Heading as="h6" size="xs" mb={3} fontWeight={500}>
        Культура:
      </Heading>
      <Select color="gray.400" placeholder="Все">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Heading as="h6" size="xs" mt={3} mb={3} fontWeight={500}>
        Тип операции:
      </Heading>
      <Select color="gray.400" placeholder="Все">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Heading as="h6" size="xs" mt={3} mb={3} fontWeight={500}>
        Клиент:
      </Heading>
      <Select color="gray.400" placeholder="Все">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Heading as="h6" size="xs" mt={3} mb={3} fontWeight={500}>
        Время:
      </Heading>
      <div class="checkboxWrapper">
      <CheckboxGroup variantColor="green" defaultValue={["naruto", "kakashi"]} borderRadius="1 rem">
        <Checkbox value="undef" color="gray.400"  >Неопределенное до возобновления</Checkbox>
        <Checkbox value="state_period" color="gray.400">Указать период остановки</Checkbox>
      </CheckboxGroup>
      </div>
      <Stack  width="100%" flexDirection="row" justifyContent="space-between" mt={3} >
        <InputGroup flexWrap="row"   >
          <Input placeholder="Приостановить С" />
          <InputRightElement children={<Icon name="calendar" color="green.500" />} />
        </InputGroup>
        <InputGroup>
          <Input placeholder="Приостановить До" />
          <InputRightElement children={<Icon name="calendar" color="green.500" />} />
        </InputGroup>
      </Stack>

      <Button variantColor="red" width="100%" mt={3} >Button</Button>
      </Box>
      </div>
);

