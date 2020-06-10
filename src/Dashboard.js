import React from "react";
import {
  Container,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { useAuth0 } from "./contexts/auth0-context";

const Dashboard = () => {
  const { user } = useAuth0();
  return (
    <div>
      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Key</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{JSON.stringify(user)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Dashboard;
