'use client'
import { EmailForm, sendMail } from '@/app/actions/sendMail'
import TopToast from '@/components/common/TopToast'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailForm>()

  const [toast, setToast] = useState<{
    visible: boolean
    type: 'success' | 'error'
    message: string
  }>({
    visible: false,
    type: 'success',
    message: '',
  })
  const onSubmit = async (data: EmailForm) => {
    const res = await sendMail(data)

    if (res.success) {
      setToast({
        visible: true,
        type: 'success',
        message: '메일이 성공적으로 전송되었습니다.',
      })
      reset()
    } else {
      setToast({
        visible: false,
        type: 'error',
        message: '메일 전송에 실패했습니다. 다시 시도해주세요.',
      })
    }

    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }))
    }, 3000)
  }

  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <div className="flex w-full max-w-5xl overflow-hidden">
        {/* Left: Contact Info */}
        <div className="flex w-2/5 flex-col justify-center border-r border-black/10 p-10 dark:border-white/20 dark:text-white">
          <h2 className="mb-6 text-3xl font-semibold">Contact</h2>
          <p className="mb-10 text-lg">
            궁금한 점이나 함께 해보고 싶은 프로젝트가 있다면 언제든 메세지
            남겨주세요.
          </p>

          {/* Contact Items */}
          <div className="flex flex-col gap-4">
            <div className="group default-glass flex items-center gap-3 px-4 py-3 transition">
              {/* <span className="text-lg text-white">📞</span> */}

              <Image
                className="invert dark:invert-0"
                src="/phone.svg"
                alt="light-mode Icon"
                width={20}
                height={20}
              />
              <span className="text-[15px">010-4252-3496</span>
            </div>

            <div className="group default-glass flex items-center gap-3 px-4 py-3 transition">
              <Image
                className="invert dark:invert-0"
                src="/mail.svg"
                alt="light-mode Icon"
                width={20}
                height={20}
              />
              <span className="text-[15px]">amawang11@gmail.com</span>
            </div>

            <div className="group default-glass flex items-center gap-3 px-4 py-3 transition">
              <Image
                className="invert dark:invert-0"
                src="/location.svg"
                alt="light-mode Icon"
                width={20}
                height={20}
              />
              <span className="text-[15px]">경기도 안산시</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex w-3/5 flex-col justify-center p-10">
          <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                {...register('name', { required: '이름을 입력해주세요.' })}
                type="text"
                placeholder="이름을 입력해주세요."
                className="default-glass text-foreground placeholder-foreground/30 w-full px-4 py-3 focus:border-white focus:outline-none"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-300 dark:text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register('email', {
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: '올바른 이메일 형식이 아닙니다.',
                  },
                })}
                placeholder="이메일 주소를 입력해주세요."
                className="default-glass text-foreground placeholder-foreground/30 w-full px-4 py-3 focus:border-white focus:outline-none"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-300 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register('message', {
                  required: '메시지를 입력해주세요.',
                  minLength: {
                    value: 10,
                    message: '메시지는 최소 10자 이상이어야 합니다.',
                  },
                })}
                placeholder="내용을 입력해주세요."
                className="text-foreground default-glass placeholder-foreground/30 h-32 w-full resize-none px-4 py-3 focus:border-white focus:outline-none"
              />

              {errors.message && (
                <p className="mt-1 text-xs text-red-300 dark:text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="default-glass hover text-foreground mt-2 flex items-center justify-center gap-2 px-6 py-3 transition"
            >
              메일 작성하기
            </button>
            <TopToast {...toast} />
          </form>
        </div>
      </div>
    </div>
  )
}
