import { TaskDTO } from './task.dto';

describe('Task', () => {
  it('should be defined', () => {
    expect(new TaskDTO()).toBeDefined();
  });
});
