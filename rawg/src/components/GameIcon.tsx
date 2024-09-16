import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaXbox, FaPlaystation, FaWindows, FaApple, FaAppStoreIos, FaAndroid, FaLinux, FaGamepad, FaQuestion } from 'react-icons/fa';

interface Props {
    console_name: string;
}

const iconMap: { [key: string]: IconType } = {
    xbox: FaXbox,
    playstation: FaPlaystation,
    pc: FaWindows,
    mac: FaApple,
    ios: FaAppStoreIos,
    android: FaAndroid,
    linux: FaLinux,
    nintendo: FaGamepad,
};

const GameIcon = ({ console_name }: Props) => {
    const IconComponent = iconMap[console_name.toLowerCase()] || FaQuestion;
    return <Icon as={IconComponent} />;
}

export default GameIcon;