<script>
  export let data;
  console.log(data);
</script>

<h1>Employees</h1>
<div class="divcard">
{#if data.employees && data.employees.length > 0}
  <ul>
    {#each data.employees as employee}
      <li>{employee.id}:{employee.first_name}</li>
    {/each}
  </ul>
{:else}
  <p>No Employees Found</p>
{/if}
</div>


<style>
  .divcard {
    border: #ffc812 2px solid;
    border-radius: 10px;
    margin: 2rem;
    padding: 10px;
    font-size: 14px;
  }

  .divcard:hover {
    transform: scale(1.1);
    background-color: #8b6d0891;
  }

  li, h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffc812;
  }
</style>