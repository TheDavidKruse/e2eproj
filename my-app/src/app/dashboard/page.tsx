'use client';

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Input,
} from '@mui/material';
import { filterData } from './helper';
interface RecordProps {
  data: Record<string, string | number>[];
}

export const Name: React.FC<RecordProps> = ({ data }) => {
  const [filter, setFilter] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  return (
    <TableContainer component={Paper}>
      <Input onChange={(e) => setFilter(e.target.value)} />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(filteredPosts?.[0]).map((txt) => (
              <TableCell key={txt + 'header'}>{txt}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{filterData(filteredPosts, filter)}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default Name;
