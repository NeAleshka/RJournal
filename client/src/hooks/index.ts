import {useEffect, useState} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppState} from "@/redux/store";

export const useDeviceSize = () => {
  const [width, setWidth] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width;
};

export const useAppDispatch=()=>useDispatch<AppDispatch>()

export const useAppSelector:TypedUseSelectorHook<AppState>=useSelector