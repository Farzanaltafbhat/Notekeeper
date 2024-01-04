import addImg from '../../assets/add.png';
import { HeroProps } from '../../types';

const Hero = ({ setShowModal }: HeroProps) => {
  return (
    <div className="sticky top-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow mb-4 rounded-xl p-2 flex justify-between">
      <h1 className="text-lg md:text-3xl text-white font-semibold p-3 my-auto">
        "When your heart speaks, take good notes."
      </h1>
      {/* Note add button */}
      <button
        className="hover:bg-purple-400 text-white rounded-full font-bold uppercase text-sm px-4 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img
          className="w-6 h-6 mr-2"
          src={addImg}
          alt="+"
        />
        Add Note
      </button>
    </div>
  );
};

export default Hero;
