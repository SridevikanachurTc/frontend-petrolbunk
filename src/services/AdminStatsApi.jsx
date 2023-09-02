import instance from '../configurations/apiConfig';

const getTotalFuelSold = async () => {
    try {
    const response = await instance.get('/sales/total-fuel-sold');
    return response.data;
} catch (error) {
    throw error;
  }
};

const getEmployeeCount = async () => {
    try {
        const response = await instance.get('/users/employeeCount');
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getBranchCount = async () => {
    try {
        const response = await instance.get('/bunksCount');
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getActiveOrdersCount = async () => {
    try {
        const response = await instance.get('/activeOrdersCount');
        return response.data;
    } catch (error) {
        throw error;
    }
};

const AdminStatsApi = {
    getTotalFuelSold,
    getEmployeeCount,
    getBranchCount,
    getActiveOrdersCount
};

export default AdminStatsApi;
