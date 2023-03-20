import React from "react";
import logo from "../src/images/logo.png";

const Domain = () => {
  return (
    <>
     

      <div class="box">
        <div class="container">
          <main class="grid">
            <article>
              <div class="text">
                <h3>🛠️ Mechanical</h3>

                <p  class="pt-2 ">
                  The mechanical domain in engineering involves the design,
                  development, and testing of mechanical systems and components.
                  This includes the creation of mechanical parts and structures,
                  as well as the use of various materials and manufacturing
                  processes to produce those parts. The key responsibilities in
                  this domain include analyzing mechanical systems, developing
                  and testing prototypes, and ensuring that mechanical
                  components meet design specifications and performance
                  requirements
                </p>
              </div>
            </article>

            <article>
              <div class="text">
                <h3>⚡ Electrical</h3>
                <p class="pt-2">
                In electrical domain we design the onboard computer and decide
                which sensors should be used to collect data about the craft or
                environment around it.Designing the CubeSat's power system,
                including the selection of batteries, solar panels, and power
                management units.Integrating and testing the CubeSat's
                communication systems, including the antennas, transceivers, and
                modems.Participating in the testing and verification of the
                CubeSat, including ground and flight tests.
                </p>
              </div>
            </article>
            <article>
              <div class="text">
                <h3>💡 Instrumentation</h3>
                <p class="pt-2">
                Our instrumentation domain basically focuses on sensors , i.e
                what sensors would be appropriate and produce most effective
                results considering payload, atmosphere and space. After
                consideration of sensors,our work is to design and optimise
                appropriate payload and along with these tasks our work is to
                testing and implementation of all this.deals with the sensors
                and the members associated with this domain are exposed to the
                interfacing of different sensors & it's current technology.
                </p>
              </div>
            </article>
            <article>
              <div class="text">
                <h3>🛰️ Telecommunication</h3>
                <p>
                We will be mainly focus on three subsystems.
                Namely, Sensors, Payload & Science. Sensor people will be
                finding appropriate sensors, to collect data from the space
                environment and how relay it back to earth so we can process and
                use that data. Payload people will be researching and deciding
                our aim in LEO so we can contribute to science. it will be
                an outcome of our mission after a successful launch into LEO.
                </p>
              </div>
            </article>

            <article>
              <div class="text">
                <h3>💻 Software</h3>
                <p>
                Designing and developing software for the CubeSat's on-board
                computer, which is responsible for controlling various systems
                such as communications, power, and attitude control.Implementing
                telemetry and telecommand protocols to allow ground stations to
                communicate with the CubeSat.Documenting software design and
                implementation to ensure that the code can be easily maintained
                and modified by future team members
                </p>
              </div>
            </article>
            <article>
              <div class="text">
                <h3>📡 GN&C</h3>
                <p>
                The Guidance, Navigation, and Control Subsystem people will be
                responsible for controlling the position, trajectory, and
                attitude (i.e., orientation) of the satellite. GN&C will also be
                responsible for Orbit maneuvers, Simulation & Failure mode
                analysis. ADCS’s main motive will be to keep all subsystems on
                board in operational mode by taking entry as sensor data and
                output as actuators.it control the balance and minimize the effect of vibration.
                </p>
              </div>
            </article>

           
          </main>
        </div>
      </div>
    </>
  );
};
export default Domain;
