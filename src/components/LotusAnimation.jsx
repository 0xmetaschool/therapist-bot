'use client';

import React from 'react';

const LotusAnimation = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      
      {/* Center glow */}
      <circle cx="200" cy="200" r="40">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      
      {/* Inner Petals */}
      <g>
        <path d="M200,200 Q220,160 200,120 Q180,160 200,200" fill="#FDB4BF">
          <animate attributeName="d" 
            values="M200,200 Q220,180 200,160 Q180,180 200,200;
                    M200,200 Q230,150 200,100 Q170,150 200,200;
                    M200,200 Q220,180 200,160 Q180,180 200,200"
            dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M200,200 Q240,180 240,140 Q200,160 200,200" fill="#FDB4BF">
          <animate attributeName="d"
            values="M200,200 Q240,180 240,160 Q200,180 200,200;
                    M200,200 Q260,150 260,110 Q200,150 200,200;
                    M200,200 Q240,180 240,160 Q200,180 200,200"
            dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M200,200 Q160,180 160,140 Q200,160 200,200" fill="#FDB4BF">
          <animate attributeName="d"
            values="M200,200 Q160,180 160,160 Q200,180 200,200;
                    M200,200 Q140,150 140,110 Q200,150 200,200;
                    M200,200 Q160,180 160,160 Q200,180 200,200"
            dur="4s" repeatCount="indefinite" />
        </path>
      </g>
      
      {/* Outer Petals */}
      <g>
        <path d="M200,200 Q220,140 200,80 Q180,140 200,200" fill="#F687B3">
          <animate attributeName="d"
            values="M200,200 Q220,160 200,120 Q180,160 200,200;
                    M200,200 Q230,130 200,60 Q170,130 200,200;
                    M200,200 Q220,160 200,120 Q180,160 200,200"
            dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M200,200 Q260,160 280,100 Q200,140 200,200" fill="#F687B3">
          <animate attributeName="d"
            values="M200,200 Q260,160 280,120 Q200,160 200,200;
                    M200,200 Q280,130 300,70 Q200,130 200,200;
                    M200,200 Q260,160 280,120 Q200,160 200,200"
            dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M200,200 Q140,160 120,100 Q200,140 200,200" fill="#F687B3">
          <animate attributeName="d"
            values="M200,200 Q140,160 120,120 Q200,160 200,200;
                    M200,200 Q120,130 100,70 Q200,130 200,200;
                    M200,200 Q140,160 120,120 Q200,160 200,200"
            dur="4s" repeatCount="indefinite" />
        </path>
      </g>
      
      {/* Outermost Petals */}
      <g>
        <path d="M200,200 Q220,120 200,40 Q180,120 200,200" fill="#DB2777">
          <animate attributeName="d"
            values="M200,200 Q220,140 200,80 Q180,140 200,200;
                    M200,200 Q230,110 200,20 Q170,110 200,200;
                    M200,200 Q220,140 200,80 Q180,140 200,200"
            dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M200,200 Q280,140 320,60 Q200,120 200,200" fill="#DB2777">
          <animate attributeName="d"
            values="M200,200 Q280,140 320,80 Q200,140 200,200;
                    M200,200 Q300,110 340,30 Q200,110 200,200;
                    M200,200 Q280,140 320,80 Q200,140 200,200"
            dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M200,200 Q120,140 80,60 Q200,120 200,200" fill="#DB2777">
          <animate attributeName="d"
            values="M200,200 Q120,140 80,80 Q200,140 200,200;
                    M200,200 Q100,110 60,30 Q200,110 200,200;
                    M200,200 Q120,140 80,80 Q200,140 200,200"
            dur="4s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
};

export default LotusAnimation;