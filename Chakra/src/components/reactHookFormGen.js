import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Box,
    Heading,
    Icon,
    Select,
    VisuallyHidden,
    ControlBox,
    Button
} from "@chakra-ui/core";

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('onSubmit::::', data);
        alert(
            'Культура:' + data.culture +
            '\nТип Операции:' + data.operationType +
            '\nКлиент:' + data.client +
            '\nВремя:' + data.time +
            '\nПриостановить С:' + data.pauseFrom +
            '\nПриостановить До:' + data.pauseTo
    )
    };
    console.log('Error Has Ocured Please check if you have fullfilled all' +
        ' the required fields, have a nice DAY!!!',errors);

    return (
        <div className="boxit">
            <Box bg="white" w="40%" pt="2%" pb="2%" pr="4%" pl="4%" color="1D1D1D"
                 borderWidth="2px" rounded="lg" h="80%" shadow="5px 10px 18px #888888"
                 mb="20%" flexDirection="column"  >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="iconWrapper">
                        <Icon name="close" color="gray.400" size="10px"/>
                    </div>
                    <div className="labelWrapper">
                        <Heading as="h4" size="md" mb={6} fontWeight={500}>
                            Выберите условия остановки
                        </Heading>
                    </div>

                    <Heading as="h6" size="xs" mb={3} fontWeight={500}>
                        Культура:
                    </Heading>
                    <Select isInvalid={!!errors.culture} color="gray.400" placeholder="Все"
                            name="culture" ref={register({ required: 'Виберіть з запропонованих' })}>
                        <option value="Option 1">Option 1</option>
                        <option value=" Option 2"> Option 2</option>
                        <option value=" Option 3"> Option 3</option>
                    </Select>
                    {errors.culture && (
                        <h5 className='error'>{errors.culture.message}</h5>
                    )}
                    <Heading as="h6" size="xs" mt={3} mb={3} fontWeight={500}>
                        Тип операции:
                    </Heading>
                    <Select isInvalid={!!errors.operationType} color="gray.400" placeholder="Все"
                            name="operationType" ref={register({ required: 'Виберіть з запропонованих' })}>
                        <option value="Option 1">Option 1</option>
                        <option value=" Option 2"> Option 2</option>
                        <option value=" Option 3"> Option 3</option>
                    </Select>
                    {errors.operationType && (
                        <span className='error'>{errors.operationType.message}</span>
                    )}
                    <Heading as="h6" size="xs" mt={3} mb={3} fontWeight={500}>
                        Клиент:
                    </Heading>
                    <Select isInvalid={!!errors.operationType} color="gray.400" placeholder="Все"
                            name="client" ref={register({ required: 'Виберіть з запропонованих' })}>
                        <option value="Option 1">Option 1</option>
                        <option value=" Option 2"> Option 2</option>
                        <option value=" Option 3"> Option 3</option>
                    </Select>
                    {errors.client && (
                        <span className='error'>{errors.client.message}</span>
                    )}
                    <Heading as="h6" size="xs" mt={3} mb={3} fontWeight={500}>
                        Время:
                    </Heading>
                    <div className="radio">
                        <label>
                            {/* This is the sibling input, it's visually hidden */}
                            <VisuallyHidden type="radio" value="Not Specified" name="time" as="input" ref={register({ required: true })} />

                            {/* This is the control box with a circle as children */}
                            <ControlBox
                                mb="1%"
                                size="24px"
                                bg="white"
                                border="2px"
                                rounded="full"
                                type="radio"
                                borderColor="inherit"
                                _focus={{ boxShadow: "outline" }}
                                _hover={{ borderColor: "gray.300" }}
                                _disabled={{ opacity: "40%" }}
                                _checked={{ bg: "green.500", borderColor: "green.500" }}
                            >
                                <Box size="50%" bg="white" rounded="full" />

                            </ControlBox>


                            {/* You can pass additional text */}
                            <Box as="span" ml={2} verticalAlign="center" userSelect="none">
                                Неопределеннок до возобновления
                            </Box>
                        </label>
                        <div className="break"></div>
                        <label>
                            {/* This is the sibling input, it's visually hidden */}
                            <VisuallyHidden type="radio" name="time" value="Set from-to" as="input" ref={register({ required: true })} />

                            {/* This is the control box with a circle as children */}
                            <ControlBox
                                mb="1%"
                                size="24px"
                                bg="white"
                                border="2px"
                                rounded="full"
                                type="radio"
                                borderColor="inherit"
                                _focus={{ boxShadow: "outline" }}
                                _hover={{ borderColor: "gray.300" }}
                                _disabled={{ opacity: "40%" }}
                                _checked={{ bg: "green.500", borderColor: "green.500" }}
                            >
                                <Box size="50%" bg="white" rounded="full" />

                            </ControlBox>


                            {/* You can pass additional text */}
                            <Box as="span" ml={2} verticalAlign="center" userSelect="none">
                                Указать период остановки
                            </Box>
                        </label>
                    </div>

                    <div className="radio">
                        <input type="datetime-local" placeholder="Приостановить С" name="pauseFrom" ref={register} />
                        <input type="datetime-local" placeholder="Приостановить До" name="pauseTo" ref={register} />
                        <Button type="submit" variantColor="red" width="100%" mt={3} >Submit</Button>
                    </div>

                </form>
            </Box>
        </div>


    );
}