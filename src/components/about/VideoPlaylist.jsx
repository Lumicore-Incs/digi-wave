'use client';
import { useState } from 'react';
import './styles/VideoPlaylist.css';

const VIDEOS = [
  {
    id: '28fk0xPBePE',
    title: 'Digi-Wave Highlight 1',
    duration: '02:00',
    thumbnail: 'https://img.youtube.com/vi/28fk0xPBePE/mqdefault.jpg',
  },
  {
    id: '280VQTDgOiI',
    title: 'Digi-Wave Highlight 2',
    duration: '03:15',
    thumbnail: 'https://img.youtube.com/vi/280VQTDgOiI/mqdefault.jpg',
  },
  {
    id: '2tmtsNPaUX8',
    title: 'Digi-Wave Highlight 3',
    duration: '04:30',
    thumbnail: 'https://img.youtube.com/vi/2tmtsNPaUX8/mqdefault.jpg',
  },
  {
    id: 'IAnfNvZwpEI',
    title: 'Digi-Wave Highlight 4',
    duration: '01:45',
    thumbnail: 'https://img.youtube.com/vi/IAnfNvZwpEI/mqdefault.jpg',
  },
  {
    id: 'EfTxWChp3Z0',
    title: 'Digi-Wave Highlight 5',
    duration: '05:20',
    thumbnail: 'https://img.youtube.com/vi/EfTxWChp3Z0/mqdefault.jpg',
  }
];

export default function VideoPlaylist({ onClose, inline }) {
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);

  return (
    <section className={`video-playlist-section ${inline ? 'inline-player' : ''}`}>
      <div className="video-playlist-container">
        <div className="video-player-wrapper">
          {onClose && (
            <button className="close-playlist-btn" onClick={onClose} aria-label="Close player">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          )}
          <iframe
            src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&mute=0`}
            title={activeVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="playlist-wrapper">
          <div className="playlist-header">
            <h3>{activeVideo.title}</h3>
            <span className="playlist-duration">{activeVideo.duration}</span>
          </div>
          <div className="playlist-items">
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className={`playlist-item ${activeVideo.id === video.id ? 'active' : ''}`}
                onClick={() => setActiveVideo(video)}
              >
                <div className="playlist-thumb">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="playlist-thumb-overlay">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="playlist-info">
                  <h4>{video.title}</h4>
                  <span className="duration">{video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
