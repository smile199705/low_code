import { Test, TestingModule } from '@nestjs/testing';
import { ComponentGpCaController } from './component-gp-ca.controller';

describe('ComponentGpCaController', () => {
  let controller: ComponentGpCaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentGpCaController],
    }).compile();

    controller = module.get<ComponentGpCaController>(ComponentGpCaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
