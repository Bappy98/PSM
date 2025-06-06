import React from 'react';

function Loading() {
  return (
  <div className='min-h-[85vh] w-full flex justify-center justify-items-center items-center'>
    <div className='h-24 w-24 font-bold'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a5" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#1447D4"></stop><stop offset=".3" stop-color="#124CDB" stop-opacity=".9"></stop><stop offset=".6" stop-color="#0665F5" stop-opacity=".6"></stop><stop offset=".8" stop-color="#0193FF" stop-opacity=".3"></stop><stop offset="1" stop-color="#00AFFE" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a5)" stroke-width="24" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="1.3" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#0665F5" stroke-width="24" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>
  </div>
  </div>
  );
}

export default Loading;
