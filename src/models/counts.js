const defaultState = {
  user: { name: 'admin' }
}

export default {
  state: defaultState,
  reducers: {
    updateUser(state, { payload }) {
      return { ...state, user: payload }
    }
  }
}