


const LinearGradient = (props) => {
  const { id = "fill" } = props || {};

  return (
    <linearGradient id={id}>
      <stop
        offset="0.599964"
        stopColor="var(--color-border-light)"
        stopOpacity={1}
      >
        <animate
          attributeName="offset"
          values="-2; -2; 1"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        />
      </stop>
      <stop
        offset="1.59996"
        stopColor="var(--color-border-dark)"
        stopOpacity={1}
      >
        <animate
          attributeName="offset"
          values="-1; -1; 2"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        />
      </stop>
      <stop
        offset="2.59996"
        stopColor="var(--color-border-light)"
        stopOpacity={1}
      >
        <animate
          attributeName="offset"
          values="0; 0; 3"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        />
      </stop>
    </linearGradient>
  );
};

            
                
            
            
            
            export default LinearGradient;