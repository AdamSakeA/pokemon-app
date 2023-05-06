import axios from "axios";
import configUrl from "./config";

// API url
const Api = axios.create({
  baseURL: configUrl.baseURL,
  headers: { "Content-Type": "application/json" },
});

export const getPokemonSkills = async () => {
  try {
    const response = await Api.get(`/type/`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPokemonList = async (
  endpoint = `/pokemon?limit=20&offset=$0`
) => {
  try {
    const response = await Api.get(endpoint);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPokemonByTypes = async (type) => {
  try {
    const response = await Api.get(`/type/${type}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPokemonBySearch = async (name) => {
  try {
    const response = await Api.get(`/pokemon/${name}/`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPokemonAbility = async (ability) => {
  try {
    const response = await Api.get(`/ability/${ability}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPokemonSpecies = async (name) => {
  try {
    const response = await Api.get(`pokemon-species/${name}/`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPokemonEvolution = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
