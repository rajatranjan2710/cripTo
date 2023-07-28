import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import {FaMoon , FaSun} from "react-icons/fa";

const ColorMode = ()=>{
    const{toggleColorMode} = useColorMode();
    const SwitchIcon = useColorMode(FaMoon ,FaSun);

    return(
        <IconButton
        variant={"ghost"}
        color={"current"}
        pos={"fixed"}
        top={"4"}
        right={"4"}
        zIndex={"overlay"}
        onClick={toggleColorMode}
        icon={SwitchIcon}
        />
    );
};
export default ColorMode;