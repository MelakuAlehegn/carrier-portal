import { createStore } from 'vuex';

export default createStore({
  state: {
    educationFormData: {},
    experienceFormData: {},
    formThreeData: {},
    formOneData: {}
  },
  mutations: {
    updateEducationFormData(state, payload) {
      state.educationFormData = { ...state.educationFormData, ...payload };
    },
    updateExperienceFormData(state, payload) {
      state.experienceFormData = { ...state.experienceFormData, ...payload };
    },
    updateFormThreeData(state, payload) {
      state.formThreeData = { ...state.formThreeData, ...payload };
    },
    updateFormOneData(state, payload) {
      state.formOneData = { ...state.formOneData, ...payload };
    },
  },
  actions: {
    saveEducationFormData({ commit }, formData) {
      commit('updateEducationFormData', formData);
    },
    saveExperienceFormData({ commit }, formData) {
      commit('updateExperienceFormData', formData);
    },
    saveFormThreeData({ commit }, formData) {
      commit('updateFormThreeData', formData);
    },
    saveFormOneData({ commit }, formData) {
      commit('updateFormOneData', formData);
    },
  },
});
