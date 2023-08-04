import React from 'react';
import './calendlyIntegration.css';

const CalendlyIntegration = () => {
  return (
    <div className='calendly'>
      <iframe
        title='Calendly'
        src='https://calendly.com/audreyalaime/premier-rendez-vous'
        style={{ width: '100%', height: '700px', border: '0' }}
      />
    </div>
  );
}

export default CalendlyIntegration;
