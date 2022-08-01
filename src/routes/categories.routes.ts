import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/categoryUseCase/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/categoryUseCase/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {

    return createCategoryController.handle(request, response);

});

categoriesRoutes.get("/", (request, response) => {

    return listCategoriesController.handle(request, response);

});

export { categoriesRoutes }