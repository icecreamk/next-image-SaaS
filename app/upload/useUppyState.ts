import { useMemo } from 'react'
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector'

export function useUppyState(
    uppy: any,
    selector: any,
) {
    const store = uppy.store
    const subscribe = useMemo(() => store.subscribe.bind(store), [store])
    const getSnapshot = useMemo(() => store.getState.bind(store), [store])
    return useSyncExternalStoreWithSelector(
        subscribe,
        getSnapshot,
        getSnapshot,
        selector,
    )
}