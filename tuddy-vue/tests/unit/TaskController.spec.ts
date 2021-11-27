import { TaskController } from "@/taskFeature/TaskController";
import { MockGraphQLFacade } from "./MockGraphQLFacade";
import "cross-fetch/polyfill";

  it('can create a new task', () => {
    const backend = new MockGraphQLFacade()
    const sut = new TaskController(backend)

    sut.createTask()

    const sentFromSut = backend.getSentValue()
    expect(sentFromSut).toStrictEqual("{\"data\": {\"hello\": \"Hello world!\"}}")
  });
