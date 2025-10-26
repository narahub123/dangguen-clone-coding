// tsconfig.json 반드시 확인: "resolveJsonModule": true
import type { DongKind, HjdType, SggKind, SggType } from "../types";

import raw from "../data/sgg_all_eng.json";
import rawDong from "../data/hjd_all_eng.json";

// 안전한 좁힘 + 정규화
export const SGG_ALL: SggType[] = (raw as any[]).map((r) => {
  // kind 좁힘
  const k = (
    r.kind === "gu" ? "gu" : r.kind === "gun" ? "gun" : "si"
  ) as SggKind;

  // gu가 아니면 isAutonomous 제거(옵션 필드의 일관성)
  const base = {
    code: String(r.code),
    parentCode: String(r.parentCode),
    nameKor: String(r.nameKor ?? ""),
    nameEng: String(r.nameEng ?? ""),
    kind: k,
  } as const;

  return k === "gu" ? { ...base, isAutonomous: Boolean(r.isAutonomous) } : base;
});

export const DONG_ALL: HjdType[] = (rawDong as any[]).map((r) => {
  // kind 좁힘
  const k = (
    r.kind === "eup" ? "eup" : r.kind === "myeon" ? "myeon" : "dong"
  ) as DongKind;

  const base = {
    code: String(r.code),
    parentCode: String(r.parentCode),
    nameKor: String(r.nameKor ?? ""),
    nameEng: String(r.nameEng ?? ""),
    kind: k,
  } as const;

  return base;
});
