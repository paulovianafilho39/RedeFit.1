
import React from 'react';

export const StoreIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A.75.75 0 0 1 14.25 12h.5a.75.75 0 0 1 .75.75V21m-4.5 0v-7.5A.75.75 0 0 1 10.5 12h.5a.75.75 0 0 1 .75.75V21m-4.5 0V15A2.25 2.25 0 0 1 8.25 12.75h7.5A2.25 2.25 0 0 1 18 15v6M3.375 19.5h17.25c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125Z" />
  </svg>
);
