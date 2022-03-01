<script>
  import Card from '../shared/Card.svelte';
  import PollStore from '../stores/PollStore.js';
  import Button from '../shared/Button.svelte';
  import { tweened } from 'svelte/motion';

  export let poll;

  // reactive values
  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor(100 / totalVotes * poll.votesA) || 0;
  $: percentB = Math.floor(100 / totalVotes * poll.votesB) || 0;

  //tweened percentatges
  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  // handling votes
  const handleVote = (option, id) => {

    PollStore.update(currentPolls => {
      let copiedPolls = [...currentPolls];
      let upvotedPoll = copiedPolls.find(poll => poll.id == id);

      if(option === 'a'){
        upvotedPoll.votesA++;
      }
      if(option === 'b'){
        upvotedPoll.votesB++;
      }

      return copiedPolls;
      });
  };
  //deleteing a poll
  const handleDelete = (id) => {
    PollStore.update(currentPolls => {
      return currentPolls.filter(poll => poll.id != id)
    })
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div class="answer" on:click={() => handleVote('a', poll.id)}>
      <div class="percent percent-a" style="width: {$tweenedA}%" class:percent-bigger={poll.votesA > poll.votesB} class:percent-smaller={poll.votesA < poll.votesB} class:percent-same={poll.votesA == poll.votesB}></div>
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>

    <div class="answer" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b" style="width: {$tweenedB}%" class:percent-bigger={poll.votesA < poll.votesB} class:percent-smaller={poll.votesA > poll.votesB} class:percent-same={poll.votesA == poll.votesB}></div>
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
  <div class="delete">
    <Button flat={false} on:click={() => handleDelete(poll.id)}>Delete</Button>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }

  .answer {
    background-color: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }

  .answer:hover {
    opacity: 0.6;
  }

  span {
    display: inline-block;
    padding: 10px 20px;
  }

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .percent-bigger {
    border-left: 4px solid rgb(71, 166, 97);
    background-color: rgba(157, 248, 181, 0.2);
  }
  .percent-smaller {
    border-left: 4px solid rgb(183, 87, 87);
    background-color: rgba(248, 157, 157, 0.2);
  }
  .percent-same {
    border-left: 4px solid rgb(115, 115, 115);
    background-color: rgba(176, 176, 176, 0.2);
  }

  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>