<script>
  export let type = 'primary';
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click>
  <slot></slot>
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 2.5em;
    box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.4);
  }
  .primary {
    background-color: rgb(103, 115, 134);
    color: #fff;
  }

  .secondary {
    background-color: rgb(93, 122, 132);
    color: #fff;
  }
  .flat {
    box-shadow: none;
  }

  .primary.inverse {
    background-color: #fff;
    color: rgb(93, 122, 132);
    border: 1px solid rgb(93, 122, 132);
  }
  .secondary.inverse {
    background-color: #fff;
    color: rgb(93, 122, 132);
    border: 1px solid rgb(93, 122, 132);
  }
</style>