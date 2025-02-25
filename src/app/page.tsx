import Link from "next/link";
import KakaoAdFrom from "@/app/kakaoAdFrom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto font-[family-name:var(--font-geist-sans)] text-[10px] md:text-[16px]">
        <header className={'py-4 md:py-10 md:space-x-10 space-x-1 flex justify-center border-b '}>
            <p>RandomPick</p>
        </header>
      <main className={'flex flex-col justify-center items-center pt-10'}>
          <div className={'pb-4 md:pb-10 flex space-x-2 items-center'}>
              <Link className={'hover:text-gray-500 transition-colors border rounded px-2.5 py-2.5 md:py-7'} href={'/draw'}>랜덤 뽑기</Link>
              <Link className={'hover:text-gray-500 transition-colors border rounded px-2.5 py-2.5 md:py-7'} href={'/ladder'}>사다리 타기</Link>
              <Link className={'hover:text-gray-500 transition-colors border rounded px-2.5 py-2.5 md:py-7'} href={'/team'}>랜덤 팀/조 편성</Link>
          </div>
          <div className={'pb-10 flex space-x-2 items-center'}>
              <Link className={'hover:text-gray-500 transition-colors border rounded px-2.5 py-2.5 md:py-7'} href={'/number'}>랜덤 번호 생성기</Link>
              <Link className={'hover:text-gray-500 transition-colors border rounded px-2.5 py-2.5 md:py-7'} href={'/rockScissorsPaper'}>가위 바위 보 랜덤 승부</Link>
              <Link className={'hover:text-gray-500 transition-colors border rounded px-2.5 py-2.5 md:py-7'} href={'/roulette'}>룰렛 만들기</Link>
          </div>
          <KakaoAdFrom/>
      </main>


    </div>
  );
}
