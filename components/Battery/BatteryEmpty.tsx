import React from "react";

interface BatteryProps {
  onClick: () => void;
  disabled?: boolean;
}

const BatteryEmpty: React.FC<BatteryProps> = ({ onClick }) => {
  return (
    <div className="w-8 h-12" onClick={onClick}>
      <svg
        width="32"
        height="45"
        viewBox="0 0 32 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M27.4248 5.11167L30.8555 3.89078V42.0169H0.5V3.87891L7.14734 6.12558L7.20917 6.14648L7.2743 6.15081L15.3789 6.68898L15.4115 6.69115L15.4441 6.68905L23.8145 6.15087L23.8693 6.14735L23.9221 6.13199L27.3969 5.12069L27.411 5.11659L27.4248 5.11167Z"
          fill="#787880"
          fill-opacity="0.12"
          stroke="#C4BEBE"
        />
        <ellipse
          cx="15.6778"
          cy="42.48"
          rx="15.6778"
          ry="2.52"
          fill="#787880"
          fill-opacity="0.12"
        />
        <path
          d="M30.8583 42.4579C30.8583 42.4579 30.8582 42.4584 30.8577 42.4594L30.8583 42.4579ZM30.7282 42.3653C30.7971 42.4195 30.8303 42.4579 30.8457 42.48C30.8303 42.5021 30.7971 42.5405 30.7282 42.5947C30.5765 42.7138 30.3219 42.8506 29.9459 42.9935C29.1993 43.2772 28.0901 43.5423 26.6843 43.7682C23.8806 44.2189 19.989 44.5 15.6778 44.5C11.3666 44.5 7.47492 44.2189 4.67126 43.7682C3.26547 43.5423 2.15622 43.2772 1.40966 42.9935C1.03368 42.8506 0.779027 42.7138 0.627376 42.5947C0.558449 42.5405 0.525261 42.5021 0.509815 42.48C0.525261 42.4579 0.558449 42.4195 0.627376 42.3653C0.779027 42.2462 1.03368 42.1094 1.40966 41.9665C2.15622 41.6828 3.26547 41.4177 4.67126 41.1917C7.47492 40.7411 11.3666 40.46 15.6778 40.46C19.989 40.46 23.8806 40.7411 26.6843 41.1917C28.0901 41.4177 29.1993 41.6828 29.9459 41.9665C30.3219 42.1094 30.5765 42.2462 30.7282 42.3653ZM0.497245 42.4579C0.497278 42.4579 0.497488 42.4584 0.49778 42.4594L0.497245 42.4579ZM0.497245 42.5021C0.497213 42.5021 0.497359 42.5016 0.497781 42.5005L0.497245 42.5021ZM30.8577 42.5005C30.8582 42.5016 30.8583 42.5021 30.8583 42.5021L30.8577 42.5005Z"
          stroke="#787880"
          stroke-opacity="0.12"
        />
        <path
          d="M0.563296 3.57991V3.49485L0.535171 3.41458C0.476967 3.24846 0.492495 3.11564 0.570505 2.97759C0.66024 2.81878 0.848541 2.62988 1.18304 2.42839C1.85334 2.02464 2.94754 1.66614 4.38955 1.37285C7.25649 0.789745 11.3097 0.5 15.5789 0.5C19.837 0.5 23.7426 0.898635 26.5703 1.53628C27.9882 1.85601 29.108 2.22994 29.8612 2.62841C30.2383 2.82791 30.4992 3.02103 30.6601 3.19645C30.8187 3.36928 30.855 3.49549 30.855 3.57991C30.855 3.66433 30.8187 3.79054 30.6601 3.96337C30.4992 4.13879 30.2383 4.33191 29.8612 4.53141C29.108 4.92988 27.9882 5.30381 26.5703 5.62354C23.7426 6.26119 19.837 6.65982 15.5789 6.65982C11.3206 6.65982 7.48125 6.26116 4.72012 5.62409C3.33555 5.30463 2.24964 4.93135 1.52203 4.53444C1.15798 4.33584 0.90712 4.14386 0.752596 3.96963C0.60083 3.7985 0.563296 3.67034 0.563296 3.57991Z"
          fill="white"
          stroke="#C4BEBE"
        />
        <ellipse
          cx="15.7428"
          cy="3.59999"
          rx="4.11534"
          ry="0.99"
          fill="#EBEBEB"
        />
        <ellipse
          cx="15.7428"
          cy="3.015"
          rx="3.07018"
          ry="0.765"
          fill="#C4BEBE"
        />
        <rect
          x="12.6726"
          y="1.44"
          width="6.14035"
          height="1.71"
          fill="#C4BEBE"
        />
        <ellipse
          cx="15.7428"
          cy="1.39499"
          rx="3.07018"
          ry="0.855"
          fill="#EBEBEB"
        />
        <rect
          x="7.01187"
          y="16.38"
          width="16.802"
          height="11.52"
          fill="url(#pattern0_2_206)"
        />
        <defs>
          <pattern
            id="pattern0_2_206"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2_206"
              transform="matrix(0.0078125 0 0 0.0113946 0 -0.229255)"
            />
          </pattern>
          <image
            id="image0_2_206"
            width="128"
            height="128"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default BatteryEmpty;
