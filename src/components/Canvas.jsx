import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.


export default function Canvas({canvas, className, id}) {

    const [init, setInit] = useState(false);

      // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    
  };
    
  const options = useMemo(
    () => (canvas),
    [],
  )

  if (init) {
    return (
      <Particles
        id={id}
        className={className}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}