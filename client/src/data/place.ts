import type { HjdType, SggType, SidoType } from "../types";
import { DONG_ALL, SGG_ALL } from "../utils";

export const sidos: SidoType[] = [
  { code: "", nameKor: "시도", nameEng: "Sido" },
  { code: "11", nameKor: "서울특별시", nameEng: "Seoul" },
  { code: "26", nameKor: "부산광역시", nameEng: "Busan" },
  { code: "27", nameKor: "대구광역시", nameEng: "Daegu" },
  { code: "28", nameKor: "인천광역시", nameEng: "Incheon" },
  { code: "29", nameKor: "광주광역시", nameEng: "Gwangju" },
  { code: "30", nameKor: "대전광역시", nameEng: "Daejeon" },
  { code: "31", nameKor: "울산광역시", nameEng: "Ulsan" },
  { code: "36", nameKor: "세종특별자치시", nameEng: "Sejong" },
  { code: "41", nameKor: "경기도", nameEng: "Gyeonggi-do" },
  {
    code: "51",
    nameKor: "강원특별자치도",
    nameEng: "Gangwon Special Self-Governing Province",
  },
  { code: "43", nameKor: "충청북도", nameEng: "Chungcheongbuk-do" },
  { code: "44", nameKor: "충청남도", nameEng: "Chungcheongnam-do" },
  {
    code: "52",
    nameKor: "전북특별자치도",
    nameEng: "Jeonabuk Special Self-Governing Province",
  },
  { code: "46", nameKor: "전라남도", nameEng: "Jeollanam-do" },
  { code: "47", nameKor: "경상북도", nameEng: "Gyeongsangbuk-do" },
  { code: "48", nameKor: "경상남도", nameEng: "Gyeongsangnam-do" },
  {
    code: "50",
    nameKor: "제주특별자치도",
    nameEng: "Jeju Special Self-Governing Province",
  },
];

export const sigungus: SggType[] = SGG_ALL;

export const eupMyeonDongs: HjdType[] = DONG_ALL;
