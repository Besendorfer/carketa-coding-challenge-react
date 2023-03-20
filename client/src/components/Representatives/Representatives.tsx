import { useEffect, useState } from 'react';
import RepresentativeInfo from './RepresentativeInfo/RepresentativeInfo';
import RepresentativesList from './RepresentativesList/RepresentativesList';
import RepresentativesForm from './RepresentativesForm/RepresentativesForm';
import { getRepresentativesByState, getSenatorsByState } from '../../services/representatives.service';
import './Representatives.css';

import type { Representative } from '../../types/Representative';

const Representatives = () => {
  const [currentRepresentative, setCurrentRepresentative] = useState({} as Representative);
  const [representatives, setRepresentatives] = useState([] as Representative[]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const onRepresentativeChange = (representative: Representative) => {
    setCurrentRepresentative(representative);
  };

  const onStateSelectorChange = (state: string) => {
    setSelectedState(state);
  };

  const onTypeSelectorChange = (type: string) => {
    setSelectedType(type);
  };

  useEffect(() => {
    if (selectedState !== '' && selectedType !== '') {
      let getRepresentativesPromise;
      switch(selectedType) {
        case 'Representatives':
          getRepresentativesPromise = getRepresentativesByState(selectedState);
          break;
        case 'Senators':
          getRepresentativesPromise = getSenatorsByState(selectedState);
          break;
        default:
          console.log('Somehow, the type returned was bad. Try again.');
      }

      getRepresentativesPromise?.then((result) => {
        setRepresentatives(result);
        setCurrentRepresentative(result[0]);
      });
    }
  }, [selectedState, selectedType]);

  return (
    <div className="Representatives__container">
      <h1 className="Representatives__container__title">Who's My Representative?</h1>
      <hr className="Representatives__container__hr" />
      <div className="Representatives__container__form">
        <RepresentativesForm
          onStateSelectorChange={onStateSelectorChange}
          onTypeSelectorChange={onTypeSelectorChange}
        />
      </div>
      <div className="Representatives__container__directory">
        <RepresentativesList
          currentRepresentative={currentRepresentative}
          onRepresentativeChange={onRepresentativeChange}
          representatives={representatives}
          type={selectedType}
        />
        <RepresentativeInfo
          representative={currentRepresentative as Representative}
        />
      </div>
    </div>
  );
};

export default Representatives;