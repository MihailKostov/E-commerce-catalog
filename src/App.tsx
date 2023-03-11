import { useCallback, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { SearchContext } from './variables/contexts';
import { Homepage } from './Pages/Homepage';
import { CatalogePage } from './Pages/CatalogePage';
import { Header } from './Components/Header';
import { Favorites } from './Pages/Favorites';
import { Cart } from './Pages/Cart';
import { ProductPage } from './Pages/ProductPage';
import { debounce } from './helpers/debounce';
import { Footer } from './Components/Footer';
import { PageNotFound } from './Pages/PageNotFound';
import './App.scss';

const App = () => {
  const [query, setQuery] = useState<string>('');
  const [isSearchVisible, setSearchVisible] = useState<boolean>(true);
  const [placeholder, setPlaceholder] = useState<string>('');
  const [appliedQuery, setAppliedQuery] = useState<string>('');

  const applyQuery = useCallback(
    debounce(setAppliedQuery, 500), [],
  );

  return (
    <Provider store={store}>
      <SearchContext.Provider
        value={{
          query,
          setQuery,
          isSearchVisible,
          setSearchVisible,
          setPlaceholder,
          placeholder,
          setAppliedQuery,
          appliedQuery,
          applyQuery,
        }}
      >
        <PersistGate loading={null} persistor={persistor}>
          <div className="page__content">
            <Header />

            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path=":id" element={<ProductPage />} />
              <Route path="phones">
                <Route index element={<CatalogePage product="phones" />} />

                <Route path=":id" element={<ProductPage />} />
              </Route>

              <Route path="accessories">
                <Route index element={<CatalogePage product="accessories" />} />
                <Route path=":id" element={<ProductPage />} />
              </Route>

              <Route path="tablets">
                <Route index element={<CatalogePage product="tablets" />} />
                <Route path=":id" element={<ProductPage />} />
              </Route>

              <Route path="favourites">
                <Route index element={<Favorites />} />
              </Route>

              <Route path="cart">
                <Route index element={<Cart />} />
              </Route>
            </Routes>

            <Footer />
          </div>
        </PersistGate>
      </SearchContext.Provider>
    </Provider>
  );
};

export default App;
