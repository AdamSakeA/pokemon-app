import { rest } from "msw";
import configUrl from "../utils/services/config";
import { mockPokemonTypes } from "./apiMocks";

export const getMockPokemonType = [
  rest.get(`${configUrl.baseURL}/type/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockPokemonTypes));
  }),
];
