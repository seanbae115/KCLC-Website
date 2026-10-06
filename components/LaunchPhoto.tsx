import { LAUNCH_DATE, launchPhotoNames } from "@/lib/leadership";
import type { Lang } from "@/lib/nav";

/** The 2026-09-24 launch photograph, with its caption naming everyone left to right. */
export default function LaunchPhoto({ lang, showNames = true }: { lang: Lang; showNames?: boolean }) {
  const ko = lang === "ko";
  return (
    <figure className="launch-photo">
      <img
        src="/launch-team.jpg"
        alt={
          ko
            ? "KSLC 발대식에 모인 이사진과 스태프 11명의 단체사진"
            : "The eleven board members and staff who gathered for the KSLC launch"
        }
      />
      <figcaption>
        <strong>
          {ko
            ? "Korean Senior Life Campus(한인 시니어 삶터, KSLC) 발대식"
            : "Korean Senior Life Campus (KSLC) launch ceremony"}
        </strong>
        <span className="launch-date">{LAUNCH_DATE[lang]}</span>
        {showNames && (
          <span className="launch-names">
            {ko ? "왼쪽부터: " : "From left: "}
            {launchPhotoNames(lang).join(" · ")}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
