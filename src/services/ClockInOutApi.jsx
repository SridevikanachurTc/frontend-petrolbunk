import instance from '../configurations/apiConfig';

const punchIn = async (staffId) => {
  try {
    const response = await instance.post(`/staff/${staffId}/punchIn`);
    console.log('inclockin',response.data);
    return response.data;
  } catch (error) {
    console.error("Failed punching in:", error);
    throw error;
  }
};

const punchOut = async (staffId) => {
  try {
    const response = await instance.post(`/staff/${staffId}/punchOut`);
    return response.data;
  } catch (error) {
    console.error("Failed punching out:", error);
    throw error;
  }
};

const getAttendanceLogs = async (staffId) => {
  try {
    const response = await instance.get(`/staff/getAttendanceLogs/${staffId}`);
    return response.data;
  } catch (error) {
    console.error("Failed getting attendance logs:", error);
    throw error;
  }
};

const ClockInOutApi = {
  punchIn,
  punchOut,
  getAttendanceLogs
};

export default ClockInOutApi;
