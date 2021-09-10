import { useEffect } from 'react';
import { USA_DEMOGRAPHICS_LAYER_ID } from 'components/layers/UsaDemographicsLayer';
import storesSource from 'data/sources/storesSource';
import usaDemographicsSource from 'data/sources/usaDemographicsSource';
import { STORES_LAYER_ID } from 'components/layers/StoresLayer';
import { useDispatch } from 'react-redux';
import { addLayer, removeLayer, addSource, removeSource } from '@carto/react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { Divider } from '@material-ui/core';
import { AggregationTypes } from '@carto/react-core';
import { FormulaWidget, CategoryWidget } from '@carto/react-widgets';
import { currencyFormatter } from 'utils/formatter';

const useStyles = makeStyles(() => ({
  stores: {},
}));

export default function Stores() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(addSource(storesSource));
    dispatch(addSource(usaDemographicsSource));
    dispatch(
      addLayer({
        id: USA_DEMOGRAPHICS_LAYER_ID,
        source: usaDemographicsSource.id,
      })
    );

    dispatch(
      addLayer({
        id: STORES_LAYER_ID,
        source: storesSource.id,
      })
    );

    return () => {
      dispatch(removeLayer(STORES_LAYER_ID));
      dispatch(removeLayer(USA_DEMOGRAPHICS_LAYER_ID));
      dispatch(removeSource(storesSource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect

  return (
    <Grid container direction='column' className={classes.stores}>
      <Grid item>
        <div>
          <FormulaWidget
            id='totalRevenue'
            title='Total revenue'
            dataSource={storesSource.id}
            column='revenue'
            operation={AggregationTypes.SUM}
            formatter={currencyFormatter}
          />

          <Divider />

          <CategoryWidget
            id='revenueByStoreType'
            title='Revenue by store type'
            dataSource={storesSource.id}
            column='storetype'
            operationColumn='revenue'
            operation={AggregationTypes.SUM}
            formatter={currencyFormatter}
          />
        </div>
      </Grid>
    </Grid>
  );
}
