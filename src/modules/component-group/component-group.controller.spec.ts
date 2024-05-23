import { Test, TestingModule } from '@nestjs/testing';
import { ComponentGroupController } from './component-group.controller';

describe('ComponentGroupController', () => {
  let controller: ComponentGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentGroupController],
    }).compile();

    controller = module.get<ComponentGroupController>(ComponentGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
