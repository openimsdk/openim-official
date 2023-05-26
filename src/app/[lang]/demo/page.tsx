import BCTabs from "@/components/demopage/BCTabs";

export default function Demo() {
  return (
    <main className="overflow-x-hidden">
      <div className="mx-[8vw]">
        <div className="py-14">
          <div className="py-4 text-center">
            <span className="text-3xl">下载体验</span>
            <span className="text-3xl text-[#006CFFFF]">demo</span>
          </div>
          <p className="text-center text-sm">最近更新时间：今天</p>
        </div>
        <BCTabs />
      </div>
    </main>
  );
}
