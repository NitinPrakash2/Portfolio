import { useEffect, useState } from 'react';

export default function useDeviceOrientation() {
  const [tilt, setTilt] = useState({ gamma: 0, beta: 0 });

  useEffect(() => {
    let mounted = true;

    const handleOrientation = (e) => {
      if (!mounted) return;
      const gamma = e.gamma || 0;
      const beta = e.beta || 0;
      setTilt({ gamma, beta });
    };

    const requestPermission = () => {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then((state) => {
          if (state === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          }
        }).catch(() => {});
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
      }
    };

    const onUserGesture = () => {
      requestPermission();
      document.removeEventListener('touchstart', onUserGesture);
      document.removeEventListener('click', onUserGesture);
    };

    document.addEventListener('touchstart', onUserGesture);
    document.addEventListener('click', onUserGesture);

    return () => {
      mounted = false;
      window.removeEventListener('deviceorientation', handleOrientation);
      document.removeEventListener('touchstart', onUserGesture);
      document.removeEventListener('click', onUserGesture);
    };
  }, []);

  return tilt;
}
