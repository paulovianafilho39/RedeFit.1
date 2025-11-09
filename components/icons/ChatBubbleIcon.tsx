
import React from 'react';

export const ChatBubbleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.534c-.454.065-.902.193-1.334.371a6.02 6.02 0 0 1-1.606.563c-.431.102-.87.168-1.32.168s-.89-.066-1.32-.168a6.02 6.02 0 0 1-1.606-.563c-.432-.178-.88-.306-1.334-.371l-3.722-.534A2.097 2.097 0 0 1 3 14.894V10.608c0-.97.616-1.813 1.5-2.097L6.6 8.118c.442-.16.902-.28 1.35-.368a6.02 6.02 0 0 1 2.1-.368h.5c.73 0 1.43.143 2.1.368.448.088.908.208 1.35.368l2.1-1.22Z" />
    </svg>
);
