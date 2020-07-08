import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

import { makeStyles } from '@material-ui/core/styles';

import { useQuery } from '../hooks/useQuery';

type Rating = {
  Source: string;
  Value: string;
};

interface RatingsProps {
  Ratings: Rating[];
}

const useStyles = makeStyles({
  mainLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  filterCategory: {
    margin: '17px 0',
    maxHeight: 180,
    overflow: 'hidden',
  },
  filterLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  filterInput: {
    alignItems: 'center',
    display: 'flex',
    margin: '0 0 10px 5px',
  },
  chkBox: {
    height: 20,
    marginRight: 10,
    width: 20,
  },
});

export const Facets: React.FC = () => {
  const classes = useStyles();
  const { buildQuery } = useQuery();

  const [facets, setFacets] = useState([]);

  useEffect(() => {
    const getFacets = async () => {
      const res = await fetch('/api/facets');
      const props = await res.json();

      setFacets(props);
    };

    getFacets();
  }, []);

  const renderFacets = () => {
    const filters = [];

    for (const key in facets) {
      for (const filter in facets[key].filters) {
        const cat = [];
        const catLabel =
          facets[key].label === 'Movies'
            ? facets[key].filters[filter].label
            : facets[key].label;

        cat.push(<div className={classes.mainLabel}>{catLabel}</div>);

        facets[key].filters[filter].values.map((filter) => {
          cat.push(
            <div className={classes.filterInput}>
              <input
                type="checkbox"
                className={classes.chkBox}
                value={filter.label}
                name={catLabel}
                onChange={(e) => buildQuery(e)}
              />
              <label
                className={classes.filterLabel}
              >{`${filter.label} (${filter.count})`}</label>
            </div>
          );
        });
        filters.push(<div className={classes.filterCategory}>{cat}</div>);
      }
    }

    return filters;
  };

  return <>{renderFacets()}</>;
};
