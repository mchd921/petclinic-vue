<template>
    <div>
      <h1>Owner List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Telephone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="owner in owners" :key="owner.id">
            <td>
                <router-link :to="{ name: 'OwnerDetail', params: { id: owner.id } }">
                    {{ owner.id }}
                </router-link>
            </td>
            <td>{{ owner.first_name }}</td>
            <td>{{ owner.last_name }}</td>
            <td>{{ owner.address }}</td>
            <td>{{ owner.city }}</td>
            <td>{{ owner.telephone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        owners: []
      };
    },
    created() {
      fetch('http://localhost:8081/owner-list')
        .then(response => response.json())
        .then(data => {
          this.owners = data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  