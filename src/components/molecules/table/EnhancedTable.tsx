import {
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import './EnhancedTable.css';
import { PlayCircleFilled } from '@mui/icons-material';

type HeaderProps = {
  id: string;
  name: string;
};

type RowProps = {
  [key: string]: string | number;
};
interface EnhancedTableHeadProps {
  headers: HeaderProps[];
}

interface TableProps {
  headers: HeaderProps[];
  rows: RowProps[];
  handleClick: (id: number) => void;
}

function EnhancedTableHead({ headers }: EnhancedTableHeadProps) {
  return (
    <TableHead className='tableHead'>
      <TableRow>
        {headers.map((header, index) => (
          <TableCell className='truncatedHeadCell' key={index}>
            {header.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
function EnhancedTable({ headers, rows, handleClick }: TableProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableContainer className='tableContainer' component={Paper}>
        <Table>
          <EnhancedTableHead headers={headers} />
          <TableBody className='tableBody'>
            {rows?.map((row, index) => (
              <TableRow key={index}>
                {headers.map((header) => {
                  if (header.id === 'status') {
                    return (
                      <TableCell
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                        }}
                        className='truncatedCell'
                        key={header.id}
                      >
                        {row[header.id] === 'Boarding' && (
                          <Chip
                            label={row[header.id]}
                            sx={{
                              backgroundColor: '#0771C3c1',
                              color: '#fff',
                            }}
                          />
                        )}
                        {row[header.id] === 'On Time' && (
                          <Chip
                            label={row[header.id]}
                            sx={{
                              backgroundColor: '#00845Cc1',
                              color: '#fff',
                            }}
                          />
                        )}
                        {row[header.id] === 'Departed' && (
                          <Chip
                            label={row[header.id]}
                            sx={{
                              backgroundColor: '#E0740Bc1',
                              color: '#fff',
                            }}
                          />
                        )}
                        {row[header.id] === 'Delayed' && (
                          <Chip
                            label={row[header.id]}
                            sx={{
                              backgroundColor: '#E30935c1',
                              color: '#fff',
                            }}
                          />
                        )}
                        <Button onClick={() => handleClick(row.id as number)}>
                          <PlayCircleFilled />
                        </Button>
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell className='truncatedCell' key={header.id}>
                        {row[header.id]}
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EnhancedTable;
