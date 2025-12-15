'use client'

type TopToastProps = {
  type: 'success' | 'error'
  message: string
  visible: boolean
}

export default function TopToast({ type, message, visible }: TopToastProps) {
  return (
    <div
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} pointer-events-none`}
    >
      <div
        className={`min-w-[320px] rounded-2xl border px-6 py-4 text-center text-sm font-medium shadow-lg backdrop-blur-xl ${
          type === 'success'
            ? 'border-emerald-400/40 bg-emerald-300/20 dark:bg-emerald-900/20'
            : 'border-red-400/30 bg-red-400/20 dark:bg-red-900/20'
        } `}
      >
        {message}
      </div>
    </div>
  )
}
