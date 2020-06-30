import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import { Select, IconButton, } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import {Stack, InputGroup, InputRightElement, Input } from "@chakra-ui/core";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Button, Icon,
} from "@chakra-ui/core";

export default function HookForm() {
    const { handleSubmit, errors, register, formState } = useForm();

    function validateName(value) {
        let error;
        if (!value) {
            error = "Name is required";
        } else if (value !== "Naruto") {
            error = "Jeez! You're not a fan 😱";
        }
        return error || true;
    }

    function onSubmit(values) {
        setTimeout(() => {
            console.log('Hello there')
        }, 1000);
    }

    return (
        <div className="boxit">
            <Box
                bg="white" w="40%" pt="2%" pb="2%" pr="4%" pl="4%" color="1D1D1D"
                borderWidth="2px" rounded="lg" h="80%" shadow="5px 10px 18px #888888"
                mb="20%">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <FormControl isInvalid={errors.name}>
                        <div className="iconWrapper">
                            <Icon name="close" color="gray.400" size="10px"/>
                        </div>
                        <div className="labelWrapper">
                            <Heading as="h4" size="md" mb={6} fontWeight={500}>
                                Выберите условия остановки
                            </Heading>
                        </div>
                        <Heading  size="xs" mb={3} fontWeight={500}>
                            Культура:
                        </Heading>
                        <Select name="Option" color="gray.400" placeholder="Все" ref={register({ required: true })}>
                            <option value="Mr">Option 1</option>
                            <option value="Mrs">Option 2</option>
                            <option value="Miss">Option3</option>
                        </Select>

                        <Heading  size="xs" mb={3} fontWeight={500}>
                            Тип операции:
                        </Heading>
                        <Select name="Option" color="gray.400" placeholder="Все" ref={register({ required: true })}>
                            <option value="Mr">Option 1</option>
                            <option value="Mrs">Option 2</option>
                            <option value="Miss">Option3</option>
                        </Select>

                        <Heading  size="xs" mb={3} fontWeight={500}>
                            Клиент:
                        </Heading>
                        <Select name="Option" color="gray.400" placeholder="Все" ref={register({ required: true })}>
                            <option value="Mr">Option 1</option>
                            <option value="Mrs">Option 2</option>
                            <option value="Miss">Option3</option>
                        </Select>
                        <Heading  size="xs" mb={3} fontWeight={500}>
                            Время:
                        </Heading>
                        <CheckboxGroup variantColor="green" defaultValue={["naruto", "kakashi"]}
                                       borderRadius="1 rem">
                            <Checkbox type="checkbox" placeholder="Время" name="Время" ref={register}  color="gray.400">
                                Неопределенное до возобновления
                            </Checkbox>
                            <Checkbox value="state_period" color="gray.400">
                                Указать период остановки
                            </Checkbox>
                        </CheckboxGroup>

                        <input type="checkbox" placeholder="Время" name="Время" ref={register} />

                        <FormErrorMessage>
                            {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button
                        variantColor="red"
                        width="100%"
                        mt={3}
                        isLoading={formState.isSubmitting}
                        type="submit">Button
                    </Button>

                </form>
            </Box>
        </div>

    );
}