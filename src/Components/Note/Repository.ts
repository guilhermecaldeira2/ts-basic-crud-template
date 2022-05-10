import Note from './Model';
import { CreateNoteDTO, UpdateNoteDTO, FilterNoteDTO } from './DTO';

function createNoteRepository() {
  async function show(where: FilterNoteDTO) {
    return Note.findAll({
      where: {
        ...where,
      },
      raw: true,
    });
  }

  async function create(note: CreateNoteDTO) {
    return Note.create(
      {
        idProject: note.idProject,
        nrHours: note.nrHours,
        dsActivity: note.dsActivity,
      },
      {
        raw: true,
      },
    );
  }

  async function update(note: UpdateNoteDTO) {
    return Note.update(
      {
        idProject: note?.idProject,
        nrHours: note?.nrHours,
        dsActivity: note?.dsActivity,
        flApproved: note?.flApproved,
      },
      {
        where: {
          id: note.id,
        },
      },
    );
  }

  async function remove(id: number) {
    return Note.destroy({
      where: {
        id,
      },
    });
  }

  return {
    show,
    create,
    update,
    remove,
  };
}

export default createNoteRepository;
