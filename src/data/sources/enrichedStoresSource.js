import { MAP_TYPES } from '@deck.gl/carto';

const ENRICHED_STORES_SOURCE_ID = 'enrichedStoresSource';

const source = {
  id: ENRICHED_STORES_SOURCE_ID,
  type: MAP_TYPES.TABLE,
  connection: 'bqapp',
  data: 'cartodb-on-gcp-pm-team.atena.UC5enrichedbuffers-w-geom',
};

export default source;
