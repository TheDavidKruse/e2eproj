"use client"

import React, { useState } from "react";
import jsondata from '../photos.json';
import Paper from "@mui/material/Paper";

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Input } from "@mui/material";


interface NameProps {
    someprop: string
}

export const Name: React.FC<NameProps> = ({ someprop }) =>
{
    const [state, setState] = useState(jsondata);
    const [filter, setFilter] = useState('');
        const data = {
                "albumId": 97,
                "id": 4844,
                "title": "voluptate omnis libero et sapiente corporis voluptatem",
                "url": "https://via.placeholder.com/600/5f1c4f",
                "thumbnailUrl": "https://via.placeholder.com/150/5f1c4f",
                featuring: {
                    artists: {
                        pId: [1, 2, 3, 4]
                    } 
                }
        }

        return (
            <TableContainer component={Paper}>
                <Input onChange={(e) => setFilter(e.target.value)}/>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        {Object.keys(state?.[0]).map((txt) => (<TableCell key={txt+"header"}>{txt}</TableCell>))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {state.map((row) => {
                        const shouldReturn = Object.values(row).map((item) => item?.toString().toLowerCase()).filter(e => e.includes(filter) ? e : undefined).length > 0;
                        return shouldReturn ? (
                            <TableRow>
                                {Object.keys(row).map((key) => <TableCell align="right">{row[key]}</TableCell>)}
                            </TableRow>) : undefined
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        )
        // return JSON.stringify(state)
}

export default Name;