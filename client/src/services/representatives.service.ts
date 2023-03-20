import axios from 'axios';

import { Representative } from '../types/Representative';

const getRepresentativesByState = async (state: string) => {
  const representativeResponse = await axios.get(`http://localhost:3000/representatives/${state}`);
  return addIdToRepresentatives(representativeResponse.data.results as Representative[]);
};

const getSenatorsByState = async (state: string) => {
  const senatorResponse = await axios.get(`http://localhost:3000/senators/${state}`);
  return addIdToRepresentatives(senatorResponse.data.results as Representative[]);
};

const addIdToRepresentatives = (representatives: Representative[]) => {
  return representatives.map((representative: Representative, index) => {
    const mappedRepresentative = representative;
    if (!representative.id) mappedRepresentative.id = index;
    return mappedRepresentative;
  });
};

export {
  getRepresentativesByState,
  getSenatorsByState
};