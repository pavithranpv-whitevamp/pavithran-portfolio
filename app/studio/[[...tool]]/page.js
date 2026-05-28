'use client'

import { useEffect } from 'react';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export const dynamic = 'force-static';


export default function StudioPage() {
  useEffect(() => {
    document.body.classList.add('pv-studio-active');

    return () => {
      document.body.classList.remove('pv-studio-active');
    };
  }, []);

  return (
    <main className="pv-studio-shell">
      <style jsx global>{`
        body.pv-studio-active {
          background: #050507;
          overflow: hidden;
        }

        body.pv-studio-active > nav,
        body.pv-studio-active > footer {
          display: none !important;
        }

        body.pv-studio-active > div.pt-16 {
          padding-top: 0 !important;
        }

        .pv-studio-shell {
          position: fixed;
          inset: 0;
          z-index: 9999;
          min-height: 100vh;
          background:
            linear-gradient(180deg, rgba(217, 164, 65, 0.08), transparent 220px),
            #050507;
          color-scheme: dark;
        }

        .pv-studio-shell [data-ui='LayerProvider'],
        .pv-studio-shell [data-ui='Root'] {
          height: 100%;
          background: transparent;
        }

        .pv-studio-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .pv-studio-logo__mark,
        .pv-workspace-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid rgba(217, 164, 65, 0.55);
          border-radius: 8px;
          background: #0d0f15;
          color: #f2c56f;
          font-size: 12px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: 0;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .pv-studio-logo__copy {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 2px;
        }

        .pv-studio-logo__copy strong {
          color: #f7f2ea;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: 0;
        }

        .pv-studio-logo__copy small {
          color: rgba(247, 242, 234, 0.58);
          font-size: 10px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .pv-studio-shell [data-ui='Card'] {
          border-color: rgba(255, 255, 255, 0.08);
        }

        .pv-studio-shell button,
        .pv-studio-shell a {
          border-radius: 8px;
        }
      `}</style>
      <NextStudio config={config} scheme="dark" />
    </main>
  );
}
