import { DataTypes, Model } from 'sequelize';
import Connection from '@src/db/Connection';

export interface NoteInterface extends Model {
  id: number;
  idProject: number;
  nrHours: number;
  dsActivity: string;
  flApproved: boolean;
}

const connection = Connection.getConnection();

const Note = connection.define<NoteInterface>(
  'Note',
  {
    id: {
      type: DataTypes.NUMBER,
      field: 'id',
      autoIncrement: true,
      primaryKey: true,
    },
    idProject: {
      type: DataTypes.NUMBER,
      field: 'id_project',
      allowNull: false,
    },
    nrHours: {
      type: DataTypes.NUMBER,
      field: 'nr_hours',
      allowNull: false,
    },
    dsActivity: {
      type: DataTypes.STRING,
      field: 'ds_activity',
      allowNull: false,
    },
    flApproved: {
      type: DataTypes.BOOLEAN,
      field: 'fl_approved',
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
    schema: 'gpweb',
    tableName: 'tb_note',
    timestamps: false,
  },
);

export default Note;
