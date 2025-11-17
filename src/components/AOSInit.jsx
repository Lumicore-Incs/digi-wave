'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 120, easing: 'ease-out-cubic' });
  }, []);

  return null;
}
