import { getFirestore } from "redux-firestore";

export const signIn = (credentiels) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentiels.email, credentiels.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_ERROR", error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "SIGNOUT_ERROR", error });
      });
  };
};

export const signUp = (newuser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newuser.email, newuser.password)
      .then((response) => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstname: newuser.firstname,
            lastname: newuser.lastname,
            initials: newuser.firstname[0] + newuser.lastname[0],
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((error) => {
        console.log("888888888888", error);
        dispatch({ type: ":SIGNUP_ERROR", error });
      });
  };
};
