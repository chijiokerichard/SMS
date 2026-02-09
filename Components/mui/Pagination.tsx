"use client"
import { Pagination, Stack } from "@mui/material";
import { TfiAngleDown } from "react-icons/tfi";
import React, { ChangeEvent } from 'react';

interface PropCurPage {
  curPage:number;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
  pageCount:number
}

export default function PaginationList({curPage,setCurPage,pageCount }: PropCurPage) {
  function handleClick(event: ChangeEvent<unknown>, page: number) {
    setCurPage(page);    
  }

 

  return (
    <div className="flex items-center justify-between pb-4 w-full">
      <div className="flex items-center text-[17xp] justify-center md:justify-between md:gap-x-4">
        <span className="text-[14px]">showing</span>
        <div className="flex items-center justify-center gap-x-1 w-7.5 md:w-17.5 px-2 py-1 md:shadow-sm rounded-md">
          <span className="text-[14px]">{curPage}</span>
          <TfiAngleDown className="text-[13px] font-black" />
        </div>
        <div className="text-[14px] w-12.5 gap-x-1 flex">
          <span>of</span>
          <span>{pageCount}</span>
        </div>
      </div>
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          onChange={handleClick}
          page={curPage}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
}