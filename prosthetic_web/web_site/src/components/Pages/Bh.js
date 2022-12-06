import React from "react";
import iLimb from "./i-Limb.png"
import taska from "./taska.png"
import psyonic from "./psyonic.png"
import ottobock from "./Ottobock.png"
import covvi from "./Covvi.png"

export const Bh = () => {
  return (
    <div>
      <p className = "subtitle">
      Bionic Hands
      </p>
    <div id="etdRow">
    <div id="etdInfoBox">
        <div className ="col">
            <p className = "textBody">
              i-Limb® Quantum
            </p>
            <img className="img-fluid rounded" src={iLimb}/>
            <p className = "textBodySmall">
              Weight: 472g - 553g
            </p>
            <p className = "textBodySmall">
            Sizes: XS - L
            </p>
            <p className = "textBodySmall">
            Grips: 37 grips
            </p>
            <p className = "textBodySmall">
                <a href="https://www.ossur.com/en-us/prosthetics/arms/i-limb-quantum">Learn more...</a>
            </p>
        </div>
    </div>
    <div id="etdInfoBox">
        <div className="col">
            <p className = "textBody">
              TASKA
            </p>
            <img className="img-fluid rounded third_image" src={taska}/>
            <p className = "textBodySmall">
            Weight: 200 g
            </p>
            <p className = "textBodySmall">
            Sizes: S and L
            </p>
            <p className = "textBodySmall">
                <a href='https://www.taskaprosthetics.com/products/taska-hand/'>Learn more...</a>
            </p>
        </div>
    </div>
    <div id="etdInfoBox">
        <div className = "col">
            <p className = "textBody">
            Psyonic  Ability HandTM
            </p>
            <img className="img-fluid rounded" src={psyonic}/>
            <p className = "textBodySmall">
                Weight: 490 g
            </p>
            <p className = "textBodySmall">
                Sizes: One size
            </p>
            <p className = "textBodySmall">
                Grips: 32 grips size
            </p>
            <p className = "textBodySmall">
                <a href='https://www.psyonic.io/ability-hand'>Learn more...</a>
            </p>
        </div>
    </div>
    <div id="etdInfoBox">
        <div className="col">
            <p className = "textBody">
            Ottobock Bebionic
            </p>
            <img className="img-fluid rounded" src={ottobock}/>
            <p class = "textBodySmall">
            Weight: 200 g
            </p>
            <p class = "textBodySmall">
            Sizes: S and M
            </p>
            <p class = "textBodySmall">
            Grips: 14 grips
            </p>
            <p class = "textBodySmall">
                <a href='https://www.ottobock.com/en-us/product/8E70'>Learn more...</a>
            </p>
        </div>
    </div>
    <div id="etdInfoBox">
        <div class="col">
            <p class = "textBody">
            Covvi Hand
            </p>
            <img className="img-fluid rounded bottom-space" src={covvi}/>
            <p class = "textBodySmall">
            Weight: 570g - 620g
            </p>
            <p class = "textBodySmall">
                Sizes: S - L 
            </p>
            <p class = "textBodySmall">
            Grips: 14 grips
            </p>
            <p class = "textBodySmall">
                <a href='https://www.covvi.com/?gclid=CjwKCAjwh4ObBhAzEiwAHzZYU1qMKj9ft1rqGXmYgQQAX01r8DXmfIylKC4sQAch9_UkGCHlpCKQwBoCy4kQAvD_BwE'>Learn more...</a>
            </p>
        </div>
    </div>
    </div>
    </div>
  );
};