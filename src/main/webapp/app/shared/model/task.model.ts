import { Moment } from 'moment';
import { IComment } from 'app/shared/model/comment.model';
import { IUser } from 'app/core/user/user.model';

export const enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}

export interface ITask {
  id?: number;
  title?: string;
  description?: string;
  done?: boolean;
  createdDate?: Moment;
  schedule?: Moment;
  priority?: Priority;
  comments?: IComment[];
  user?: IUser;
}

export class Task implements ITask {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public done?: boolean,
    public createdDate?: Moment,
    public schedule?: Moment,
    public priority?: Priority,
    public comments?: IComment[],
    public user?: IUser
  ) {
    this.done = this.done || false;
  }
}
