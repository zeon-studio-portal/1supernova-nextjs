import { FC } from 'react';
import * as FaIcons6 from 'react-icons/fa6';
import * as FcIcons from 'react-icons/fc';
import * as Io5Icons from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa';
import * as LuIcons from 'react-icons/lu';

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as TfiIcons from 'react-icons/tfi';

const iconLibraries = {
  fa: FaIcons,
  fc: FcIcons,
  io: Io5Icons,
  ai: AiIcons,
  bs: BsIcons,
  fi: FiIcons,
  ri: RiIcons,
  tb: TbIcons,
  tfi: TfiIcons,
  fa6: FaIcons6,
  lu: LuIcons,
};

const DynamicIcon = ({ icon, ...props }) => {
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : undefined;

  if (!Icon) {
    return <span className="text-sm">Icon not found</span>;
  }

  return <Icon {...props} />;
};

const getIconLibrary = (icon) => {
  const libraryKey = [...icon].reduce((lib, letter, i) => {
    if (letter === letter.toUpperCase() && lib === '' && i > 0) {
      return icon.slice(0, i).toLowerCase();
    }
    return lib;
  }, '');

  return iconLibraries[libraryKey];
};

export default DynamicIcon;
