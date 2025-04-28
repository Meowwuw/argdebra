import { FaCommentDots, FaClipboardList, FaTrophy } from 'react-icons/fa'; 

export default function CardsSection() {
  return (
    <div className="w-full py-16 bg-[#F9F9F9] md:mx-auto md:px-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Nuestros servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> 
            
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg text-center mx-auto">
            <div className="mb-4 text-[#00AEFF] flex justify-center">
              <FaCommentDots size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Item 1</h3>
            <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg text-center mx-auto">
            <div className="mb-4 text-[#00AEFF] flex justify-center">
              <FaClipboardList size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Item 2</h3>
            <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg text-center mx-auto">
            <div className="mb-4 text-[#00AEFF] flex justify-center">
              <FaTrophy size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Item 3</h3>
            <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
