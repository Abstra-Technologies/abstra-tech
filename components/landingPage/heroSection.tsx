"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function VantaWavesHero({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        if (!vantaRef.current) return;

        const initVanta = () => {
            if ((window as any).VANTA?.WAVES) {
                vantaEffect.current = (window as any).VANTA.WAVES({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200,
                    minWidth: 200,
                    scale: 1,
                    scaleMobile: 1,

                    // 🌊 Dark, premium tuning
                    color: 0x020617, // near-black navy
                    shininess: 20,
                    waveHeight: 15,
                    waveSpeed: 0.6,
                    zoom: 0.85,
                });
            }
        };

        const timeout = setTimeout(initVanta, 300);

        return () => {
            clearTimeout(timeout);
            vantaEffect.current?.destroy();
        };
    }, []);

    return (
        <>
            {/* CDN SCRIPTS */}
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
                strategy="afterInteractive"
            />

            {/* VANTA CONTAINER */}
            <section
                ref={vantaRef}
                className="relative overflow-hidden bg-black"
            >
                {/* 🔥 DARK-ONLY READABILITY OVERLAY */}
                <div className="absolute inset-0 bg-black/70" />

                {/* CONTENT */}
                <div className="relative z-10">{children}</div>
            </section>
        </>
    );
}
