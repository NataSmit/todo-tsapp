import React from 'react'
import Header from '../Header/Header'
import { ContainerProps } from '../../types/types'

export default function Layout({children}: ContainerProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}
