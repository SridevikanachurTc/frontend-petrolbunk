import instance from '../configurations/apiConfig';

const getMorningShiftCount = async (bunkId) => {
    try {
        const response = await instance.get(`/bunks/${bunkId}/morningShiftCount`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching morning shift count:", error);
        throw error;
    }
};

const getEveningShiftCount = async (bunkId) => {
    try {
        const response = await instance.get(`/bunks/${bunkId}/eveningShiftCount`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching evening shift count:", error);
        throw error;
    }
};

const getNightShiftCount = async (bunkId) => {
    try {
        const response = await instance.get(`/bunks/${bunkId}/nightShiftCount`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching night shift count:", error);
        throw error;
    }
};



const getTotalReductionPerHour = async (bunkId) => {
    try {
        console.log(bunkId);
        const response = await instance.get(`/sales/total-reduction-per-hour/${bunkId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching total reduction per hour:", error);
        throw error;
    }
};


const ManangerGraphApi = {
    getMorningShiftCount,
    getEveningShiftCount,
    getNightShiftCount,
    getTotalReductionPerHour
};

export default ManangerGraphApi;
