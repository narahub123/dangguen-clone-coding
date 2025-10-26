export interface PlaceType {
  sido: SidoType;
  sgg: SggType;
  eupMyeonDong: HjdType;
  detail: string;
}

export interface SidoType {
  code: string;
  nameKor: string;
  nameEng: string;
}

export type SggKind = "si" | "gun" | "gu";

export interface SggType {
  code: string; // 5자리 시군구코드(SSGGG)
  parentCode: string; // 2자리 시도코드(SS) - SidoType.code 참조
  nameKor: string; // 예: 강남구, 수원시, 연천군
  nameEng: string; // Gangnam-gu, Suwon-si, Yeoncheon-gun
  kind: SggKind; // 'si' | 'gun' | 'gu'
  isAutonomous?: boolean; // 자치구 여부(주로 'gu'에 사용). 기본값 true 가정
}

// 읍/면/동 구분
export type DongKind = "eup" | "myeon" | "dong";

export interface HjdType {
  code: string; // 10자리 행정동코드 (예: 1111051500)
  parentCode: string; // 상위 시군구 5자리 (code10.slice(0,5))
  nameKor: string; // 행정동 한글명 (예: 청운효자동, 사직동 … / 읍/면 포함 가능)
  nameEng: string; // 영문명(없으면 ""), 필요 시 후처리/매핑로 채움
  kind: DongKind; // 'eup' | 'myeon' | 'dong'
}
