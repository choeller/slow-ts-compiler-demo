import {Subject} from 'rxjs/Rx';
import {Task} from '../../models/task'
import {TaskStore} from "../task-store/task-store";

export class TaskService {
  tasks: Subject<Task[]>;
}
