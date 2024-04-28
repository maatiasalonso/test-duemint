'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from '@nextui-org/react';
import {
  CloseIcon,
  LeftArrowIcon,
  QuestionMarkRounded,
  StarFilled,
  StarIcon,
  ThreeDotsVertical,
} from '../icons';
import { useEffect, useState } from 'react';

interface DestinatarioSidebarProps {
  selectedValue: any;
  setSidePanelVisible: any;
  isVisible: boolean;
}

export const DestinatarioSidebar = ({
  selectedValue,
  setSidePanelVisible,
  isVisible,
}: DestinatarioSidebarProps) => {
  const [sidebarClass, setSidebarClass] = useState('');

  useEffect(() => {
    if (isVisible) {
      setSidebarClass('translate-x-0');
    } else {
      setSidebarClass('translate-x-full');
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed top-0 right-0 z-50 w-6/12 h-full transform transition-transform duration-300 ease-in-out ${sidebarClass}`}
    >
      <Card className='h-full'>
        <CardHeader className='flex justify-between gap-3'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-4'>
              <Button isIconOnly onClick={() => setSidePanelVisible(false)}>
                <LeftArrowIcon className='w-5 h-5' />
              </Button>
              <span className='text-3xl'>Editar Destinatario</span>
            </div>
          </div>
          <div className='flex gap-2'>
            <Button isIconOnly>
              <ThreeDotsVertical />
            </Button>
            <Button isIconOnly onClick={() => setSidePanelVisible(false)}>
              <CloseIcon />
            </Button>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className='px-4'>
          <section className='mt-4'>
            <span className='font-semibold'>Datos del destinatario</span>
            <div className='flex gap-3 mt-4'>
              <Input
                label='Nombres'
                labelPlacement='outside'
                value={selectedValue?.name}
              />
              <Input
                label='Rut'
                labelPlacement='outside'
                value={selectedValue.rut}
                disabled
              />
            </div>
          </section>
          <section className='mt-8'>
            <span className='font-semibold'>Datos bancarios</span>
            <Divider className='mt-4' />
            <div className='flex flex-col gap-4 mt-4'>
              {selectedValue.bankAccounts.map((account: any) => (
                <section
                  className='flex items-center justify-between gap-4 px-4'
                  key={account.accountNumber}
                >
                  <span>
                    {account.favourite ? <StarFilled /> : <StarIcon />}
                  </span>
                  <span>{account.alias}</span>
                  <span>{account.bank}</span>
                  <span>{account.accountNumber}</span>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant='light' isIconOnly>
                        <ThreeDotsVertical />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label='Example with disabled actions'>
                      <DropdownItem key='ver-detalle'>Ver Detalle</DropdownItem>
                      <DropdownItem
                        key='eliminar'
                        className='text-danger'
                        color='danger'
                      >
                        Eliminar
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </section>
              ))}
              <section className='flex justify-end'>
                <Button variant='light' className='items-center text-sm'>
                  Agregar destinatario
                </Button>
              </section>
            </div>
          </section>
        </CardBody>
        <Divider />
        <CardFooter className='flex justify-between px-4'>
          <Button
            variant='light'
            startContent={<QuestionMarkRounded />}
            className='items-center text-sm'
          >
            ¿Necesitas ayuda?
          </Button>

          <Button color='default' onClick={() => setSidePanelVisible(false)}>
            Volver
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
