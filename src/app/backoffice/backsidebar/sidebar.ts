
export interface Sidebar{
  id?: String;
  titre?: String;
  icone?: String;
  url?: String;
  sousMenu?: Array<Sidebar>;
}
