import React from 'react'
import { Box, FormControl, MenuItem, Pagination, Select, Stack } from '@mui/material'


interface PaginationProps{
    currentPage:number;
    setPage:React.Dispatch<React.SetStateAction<number>>;
    totalPages:number;
    itemsPerPage:number;
    setItemsPerPage:(itemsPerPage:number)=>void;
}

export enum ItemsPerPage{
    SIX=6,
    EIGHT=8,
    TWELVE=12
  }

const Paginatior = ({currentPage,setPage,totalPages,itemsPerPage,setItemsPerPage}:PaginationProps) => {
  
  return (
    <Box component='section' sx={{display:'flex', justifyContent:'center'}}>
      <Stack spacing={2} direction='row' >
      <Pagination   count={totalPages} page={currentPage} onChange={(e,page)=>setPage(page)} />
      <FormControl variant='standard' >
        <Select
          id="items-per-page"
          value={itemsPerPage}
          label="Items per Page"
          onChange={(e)=>setItemsPerPage(Number(e.target.value))}
        >
          <MenuItem value={ItemsPerPage.SIX}>{ItemsPerPage.SIX}</MenuItem>
          <MenuItem value={ItemsPerPage.EIGHT}>{ItemsPerPage.EIGHT}</MenuItem>
          <MenuItem value={ItemsPerPage.TWELVE}>{ItemsPerPage.TWELVE}</MenuItem>
      </Select>
      </FormControl>
      </Stack>
    </Box>
  )
}

export default Paginatior