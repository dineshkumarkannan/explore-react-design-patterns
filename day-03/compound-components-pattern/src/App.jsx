import Card from "./components/card/Card";
import Tabs from "./components/tabs/Tabs";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";

function App() {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="w-[100%] mt-10 md:w-[90%]">
        <Tabs>
          <Tabs.Headers>
            <Tabs.Tab title={"Tab 1"} value={1} />
            <Tabs.Tab title={"Tab 2"} value={2} />
          </Tabs.Headers>
          <Tabs.Panels>
            <Tabs.Panel value={1}>
              <div className="w-[inherit] flex flex-wrap gap-2">
                <Card>
                  <Card.Header className="bg-gray-800 text-gray-300 flex justify-center items-center font-bold">
                    Header
                  </Card.Header>
                  <Card.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Card.Body>
                  <Card.Footer className="bg-gray-600 text-gray-400  flex justify-center items-center text-sm">
                    Footer
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Header className="bg-pink-800 text-gray-300 flex justify-center items-center font-bold">
                    Header
                  </Card.Header>
                  <Card.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Card.Body>
                  <Card.Footer className="bg-pink-600 text-gray-400  flex justify-center items-center text-sm">
                    Footer
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Header className="bg-amber-600 text-amber-900 flex justify-center items-center font-bold">
                    Header
                  </Card.Header>
                  <Card.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Card.Body>
                  <Card.Footer className="bg-amber-400 text-amber-700  flex justify-center items-center text-sm">
                    Footer
                  </Card.Footer>
                </Card>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value={2}>
              <div className="w-[inherit] flex flex-wrap gap-2">
                <Card>
                  <Card.Header className="bg-gray-800 text-gray-200 flex justify-center items-center font-bold">
                    Image
                  </Card.Header>
                  <Card.Image className="w-[inherit] h-[inherit] px-2 my-1">
                    <img
                      src={image1}
                      alt={"image1"}
                      height="80"
                      className="h-[75%] w-[100%] object-cover"
                    />
                  </Card.Image>
                  <Card.Footer className="bg-gray-600 text-gray-100 flex justify-center items-center text-sm">
                    Footer
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Header className=" bg-gray-200 text-gray-800 flex justify-center items-center font-bold">
                    Image
                  </Card.Header>
                  <Card.Image className="w-[inherit] h-[inherit] px-2 my-1">
                    <img
                      src={image2}
                      alt={"image2"}
                      height="80"
                      className="h-[75%] w-[100%] object-cover"
                    />
                  </Card.Image>
                  <Card.Footer className="bg-gray-200 text-gray-700 flex justify-center items-center text-sm">
                    Footer
                  </Card.Footer>
                </Card>
              </div>
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
