import { Test, TestingModule } from '@nestjs/testing';
import { ComponentGpCaService } from './component-gp-ca.service';

describe('ComponentGpCaService', () => {
  let service: ComponentGpCaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentGpCaService],
    }).compile();

    service = module.get<ComponentGpCaService>(ComponentGpCaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
