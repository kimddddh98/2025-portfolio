export default function ContactPage() {
  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      {/* Main Glass Card */}
      {/* <div className="flex h-[75vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-xl"> */}
      <div className="flex w-full max-w-5xl overflow-hidden">
        {/* Left: Contact Info */}
        <div className="flex w-2/5 flex-col justify-center border-r border-white/20 p-10">
          <h2 className="mb-6 text-3xl font-semibold text-white">Contact</h2>
          <p className="mb-10 text-lg text-white/80">
            궁금한 점이나 함께 해보고 싶은 프로젝트가 있다면 언제든 메세지
            남겨주세요.
          </p>

          {/* Contact Items */}
          <div className="flex flex-col gap-4">
            <div className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md transition hover:bg-white/20">
              <span className="text-lg text-white">📞</span>
              <span className="text-sm text-white">010-1234-5678</span>
            </div>

            <div className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md transition hover:bg-white/20">
              <span className="text-lg text-white">📧</span>
              <span className="text-sm text-white">your@email.com</span>
            </div>

            <div className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md transition hover:bg-white/20">
              <span className="text-lg text-white">📍</span>
              <span className="text-sm text-white">Seoul, South Korea</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex w-3/5 flex-col justify-center p-10">
          <h3 className="mb-6 text-2xl font-semibold text-white">
            Send a Message
          </h3>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/70 backdrop-blur-lg focus:border-white focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/70 backdrop-blur-lg focus:border-white focus:outline-none"
            />

            <textarea
              placeholder="Your Message"
              className="h-32 w-full resize-none rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/70 backdrop-blur-lg focus:border-white focus:outline-none"
            />

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/20 px-6 py-3 text-white backdrop-blur-lg transition hover:bg-white/30"
            >
              Send Message ✈️
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
