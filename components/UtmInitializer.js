'use client';
import { useEffect } from 'react';
import { initUtmTracking } from '@/lib/utmTracker';

export default function UtmInitializer() {
  useEffect(() => {
    initUtmTracking();
  }, []);

  return null;
}
