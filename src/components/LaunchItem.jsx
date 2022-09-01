import { HiCalendar } from "react-icons/hi";
// import { Link } from "react-router-dom";
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from "@chakra-ui/react";

import dayjs from 'dayjs';
import "dayjs/locale/es";

//1:07
export function LaunchItem(launch) {
return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
        <Flex display="flex">
            <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong>
                ({launch.launch_year})
            </Text>
            <Spacer ml={4} />
            <Tag p={2} variantColor="teal" colorScheme={launch.launch_success ? 'green' : 'red' }>
                {launch.launch_success ? 'Success' : 'Failure'}
            </Tag>

        </Flex>
        <Flex align="center">
            <Icon as={HiCalendar} color="gray.500" /> 
            <Text fontSize="sm" ml={1} color="gray.500">
                {dayjs(launch.launch_date_local)
                .locale("es")
                .format("D MMMM, YYYY")

                }
            </Text>
        </Flex>

    <Button mt={4} 
            variantColor="teal" 
            colorScheme="purple" 
            size="lg" 
            variant="solid">
        More Details    
    </Button>

    </Box>
);
}