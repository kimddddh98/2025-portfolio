import Image from 'next/image'
import styles from '@/styles/about.module.scss'
const AboutPage = () => {
  return (
    <div className="flex h-full">
      <div className="bg-ap-btn-dark flex flex-col items-center justify-around rounded-l-[20px] px-12 py-10 opacity-80 backdrop-blur-lg dark:bg-gray-600">
        <div className="h-50 w-50 rounded-full border-4 border-white"></div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl font-medium">김동현</h3>
          <h4 className="text-2xl font-medium">프론트엔드 개발자</h4>
        </div>
        <ul className="flex flex-col gap-4 text-[20px]">
          <li className={styles.aboutInfoList}>
            <Image
              className="invert dark:invert-0"
              src="/phone.svg"
              alt="light-mode Icon"
              width={20}
              height={20}
            />
            010-4252-3496
          </li>
          <li className={styles.aboutInfoList}>
            <Image
              className="invert dark:invert-0"
              src="/mail.svg"
              alt="light-mode Icon"
              width={20}
              height={20}
            />
            amawang11@gmail.com
          </li>
          <li className={styles.aboutInfoList}>
            <Image
              className="invert dark:invert-0"
              src="/location.svg"
              alt="light-mode Icon"
              width={20}
              height={20}
            />
            경기도 안산시
          </li>
          <li className={styles.aboutInfoList}>
            <Image
              className="invert dark:invert-0"
              src="/web.svg"
              alt="light-mode Icon"
              width={20}
              height={20}
            />
            https://github.com/kimddddh98
          </li>
        </ul>
      </div>
      <section className="flex flex-1 flex-col justify-around px-12 py-6">
        <div className={styles.aboutSectionWrap}>
          <h5 className={styles.aboutTitle}>소개</h5>
          <p className={styles.aboutUnderLine}></p>
          <pre className="whitespace-pre-wrap">
            웹 퍼블리셔에서 시작하여 현재는 프론트엔드 개발자가 되어 성장하고
            있는 개발자 김동현입니다.{`\n`}
            저는 퍼블리셔 경험을 통해 다양한 레이아웃을 그려내는데에 강점이
            있으며,{`\n`}
            React-Native를 활용한 모바일 앱 개발 경험을 통해 웹과 앱을 모두
            개발할 수 있다는 장점을 가지고 있습니다.
          </pre>
        </div>
        <div className={styles.aboutSectionWrap}>
          <h5 className={styles.aboutTitle}>경력</h5>
          <p className={styles.aboutUnderLine}></p>
          <div>
            <p className="text-[18px]">
              <b className="font-medium">주식회사 비즈비</b> | 2022.10 ~ 2025-09
            </p>

            <ul className="mt-1 flex flex-col gap-2">
              <li className="flex flex-col gap-1">
                Works팀 주임 - 2024.05 ~ 2025.09
                <ul className="ml-4 list-disc">
                  <li>
                    비즈비 웍스
                    <span className="text-[13px]">
                      (*자사 그룹웨어 솔루션)
                    </span>{' '}
                    앱 개발 담당
                  </li>
                </ul>
              </li>
              <li className="flex flex-col gap-1">
                UI/UX팀 사원 - 2022.10 ~ 2024~05
                <ul className="ml-4 list-disc">
                  <li>비즈비 웍스 웹 퍼블리싱 및 UI 개발</li>
                  <li>
                    자사 홈페이지, 자사 솔루션 랜딩 페이지 신규 퍼블리싱 및 기존
                    페이지 유지보수
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.aboutSectionWrap}>
          <h5 className={styles.aboutTitle}>학력</h5>
          <p className={styles.aboutUnderLine}></p>
          <ul>
            <li>안산고등학교 졸업</li>
          </ul>
        </div>
        <div className={styles.aboutSectionWrap}>
          <h5 className={styles.aboutTitle}>자격증</h5>
          <p className={styles.aboutUnderLine}></p>
          <ul>
            <li>웹 디자인 기능사 2022.09</li>
            <li>
              라인컴퓨터아트학원 UI/UX 디자인 & 웹퍼블리셔 과정 수료 2022.03 ~
              2022.09
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
