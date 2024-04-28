'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useState } from 'react';
import { StarFilled, StarIcon, ThreeDotsVertical } from '../icons';
import { DestinatarioSidebar } from './DestinatarioSidebar';

interface MainComponentClientProps {
  content: any;
}

export const MainComponentClient = ({ content }: MainComponentClientProps) => {
  const [sidePanelVisible, setSidePanelVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(undefined as any);
  const groupedValues = content.values.reduce((acc: any, value: any) => {
    const initial = value?.name?.charAt(0);
    if (!acc[initial]) {
      acc[initial] = [];
    }
    acc[initial].push(value);
    return acc;
  }, {});

  return (
    <>
      <div className='flex justify-between w-full'>
        <span className='text-3xl'>{content.title}</span>
        <Button color='default'>{content.buttonText}</Button>
      </div>
      <div className='flex flex-col w-full gap-4'>
        {Object.entries(groupedValues).map(([initial, values]: [any, any]) => (
          <div key={`${initial}-${new Date()}`}>
            <span>{initial}</span>
            {values.map((value: any) => (
              <div key={value.name} className='flex flex-col gap-4 mt-2'>
                {value.bankAccounts.map((account: any) => (
                  <div
                    className='flex items-center justify-between w-full gap-4 px-2 transition rounded-md bg-zinc-100 hover:bg-zinc-200/80'
                    key={value.name}
                  >
                    <span>
                      {account.favourite ? <StarFilled /> : <StarIcon />}
                    </span>
                    <span>{account.alias}</span>
                    <span>{value.name}</span>
                    <span>{value.rut}</span>
                    <span>{value.email}</span>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant='light' isIconOnly>
                          <ThreeDotsVertical />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label='Example with disabled actions'>
                        <DropdownItem key='transferir'>Transferir</DropdownItem>
                        <DropdownItem
                          key='editar'
                          onClick={() => {
                            setSidePanelVisible(true);
                            setSelectedValue(value);
                          }}
                        >
                          Editar
                        </DropdownItem>
                        <DropdownItem
                          key='eliminar'
                          className='text-danger'
                          color='danger'
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      {sidePanelVisible && selectedValue && (
        <DestinatarioSidebar
          selectedValue={selectedValue}
          setSidePanelVisible={setSidePanelVisible}
          isVisible={sidePanelVisible}
        />
      )}
    </>
  );
};
