import {
  createContext, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const defaultStore = {
  closeHeaderHandler: null,
};

/**
 * Step 1: create context
 */
export const AppContext = createContext();

/**
 * Step 2: wrap component
 */
export const CxtProvider = ({
  children,
}) => {
  const [store, setStore] = useState(defaultStore);

  const value = useMemo(() => ({
    store, setStore,
  }), [store]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

CxtProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Step 3: use useCotext
 */
export const useAppContext = () => {
  const cxt = useContext(AppContext);

  return [cxt.store, cxt.setStore];
};