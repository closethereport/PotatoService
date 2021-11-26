/* eslint-disable @typescript-eslint/no-explicit-any */

import { ActionContext, mapActions, mapGetters, mapState } from 'vuex';
import { Promisable, ValueOf } from 'type-fest';

// returns a type which skips the first context argument
type OmitActionContext<F> = F extends (context: ActionContext<any, any>, ...args: infer P) => infer R ? (...args: P) => R : never;

type ActionMethod = (context: ActionContext<any, any>, ...args: any[]) => Promisable<any>;

/** Typed wrapper for mapActions on the root store
 *
 *  NOTE: needs to be called with extra parenthesis to infer map keys correctly
 *
 * @example
 *  mapActionsRoot<TYPE>()(map)
 *
 */
export function mapActionsRoot<S extends Record<keyof S & string, ActionMethod>>(): <Map extends (keyof S & string)[]>(
  map: Map
) => {
  [K in Map[number]]: OmitActionContext<S[K]>;
} {
  return <Map extends (keyof S & string)[]>(map: Map) => mapActions(map) as any;
}

/** Typed wrapper for mapActions using a namespaced store
 *
 *  NOTE: needs to be called with extra parenthesis to infer map keys correctly
 *
 * @example
 *  mapActionsNamespaced<TYPE>()(namespace, map)
 *
 */
export function mapActionsNamespaced<S extends Record<keyof S & string, ActionMethod>>(): <Map extends (keyof S & string)[]>(
  namespace: string,
  map: Map
) => {
  [K in Map[number]]: OmitActionContext<S[K]>;
} {
  return <Map extends (keyof S & string)[]>(namespace: string, map: Map) => mapActions(namespace, map) as any;
}

/** Typed wrapper for mapActions using a namespaced store and renaming the keys
 *
 *  NOTE: needs to be called with extra parenthesis to infer map keys correctly
 *
 * @example
 *  mapActionsNamespacedWithRename<TYPE>()(namespace, map)
 *
 */
export function mapActionsNamespacedWithRename<S extends Record<keyof S & string, ActionMethod>>(): <Map extends Record<string, keyof S & string>>(
  namespace: string,
  map: Map
) => {
  [K in ValueOf<Map> as keyof Map]: OmitActionContext<S[K]>;
} {
  return <Map extends Record<string, keyof S & string>>(namespace: string, map: Map) => mapActions(namespace, map) as any;
}

// returns a type which skips the first state argument
type OmitState<F> = F extends (state: any, ...args: infer P) => infer R ? (...args: P) => R : never;

type GetterAction = (state: any, ...args: any[]) => any;

/** Typed wrapper for mapActions on the root store
 *
 *  NOTE: needs to be called with extra parenthesis to infer map keys correctly
 *
 * @example
 *  mapActionsRoot<TYPE>()(map)
 *
 */
export function mapGettersRoot<S extends Record<keyof S & string, GetterAction>>(): <Map extends (keyof S & string)[]>(
  map: Map
) => {
  [K in Map[number]]: OmitState<S[K]>;
} {
  return <Map extends (keyof S & string)[]>(map: Map) => mapGetters(map) as any;
}

/** Typed wrapper for mapGetters using a namespaced store
 *
 *  NOTE: needs to be called with extra parenthesis to infer map keys correctly
 *
 * @example
 *  mapGettersNamespaced<TYPE>()(namespace, map)
 *
 */
export function mapGettersNamespaced<S extends Record<keyof S & string, GetterAction>>(): <Map extends (keyof S & string)[]>(
  namespace: string,
  map: Map
) => {
  [K in Map[number]]: OmitState<S[K]>;
} {
  return <Map extends (keyof S & string)[]>(namespace: string, map: Map) => mapGetters(namespace, map) as any;
}

/** Typed wrapper for mapGetters using a namespaced store and renaming the keys
 *
 *  NOTE: needs to be called with extra parenthesis to infer map keys correctly
 *
 * @example
 *  mapGettersNamespacedWithRename<TYPE>()(namespace, map)
 *
 */
export function mapGettersNamespacedWithRename<S extends Record<keyof S & string, GetterAction>>(): <Map extends Record<string, keyof S & string>>(
  namespace: string,
  map: Map
) => {
  [K in ValueOf<Map> as keyof Map]: OmitState<S[K]>;
} {
  return <Map extends Record<string, keyof S & string>>(namespace: string, map: Map) => mapGetters(namespace, map) as any;
}

/** Typed wrapper for mapState on the root store
 *
 *  NOTE: needs to be called with extra parenthesis to infer map keys correctly
 *
 * @example
 *  mapStateRoot<TYPE>()(map)
 *
 */
export function mapStateRoot<S extends Record<keyof S & string, any>>(): <Map extends (keyof S & string)[]>(
  map: Map
) => {
  [K in Map[number]]: () => S[K];
} {
  return <Map extends (keyof S & string)[]>(map: Map) => mapState(map) as any;
}

/** Typed wrapper for mapState using a namespaced store
 *
 *  NOTE: needs to be called with extra parenthesis to infer map keys correctly
 *
 * @example
 *  mapStateNamespaced<TYPE>()(namespace, map)
 *
 */
export function mapStateNamespaced<S extends Record<keyof S & string, any>>(): <Map extends (keyof S & string)[]>(
  namespace: string,
  map: Map
) => {
  [K in Map[number]]: () => S[K];
} {
  return <Map extends (keyof S & string)[]>(namespace: string, map: Map) => mapState(namespace, map) as any;
}

/** Typed wrapper for mapState using a namespaced store and renaming the keys
 *
 *  NOTE: needs to be called with extra parenthesis to infer map keys correctly
 *
 * @example
 *  mapStateNamespacedWithRename<TYPE>()(namespace, map)
 *
 */
export function mapStateNamespacedWithRename<S extends Record<keyof S & string, any>>(): <Map extends Record<string, keyof S & string>>(
  namespace: string,
  map: Map
) => {
  [K in ValueOf<Map> as keyof Map]: () => S[K];
} {
  return <Map extends Record<string, keyof S & string>>(namespace: string, map: Map) => mapState(namespace, map) as any;
}
