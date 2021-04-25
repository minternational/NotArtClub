import React from "react";
import "../../styles/general-styles.css";
import "./art-styles.css";

const Content = () => {
  return (
    <section id="content">
      <div id="foo" className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <h1>“The Last Bell”</h1>
          </div>

          <div className="col-lg-4">
            <p>
              In the year 2021, we see distrust as governments materialize money
              in and out of existence. With little ramification for the future.
              <br />
              <br />
              It's been just over one year since the pandemic struck the world
              in horror. Leaving global households to worry simultaneously about
              how to survive. Small businesses, mental health are also
              casualties of this horrific attack on humanity. Still, somewhere
              on earth, an artist is trying to make a living.
              <br />
              <br />
              For centuries, the sale of art and great intellectual
              property-at-large has been kept behind a gate, guarded by fine art
              galleries and socialites. Hindering our story, culture and history
              from telling it's truth.
              <br />
              <br />
              Art, as subjective as it may be, predates all other asset trade.
              Though the international art market has had many barriers to
              entry. Until now. Undiscovered artists are realizing the shift
              within a new renaissance of global economy.Artists across the
              world are now discovering ways to create opportunity in the middle
              of chaos.
              <br />
              <br />A new decentralized economy is allowing for more trust in
              artists and collectors and less profit in the hands of third
              parties. We can act in mass coordination without being stopped.
            </p>
          </div>
          <div className="col-lg-4">
            <p>
              In a renaissance of ownership, art, economy, undiscovered artists
              are realizing the shift. They can now act in mass coordination
              without being stopped. Bringing every day people to the playing
              field of new economies.
              <br />
              <br />
              While seizing this big new opportunity of togetherness. Our
              artists will inevitably bring some important questions to the
              world.
              <br />
              <br />
              100 emerging artists have seized this new opportunity of unity and
              aim to learn together.
              <br />
              <br />
              In The Last Bell, you will see stories and artwork from 100
              different perspectives around the world, and their feelings about
              money. Each artist, in their unique part of the world, has poured
              insight and heart into every art piece to share this with you.
              <br />
              <br />
              What could we learn about this human concept, through the
              perspectives of 100 people?
              <br />
              <br />
              The Last Bell, a world collaborative effort that brings to light a
              notorious token of wealth, the American $100 bill, to be reflected
              upon before being symbolically incinerated.
            </p>
          </div>
        </div>
        <div className="row scroll-row">
          {/* <div className="col-lg-1">
            <i className="fas fa-long-arrow-alt-down fa-4x"></i>
          </div> */}
          <div className="col-lg-2 scroll-down">
            <h4 id="scroll-down">Scroll down to explore piece</h4>
            <i className="fas fa-long-arrow-alt-down fa-4x"></i>
          </div>
          {/*           <div className="col-lg-1">
            
          </div> */}
          <div className="col-lg-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Content;
