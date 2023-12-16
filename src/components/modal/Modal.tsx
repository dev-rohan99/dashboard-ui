import React, { ReactNode } from 'react';
import { MdClose } from 'react-icons/md';

interface ModalProps {
    title: string;
    children: ReactNode;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ title, children, setIsOpen }: ModalProps) => {

    const handleCloseModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsOpen(false);
    }

    return (
        <>
        

            <div className="modalMain">
                <a href="/" onClick={handleCloseModal} className="closeModal"><MdClose style={{fontSize: "25px"}}/></a>
                <div className="modalWrapper p-4 shadow">
                    <div className="titleWrapper">
                        <h3 className="font-weight-bold text-center mb-4">{title}</h3>
                    </div>

                    <div className="body">
                        { children }
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default Modal;
