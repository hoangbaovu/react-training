import React from 'react';

export default function({
  src,
  width = 300,
  height = 200
}) {
  return (
    <div 
        className="AwesomeImage"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: `url("${src}") center cover`,
          borderRadius: "8px"
        }}>
    </div>
  )
}