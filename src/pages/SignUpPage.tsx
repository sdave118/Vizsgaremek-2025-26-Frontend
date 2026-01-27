import { ArrowLeft } from "lucide-react";
import Silk from "../components/Silk";
import Stepper, { Step } from "../components/Stepper";

const SignUpPage = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Silk
          speed={2.5}
          scale={0.8}
          color="#6b9080"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <section className="absolute pt-10 pl-10">
        <ArrowLeft className="b-white size-10 rounded-full border p-1 text-black transition-all duration-300 hover:size-15 md:text-white" />
      </section>

      <section className="absolute bottom-0 left-0 pb-10 pl-10 text-5xl text-black italic md:text-white">
        NutriLife
      </section>

      <section className="relative ml-auto min-h-screen w-full space-y-10 rounded-none bg-white px-6 shadow-2xl md:w-[50%] md:rounded-l-2xl">
        <h1 className="pt-20 text-center text-2xl font-bold">Sign Up</h1>

        <Stepper
          initialStep={4}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <h2>Step 1</h2>
          </Step>

          <Step>
            <h2>Step 2</h2>
          </Step>

          <Step>
            <h2>Step 3</h2>
          </Step>

          <Step>
            <h2>Final Step</h2>
            <p>You made it!</p>
          </Step>
        </Stepper>
      </section>
    </main>
  );
};

export default SignUpPage;
