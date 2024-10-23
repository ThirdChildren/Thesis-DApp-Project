import React from "react";

interface BatteryProps {
  onClick: () => void;
  disabled?: boolean;
}

const Battery: React.FC<BatteryProps> = ({ onClick }) => {
  return (
    <div className="w-8 h-12" onClick={onClick}>
      <svg
        width="32"
        height="44"
        viewBox="0 0 32 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M27.7516 5.39627L31.2409 4.22292V40.6519H0.5V4.21183L7.24514 6.36597L7.30414 6.38481L7.36594 6.38869L15.5702 6.90346L15.601 6.9054L15.6318 6.90353L24.105 6.38875L24.157 6.38559L24.2073 6.37177L27.7248 5.40445L27.7383 5.40073L27.7516 5.39627Z"
          fill="#34C759"
          stroke="#C4BEBE"
        />
        <path
          d="M31.2469 41.0786C31.247 41.0786 31.2467 41.0792 31.2461 41.0803L31.2469 41.0786ZM31.1205 41.0322C31.1688 41.0681 31.1992 41.0963 31.2181 41.1165C31.1992 41.1368 31.1688 41.165 31.1205 41.2008C30.9662 41.3154 30.7069 41.447 30.3248 41.5842C29.5666 41.8564 28.4415 42.1103 27.0175 42.3266C24.1772 42.758 20.2359 43.027 15.8705 43.027C11.505 43.027 7.56371 42.758 4.72343 42.3266C3.29941 42.1103 2.17432 41.8564 1.41616 41.5842C1.03409 41.447 0.774789 41.3154 0.620431 41.2008C0.572144 41.165 0.541711 41.1368 0.522845 41.1165C0.541711 41.0963 0.572144 41.0681 0.620431 41.0322C0.774789 40.9177 1.03409 40.7861 1.41616 40.6489C2.17432 40.3766 3.29941 40.1227 4.72343 39.9064C7.56371 39.475 11.505 39.2061 15.8705 39.2061C20.2359 39.2061 24.1772 39.475 27.0175 39.9064C28.4415 40.1227 29.5666 40.3766 30.3248 40.6489C30.7069 40.7861 30.9662 40.9177 31.1205 41.0322ZM0.494029 41.0786C0.494066 41.0786 0.494363 41.0791 0.494805 41.0803L0.494029 41.0786ZM0.494029 41.1545C0.493991 41.1545 0.494212 41.1539 0.494805 41.1528L0.494029 41.1545ZM31.2461 41.1528C31.2467 41.1539 31.247 41.1545 31.2469 41.1545L31.2461 41.1528Z"
          fill="#34C759"
          stroke="#34C759"
        />
        <path
          d="M0.564074 3.90775V3.81804L0.532884 3.73392C0.478914 3.58837 0.492312 3.47614 0.565979 3.35295C0.654012 3.20574 0.8427 3.02528 1.18375 2.83117C1.86491 2.44347 2.97576 2.09983 4.437 1.819C7.34213 1.26068 11.4476 0.98349 15.7704 0.98349C20.0827 0.98349 24.0388 1.36493 26.9041 1.97546C28.3408 2.28158 29.4767 2.63986 30.2413 3.02211C30.6246 3.21369 30.889 3.39883 31.0512 3.56595C31.2118 3.73134 31.2404 3.84397 31.2404 3.90775C31.2404 3.97153 31.2118 4.08416 31.0512 4.24956C30.889 4.41667 30.6246 4.60182 30.2413 4.7934C29.4767 5.17565 28.3408 5.53392 26.9041 5.84005C24.0388 6.45057 20.0827 6.83202 15.7704 6.83202C11.458 6.83202 7.56879 6.45055 4.77085 5.84055C3.36781 5.53466 2.26616 5.17697 1.52744 4.7962C1.15743 4.60547 0.903355 4.42147 0.747741 4.25568C0.594398 4.0923 0.564074 3.97786 0.564074 3.90775Z"
          fill="white"
          stroke="#C4BEBE"
        />
        <ellipse
          cx="15.9363"
          cy="3.92696"
          rx="4.16593"
          ry="0.946957"
          fill="#EBEBEB"
        />
        <ellipse
          cx="15.9363"
          cy="3.3674"
          rx="3.10791"
          ry="0.731739"
          fill="#C4BEBE"
        />
        <rect
          x="12.8284"
          y="1.86088"
          width="6.21583"
          height="1.63565"
          fill="#C4BEBE"
        />
        <ellipse
          cx="15.9363"
          cy="1.81783"
          rx="3.10791"
          ry="0.817826"
          fill="#EBEBEB"
        />
        <rect
          x="7.09805"
          y="16.1513"
          width="17.0086"
          height="11.0191"
          fill="url(#pattern0_3_520)"
        />
        <defs>
          <pattern
            id="pattern0_3_520"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_3_520"
              transform="matrix(0.0078125 0 0 0.012059 0 -0.271774)"
            />
          </pattern>
          <image
            id="image0_3_520"
            width="128"
            height="128"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default Battery;
