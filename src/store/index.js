import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase
  .initializeApp({ projectId: "kt-team-test-d21ff" })
  .firestore();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    currentTask: null
  },

  mutations: {
    ...vuexfireMutations,

    SET_CURRENT_TASK(state, task) {
      state.currentTask = task;
    }
  },

  actions: {
    fetchTasks: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef(
        "tasks",
        db.collection("tasks").orderBy("createdAt", "desc")
      );
    }),

    getTask({ commit }, id) {
      return db
        .collection("tasks")
        .doc(id)
        .get()
        .then(snapshot => {
          commit("SET_CURRENT_TASK", snapshot.data());
        });
    },

    addTask(context, task) {
      return db.collection("tasks").add(task);
    },

    updateTask(context, data) {
      db.collection("tasks")
        .doc(data.id)
        .set(data.task);
    },

    deleteTask(context, id) {
      db.collection("tasks")
        .doc(id)
        .delete();
    }
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },

    getCurrentTask(state) {
      return state.currentTask;
    }
  }
});
