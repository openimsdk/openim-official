const FreeSection = ({ dictionary }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th className="border border-gray-50 bg-[#29599826] text-base">项目</th>
            <th className="border border-gray-50 bg-[#29599826] text-base">开源协议</th>
            <th className="border border-gray-50 bg-[#29599826] text-base">费用</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border border-gray-50 bg-transparent text-[#43B687FF]">
              Open-IM-Server
            </td>
            <td className="border border-gray-50 bg-transparent text-[#43B687FF]">
              Apache-2.0 License
            </td>
            <td className="border border-gray-50 bg-transparent text-white">
              100%开源，免费商用
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FreeSection
