import { useColorModeValue } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export default function GlobalStyle() {
    return <Global styles={`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');
    body {
        scroll-behavior: smooth;       
    }
    `} />
}