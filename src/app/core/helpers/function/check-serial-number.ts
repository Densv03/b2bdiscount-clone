export function checkSerialNumber(photos: any[]): boolean {
	const groupedBySerialNumber: any[] = photos.reduce((acc, obj) => {
		if (!acc[obj.serialNumber]) {
			acc[obj.serialNumber] = [];
		}
		acc[obj.serialNumber].push(obj);
		return acc;
	}, {});

	return !Object.values(groupedBySerialNumber).some(
		(arr: any[]) => arr.length > 1
	);
}
