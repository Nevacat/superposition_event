import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full h-[100vh] flex items-center justify-center bg-neutral-950'>
      <div className='w-full h-full  max-w-screen-sm bg-black overflow-y-scroll overflow-x-hidden'>
        <div className='min-h-[320px] animate-fade-in'>
          <Image src='/background_text.webp' alt='텍스트 이미지' width={680} height={400} />
        </div>
        <div className='text-white text-[8.5vw] font-bold text-center translate-y-[-130px] flex flex-col gap-2 animate-fade-in'>
          <p>
            예술 구독 서비스 <span className='text-[#9cdd43] '>캔익</span> 오픈!
          </p>
          <p className='text-sm text-[#fff] opacity-80'>
            캔익에는 매주 새로운 예술 작품이 업데이트 돼요
          </p>
        </div>
        <div className='min-h-[280px] relative translate-y-[-100px]'>
          <Image
            src='/blue.webp'
            alt='파랑원'
            width={200}
            height={225}
            className='absolute -right-12 animate-left-up-down'
          />
          <Image
            src='/purple.webp'
            alt='보라원'
            width={200}
            height={225}
            className='absolute -left-12 bottom-0 animate-right-up-down'
          />
        </div>
        <div className='w-full flex items-center justify-center mb-4 ta  translate-y-[-40px] animate-fade-in'>
          <Image src='/title.webp' alt='타이틀 제목' width={340} height={200} />
        </div>
        <div className='min-h-[470px] relative mb-4'>
          <Image
            src='/pink.webp'
            alt='분홍원'
            width={200}
            height={225}
            className='absolute -right-2 animate-left-up-down'
          />
          <Image
            src='/yellow.webp'
            alt='노랑원'
            width={250}
            height={225}
            className='absolute -left-12 top-8 animate-right-up-down'
          />
          <Image
            src='/green.webp'
            alt='초록원'
            width={200}
            height={225}
            className='absolute -right-2 -bottom-6 animate-center-up-down'
          />
        </div>
        <div className='text-center flex flex-col gap-12 text-2xl text-white/60 relative mb-16'>
          <p className='font-light'>
            전시는 보고싶지만
            <br />
            일상이 바쁜 우리를 위해
          </p>
          <p>
            그동안 미술이 어려웠던
            <br />
            우리를 위해
          </p>
          <p className='font-medium text-white/80'>
            매주 신선한 신선작품을 <br />
            5점씩 보내드릴게요
          </p>
          <p className='font-bold text-white'>
            여러분의 일상에 <br />
            쉽고 가벼운 미술이 찾아갑니다!
          </p>
          <Image
            src='/lime.webp'
            alt='라임원'
            width={140}
            height={140}
            className='absolute -left-20 top-10 origin-center animate-lime-spin'
          />
          <Image
            src='/orange.webp'
            width={140}
            height={140}
            alt='주황원'
            className='absolute -right-24 top-40 origin-center animate-orange-spin'
          />
        </div>
        <div className='min-h-[400px] relative flex flex-col items-center justify-center gap-6'>
          <div className='text-center text-sm'>
            <p>지금 캔익은 사전 신청을 받고 있어요!</p>
            <p>이메일을 남겨주시면 첫 콘텐츠 오픈 소식을 보내드릴게요</p>
          </div>
          <div className='flex items-center'>
            <input
              className='min-w-[260px] h-12 z-10 text-center rounded-tl-full rounded-bl-full bg-white/70 outline-none px-4 text-[#6e28ac] placeholder-[#6e28ac]'
              placeholder='이메일을 입력해주세요.'
            />
            <button className='bg-[#6e28ac] opacity-80 w-[60px] h-12 rounded-r-full flex items-center justify-center'>
              <Image src='/icon_send.webp' alt='전송 아이콘' width={26} height={20} />
            </button>
          </div>
          <Image
            src='/text.webp'
            alt='텍스트 이미지'
            width={380}
            height={200}
            className='absolute -left-24 bottom-20 animate-orange-spin z-[1px] opacity-30 '
          />
          <Image src='/logo.webp' alt='로고 이미지' width={200} height={200} className='mt-10' />
          <p className='text-[3vw] text-[#fff] opacity-30 text-center'>
            * 이메일은 사전 알림 발송을 위해 수집되며, 이벤트 종료 시 즉시 폐기됩니다.
            <br /> 이메일 제출 시 수집 및 이용에 동의한 것으로 간주됩니다.
          </p>
        </div>
      </div>
    </main>
  );
}
