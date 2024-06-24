import { createSlice } from '@reduxjs/toolkit'

const appSettingSlice = createSlice({
  name: 'appSetting',
  initialState: {
    lang: 'en',
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    }
  },

})

export const { changeLang } = appSettingSlice.actions

export default appSettingSlice.reducer