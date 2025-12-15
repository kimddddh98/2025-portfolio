import Link from 'next/link'

export default function MorePage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full rounded-3xl text-center">
        <h1 className="mb-6 text-4xl font-semibold tracking-wide md:text-5xl">
          THANK YOU FOR WATCHING
        </h1>

        <div className="mx-auto mb-6 h-px w-16 bg-black/40 dark:bg-white/40" />

        <p className="text-base leading-relaxed md:text-lg">
          끝까지 포트폴리오를 봐주셔서 감사합니다.
          <br />
          실무 경험을 바탕으로 사용자 경험과 유지보수를 함께 고려한 개발을
          지향하고 있습니다.
          <br />
          앞으로도 더 나은 구조와 완성도 높은 서비스를 만들어가기 위해 꾸준히
          고민하고 성장하겠습니다.
        </p>

        {/* Optional Action */}
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/contact"
            className="default-glass hover px-6 py-3 transition"
          >
            Contact Me
          </Link>

          <Link
            href="/"
            className="default-glass hover px-6 py-3 transition"
            // className="default-glass hover border border-white/20 bg-white/10 px-6 py-3 text-white/80 backdrop-blur-lg transition **:rounded-xl hover:bg-white/20"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
