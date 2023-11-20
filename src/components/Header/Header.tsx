import React from 'react'
import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography } from '@mui/material'

export default function Header () {
    return (
        <AppBar >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Todo
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
