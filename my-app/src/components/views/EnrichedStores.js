import { useEffect } from 'react';
import enrichedStoresSource from 'data/sources/enrichedStoresSource';
import { ENRICHED_STORES_LAYER_ID } from 'components/layers/EnrichedStoresLayer';
import { useDispatch } from 'react-redux';
import { addLayer, removeLayer, addSource, removeSource } from '@carto/react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { AggregationTypes } from '@carto/react-core';
import { HistogramWidget } from '@carto/react-widgets';

const useStyles = makeStyles(() => ({
  enrichedStores: {},
}));

export default function EnrichedStores() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(addSource(enrichedStoresSource));

    dispatch(
      addLayer({
        id: ENRICHED_STORES_LAYER_ID,
        source: enrichedStoresSource.id,
      })
    );

    return () => {
      dispatch(removeLayer(ENRICHED_STORES_LAYER_ID));
      dispatch(removeSource(enrichedStoresSource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect

  return (
    <Grid container direction='column' className={classes.enrichedStores}>
      <Grid item>
        <div>
          <HistogramWidget
              id='populationByStore'
              title='Store clusters by population'
              dataSource={enrichedStoresSource.id}
              ticks={[2000,5000,10000,20000]}
              column='population'
              operation={AggregationTypes.SUM}
            />
        </div>
      </Grid>
    </Grid>
  );
}
