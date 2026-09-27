import type { Lang } from "@/lib/nav";

/** Chair's greeting, from the text supplied for the website. */
export default function ChairGreeting({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  return (
    <div className="shell greeting">
      <div>
        <p className="section-kicker">{ko ? "회장 인사말" : "FROM THE CHAIR"}</p>
        <h2>
          {ko ? (
            <>
              어디에 물어봐야 할지
              <br />
              막막할 때가 있습니다.
            </>
          ) : (
            <>
              Sometimes you don&apos;t know
              <br />
              who to ask.
            </>
          )}
        </h2>
        <figure className="chair-photo">
          <img
            src="/team/sangdo-bae.jpg"
            alt={ko ? "배상도 KSLC 회장" : "Sang Do Bae, Chair of KSLC"}
          />
        </figure>
      </div>

      <div className="greeting-body">
        <p className="greeting-open">
          {ko
            ? "안녕하세요. \u201CKSLC 한인 시니어 삶터\u201D 회장 배상도입니다."
            : "Hello. I am Sang Do Bae, Chair of Korean Senior Life Campus."}
        </p>
        <p>
          {ko
            ? "살아가다 보면 작은 질문 하나에도 어디에 물어봐야 할지 막막할 때가 있습니다. 시니어 주택을 알아보거나, 건강보험과 공공혜택을 신청하거나, 병원에 가는 교통편을 찾는 일이 그렇습니다. 가족에게 걱정을 끼치고 싶지 않아 혼자 고민하는 분들도 계십니다."
            : "In the course of life there are moments when even a small question leaves you unsure who to ask. Looking into senior housing. Applying for health coverage or public benefits. Finding a ride to a medical appointment. Some carry it alone, not wanting to worry their family."}
        </p>
        <p className="greeting-pull">
          {ko
            ? "그럴 때 \u201CKSLC에 한번 물어보자\u201D 하고 편안하게 찾아오실 수 있기를 바랍니다."
            : "When that happens, I hope you will feel able to say: let's just ask KSLC."}
        </p>
        <p>
          {ko
            ? "저희는 먼저 이야기를 듣겠습니다. 필요한 정보를 한국어로 차근차근 설명하고, 도움을 줄 수 있는 기관과 연결하겠습니다. 연결한 뒤에도 잘 진행되고 있는지 살피며 다음 걸음을 함께 찾겠습니다."
            : "We will listen first. We will explain what you need to know in Korean, step by step, and connect you with the organizations that can help. After the connection is made, we will check that things are moving and work out the next step with you."}
        </p>
        <p>
          {ko
            ? "KSLC는 한 사람의 힘으로 만들어가는 곳이 아닙니다. 시니어와 가족, 이웃과 자원봉사자, 지역 기관이 서로 손을 내밀 때 더 따뜻하고 든든한 곳이 됩니다. 저 역시 회장으로서 여러분의 목소리에 귀 기울이고, 신뢰할 수 있는 KSLC를 만들어가겠습니다."
            : "KSLC is not built by one person. It becomes warmer and steadier when seniors and families, neighbours and volunteers, and local organizations reach out to one another. As Chair, I will listen to your voices and build a KSLC you can trust."}
        </p>
        <p>
          {ko
            ? "한인 시니어라면 가장 먼저 찾는 곳. 이 말이 여러분의 일상에서 느껴지는 약속이 되도록 성심껏 섬기겠습니다."
            : "The first place Korean seniors turn to. I will serve wholeheartedly so that those words become a promise you can feel in daily life."}
        </p>
        <p>
          {ko
            ? "언제든 편안한 마음으로 찾아주십시오. 반갑게 맞이하겠습니다. 감사합니다."
            : "Please come by whenever you wish. You will be warmly welcomed. Thank you."}
        </p>

        <div className="greeting-sign">
          <strong>{ko ? "배상도" : "Sang Do Bae"}</strong>
          <span>
            {ko ? "KSLC 한인 시니어 삶터 회장" : "Chair, Korean Senior Life Campus"}
          </span>
        </div>
      </div>
    </div>
  );
}
