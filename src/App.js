import { BookNow } from "./components";
import { About, Appointment, Header, Hero, PriceList, Services, Testimonial } from "./sections";


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
      <div className="h-[4000px]" />
    </div>
  );
}

export default App;
