'use client';
import { useEffect, useState } from 'react';
import './styles/PageLoader.css';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="cssload-box-loading"></div>
        <div className="loader-text">DIGIWAVE...</div>
      </div>
    </div>
  );
}
