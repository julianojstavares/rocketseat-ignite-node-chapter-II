import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/Specifications/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/specificationUseCase/createSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/specificationUseCase/listSpecifications';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
    
    return createSpecificationController.handle(request, response);

});

specificationsRoutes.get("/", (request, response) => {

    return listSpecificationsController.handle(request, response);

});

export { specificationsRoutes }