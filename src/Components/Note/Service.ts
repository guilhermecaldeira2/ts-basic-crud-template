import createNoteRepository from './Repository';
import {
  CreateNoteDTO,
  UpdateNoteDTO,
  FilterNoteDTO,
  ReturnNotesDTO,
  ReturnCreatedNoteDTO,
  ReturnUpdatedNoteDTO,
  ReturnApprovedNoteDTO,
  ReturnDisapprovedNoteDTO,
  ReturnRemovedNoteDTO,
} from './DTO';

function createNoteService() {
  const repository = createNoteRepository();

  async function show(where: FilterNoteDTO): Promise<ReturnNotesDTO> {
    const notes = await repository.show(where);
    if (!notes.length) {
      return {
        valid: true,
        statusCode: 204,
        error: null,
        data: notes,
      };
    }

    return {
      valid: true,
      statusCode: 200,
      error: null,
      data: notes,
    };
  }

  async function create(note: CreateNoteDTO): Promise<ReturnCreatedNoteDTO> {
    return repository.create(note).then((data) => ({
      valid: true,
      statusCode: 201,
      error: null,
      data,
    }));
  }

  async function update(note: UpdateNoteDTO): Promise<ReturnUpdatedNoteDTO> {
    return repository.update(note).then((doc) => ({
      valid: true,
      statusCode: 200,
      error: null,
      data: doc,
    }));
  }

  async function approve(id: number): Promise<ReturnApprovedNoteDTO> {
    return repository.update({ id, flApproved: true }).then((doc) => ({
      valid: true,
      statusCode: 200,
      error: null,
      data: doc,
    }));
  }

  async function disapprove(id: number): Promise<ReturnDisapprovedNoteDTO> {
    return repository.update({ id, flApproved: false }).then((doc) => ({
      valid: true,
      statusCode: 200,
      error: null,
      data: doc,
    }));
  }

  async function remove(id: number): Promise<ReturnRemovedNoteDTO> {
    const doc = await repository.show({ id });

    if (doc.length) {
      const [note] = doc;
      if (note.flApproved) {
        return {
          valid: false,
          statusCode: 400,
          error: 'Apontamento já aprovado',
          data: null,
        };
      }
    } else {
      return {
        valid: false,
        statusCode: 204,
        error: 'Apontamento não encontrado',
        data: null,
      };
    }

    return repository.remove(id).then((doc) => ({
      valid: true,
      statusCode: 200,
      error: null,
      data: doc,
    }));
  }

  return {
    show,
    create,
    update,
    approve,
    disapprove,
    remove,
  };
}

export default createNoteService;
