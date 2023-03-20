import { Link, Typography } from '@mui/material';
import './RepresentativeInfo.css';

import type { Representative } from '../../../types/Representative';

type RepresentativeInfoProps = {
  representative: Representative;
};

const RepresentativeInfo = (props: RepresentativeInfoProps) => {
  const { representative } = props;

  const isRepresentativeEmpty = representative && Object.keys(representative).length === 0;

  return (
    <div className="RepresentativeInfo__container">
      <h2 className="RepresentativeInfo__container__title">Info</h2>
      <div className="RepresentativeInfo__container__infoGroup">
        <div className="RepresentativeInfo__container__infoGroup__row">
          <Typography className={isRepresentativeEmpty ? 'empty' : ''}>{representative?.name?.split(' ')[0] || 'First Name'}</Typography>
        </div>
        <div className="RepresentativeInfo__container__infoGroup__row">
          <Typography className={isRepresentativeEmpty ? 'empty' : ''}>
            {/* This is a naive way to determine Last Name... this would be part of the clarifications */}
            {representative?.name?.split(' ')[representative.name.split(' ').length - 1] || 'Last Name'}
          </Typography>
        </div>
        <div className="RepresentativeInfo__container__infoGroup__row">
          <Typography className={isRepresentativeEmpty ? 'empty' : ''}>
            {isRepresentativeEmpty ? 'District' : representative?.district || 'No District Available'}
          </Typography>
        </div>
        <div className="RepresentativeInfo__container__infoGroup__row">
          <Typography className={isRepresentativeEmpty ? 'empty' : ''}>{representative?.phone || 'Phone'}</Typography>
        </div>
        <div className="RepresentativeInfo__container__infoGroup__row">
          <Typography className={isRepresentativeEmpty ? 'empty' : ''}>{representative?.office || 'Office'}</Typography>
        </div>
        <div className="RepresentativeInfo__container__infoGroup__row">
          {!isRepresentativeEmpty
            ? <Link href={representative.link} underline="none" target="_blank" rel="noreferrer">
            {representative.link}
          </Link> : <Typography className={isRepresentativeEmpty ? 'empty' : ''}>Link</Typography>}
        </div>
      </div>
    </div>
  );
};

export default RepresentativeInfo;