import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MagicBento from "../components/MagicBento";
import { Check, TrendingUp } from "lucide-react";

const LandingPage = () => {
  return (
    <>
      <Navbar>
        <div className="flex space-x-15">
          <section className="my-auto hidden w-full md:block md:w-auto">
            <ul className="flex space-x-15">
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </section>

          <section>
            <Link
              to="/login"
              className="bg-primary-green rounded-3xl px-6 py-1 text-white md:px-10"
            >
              Login
            </Link>
          </section>
        </div>
      </Navbar>

      <main>
        <div className="relative bg-linear-to-br from-emerald-50 via-white to-blue-50 px-15 py-30 pb-40 lg:px-13">
          <div className="mx-auto max-w-7xl">
            <section className="grid grid-cols-1 items-center gap-12 md:max-lg:text-center lg:grid-cols-2 lg:gap-8">
              <article className="flex flex-col gap-8">
                <h1 className="text-5xl font-semibold tracking-tight lg:text-7xl">
                  Complex Nutrition &{" "}
                  <span className="text-primary-green">Health Management</span>
                </h1>
                <p className="max-w-xl text-2xl font-light tracking-tight text-gray-600 italic">
                  Everything in one place for a healthier lifestyle.
                </p>
                <span className="border-b border-gray-400"></span>
                <div className="flex flex-col gap-4 text-center md:flex-row md:gap-6 md:max-lg:mx-auto xl:justify-between">
                  <Link
                    to="/register"
                    className="bg-primary-green rounded-3xl px-6 py-3 text-lg text-white md:max-lg:px-10 xl:px-15 xl:text-xl"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/login"
                    className="md:max-lgpx-10 text-md rounded-3xl border px-6 py-3 text-gray-800 italic"
                  >
                    Already have an account
                  </Link>
                </div>
              </article>
              <aside className="md:mx-auto md:max-lg:w-2/3">
                <img
                  src="572949-1640772.jpg"
                  alt=""
                  className="size-full rounded-2xl"
                />
              </aside>
            </section>
          </div>
        </div>
        <section className="grid-col-1 grid justify-center space-y-5 py-20">
          <header className="mx-auto space-y-5 text-center">
            <h1 className="text-3xl tracking-widest md:text-5xl">
              Everything you need
            </h1>
            <h2 className="font-light md:w-2xl">
              Complete solution for a healthy lifestyle - calorie counter,
              recipes, community and health tracking on one platform.
            </h2>
          </header>
          <MagicBento
            textAutoHide={true}
            enableStars={false}
            enableSpotlight={false}
            enableBorderGlow={false}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="107, 144, 128"
          />

          {/*Calorie Tracking*/}
        </section>
        <article className="max-w-7xl space-y-32">
          <div className="grid grid-cols-1 flex-col-reverse gap-10 px-5 md:px-15 lg:grid-cols-2">
            <section className="order-2 space-y-6 lg:order-1">
              <h1 className="text-3xl tracking-tight md:text-5xl">
                Calorie tracking
              </h1>
              <h2 className="font-light md:text-2xl">
                Daily and history log to accurately track your calorie intake.
                The unique calorie borrowing feature allows you to manage your
                meals more flexibly.
              </h2>
              {/* TODO: change the circles for icons*/}
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary-green mt-1 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h1 className="">Daily and weekly history</h1>
                    <h2 className="font-light">
                      Detailed statistics and charts
                    </h2>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-green mt-1 rounded-full p-1">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h1 className="">Automatic goal tracking</h1>
                    <h2 className="font-light">
                      Personalized daily calorie targets
                    </h2>
                  </div>
                </li>
              </ul>
            </section>
            <aside className="order-1 my-auto lg:order-2">
              <img
                src="photo-1711698520626-bae97bc6c204.jpeg"
                alt=""
                className="rounded-2xl"
              />
            </aside>
          </div>

          {/*Personal Reacipe*/}

          <div className="grid grid-cols-1 flex-col-reverse gap-10 px-5 py-20 md:px-15 lg:grid-cols-2">
            <aside className="my-auto">
              <img
                src="photo-1732850960570-dc1fafea0970.jpeg  "
                alt=""
                className="rounded-2xl"
              />
            </aside>
            <section className="order-1 space-y-6 lg:order-2">
              <h1 className="text-3xl tracking-tight md:text-5xl">
                Personalized recipe recommendations
              </h1>
              <h2 className="font-light md:text-2xl">
                Breakfast, lunch and dinner recipes tailored to your taste and
                calorie goals. Automatic meal planning and shopping list
                generation.
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="mb-2 text-gray-900">🍳 Breakfast recipes</div>
                  <div className="text-gray-600">
                    Energizing breakfast ideas aligned with your calorie goals
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="mb-2 text-gray-900">
                    🥗 Lunch & dinner recommendations
                  </div>
                  <div className="text-gray-600">
                    Varied main dishes with nutritional information
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="mb-2 text-gray-900">
                    🛒 Automatic shopping list
                  </div>
                  <div className="text-gray-600">
                    One click from your weekly meal plan
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Community and sharing */}
          <div className="grid grid-cols-1 flex-col-reverse gap-10 px-5 py-20 md:px-15 lg:grid-cols-2">
            <section className="order-2 space-y-6 lg:order-1">
              <h1 className="text-3xl tracking-tight md:text-5xl">
                Community and sharing
              </h1>
              <h2 className="font-light md:text-2xl">
                Upload your own recipes, follow your friends' recipes, comment
                and rate. Healthy lifestyle is a community experience.
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border p-6">
                  <div>Favourite</div>
                  <div>Mark your favourite recipe</div>
                </div>
                <div className="rounded-xl border p-6">
                  <div>Follow</div>
                  <div>Follow your friends' recipes</div>
                </div>
                <div className="rounded-xl border p-6">
                  <div>Comment</div>
                  <div>Share your opinion</div>
                </div>
                <div className="rounded-xl border p-6">
                  <div>Ratings</div>
                  <div>Rate the recipes</div>
                </div>
              </div>
            </section>
            <aside className="order-1 my-auto lg:order-2">
              <img
                src="photo-1740065592719-052d3e5ec6fb.jpeg"
                alt=""
                className="rounded-2xl"
              />
            </aside>
          </div>
        </article>
        <article className="bg-linear-to-t from-emerald-50 via-white to-white">
          <section className="flex max-w-7xl flex-col items-center gap-10 py-20 text-center lg:py-50">
            <h1 className="text-5xl font-bold">Ready for a healthier life?</h1>
            <h2 className="px-5 font-extralight">
              Join the others who have already achieved their goal
            </h2>
            <Link
              to="/register"
              className="bg-primary-green font-extraligh w-30 rounded-2xl py-1 font-extralight text-white"
            >
              Join now
            </Link>
          </section>
        </article>
      </main>
    </>
  );
};

export default LandingPage;
