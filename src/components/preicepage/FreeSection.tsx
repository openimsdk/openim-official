import { Dictionary } from "@/dictionaries/en";

const FreeSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div>
      <p className="pb-8 text-2xl text-white">{dictionary.price.freeTable.title}</p>
      <table className="w-full">
        <thead>
          <tr className="text-center">
            {dictionary.price.freeTable.thead.map((thead) => {
              return (
                <th
                  key={thead}
                  className="border border-gray-400 bg-[#29599826] p-4 text-sm sm:text-base"
                >
                  {thead}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dictionary.price.freeTable.tbody.map((tbody) => {
            return (
              <tr key={tbody.project} className="text-center">
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-[#43B687FF] sm:text-base">
                  <a href={tbody.url} target="_blank" className="link">
                    {tbody.project}
                  </a>
                </td>
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-[#43B687FF] sm:text-base">
                  {tbody.protocol}
                </td>
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-white sm:text-base">
                  {tbody.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FreeSection;
