const fetchFromProxy = async (endpoint: string, pageSize: number, pageNumber: number) => {
  const url = `/api/inventory?endpoint=${encodeURIComponent(endpoint)}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
  
  console.log('Calling proxy:', url);
  
  const response = await fetch(url, {
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Proxy error:', errorData);
    throw new Error(errorData.error || `API Error: ${response.status}`);
  }

  return response.json();
};

export const inventoryApi = {
  getProjectSummary: (pageSize: number = 10, pageNumber: number = 1) =>
    fetchFromProxy(
      '/InventoryParkingOverallReport/PullProjectInventoryParkingDetails',
      pageSize,
      pageNumber
    ),

  getInventoryDetails: (pageSize: number = 100, pageNumber: number = 1) =>
    fetchFromProxy(
      '/InventoryParkingOverallReport/PullInventoryParkingOverallReport',
      pageSize,
      pageNumber
    ),
};