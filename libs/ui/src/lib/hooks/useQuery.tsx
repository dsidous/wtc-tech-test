import React, { createContext, useContext, useState } from 'react';

type Event = React.FormEvent<HTMLInputElement>;
type BuildQuery = (e: Event) => void;

interface ContextProps {
  query: string;
  buildQuery: BuildQuery;
}

const QueryContext = createContext<Partial<ContextProps>>({});

export const QueryProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState('');

  const buildQuery = (e: Event) => {
    const { name, value, checked } = e.currentTarget;
    const newQuery = checked ? `${name.toLowerCase()}=${value}` : '';

    setQuery(newQuery);
  };

  const value: ContextProps = {
    query,
    buildQuery,
  };

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};

export const useQuery = () => useContext(QueryContext);
