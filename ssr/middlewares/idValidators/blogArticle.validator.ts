import axios from "axios";
import { environment } from "../../../src/environments/environment";

export async function isValidBlogArticle(id: string): Promise<boolean> {
	try {
		const response = await axios.get(`${environment.apiUrl}new-blog/${id}`);
		return response.status === 200;
	} catch (error) {
		return false;
	}

}
