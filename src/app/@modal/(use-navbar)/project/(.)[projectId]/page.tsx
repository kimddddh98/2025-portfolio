'use client'

import {
  PROJECT_DETAILS,
  ProjectCardType,
  PROJECTS,
} from '@/const/projects.const'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import modalStyles from '@/styles/modal.module.scss'

export default function ProjectModal() {
  const router = useRouter()
  const closeModal = () => router.back()

  const params = useParams<{ projectId: string }>()
  const project = PROJECT_DETAILS.find((p) => p.id === params.projectId)

  useEffect(() => {
    document.body.classList.add('modal-on')
    return () => {
      document.body.classList.remove('modal-on')
    }
  }, [])

  return (
    <div
      className={modalStyles.modalDim}
      onClick={closeModal}
      onWheel={(e) => {
        e.stopPropagation()
      }}
    >
      <div
        className={`bg-blue-200/30 dark:bg-white/10 ${modalStyles.modalWrap} ${modalStyles.modalScrollbar} ${modalStyles.modalAnimate}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className={`${modalStyles.modalCloseBtn}`}
          aria-label="Close modal"
        >
          <Image
            src={'/close.svg'}
            width={20}
            height={20}
            alt="modal-close-icon"
          />
        </button>

        {/* Portfolio Detail Contents */}
        <div className="space-y-6 text-white">
          {/* 프로젝트명 */}
          <h1 className="text-2xl font-semibold">{project?.title}</h1>

          {/* 미리보기 이미지 */}
          <div className="overflow-hidden rounded-xl border border-white/30 bg-white/10"></div>

          {/* 프로젝트 설명 */}
          <div>
            <h2 className="mb-2 text-xl font-semibold">프로젝트 소개</h2>
            <p className="leading-relaxed text-white/80">
              {project?.infomation}
            </p>
          </div>

          {/* 담당 업무 */}
          <div>
            <h2 className="mb-2 text-xl font-semibold">담당 업무</h2>
            <ul className="list-disc space-y-1 pl-6 text-white/80">
              {project?.works.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
              {/* <li>UI/UX 설계 및 컴포넌트 개발</li>
              <li>상태 관리 및 모듈 구조 설계</li>
              <li>API 연동 및 데이터 흐름 구성</li>
              <li>반응형 웹 디자인 구현</li> */}
            </ul>
          </div>

          {/* 참여 인원 */}
          <div>
            <h2 className="mb-2 text-xl font-semibold">참여 인원</h2>
            {project?.personnel}
          </div>

          {/* 주요 기능 */}
          {project?.features && (
            <div>
              <h2 className="mb-2 text-xl font-semibold">주요 기능</h2>
              <ul className="list-disc space-y-1 pl-6 text-white/80">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 기술 스택 */}
          <div>
            <h2 className="mb-2 text-xl font-semibold">기술 스택</h2>
            <div className="flex flex-wrap gap-2 text-white/90">
              {project?.stack.map((s, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* 링크 */}
          {project?.url && (
            <div className="flex gap-4 pt-4">
              <a
                href={project.url}
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/20 px-4 py-2 transition hover:bg-white/30"
              >
                Visit Site
                <Image
                  src="/link.svg"
                  alt="link visit icon"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
