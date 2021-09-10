import { useSelector } from 'react-redux';
import { CartoLayer } from '@deck.gl/carto';
import { selectSourceById } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';

export const ENRICHED_STORES_LAYER_ID = 'enrichedStoresLayer';

export default function EnrichedStoresLayer() {
  const { enrichedStoresLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, enrichedStoresLayer?.source));
  const cartoLayerProps = useCartoLayerProps({ source });

  if (enrichedStoresLayer && source) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: ENRICHED_STORES_LAYER_ID,
      getFillColor: [241, 109, 122],
      pointRadiusMinPixels: 2,
      pickable: true,
      onHover: (info) => {
        if (info?.object) {
          info.object = {
            html: htmlForFeature({ feature: info.object }),
            style: {},
          };
        }
      },
    });
  }
}
