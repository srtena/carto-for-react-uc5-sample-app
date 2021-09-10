import { MAP_TYPES } from '@deck.gl/carto';

const USA_DEMOGRAPHICS_SOURCE_ID = 'usaDemographicsSource';

const source = {
  id: USA_DEMOGRAPHICS_SOURCE_ID,
  type: MAP_TYPES.TILESET,
  connection: 'bqapp',
  data: 'cartodb-on-gcp-pm-team.atena.airports_test_w_geo_tileset',
};

export default source;
