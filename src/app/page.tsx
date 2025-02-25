import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto font-[family-name:var(--font-geist-sans)]">
        <header className={'py-4 md:py-10 md:space-x-10 space-x-1 flex justify-center border-b text-[10px] md:text-[16px]'}>
            <Link className={'hover:text-gray-500 transition-colors'} href={''}>랜덤 뽑기</Link>
            <Link className={'hover:text-gray-500 transition-colors'} href={''}>사다리 타기</Link>
            <Link className={'hover:text-gray-500 transition-colors'} href={'/team'}>랜덤 팀/조 편성</Link>
            <Link className={'hover:text-gray-500 transition-colors'} href={''}>랜덤 번호 생성기</Link>
            <Link className={'hover:text-gray-500 transition-colors'} href={''}>가위 바위 보 랜덤 승부</Link>
            <Link className={'hover:text-gray-500 transition-colors'} href={''}>룰렛 만들기</Link>
        </header>
      <main>

      </main>
    </div>
  );
}
