export interface SideMenuListType {
  title: string;
  type:string;
  contents: { // contents를 배열로 정의
    id: number;
    title: string;
    imgUrl: string;
    url: string;
  }[];
}