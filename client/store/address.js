import axios from "axios";
const TOKEN = "token";

// ACTION TYPES
const LOAD_ADDRESSES = "LOAD_ADDRESSES";
const ADD_ADDRESS = "ADD_ADDRESS";
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const DELETE_ADDRESS = "DELETE_ADDRESS";

// ACTION CREATORS
const _loadAddresses = (addresses) => ({ type: LOAD_ADDRESSES, addresses });
const _updateAddress = address => ({type: UPDATE_ADDRESS, address})
const _addAddress = (address) => ({ type: ADD_ADDRESS, address });
const _deleteAddress = (address) => ({ type: DELETE_ADDRESS, address });

// THUNKS
// export const loadAddresses = () => {
//   return async (dispatch) => {
//     const addresses = (
//       await axios.get(
//         `/api/addresses/`
//         //     , {
//         // headers: {
//         //   authorization: window.localStorage.getItem("token")
//         // }
//         //     }
//       )
//     ).data;
//     dispatch(_loadAddresses(addresses));
//   };
// };

export const updateAddress = address => {
  return async(dispatch) => {
    await axios.put(`/api/user/address/${address.id}`, address, {
      headers: {
        authorization: window.localStorage.getItem(TOKEN)
      }
    })
  }
}

export const deleteAddress = (address) => {
  return async (dispatch) => {
    await axios.delete(
      `/api/addresses/${address.id}`
      //       , {
      //   headers: {
      //     authorization: window.localStorage.getItem("token")
      //   }
      // }
    );
    dispatch(_deleteAddress(address));
  };
};

export const addAddress = (address) => {
  return async (dispatch) => {
    const newAddress = (
      await axios.put(
        `/api/addresses/${address.id}`,
        address
        //     {
        // headers: {
        //   authorization: window.localStorage.getItem("token")
        // }
        //     }
      )
    ).data;
    dispatch(_addAddress(newAddress));
  };
};

// REDUCER
export default (state = [], action) => {
  switch (action.type) {
    // case LOAD_ADDRESSES:
    //   return action.addresses;
    case DELETE_ADDRESS:
      return [...state.filter((address) => address.id !== action.address.id)];
    case ADD_ADDRESS:
      return [...state.map((address) => (address.id !== action.address.id ? address : action.address))];
    default:
      return state;
  }
};
