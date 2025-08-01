
import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Muna Style Me Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253720.25650427!2d6.876200284668138!3d6.137672606205637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10439679b4e228cd%3A0xf4978263887e3a0b!2sAnambra%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
