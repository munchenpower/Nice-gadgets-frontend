import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

const ImgComponent = ({ src }: { src: string }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgSize = '320px';

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div>
      <div style={{ display: imgLoaded ? 'none' : 'inline' }}>
        <Blurhash
          hash="LuP%9hxt%Lxtt7j@j@oe_LRkM|Rk"
          width={imgSize}
          height={imgSize}
          resolutionX={128}
          resolutionY={128}
          punch={1}
        />
      </div>

      <img
        src={src}
        alt="Page Not Found"
        style={{
          display: !imgLoaded ? 'none' : 'inline',
          width: imgSize,
          height: imgSize
        }}
      />
    </div>
  );
};

export default ImgComponent;
