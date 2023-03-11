import React from 'react';

interface SearchContextInterface {
  query: string,
  setQuery: (query: string) => void,
  isSearchVisible: boolean,
  setSearchVisible: (isSearchVisible: boolean) => void,
  placeholder: string,
  setPlaceholder: (placeholder: string) => void,
  appliedQuery: string,
  setAppliedQuery: (appliedQuery: string) => void,
  applyQuery: (query: string) => void,
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const SearchContext = React.createContext<SearchContextInterface>(null!);
