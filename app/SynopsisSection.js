import { Cinzel, Playfair_Display } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const SynopsisSection = () => {
  return (
    <div className="bg-orange-500 p-6">
      <h2 className={`${cinzel.className} text-3xl text-center font-bold mb-3`}>
        Synopsis
      </h2>
      <div className="bg-orange-100 text-black p-6 rounded-lg shadow-lg border-orange-400 border-4">
        <p
          className={`${playfair.className} text-lg md:text-xl lg:text-2xl indent-5 first-letter:text-4xl`}
        >
          In the sprawling landscape of the Bronze Age, a young shepherd boy
          finds himself teetering on the fragile boundary between civilization's
          edge and the untamed wilderness. His humble existence is shattered
          when an invading force storms through his homeland, snatching him away
          to a life of enslavement. Under the iron-fisted rule of a notorious
          and undefeated general known for his ruthless tactics, the boy, with
          his unassuming demeanor and quick-witted charm, maneuvers himself into
          a peculiar position within the commander's ranks.
        </p>
        <p
          className={`${playfair.className} text-lg md:text-xl lg:text-2xl mt-4`}
        >
          As he navigates the treacherous corridors of power, the shepherd boy
          discovers how to survive in the midst of brutality, using his guile to
          earn favor in the eyes of the general. Yet, hidden behind the facade
          of innocence lies a clever mind honed by the unforgiving landscapes he
          once roamed as a shepherd. When the truth about the boy's true nature
          begins to unravel, it's a revelation that arrives too late for the
          general and his army. Through twists of fate and the cunning
          manipulation of circumstances, the general and his forces find
          themselves marching toward their downfall, orchestrated by the young
          shepherd whose true strength lies beyond the constraints of his
          chains.
        </p>
      </div>
    </div>
  );
};

export default SynopsisSection;
