class SuperTask {
  constructor(parallelCount = 2) {
    // 并发数量
    this.parallelCount = parallelCount;
    // 正在运行的任务数量
    this.runningCount = 0;
    // 任务列表
    this.tasks = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({
        task,
        resolve,
        reject,
      });
      this._run();
    });
  }
  // 依次运行任务队列的所有任务
  _run() {
    while (this.runningCount < this.parallelCount && this.tasks.length) {
      const { task, resolve, reject } = this.tasks.shift();
      this.runningCount++;

      task()
        .then(resolve, reject)
        .finally(() => {
          this.runningCount--;
          this._run();
        });
    }
  }
}

function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务${name}完成`);
    });
}
const superTask = new SuperTask();

addTask(1000, 1);
addTask(2000, 2);
addTask(3000, 3);
addTask(4000, 4);
addTask(5000, 5);
