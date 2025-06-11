import React from 'react';
import Sidebares from '../components/Sidebares';
import Navbares from '../components/Navbares'; // keep this only once!

const Dashboard = () => {
  return (
    <>
      <Navbares />
      <Sidebares />
      <main className="bg-gray-100 min-h-screen ml-64 pt-20 p-6 font-sans flex flex-col items-center">
        
        {/* Announcement Title with dotted underline aligned left */}
        <div className="w-full max-w-screen-md mb-4">
          <h1 className="text-xl font-bold text-gray-800 border-b-2 border-dotted border-black inline-block">
            ANNOUNCEMENT
          </h1>
        </div>

        {/* Announcement Box */}
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-400 max-w-screen-md w-full mb-6">
          <p className="text-black text-justify text-sm leading-relaxed">
            Mahal na mamamayan ng Mamatid, <br />
            Magandang araw sa inyong lahat. Nais naming iparating ang isang mahalagang anunsyo ukol sa peryahang nagsilbing bahagi ng ating mamamayan sa nakaraang ilang linggo. Ang peryahan na ating pinayagan at tinangkilik ay napagpasyahan na umalis matapos ang mahigit isang buwan at kalahating operasyon. <br /><br />
            Sa kabila ng kanilang pagsusumikap na magbigay saya at aliw sa ating mga kabarangay, hindi naging maganda ang takbo ng negosyo. Sa mga nakaraang linggo, napansin nila na ang bilang ng mga dumadayo sa peryahan ay hindi sapat upang magtulungan at magtagumpay. Ito ay nagdulot ng malaking pagkalugi para sa mga may-ari ng perya, lalo na sa kanilang araw-araw na gastos na umaabot sa 4,000 pesos para sa mga operasyon at sahod ng kanilang mga tauhan. Dahil dito, napagdesisyunan nila na magtapos na lamang ang kanilang negosyo sa ating barangay. <br /><br />
            Maraming salamat po at nawa’y magpatuloy ang ating pagkakaisa para sa mas maliwanag na bukas.
          </p>
        </div>

        {/* Image Box */}
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-400 max-w-screen-md w-full flex justify-center">
          <img 
            src="https://mamatidseniorhighschool.wordpress.com/wp-content/uploads/2017/08/mshspic.jpg" // your uploaded image
            alt="Peryahan Image" 
            className="rounded-lg border border-gray-300 w-full object-cover max-h-96"
          />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
