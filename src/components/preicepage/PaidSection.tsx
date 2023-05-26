"use client";
import { Dictionary } from "@/dictionaries/en";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n-config";

const PaidSection = ({ dictionary }: { dictionary: Dictionary }) => {
  const { price } = dictionary;
  const pathname = usePathname();
  const language = pathname.split("/")[1] as Locale;
  return (
    <div className="my-24">
      <div className="pb-8 ">
        <span className="text-2xl text-white">{price.paidTables.title}</span>
        <Link href={`/${language}/contact`} className="px-3 text-[#43B687FF]">
          {price.paidTables.desc}
        </Link>
      </div>
      <table className="w-full ">
        <thead>
          <tr className="text-center">
            {price.paidTables.IMTable.thead.map((thead) => {
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
          {price.paidTables.IMTable.tbody.map((tbody) => {
            return (
              <tr key={tbody.project} className="text-center">
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-white sm:text-base">
                  {tbody.project}
                </td>
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-white sm:text-base">
                  {tbody.desc}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="my-8 w-full">
        <thead>
          <tr className="text-center">
            {price.paidTables.OtherClientTable.thead.map((thead) => {
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
          {price.paidTables.OtherClientTable.tbody.map((tbody) => {
            return (
              <tr key={tbody.project} className="text-center">
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-white sm:text-base">
                  {tbody.project}
                </td>
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-white sm:text-base">
                  {tbody.desc}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="my-8 w-full">
        <thead>
          <tr className="text-center">
            {price.paidTables.ServiceTable.thead.map((thead) => {
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
          {price.paidTables.ServiceTable.tbody.map((tbody) => {
            return (
              <tr key={tbody.project} className="text-center">
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-white sm:text-base">
                  {tbody.project}
                </td>
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-white sm:text-base">
                  {tbody.desc}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="my-8 w-full">
        <thead>
          <tr className="text-center">
            {price.paidTables.OtherProject.thead.map((thead) => {
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
          {price.paidTables.OtherProject.tbody.map((tbody) => {
            return (
              <tr key={tbody.project} className="text-center">
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-white sm:text-base">
                  {tbody.project}
                </td>
                <td className="border border-gray-400 bg-transparent p-4 text-sm text-white sm:text-base">
                  {tbody.desc}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PaidSection;
