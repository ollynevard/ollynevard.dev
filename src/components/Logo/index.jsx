import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

const Logo = ({ background, foreground, size }) => {
  const theme = useTheme();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M231 14.4338C246.47 5.50211 265.53 5.50212 281 14.4338L452.703 113.566C468.173 122.498 477.703 139.004 477.703 156.868V355.132C477.703 372.996 468.173 389.502 452.703 398.434L281 497.566C265.53 506.498 246.47 506.498 231 497.566L59.2975 398.434C43.8274 389.502 34.2975 372.996 34.2975 355.132V156.868C34.2975 139.004 43.8274 122.498 59.2975 113.566L231 14.4338Z"
        fill={background || theme.colors.grey1}
      />
      <path
        d="M253.656 321.068L266.022 326.484L266.048 326.424L266.074 326.364L253.656 321.068ZM238.938 335.468L242.933 348.364L244.134 347.991L245.246 347.404L238.938 335.468ZM228.368 337.582L228.368 324.082L228.368 324.082L228.368 337.582ZM146.429 337.582L146.429 351.082L146.429 351.082L146.429 337.582ZM135.725 335.468L130.424 347.884L130.483 347.909L130.542 347.934L135.725 335.468ZM121.141 321.069L108.723 326.365L108.748 326.425L108.775 326.485L121.141 321.069ZM121.141 191.645L133.507 197.061L133.533 197.001L133.559 196.941L121.141 191.645ZM127.028 183.058L136.337 192.836L136.426 192.751L136.513 192.665L127.028 183.058ZM135.725 177.246L141.026 189.661L141.103 189.629L141.179 189.595L135.725 177.246ZM146.429 175L146.429 161.5H146.429V175ZM228.368 175.002L228.368 188.502H228.368V175.002ZM386.5 337.582L375.782 345.789L379.834 351.081L386.499 351.082L386.5 337.582ZM406.5 175V161.5H379.5V175H406.5ZM262 175L272.718 166.792C270.164 163.456 266.201 161.5 261.999 161.5L262 175ZM393 337.582L392.999 351.082L406.5 351.083V337.582H393ZM253.656 191.515L266.074 186.219L266.048 186.159L266.022 186.099L253.656 191.515ZM238.938 177.116L245.246 165.18L244.134 164.592L242.933 164.22L238.938 177.116ZM242.297 310.5C242.297 312.41 241.939 314.129 241.238 315.773L266.074 326.364C268.227 321.315 269.297 315.988 269.297 310.5H242.297ZM241.29 315.653C240.539 317.366 239.547 318.801 238.284 320.049L257.254 339.262C260.985 335.578 263.918 331.288 266.022 326.484L241.29 315.653ZM238.284 320.049C238.458 319.877 238.312 320.042 237.601 320.539C236.983 320.971 236.229 321.452 235.437 321.931C234.659 322.401 233.933 322.814 233.4 323.111C233.136 323.258 232.927 323.372 232.791 323.446C232.724 323.482 232.675 323.509 232.647 323.523C232.633 323.531 232.625 323.535 232.622 323.537C232.621 323.537 232.621 323.537 232.622 323.537C232.623 323.536 232.624 323.536 232.625 323.535C232.626 323.535 232.627 323.534 232.628 323.534C232.628 323.533 232.629 323.533 232.629 323.533C232.63 323.533 232.631 323.532 238.938 335.468C245.246 347.404 245.246 347.403 245.247 347.403C245.248 347.403 245.249 347.402 245.249 347.402C245.25 347.401 245.252 347.401 245.253 347.4C245.256 347.398 245.26 347.396 245.264 347.394C245.271 347.39 245.28 347.386 245.291 347.38C245.312 347.369 245.34 347.354 245.373 347.336C245.439 347.301 245.529 347.253 245.639 347.193C245.859 347.074 246.165 346.907 246.534 346.702C247.266 346.294 248.279 345.717 249.397 345.042C251.237 343.931 254.733 341.751 257.254 339.262L238.284 320.049ZM238.938 335.468C234.944 322.573 234.945 322.572 234.946 322.572C234.946 322.572 234.947 322.572 234.947 322.571C234.948 322.571 234.949 322.571 234.95 322.57C234.952 322.57 234.953 322.569 234.955 322.569C234.957 322.569 234.957 322.568 234.956 322.569C234.954 322.569 234.946 322.572 234.932 322.576C234.904 322.585 234.853 322.6 234.781 322.621C234.638 322.664 234.414 322.73 234.128 322.811C233.549 322.975 232.75 323.193 231.87 323.407C230.974 323.624 230.096 323.814 229.339 323.942C228.488 324.087 228.208 324.082 228.368 324.082V351.082C232.022 351.082 236.069 350.172 238.246 349.643C239.54 349.328 240.681 349.017 241.499 348.785C241.911 348.668 242.25 348.569 242.494 348.496C242.616 348.46 242.716 348.43 242.789 348.407C242.826 348.396 242.857 348.387 242.881 348.379C242.893 348.376 242.903 348.373 242.912 348.37C242.916 348.369 242.92 348.367 242.924 348.366C242.925 348.366 242.927 348.365 242.928 348.365C242.929 348.365 242.93 348.364 242.931 348.364C242.932 348.364 242.933 348.364 238.938 335.468ZM228.368 324.082L146.428 324.082L146.429 351.082L228.368 351.082L228.368 324.082ZM146.429 324.082C144.423 324.082 142.62 323.715 140.907 323.003L130.542 347.934C135.609 350.04 140.941 351.082 146.429 351.082V324.082ZM141.026 323.053C139.248 322.294 137.777 321.298 136.513 320.049L117.543 339.262C121.274 342.946 125.6 345.825 130.424 347.884L141.026 323.053ZM136.513 320.049C135.249 318.802 134.257 317.367 133.507 315.653L108.775 326.485C110.879 331.288 113.811 335.578 117.543 339.262L136.513 320.049ZM133.559 315.773C132.858 314.129 132.5 312.411 132.5 310.5H105.5C105.5 315.988 106.57 321.315 108.723 326.365L133.559 315.773ZM132.5 310.5V202.082H105.5V310.5H132.5ZM132.5 202.082C132.5 200.171 132.857 198.544 133.507 197.061L108.775 186.229C106.57 191.264 105.5 196.594 105.5 202.082H132.5ZM133.559 196.941C134.306 195.19 135.242 193.878 136.337 192.836L117.719 173.281C113.818 176.995 110.83 181.408 108.723 186.35L133.559 196.941ZM136.513 192.665C137.777 191.417 139.248 190.42 141.026 189.661L130.424 164.83C125.6 166.889 121.274 169.768 117.543 173.452L136.513 192.665ZM141.179 189.595C142.831 188.865 144.539 188.5 146.429 188.5V161.5C140.825 161.5 135.397 162.632 130.27 164.897L141.179 189.595ZM397.218 329.374L272.718 166.792L251.282 183.208L375.782 345.789L397.218 329.374ZM261.999 161.5L228.367 161.502L228.369 188.502L262.001 188.5L261.999 161.5ZM386.499 351.082L392.999 351.082L393.001 324.082L386.501 324.082L386.499 351.082ZM406.5 337.582V175H379.5V337.582H406.5ZM269.297 202.084C269.297 196.596 268.227 191.269 266.074 186.219L241.238 196.811C241.939 198.455 242.297 200.174 242.297 202.084H269.297ZM266.022 186.099C263.918 181.296 260.985 177.006 257.254 173.322L238.284 192.535C239.547 193.782 240.539 195.217 241.29 196.931L266.022 186.099ZM257.254 173.322C254.733 170.832 251.237 168.653 249.397 167.542C248.279 166.866 247.266 166.289 246.534 165.882C246.165 165.676 245.859 165.51 245.639 165.39C245.529 165.331 245.439 165.283 245.373 165.247C245.34 165.229 245.312 165.215 245.291 165.204C245.28 165.198 245.271 165.193 245.264 165.189C245.26 165.187 245.256 165.185 245.253 165.184C245.252 165.183 245.25 165.182 245.249 165.182C245.249 165.181 245.248 165.181 245.247 165.181C245.246 165.18 245.246 165.18 238.938 177.116C232.631 189.051 232.63 189.051 232.629 189.051C232.629 189.051 232.628 189.05 232.628 189.05C232.627 189.049 232.626 189.049 232.625 189.049C232.624 189.048 232.623 189.047 232.622 189.047C232.621 189.046 232.621 189.046 232.622 189.047C232.625 189.048 232.633 189.053 232.647 189.06C232.675 189.075 232.724 189.101 232.791 189.138C232.927 189.211 233.136 189.325 233.4 189.472C233.933 189.769 234.659 190.183 235.437 190.653C236.229 191.131 236.983 191.612 237.601 192.044C238.312 192.541 238.458 192.706 238.284 192.535L257.254 173.322ZM238.938 177.116C242.933 164.22 242.932 164.22 242.931 164.219C242.93 164.219 242.929 164.219 242.928 164.219C242.927 164.218 242.925 164.218 242.924 164.217C242.92 164.216 242.916 164.215 242.912 164.214C242.903 164.211 242.893 164.208 242.881 164.204C242.857 164.197 242.826 164.187 242.789 164.176C242.716 164.154 242.616 164.124 242.494 164.087C242.25 164.014 241.911 163.915 241.499 163.798C240.681 163.566 239.54 163.255 238.246 162.941C236.069 162.411 232.022 161.502 228.368 161.502V188.502C228.208 188.502 228.488 188.497 229.339 188.641C230.096 188.77 230.974 188.959 231.87 189.177C232.75 189.391 233.549 189.608 234.128 189.772C234.414 189.854 234.638 189.919 234.781 189.962C234.853 189.984 234.904 189.999 234.932 190.007C234.946 190.012 234.954 190.014 234.956 190.015C234.957 190.015 234.957 190.015 234.955 190.014C234.953 190.014 234.952 190.014 234.95 190.013C234.949 190.013 234.948 190.013 234.947 190.012C234.947 190.012 234.946 190.012 234.946 190.012C234.945 190.011 234.944 190.011 238.938 177.116ZM228.368 161.502L146.429 161.5L146.428 188.5L228.368 188.502L228.368 161.502ZM269.297 310.5V202.084H242.297V310.5H269.297Z"
        fill={foreground || theme.colors.grey6}
      />
    </svg>
  );
};

Logo.defaultProps = {
  background: null,
  foreground: null,
  size: 100,
};

Logo.propTypes = {
  background: PropTypes.string,
  foreground: PropTypes.string,
  size: PropTypes.number,
};

export default Logo;
