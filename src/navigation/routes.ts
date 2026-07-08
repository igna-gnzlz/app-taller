import { Href } from "expo-router";

export const ROUTES = {
  HOME: "/", // /(tabs)/index
  TABS_FAVS: "/favoritos",
  TABS_CLASES: "/clases",
  ALIMENTO: "/alimento",
  CATEGORIA: "/categories/[nombre]",
  MARCA: "/brands/[nombre]",
  ETIQUETA: "/labels/[nombre]",
  LISTA_FLATLIST: "/ejemplos/lista-flatlist",
  SIMPLE_STATE: "/ejemplos/simple-state",
  INPUT_FILTER: "/ejemplos/input-filter",
  FETCH_INDEX: "/ejemplos/fetch",
  IMAGEN_GRADIENTE: "/ejemplos/imagen-gradientes",
  CAMARA: "/ejemplos/camara",
  PRODUCTO: "/productos/[id]",
} as const;

// Este tipo se construye tomando el objeto ROUTES, obteniendo sus claves con `keyof`
// y luego usando esas claves para formar la union de todos sus valores literales.
export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
type RouteParams = Record<string, string | number | boolean | undefined>;

export const buildRoute = (route: AppRoute, params?: RouteParams): Href => {
  if (!params) {
    return route as Href;
  }

  return {
    pathname: route,
    params,
  } as Href;
};
