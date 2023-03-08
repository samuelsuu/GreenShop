import React from 'react';
import { MenuButton, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

function others() {
    return ( 
        <Menu>
            <MenuButton>
                Agro-Med
            </MenuButton>
            <div className='menu'>
            <MenuList bgColor={"#11945B"}>
                <div munu-sub>
                    <MenuItem bgColor={"#11945B"} color={"#212121"} _hover={{ bg: 'white', color: 'black' }}>
                        Dairy
                    </MenuItem>
                    <div>
                        <MenuItem bgColor={"#11945B"} color={"white"} _hover={{ bg: 'white', color: 'black' }}>
                            <Link a href='' isExternal>
                                butter
                            </Link>
                        </MenuItem>
                    </div>
                </div>
            </MenuList>
            </div>
        </Menu>
     );
}

export default others;