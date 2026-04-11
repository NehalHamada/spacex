export type Launch = {
  id: string;
  name: string;
  flight_number: number;
  details: string | null;
  date_utc: string;
  success: boolean | null;
  upcoming: boolean;
  failed: boolean;
  links: LaunchLinks;
  failures: Failure[];
};

type LaunchLinks = {
  patch: {
    small: string | null;
    large: string | null;
  };
  webcast: string | null;
  article: string | null;
};

type Failure = {
  time: number;
  altitude: number | null;
  reason: string;
};
