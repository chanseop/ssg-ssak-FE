'use client'

import { useCallback } from 'react';
import useSWR, { mutate } from 'swr';
import type { Coordinates } from '@/types/mylounge/store';
import type { NaverMap } from '@/types/mylounge/map';

export const INITIAL_CENTER: Coordinates = [35.1272411, 129.04289439];
export const INITIAL_ZOOM = 12;

export const MAP_KEY = '/map';

const useMap = () => {
  const { data: map } = useSWR(MAP_KEY);

  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);

  const resetMapOptions = useCallback(() => {
    map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
  }, [map]);

  const getMapOptions = useCallback(() => {
    const mapCenter = map.getCenter();
    const center: Coordinates = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();

    return { center, zoom };
  }, [map]);

  return {
    initializeMap,
    resetMapOptions,
    getMapOptions,
  };
};
export default useMap;