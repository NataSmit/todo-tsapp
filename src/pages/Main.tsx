import React from 'react'
import Container from '../components/Container/Container'
import TodoDashBoard from '../components/TodoDashboard/TodoDashBoard'
import TodoControlPanel from '../components/TodoControlPanel/TodoControlPanel'

export default function Main() {
    return (
        <Container>
            <TodoDashBoard />
            <TodoControlPanel />
        </Container>
    )
}
