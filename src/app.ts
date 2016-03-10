import {bootstrap} from 'angular2/platform/browser';
import {TaskStore} from "./app/services/task-store/task-store";
import {TaskService} from './app/services/task-service/task-service';

class TestClass {
}

bootstrap(TestClass, [
    TaskService,
    TaskStore,
]);
