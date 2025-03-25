import React from 'react';
import { AlarmCheck } from 'lucide-react';

const RegistrationSuccess = () => {

  const handleWhatsAppRedirect = () => {
    // Open WhatsApp group link in a new tab
    window.open(whatsappGroupLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="formSection w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <AlarmCheck size={64} className="text-green-500" />
        </div>
        
        <h2 className="textGradient text-3xl font-bold mb-4">
          Registration Successful!
        </h2>
        
        <p className="text-white mb-6">
          You've successfully registered for the event. 
          Join our WhatsApp group to stay updated.
        </p>
        
        <button 
          onClick={handleWhatsAppRedirect}
          className="btnPrimary"
        >
    
          Join WhatsApp Group
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;