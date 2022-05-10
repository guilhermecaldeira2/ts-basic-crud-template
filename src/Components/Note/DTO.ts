import { NoteInterface } from './Model';

export interface FilterNoteDTO {
  id?: number;
  idProject?: number;
  nrHours?: number;
  dsActivity?: string;
  flApproved?: boolean;
}

export interface CreateNoteDTO {
  idProject: number;
  nrHours: number;
  dsActivity: string;
}

export interface UpdateNoteDTO {
  id: number;
  idProject?: number;
  nrHours?: number;
  dsActivity?: string;
  flApproved?: boolean;
}

export interface ReturnNotesDTO {
  valid: boolean;
  statusCode: number;
  error: string;
  data: NoteInterface[];
}

export interface ReturnUpdatedNoteDTO {
  valid: boolean;
  statusCode: number;
  error: string;
  data: [affectedCOunt: number];
}

export interface ReturnCreatedNoteDTO {
  valid: boolean;
  statusCode: number;
  error: string;
  data: NoteInterface;
}

export interface ReturnRemovedNoteDTO {
  valid: boolean;
  statusCode: number;
  error: string;
  data: number;
}

export interface ReturnApprovedNoteDTO {
  valid: boolean;
  statusCode: number;
  error: string;
  data: [affectedCOunt: number];
}

export interface ReturnDisapprovedNoteDTO {
  valid: boolean;
  statusCode: number;
  error: string;
  data: [affectedCOunt: number];
}
