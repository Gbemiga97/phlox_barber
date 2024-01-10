import { BookNow } from "./components";
import { About, Appointment, Footer, Header, Hero, Location, PriceList, Services, Subscribe, Testimonial } from "./sections";


function App() {
  return (
    <div className="max-w-[1440px] relative overflow-hidden mx-auto">
      <Header />
      <Hero />
      <BookNow />
      <About />
      <Testimonial />
      <Services />
      <PriceList />
      <Appointment />
      <Location />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
