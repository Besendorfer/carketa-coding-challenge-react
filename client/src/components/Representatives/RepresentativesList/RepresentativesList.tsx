import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import './RepresentativesList.css';

import type { Representative } from '../../../types/Representative';

type RepresentativesListProps = {
  currentRepresentative: Representative;
  onRepresentativeChange: (representative: Representative) => void;
  representatives: Representative[];
  type: string;
};

const RepresentativesList = (props: RepresentativesListProps) => {
  const { currentRepresentative, onRepresentativeChange, representatives = [], type = '' } = props;

  return (
    <div className="RepresentativesList__container">
      <h2 className="RepresentativesList__container__title">
        List {representatives.length > 0 ? (
          <span>
            <span>{'/ '}</span>
            <span style={{ color: '#00A6ED' }}>{`${type}`}</span>
          </span>) : null}
      </h2>
      <TableContainer className="RepresentativesList__container__list">
        <Table>
          <TableHead>
            <TableRow className="RepresentativesList__container__list__row__head">
              <TableCell className="RepresentativesList__container__list__row__cell--name">Name</TableCell>
              <TableCell className="RepresentativesList__container__list__row__cell--party">Party</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {representatives.length > 0 ? representatives.map((representative) => {
              return (
                <TableRow
                  className={`RepresentativesList__container__list__row ${currentRepresentative.id === representative.id ? 'current' : ''}`}
                  key={representative.id}
                  onClick={() => onRepresentativeChange(representative)}
                >
                  <TableCell className="RepresentativesList__container__list__row__cell--name">{representative.name}</TableCell>
                  <TableCell className="RepresentativesList__container__list__row__cell--party">{representative.party.charAt(0)}</TableCell>
                </TableRow>
              )
            }) : <div className="RepresentativesList__container__list__row--empty">No data to display at this time.</div>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RepresentativesList;