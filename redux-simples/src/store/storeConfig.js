import { configureStore, createSlice } from "@reduxjs/toolkit";

// Criação do slice com estado inicial
const numerosSlice = createSlice({
  name: "numeros",
  initialState: {
    min: 1,
    max: 10,
  },
  reducers: {
    setMin(state, action) {
      state.min = action.payload;
    },
    setMax(state, action) {
      state.max = action.payload;
    },
  },
});

// Exporta as actions para uso em componentes
export const { setMin, setMax } = numerosSlice.actions;

const storeConfig = () =>
  configureStore({
    reducer: {
      numeros: numerosSlice.reducer,
    },
  });

export default storeConfig;
