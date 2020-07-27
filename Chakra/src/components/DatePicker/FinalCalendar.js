import React, {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    Box,
    Heading,
    Icon,
    Select,
    VisuallyHidden,
    ControlBox,
    Button
} from "@chakra-ui/core";
import CalendarInputStart from './iDatePickerStart';
import CalendarInputEnd from './iDatePickerEnd';

export default function FinalCalendar(props) {
    const { watch, register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => {
        console.log('onSubmit::::', data);

        alert(
            'Культура:' + data.culture +
            '\nТип Операции:' + data.operationType +
            '\nКлиент:' + data.client +
            '\nВремя:' + data.time +
            '\nStart Date:' +' ' + startDate +
            '\nEnd Date:' +' ' + endDate
            )
    };


    let makeRangeDisabled;

    const watchTime = watch("time", props.time);

    if (watchTime === "Not Specified" ) {
        makeRangeDisabled = true
    } else {
        makeRangeDisabled = false
    }

    const [startDate, setStartDate] = useState(null);


    const [endDate, setEndDate] = useState(null);


    return (
        <div className="boxit">
            <Box bg="white" w="563px"   color="1D1D1D"
                 borderRadius="6px" boxShadow="0px 10px 34px rgba(0, 0, 0, 0.16)" h="80%" shadow="5px 10px 18px #888888"
                 mb="20%" flexDirection="column"  >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="iconWrapper">
                        <Icon name="close" color="gray.400" size="10px"/>
                    </div>
                    <div className="labelWrapper">
                        <Heading as="h4" size="md" mt="19px" mb={6} fontWeight={600} fontSize="24px">
                            Выберите условия остановки
                        </Heading>
                    </div>

                    <Heading  mb="1px" fontWeight={600} fontSize="16px" ml="42px" lineHeight="230%" mt="1px">
                        Культура:
                    </Heading>
                    <Select isInvalid={!!errors.culture} color="#A3A3A3" placeholder="Все"
                            name="culture" ml="42px" border="1px" borderRadius="6px" borderColor="#8F8F8F"
                            width="480px" height="50px"
                            ref={register({ required: 'Виберіть з запропонованих'
                            })}>
                        <option value="Option 1">Option 1</option>
                        <option value=" Option 2"> Option 2</option>
                        <option value=" Option 3"> Option 3</option>
                    </Select>
                    {errors.culture && (
                        <h5 className='error'>{errors.culture.message}</h5>
                    )}




                    <Heading mb="1px" fontWeight={600} fontSize="16px" ml="42px" lineHeight="230%" mt="1px">
                        Тип операции:
                    </Heading>
                    <Select isInvalid={!!errors.operationType} color="#A3A3A3" placeholder="Все" ml="42px"
                            name="operationType" border="1px" borderRadius="6px" borderColor="#8F8F8F"
                            width="480px" height="50px"
                            ref={register({ required: 'Виберіть з запропонованих' })}>
                        <option value="Option 1">Option 1</option>
                        <option value=" Option 2"> Option 2</option>
                        <option value=" Option 3"> Option 3</option>
                    </Select>
                    {errors.operationType && (
                        <span className='error'>{errors.operationType.message}</span>
                    )}




                    <Heading mb="1px" fontWeight={600} fontSize="16px" ml="42px" lineHeight="230%" mt="1px">
                        Клиент:
                    </Heading>
                    <Select isInvalid={!!errors.client} color="#A3A3A3" placeholder="Все"
                            name="client" ml="42px" border="1px" borderRadius="6px" borderColor="#8F8F8F"
                            width="480px" height="50px"
                            ref={register({ required: 'Виберіть з запропонованих' })}>
                        <option value="Option 1">Option 1</option>
                        <option value=" Option 2"> Option 2</option>
                        <option value=" Option 3"> Option 3</option>
                    </Select>
                    {errors.client && (
                        <span className='error'>{errors.client.message}</span>
                    )}
                    <Heading mb="1px" fontWeight={600} fontSize="16px" ml="42px" lineHeight="230%" mt="1px">
                        Время:
                    </Heading>
                    <div className="radio">
                        <label>
                            {/* This is the sibling input, it's visually hidden */}
                            <VisuallyHidden type="radio" value="Not Specified" name="time" as="input" ref={register({ required: true })} />

                            {/* This is the control box with a circle as children */}
                            <ControlBox
                                mb="18px"
                                size="18px"
                                bg="white"
                                border="2px"
                                rounded="full"
                                type="radio"
                                borderColor="#6e6d6d"
                                _focus={{ boxShadow: "outline" }}
                                _hover={{ borderColor: "gray.300" }}
                                _disabled={{ opacity: "40%" }}
                                _checked={{ bg: "green.500", borderColor: "green.500" }}
                            >
                                <Box size="50%" bg="white" rounded="full" />

                            </ControlBox>


                            {/* You can pass additional text */}
                            <Box as="span" ml={2} verticalAlign="center" userSelect="none" color="#A3A3A3" fontWeight="500" fontSize="18px" lineHeight="130%">
                                Неопределеннок до возобновления
                            </Box>
                        </label>
                        <div className="break"></div>
                        <label>
                            {/* This is the sibling input, it's visually hidden */}
                            <VisuallyHidden type="radio" name="time" value="Set from-to" as="input" ref={register({ required: true })} />

                            {/* This is the control box with a circle as children */}
                            <ControlBox
                                mb="18px"
                                size="18px"
                                bg="white"
                                border="2px"
                                rounded="full"
                                type="radio"
                                borderColor="#6e6d6d"
                                _focus={{ boxShadow: "outline" }}
                                _hover={{ borderColor: "gray.300" }}
                                _disabled={{ opacity: "40%" }}
                                _checked={{ bg: "green.500", borderColor: "green.500" }}
                            >
                                <Box size="50%" bg="white" rounded="full" />

                            </ControlBox>


                            {/* You can pass additional text */}
                            <Box as="span" ml={2} verticalAlign="center" userSelect="none" color="#A3A3A3" fontWeight="500" fontSize="18px" lineHeight="130%">
                                Указать период остановки
                            </Box>
                        </label>
                    </div>

                    <div className="calendarInput">
                       <Controller name="startDate" as={CalendarInputStart}
                                   control={control}
                                   disabled={makeRangeDisabled}
                                   setValue={setStartDate}
                                   startDateValue={startDate}
                                   maxDate={endDate}
                           />
                        <Controller name="endDate" as={CalendarInputEnd}
                                    control={control}
                                    disabled={makeRangeDisabled}
                                    setValue={setEndDate}
                                    startDateValue={startDate}
                                    endDateValue={endDate}/>

                    </div>
                    <Button type="submit" width="480px" height="50px"color="#FFFFFF"
                            backgroundColor="#C5111B" mb="31px" ml="42px" >Приостановить</Button>
                </form>
            </Box>
        </div>


    );
}