import { Box, Button,HStack, Heading, Stack, VStack , Input , Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend,AiOutlineYoutube,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={"16"} color={"white"}>
        <Stack direction={['column','row']}>

            <VStack alignItems={"stretch"} w={"full"} px={'4'}>
                <Heading size={"md"} textTransform={'uppercase'} textAlign={['center' , 'left']}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'}
                    outline={'none'}
                    focusBorderColor='none'/>
                    <Button p={'0'} colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={"0 20px 20px 0"}>
<AiOutlineSend/>
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'}
            borderLeft={['none','1px solid white']}
            borderRight={['none','1px solid white']}>
<Heading textTransform={'uppercase'} textAlign={'center'}>
    Video Hub

</Heading>
<Text>
    © Copyrights Reserved by VideoHub Team
</Text>
            </VStack>
            <VStack w={'full'}
            >
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'red'} size='lg'>
                    <a target={'blank'} href="https://youtube.com">
                        <AiOutlineYoutube/>
                    </a>

                </Button>
                <Button variant={'link'} colorScheme={'white'} size='lg'>
                    <a target={'blank'} href="https://github.com/sufiyan1234-heu">
                        <AiFillGithub/>
                    </a>

                </Button>

                <Button variant={'link'} colorScheme={'blue'} size='lg'>
                    <a target={'blank'} href="https://www.linkedin.com/in/sufiyan-chishty-9288101b9/">
                        <AiFillLinkedin/>
                    </a>

                </Button>


            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer
