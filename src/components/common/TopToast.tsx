'use client'

type TopToastProps = {
  type: 'success' | 'error'
  message: string
  visible: boolean
}

export default function TopToast({ type, message, visible }: TopToastProps) {
  return (
    <div
      className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} pointer-events-none`}
    >
      <div
        className={`min-w-[320px] rounded-2xl border px-6 py-4 text-center text-sm font-medium shadow-xl backdrop-blur-xl ${
          type === 'success'
            ? 'border-emerald-300/30 bg-emerald-400/20 text-emerald-100'
            : 'border-red-300/30 bg-red-400/20 text-red-100'
        } `}
      >
        {message}
      </div>
    </div>
  )
}
