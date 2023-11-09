import React, { ReactNode } from 'react';
import Sidebar from './sidebar';

interface Props{
    children: ReactNode | ReactNode[]; // ReactNode is a type that represents anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
}

export default function BaseLayout({ children }: Props) {
    return (
        <div className=''>
            <Sidebar/>
            {children}
        </div>
    );

}