export const state = () => ({
  openIds: []
});

export const mutations = {
  set_openids(state, ids) {
    state.openIds = ids;
  }
};



export const getters = {
  OPENIDS: state => {
    return state.openIds;
  }
};

export const actions = {
  SET_OPENIDS(state, payload) {
    state.commit("set_openids", payload);
  }
};
