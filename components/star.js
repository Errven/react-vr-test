import React from 'react';
import { Sphere, PointLight } from "react-vr";

const randomize = (from, to) => Math.floor(Math.random() * to) + from;

const Star = () => (
    <Sphere
      style={{
        transform: [{
          translate: [
            randomize(-100, 100),
            randomize(-100, 100),
            randomize(-100, 100),
          ],
        }],
      }}
      wireframe
      radius={randomize(0.1, 0.3)}
    >
      <PointLight
        decay={2}
        distance={randomize(1, 5)}
        intensity={randomize(100, 200)}
      />
    </Sphere>
);

export { Star }