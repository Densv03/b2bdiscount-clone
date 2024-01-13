import axios from "axios";
import { environment } from "../../../src/environments/environment";

export async function isValidChildCategory(id: string): Promise<boolean> {
	try {
		const response = await axios.get(`${environment.apiUrl}categories`);
		const categories = response.data.categories;
		return categories.some((category: any) =>
			category.children?.some((child: any) => child.path === id)
		);

	} catch (error) {
		return false;
	}
}
