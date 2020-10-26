export const FETCH_TEST_REQUEST = "FETCH_TEST_REQUEST";
export const FETCH_TEST_SUCCESS = "FETCH_TEST_SUCCESS";
export const FETCH_TEST_FAILURE = "FETCH_TEST_FAILURE";

const requestTests = () => {
    return {
      type: FETCH_TEST_REQUEST
    };
  };
  
  const receiveTests = tests => {
    return {
      type: FETCH_TEST_SUCCESS,
      tests
    };
  };
  
  const testsError = () => {
    return {
      type: FETCH_TEST_FAILURE
    };
  };

  export const fetchTests = (className) => async(dispatch) => {

    dispatch(requestTests());
  
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }
    };
  
    await fetch(`/student/tests/${className}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          dispatch(receiveTests(data.obj));
         // history.push("/studentHome");
        }
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(testsError());
      });
  
  };