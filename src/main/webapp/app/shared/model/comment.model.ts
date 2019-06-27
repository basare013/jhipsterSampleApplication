import { ITask } from 'app/shared/model/task.model';

export interface IComment {
  id?: number;
  comment?: string;
  task?: ITask;
}

export class Comment implements IComment {
  constructor(public id?: number, public comment?: string, public task?: ITask) {}
}
