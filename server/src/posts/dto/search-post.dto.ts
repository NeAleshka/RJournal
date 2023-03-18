export class SearchPostDto {
  title?: string;
  body?: string;
  tag?: string;
  limit: number;
  take: number;
  views: 'DESC' | 'ASC';
}
