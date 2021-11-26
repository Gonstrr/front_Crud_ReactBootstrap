

import { Typography } from '@mui/material'
import React from 'react'

export default function AppBar() {


    const stylesApBar = {
        container:{
            backgroundcolor:'black'
        }
    }
    return (
        <AppBar style={stylesApBar.container}>
            <Typography> Hola buenas soy el appbar apareci</Typography>
        </AppBar>
    
    )
}
