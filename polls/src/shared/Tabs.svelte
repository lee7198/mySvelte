<script>
  import {createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;

</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0 16px 0;
    font-size:18px;
    color: #555;
    cursor: pointer;
  }
  .tabs {
    margin-bottom: 40px;
  }
  .active {
    color:rgb(40, 91, 150);
    border-bottom: 2px solid rgb(40, 91, 150);
    padding-bottom: 8px;
  }
</style>