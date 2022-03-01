import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Pizza or Chiken?",
    answerA: "Pizza",
    answerB: "Chiken",
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;
