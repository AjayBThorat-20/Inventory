export interface ProjectSummary {
  ProjectId: number;
  ProjectName: string;
  TotalBuilding: number;
  TotalReraArea: number;
  TotalUnit: number;
  AvailableUnit: number;
}

export interface InventoryDetail {
  ProjectId: number;
  ProjectName: string;
  BuildingNumber: string;
  Wing: string;
  AllotedReraArea: number;
  BookedReraArea: number;
  HoldReraArea: number;
  AvailableReraArea: number;
  BlockReraArea: number;
  TotalReraArea: number;
  AllotedUnit: number;
  BookedUnit: number;
  AvailableUnit: number;
  HoldUnit: number;
  BlockUnit: number;
  TotalUnit: number;
  AvailableParking: number;
  BlockedParking: number;
  BookedParking: number;
  HoldParking: number;
  MemberParking: number;
  TotalParking: number;
}

export interface ApiResponse<T> {
  SuccessMessage: string[];
  ErrorMessage: string[];
  WarningMessage: string[];
  Data: T;
  IsSuccess: boolean;
  TotalNumberOfRecord: number;
  HttpStatusCode: number;
}

export interface BuildingData {
  buildingNumber: string;
  wings: InventoryDetail[];
  total: InventoryDetail;
}

export interface ProjectData {
  project: ProjectSummary;
  buildings: BuildingData[];
}