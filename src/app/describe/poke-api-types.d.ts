export interface ListItem {
  name: string;
  url: string;
}

export interface ListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ListItem[];
}

export interface ListOptions {
    limit: number;
    offset: number;
  }
