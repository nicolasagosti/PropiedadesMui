import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <Stack position='row' m={5}>
      <TableContainer component={Paper} sx={{maxHeight: '400px'}} >
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow >
              <TableCell sx={{backgroundColor: '#7cbce4' , fontWeight: 'bold',fontSize: '16px'}}>Id</TableCell>
              <TableCell sx={{backgroundColor: '#7cbce4' , fontWeight: 'bold'}}>Firts Name</TableCell>
              <TableCell sx={{backgroundColor: '#7cbce4', fontWeight: 'bold'}}>Last Name</TableCell>
              <TableCell sx={{backgroundColor: '#7cbce4', fontWeight: 'bold'}} align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{"&:last-child td,&:last-child th": { border: 0 } }}
                
              >
                <TableCell sx={{fontWeight: 'bold'}} >{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Yolanthe",
    last_name: "Paggitt",
    email: "ypaggitt0@about.me",
    gender: "Female",
    ip_address: "164.192.247.58",
  },
  {
    id: 2,
    first_name: "Nanni",
    last_name: "Goodbanne",
    email: "ngoodbanne1@dailymail.co.uk",
    gender: "Female",
    ip_address: "108.120.189.45",
  },
  {
    id: 3,
    first_name: "Alfie",
    last_name: "Tyer",
    email: "atyer2@archive.org",
    gender: "Female",
    ip_address: "42.173.198.42",
  },
  {
    id: 4,
    first_name: "Adam",
    last_name: "Burchmore",
    email: "aburchmore3@hatena.ne.jp",
    gender: "Male",
    ip_address: "173.91.225.33",
  },
  {
    id: 5,
    first_name: "Ignatius",
    last_name: "Feak",
    email: "ifeak4@creativecommons.org",
    gender: "Male",
    ip_address: "206.120.206.166",
  },
  {
    id: 6,
    first_name: "Eldredge",
    last_name: "Heitz",
    email: "eheitz5@uiuc.edu",
    gender: "Male",
    ip_address: "54.61.150.21",
  },
  {
    id: 7,
    first_name: "Mae",
    last_name: "Tolchard",
    email: "mtolchard6@sakura.ne.jp",
    gender: "Female",
    ip_address: "254.32.92.15",
  },
  {
    id: 8,
    first_name: "Chicky",
    last_name: "Coath",
    email: "ccoath7@cbc.ca",
    gender: "Female",
    ip_address: "111.224.36.144",
  },
  {
    id: 9,
    first_name: "Corine",
    last_name: "Patnelli",
    email: "cpatnelli8@flavors.me",
    gender: "Female",
    ip_address: "88.35.203.222",
  },
  {
    id: 10,
    first_name: "Debra",
    last_name: "Gribbin",
    email: "dgribbin9@creativecommons.org",
    gender: "Female",
    ip_address: "67.53.231.98",
  },
];
