import { useSelector } from 'react-redux';
import { CartoLayer } from '@deck.gl/carto';
import { selectSourceById } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';

export const USA_DEMOGRAPHICS_LAYER_ID = 'usaDemographicsLayer';

export default function UsaDemographicsLayer() {
  const { usaDemographicsLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, usaDemographicsLayer?.source));
  const cartoLayerProps = useCartoLayerProps({ source });

  if (usaDemographicsLayer && source) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: USA_DEMOGRAPHICS_LAYER_ID,
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
