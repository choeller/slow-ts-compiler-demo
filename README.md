# slow-ts-compiler-demo

This repository is only used to showcase the special case of a slow compiler issue in TypeScript

Just do 


`npm install`

`cd src`

`../node_modules/typescript/bin/tsc --diagnostics`

This should print something like:

```
Files:             171
Lines:           36364
Nodes:          124777
Identifiers:     48302
Symbols:       5301737
Types:          326023
Memory used:   496322K
I/O read:        0.02s
I/O write:       0.01s
Parse time:      0.31s
Bind time:       0.26s
Check time:      7.95s
Emit time:       0.12s
Total time:      8.64s
```

Almost every change in `task-service.ts` or `task-store.ts` solves the slow compilation:

e.g. change in task-store.ts:

change: `tasks =  new BehaviorSubject([]);` to `new BehaviorSubject<Task[]>([]);`

or

change: `tasks =  new BehaviorSubject([]);` to  `_tasks =  new BehaviorSubject([]);` (variable name "tasks" is also used in `task-service.ts`)


or in task-service.ts 


add `foo = "bar";` in front of ` tasks: Subject<Task[]>;`


`../node_modules/typescript/bin/tsc --diagnostics` will then look like this:


```
Files:             171
Lines:           36364
Nodes:          124780
Identifiers:     48303
Symbols:       4768832
Types:           11698
Memory used:    81201K
I/O read:        0.01s
I/O write:       0.00s
Parse time:      0.31s
Bind time:       0.23s
Check time:      0.78s
Emit time:       0.03s
Total time:      1.35s

```


