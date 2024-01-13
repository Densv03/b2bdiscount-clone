import { environment } from "../../../src/environments/environment";
import axios from "axios";

export async function isValidRootCategory(id: string): Promise<boolean> {
				try {
				const response = await axios.get(`${environment.apiUrl}categories`);
				const categories = response.data.categories;
				return Promise.resolve(categories.some((category: any) => category.path === id))
		} catch (error) {
				return Promise.resolve(false);
		}
}
