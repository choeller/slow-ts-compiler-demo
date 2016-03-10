import {Task} from "../../models/task";
import {BehaviorSubject} from "rxjs/Rx";

export class TaskStore {
  tasks = new BehaviorSubject([]);
}