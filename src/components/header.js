import * as React from 'react';
import Fade from 'react-reveal/Fade';
import { useLayoutEffect, useRef, useState } from 'react';
import Balancer from 'react-wrap-balancer'

const Header = () => {
    const ref = useRef(null);
    const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        function updateSize() {
            if (ref.current) {
                const { width } = ref.current.getBoundingClientRect();
                setSvgSize({ width: width , height: width / 8 }); // This will make the svg's height one-tenth of its width, adjust as needed
            }
        }
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return(
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-20 md:py-30 lg:py-40 mt-10 sm:mt-20 md:mt-30 lg:mt-40 flex flex-col items-center space-y-6">
            <h1 className="animate-bounce font-mono" style={{color: 'var(--secondary)'}}><Fade>Hi, my name is</Fade></h1>
            <div className='w-full text-center' ref={ref}>
                <svg
                    style={{ overflow: 'visible' }}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
                >
                    <text x="50%" y='65%' className={`text-4xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ${window.innerWidth < 640 ? 'lg:text-5xl xl:text-6xl 2xl:text-7xl' : ''}`}  textAnchor="middle">Ahmed Mrabet</text>
                </svg>
            </div>
            <h1 className="text-xl font-bold" style={{color: 'var(--secondary)'}}><Fade>I'm an Artificial Intelligence Engineer</Fade></h1>
        </div>
    )
}

export default Header;