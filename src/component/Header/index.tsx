import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  Box,
  Container,
  Flex,
  Icon,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { Logo } from '../Logo';

export const Header = observer(() => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as={'header'}
      minH={'60px'}
      boxShadow={'sm'}
      zIndex="999"
      justify={'center'}
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: useColorModeValue(
          'rgba(255, 255, 255, 0.8)',
          'rgba(26, 32, 44, 0.8)'
        ),
      }}
    >
      <Container as={Flex} maxW={'7xl'} align={'center'}>
        <Stack
          direction={'row'}
          align={'center'}
          spacing={8}
          flex={{ base: 1, md: 'auto' }}
          justify={'flex-start'}
        >
          <Icon as={Logo} w={{ base: 8 }} h={{ base: 8 }} />
        </Stack>

        <Stack
          direction={'row'}
          align={'center'}
          spacing={8}
          flex={{ base: 1, md: 'auto' }}
          justify={'flex-end'}
        >
          <IconButton
            size={'sm'}
            variant={'ghost'}
            aria-label={'Toggle Color Mode'}
            onClick={toggleColorMode}
            icon={
              colorMode == 'light' ? (
                <IoMoon size={18} />
              ) : (
                <IoSunny size={18} />
              )
            }
          />
        </Stack>
      </Container>
    </Flex>
  );
});
