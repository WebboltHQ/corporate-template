import React from 'react';

import classes from '../config/classes';
import H1 from './H1';

const Hero = () => {
  return (
    <section className={`${classes.wrapper} text-gray-700 body-font`}>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div className="text-center lg:w-2/3 w-full">
          <H1>Microdosing synth tattooed vexillologist</H1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust
            fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
            meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;