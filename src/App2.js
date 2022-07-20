import React from 'react'
import Navbar from './container/Navbar'
import Sidenav from './container/Sidenav'
import NavTitle from './container/NavTitle'
import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Content from './container/Content'
import Content2 from './container/Content2'
import SelectCustom from './container/SelectCustom'
import Sidebar from './container/Sidebar'
import Divider from '@mui/material/Divider'
import NavNews from './container/NavNews'
import CardMission from './components/CardMission'
import NewsBoard from './container/NewsBoard'

function App2() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div  class='bg-red-500'>
            <Navbar />
            <Box direction="row">
                <div className='bg-red-700'>
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                    <Item elevation={0}  sx={{width:'100%',margin:'0 auto'}}>
                        <NavTitle />
                         <NewsBoard/>
                        {/* <NavNews /> */}
                        <Content2 />
                        <CardMission />
                    </Item>

                </Stack>
                </div>
               
            </Box>
        </div>
    )
}

export default App2