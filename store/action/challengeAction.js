import axios from "../../config/axios";

export const createChallenge = payload => {
  return dispatch => {
    dispatch({
      type: "CREATE_CHALLENGE_LOADING",
      loading: false,
    });
    axios({
      url: "/tasks",
      method: "POST",
      data: payload.data,
      headers: {
        access_token: payload.token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then(({ data }) => {
        alert(data.message);
        dispatch({
          type: "CREATE_CHALLENGE_SUCCESS",
          loading: false,
        });
      })
      .catch(error => {
        let err = error.response.data.error;
        dispatch({
          type: "CREATE_CHALLENGE_ERROR",
          loading: false,
          error: err,
        });
      });
  };
};

export const getChallenge = payload => {
  return dispatch => {
    dispatch({
      type: "GET_CHALLENGE_LOADING",
      loading: true,
    });
    axios({
      url: `/tasks/${payload.id}`,
      method: "GET",
      headers: {
        access_token: payload.token,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "GET_CHALLENGE_SUCCESS",
          loading: false,
          data,
        });
      })
      .catch(error => {
        let err = error.response.data.error;
        dispatch({
          type: "GET_CHALLENGE_ERROR",
          loading: false,
          error: err,
        });
      });
  };
};

export const getAllChallenge = payload => {
  return dispatch => {
    dispatch({
      type: "ALL_CHALLENGE_LOADING",
      loading: true,
    });

    axios({
      url: "/tasks",
      method: "GET",
      headers: {
        access_token: payload.token,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "ALL_CHALLENGE_SUCCESS",
          loading: false,
          data,
        });
      })
      .catch(error => {
        let err = error.response.data.error;
        dispatch({
          type: "ALL_CHALLENGE_ERROR",
          loading: false,
          error: err,
        });
      });
  };
};

export const claimChallenge = payload => {
  return dispatch => {
    dispatch({
      type: "CLAIM_CHALLENGE_LOADING",
      loading: false,
    });

    axios({
      url: `/tasks/${payload.id}/claim`,
      method: "PATCH",
      headers: {
        access_token: payload.token,
      },
    })
      .then(({ data }) => {
        alert("success");
        dispatch({
          type: "CLAIM_CHALLENGE_SUCCESS",
          loading: false,
          data,
        });
      })
      .catch(error => {
        alert("error");
        let err = error.response.data.error;
        console.log(error.response.data, "error");
        dispatch({
          type: "CLAIM_CHALLENGE_ERROR",
          loading: false,
          error: err,
        });
      });
  };
};

export const finishChallenge = payload => {
  return dispatch => {
    dispatch({
      type: "FINISH_CHALLENGE_LOADING",
      loading: false,
    });

    axios({
      url: `/tasks/${payload.id}/finish`,
      method: "PATCH",
      headers: {
        access_token: payload.token,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "FINISH_CHALLENGE_SUCCESS",
          data,
          loading: false,
        });
      })
      .catch(error => {
        let err = error.response.data.error;
        dispatch({
          type: "CLAIM_CHALLENGE_ERROR",
          loading: false,
          error: err,
        });
      });
  };
};

export const deleteChallenge = payload => {
  return dispatch => {
    dispatch({
      type: "DELETE_CHALLENGE_LOADING",
      loading: true,
    });
    axios({
      url: `/tasks/${payload.id}`,
      method: "DELETE",
      headers: {
        access_token: payload.token,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "DELETE_CHALLENGE_SUCCESS",
          data,
          loading: false,
        });
      })
      .catch(error => {
        let err = error.response.data.error;
        dispatch({
          type: "DELETE_CHALLENGE_ERROR",
          loading: false,
          error: err,
        });
      });
  };
};

export const setTitleAndDescription = payload => {
  return dispatch => {
    dispatch({
      type: "SET_TITLE_DESC",
      data: payload,
    });
  };
};
