"use client";
import { Dictionary } from "@/dictionaries/en";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n-config";
import clsx from "clsx";

const PaidSection = ({
  dictionary,
  isZh,
}: {
  dictionary: Dictionary;
  isZh: boolean;
}) => {
  const { price } = dictionary;
  const pathname = usePathname();
  const language = pathname.split("/")[1] as Locale;
  return (
    <div className="my-24">
      <div className="pb-8 ">
        <span className="text-2xl text-white">{price.paidTables.title}</span>
        <div className="dropdown dropdown-hover">
          <Link
            href={`/${language}/contact`}
            className={clsx("px-3 text-[#43B687FF]", { "pointer-events-none": isZh })}
          >
            {price.paidTables.desc}
          </Link>

          <div
            className={clsx(
              "dropdown-content menu rounded-box w-72 -translate-x-1/4 bg-base-100 p-2 shadow md:translate-x-0",
              { hidden: !isZh },
            )}
          >
            <Image
              src="/images/business_chat.jpg"
              alt=""
              width={1187}
              height={1669}
              className="bg-amber-50"
            />
          </div>
        </div>
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
