'use client'

import React from 'react'
import Script from "next/script";
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useEffect, useRef } from "react";
import { Coordinates } from '@/types/mylounge/store';
import { NaverMap } from '@/types/mylounge/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from '../hooks/useMap';

const SsgMap = () => {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
      const mapOptions = {
          center: new window.naver.maps.LatLng(INITIAL_CENTER),
          zoom: INITIAL_ZOOM,
          minZoom: 9,
          scaleControl: false,
          mapDataControl: false,
          logoControlOptions: {
              position: naver.maps.Position.BOTTOM_LEFT,
          },
      };
      //새로운 네이버 맵 인스턴스 생성 
      const map = new window.naver.maps.Map('ssgmap', mapOptions);
      mapRef.current = map;

      // if (onLoad) {
      //     onLoad(map);
      // }

      // fetch함수
      // const session = useSession()
      // const [places, setPlaces] = useState([]);

      // const token=session.data?.user.token
      // console.log(token)
      //   const getFetch = async () => {
      //     try {
      //         await fetch('http://15.164.17.12:8001/api/v1/store/map',{
      //           method:'GET',
      //           headers:{
      //             "Content-Type": "application/json",
      //             "Authorization": `Bearer ${token}`
      //           }
      //         })
      //         .then(response=>response.json())
      //         .then((data) => {
      //           setPlaces(data);
      //         })
              
      //         // (data=>console.log(data));
              
      //       } catch (error) {
      //           console.log(error);
      //           return
      //     }
      //   }


          // maker 찍는 함수
          
    const position = new naver.maps.LatLng(35.169870, 129.128285);

    const markerOptions = {
      position: position,
      map: mapRef.current,
      icon: {
          url: '/images/mylounge/mkshin.png',
          size: new naver.maps.Size(80, 100),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(15, 15)
      }
  };
  
  var contentString = [
    '<div class="iw_inner" style="padding: 10px;">',
    '   <h3 style="font-size: 13px; font-weight: 600;">서울특별시청</h3>',
    '   <p style="color: #767676; font-size: 12px;">부산시 해운대구 우동</p>',
    '</div>'
].join('');

    const marker = new naver.maps.Marker(markerOptions);
  
    var infowindow = new naver.maps.InfoWindow({

      content: contentString,
  
      maxWidth: 140,
      backgroundColor: "white",
      borderColor: "#ea035c",
      borderWidth: 2,
      anchorSize: new naver.maps.Size(10, 3),
      anchorSkew: true,
      anchorColor: "white",
      pixelOffset: new naver.maps.Point(10, -5),
      
  });

  naver.maps.Event.addListener(marker, "click", function(e) {
      if (infowindow.getMap()) {
          infowindow.close();
      } else {
          infowindow.open(map, marker);
      }
    });
  };


  
  //맵이 unmount되었을 때 맵 인스턴스 destory하기 
  useEffect(() => {
      return () => {
          mapRef.current?.destroy();
      };
  }, []);

  // makerwindow

  return (
      <>
          <Script
              strategy="afterInteractive"
              type = "text/javascript"
              src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=szhuj44cwv"
              onReady = {initializeMap}
          />
          <div id = {'ssgmap'} className='w-full h-[800px]'/>
      </>
  )
}

export default SsgMap

/* import React from 'react'
import Script from 'next/script';

function findstore() {
    new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
});

  return (
    <div className='mt-[106px]'>
      <Script strategy="beforeInteractive" type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=szhuj44cwv" />
      <div id="map" className="w-full h-[280px]" />
    </div>
  )
}

export default findstore */
