import StoresLayer from './StoresLayer';
import UsaDemographicsLayer from './UsaDemographicsLayer';
import EnrichedStoresLayer from './EnrichedStoresLayer';
// [hygen] Import layers

export const getLayers = () => {
  return [
    StoresLayer(),
    UsaDemographicsLayer(),
    EnrichedStoresLayer(),
    // [hygen] Add layer
  ];
};
