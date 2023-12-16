import React, { useEffect, useRef, useState } from 'react';

interface DropdownAndModalControl {
    isOpen: boolean;
    toggle: (e: React.MouseEvent) => void;
    dropdownRef: React.MutableRefObject<null | HTMLDivElement>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const useDropdownAndModalControl = (): DropdownAndModalControl => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<null | HTMLDivElement>(null);

    const toggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleClickOutside = (e: MouseEvent) => {
        if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node)){
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, []);

    return { isOpen, toggle, dropdownRef, setIsOpen };

}

export default useDropdownAndModalControl;
