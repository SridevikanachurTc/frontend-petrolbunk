import instance from '../configurations/apiConfig';


const getManagerCount = async () => {
    try {
        const response = await instance.get('/users/managerCount');
        return response.data; 
    } catch (error) {
        console.error("Error fetching manager count:", error);
        throw error;
    }
};

const getStaffCount = async () => {
    try {
        const response = await instance.get('/users/staffCount');
        return response.data; 
    } catch (error) {
        console.error("Error fetching staff count:", error);
        throw error;
    }
};


const getBunkVSales = async () => {
    try {
        const response = await instance.get('/sales/bunkVSales');
        return response.data.map(data => ({
            name: data.bunk?.name,
            salesCount: data.salesCount
        }));
    } catch (error) {
        console.error("Error fetching bunk v sales:", error);
        throw error;
    }
};


const getTotalReductionPerHourAllBranches = async () => {
    try {
        const response = await instance.get('sales/total-reduction-per-hour');
        return response.data;
    } catch (error) {
        console.error("Error fetching total reduction per hour:", error);
        throw error;
    }
};


const AdminGraphApi = {
    getBunkVSales,
    getManagerCount,
    getStaffCount,
    getTotalReductionPerHourAllBranches
};

export default AdminGraphApi;
