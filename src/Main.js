import * as React from "react";

import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import "./main.scss";
import plant from "./icons/plant.svg";
import factory from "./icons/factory.svg";
import warehouse from "./icons/warehouse.svg";
export default function Main() {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  return (
    <div className="hero">
      <div className="BMC">
        <img src={plant} className="BMC-img" alt="BMC" />
        <div className="card">
          <h1>BMC</h1>
          <div className="section">
            <p>Recieved On:</p>
            <ul>
              <li>231032</li>
              <li>23131</li>
            </ul>
          </div>

          <div className="section2">
            <p>Dispatched On:</p>
            <ul>
              <li>23103sd2</li>
              <li>231sds31</li>
            </ul>
          </div>
        </div>
      </div>
      <svg className="progress-icon" viewBox="0 0 80 80">
        <motion.path
          fill="none"
          strokeWidth="1"
          stroke="black"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1,
          }}
        />
      </svg>

      <div className="factory">
        <img src={factory} className="plant" alt="plant" />
        <div className="card2">
          <h1>Plant</h1>
          <div className="section3">
            <p>Recieved On:</p>
            <ul>
              <li>231032</li>
              <li>23131</li>
            </ul>
          </div>

          <div className="section4">
            <p>Dispatched On:</p>
            <ul>
              <li>23103sd2</li>
              <li>231sds31</li>
            </ul>
          </div>
        </div>
      </div>
      <svg className="progress-icon2" viewBox="0 0 80 80">
        <motion.path
          fill="none"
          strokeWidth="1"
          stroke="black"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1,
          }}
        />
      </svg>
      <div className="warehouse">
        <img src={warehouse} className="dispatch" alt="warehouse " />
        <div className="card3">
          <h1>Warehouse</h1>
          <div className="section5">
            <p>Recieved On:</p>
            <ul>
              <li>231032</li>
              <li>23131</li>
            </ul>
          </div>

          <div className="section6">
            <p>Dispatched On:</p>
            <ul>
              <li>23103sd2</li>
              <li>231sds31</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
