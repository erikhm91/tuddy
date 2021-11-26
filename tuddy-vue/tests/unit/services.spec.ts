import { TaskService } from "@/services/services";
import { MockRepository } from "@/repositories/repositories";
import "cross-fetch/polyfill";

  it('can create a new task', () => {
    const repo = new MockRepository()
    const sut = new TaskService(repo)

    sut.createTask()

    const sentFromSut = repo.getSentValue()
    expect(sentFromSut).toStrictEqual("{\"data\": {\"hello\": \"Hello world!\"}}")
  });
