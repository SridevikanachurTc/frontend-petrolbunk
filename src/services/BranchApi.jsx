import instance from '../configurations/apiConfig';

const getBranches = async () => {
  try {
    const response = await instance.get('/bunks');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getManagerForBranch = async (branchId) => {
  try {
    const response = await instance.get(`/bunks/${branchId}/getManager`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createBranch = async (data) => {
  try {
    const response = await instance.post('/bunks', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createManager = async (branchId, managerData) => {
  try {
    const response = await instance.post('/users', {
      ...managerData,
      bunkId: branchId
    });
    return response.data;
  } catch (error) {
    
        alert('employee with this email already exists');
    throw error;
  }
};

const checkManagerExistsForBranch = async (branchId) => {
  try {
    const response = await instance.get(`/bunks/${branchId}/getManager`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getStaffForBranch = async (branchId) => {
  try {
    const response = await instance.get(`/bunks/${branchId}/getStaffList`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const BranchApi = {
  getBranches,
  getManagerForBranch,
  createBranch,
  createManager,
  checkManagerExistsForBranch,
  getStaffForBranch
};

export default BranchApi;
