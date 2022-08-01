import { Category } from "../../../model/Category";
import { ICategoriesRepository } from "../../../repositories/Categories/ICategoriesRepository";

interface IRequest
{
    name: string;
    description: string;
}

class ListCategoriesUseCase {
    
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[]
    {

        const categories = this.categoriesRepository.list();

        return categories;

    }


}

export { ListCategoriesUseCase }