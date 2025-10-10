import Toggle from "./components/Toggle";
import ToggleChildProp from "./components/ToggleChildProp";

function App() {
  const handleRender = (isOn) => {
    return (
      <div
        className={`w-[inherit] text-justify border-4 py-2 px-4 text-2xl rounded-2xl leading-relaxed transition-all duration-300 ease-in ${
          isOn ? "bg-gray-700 text-gray-100 border-gray-900" : ""
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam pariatur
        asperiores accusantium inventore, nesciunt dolorem cupiditate
        repudiandae nulla quisquam! Voluptas numquam similique veritatis quia
        culpa! Perferendis, quaerat odio. Asperiores, ratione.
      </div>
    );
  };

  return (
    <div className="w-[100%] mt-[5%] mx-auto flex flex-col gap-4 md:w-[60%]">
      <Toggle render={(isOn) => handleRender(isOn)} />
      <ToggleChildProp>
        {({ isOn, toggle }) => {
          return (
            <div className="flex flex-col items-center">
              <button
                onClick={() => toggle()}
                className={`w-[6rem] py-4 px-6 rounded-2xl text-2xl hover:cursor-pointer transition-all duration-500 ease-in-out ${
                  isOn ? "bg-amber-500" : "bg-gray-300"
                }`}
              >
                {isOn ? "Off" : "On"}
              </button>

              {isOn ? (
                <div className="p-4 my-[2rem] text-gray-700 font-bold text-justify text-2xl leading-loose">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta odit aspernatur dolore, corrupti enim placeat nisi
                  officia eum unde, cum nostrum! Deleniti consectetur impedit
                  esse ipsa quod quibusdam est explicabo? Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Dicta odit aspernatur
                  dolore, corrupti enim placeat nisi officia eum unde, cum
                  nostrum! Deleniti consectetur impedit esse ipsa quod quibusdam
                  est explicabo?
                </div>
              ) : (
                ""
              )}
            </div>
          );
        }}
      </ToggleChildProp>
    </div>
  );
}

export default App;
