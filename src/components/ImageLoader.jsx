'use client';
import { useState } from 'react';
import Image from 'next/image';
import './styles/ImageLoader.css';

export default function ImageLoader({ src, alt, width, height, className = '', priority = false }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`image-loader-wrapper ${className}`}>
      {loading && <div className="image-skeleton"></div>}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`image-loader ${loading ? 'loading' : 'loaded'} ${className}`}
        priority={priority}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
