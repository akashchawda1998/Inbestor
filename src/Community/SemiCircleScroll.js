import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

const TurtleStorySection = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      { scaleY: 0.8 },
      {
        scaleY: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="turtle-section">
      <div className="turtle-content">
        <h2>
          <span className="highlight">Inspiration</span> – The Turtle Trading Story
        </h2>
        <p>
          In the 1980s, trading legend Richard Dennis launched an experiment that changed how the world viewed trading forever.
          He believed great traders aren’t born—they’re trained. To prove it, he mentored a small group with no prior trading
          experience. They became known as the <strong>“Turtles”</strong>, and many went on to become wildly successful traders — some even managing millions in capital independently.
        </p>
        <p>
          This bold belief in structured mentorship, discipline, and community is what inspired us to create <strong>INVESTORS</strong> — a trading tribe where anyone with the right mindset and commitment can thrive.
        </p>
        <p>
          Just like the Turtles, all you need is the <strong className="underline">right direction, consistent guidance, and structure</strong> — and you too can become a successful trader.
        </p>
      </div>
    </section>
  );
};

export default TurtleStorySection;
