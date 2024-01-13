import { NextFunction, Request, Response } from "express";
import { B2B_ROUTES, PathObject } from "./B2B_ROUTES";

const redirectMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const urlPath = req.url.split('?')[0];
	const urlParts = urlPath.split('/').filter(part => part);

	const isValidPath = await validatePath(urlParts, B2B_ROUTES);

	if (!isValidPath) {
		res.redirect(301, '/not-found');
	} else {
		next();
	}
};

const validatePath = async (urlParts: string[], pathObject: PathObject): Promise<boolean> => {
	if (urlParts.length === 0) {
		return !('hasValidator' in pathObject && pathObject['hasValidator']);
	}

	const currentPart = urlParts[0];
	let nextPathObject: PathObject | undefined;

	if (pathObject.hasOwnProperty(currentPart)) {
		const potentialNextPath = pathObject[currentPart];
		if (potentialNextPath.hasValidator) {
			const isValid = await potentialNextPath.validator(currentPart);
			if (!isValid) return false;
		}
		nextPathObject = potentialNextPath.nestedPaths ?? {};
	} else {
		const dynamicSegmentKey = Object.keys(pathObject).find(key => key.startsWith(':'));
		if (dynamicSegmentKey) {
			const dynamicSegment = pathObject[dynamicSegmentKey];
			if (dynamicSegment.hasValidator) {
				const isValid = await dynamicSegment.validator(currentPart);
				if (!isValid) return false;
			}
			nextPathObject = dynamicSegment.nestedPaths ?? {};
		}
	}

	if (!nextPathObject) {
		return false;
	}

	return validatePath(urlParts.slice(1), nextPathObject);
};

export default redirectMiddleware;
