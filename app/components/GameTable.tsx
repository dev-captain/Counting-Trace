export default function GameTable() {
  return (
    <div className="min-h-screen">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="border-b">
          <div className="flex">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200">Baccarat</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700">Brack Jack</button>
          </div>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Brand</th>
                <th className="py-3 px-6 text-left">Room No.</th>
                <th className="py-3 px-6 text-left">Player</th>
                <th className="py-3 px-6 text-left">Banker</th>
                <th className="py-3 px-6 text-left">Tie</th>
                <th className="py-3 px-6 text-left">Jump</th>
                <th className="py-3 px-6 text-left">Chart</th>
              </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium">Micro Gaming</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span className="bg-gray-100 px-2 py-1 rounded">000{index + 1}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span className="bg-gray-100 px-2 py-1 rounded">{50 - index * 2}.00 %</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span className="bg-gray-100 px-2 py-1 rounded">{48 + index * 2}.00 %</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span className="bg-gray-100 px-2 py-1 rounded">{2 + index * 0.5} %</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded">link</button>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <div className="grid grid-cols-10 gap-1">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div key={i} className="w-4 h-4 border border-gray-300" />
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}