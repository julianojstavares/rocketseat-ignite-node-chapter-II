import { CategoriesRepository } from "../../repositories/Categories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const createCategoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(createCategoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }