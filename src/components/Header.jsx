import { Box, Flex, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import Logo from '../images/Logo.png'; 

const Header = ({ handleSearch }) => {
  return (
    <Flex
      as="header"
      bg="white"
      p="4"
      justify="left"
      align="center"
    >
      <Image
        src={Logo} 
        alt="Trademarkia Logo"
        boxSize="150px" 
        objectFit="contain"
        mr="4"
      />
      <SearchBar handleSearch={handleSearch} />
    </Flex>
  );
};

export default Header;