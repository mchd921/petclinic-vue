<template>
    <div>
      <h1>Owner Detail</h1>
      <div v-if="owner">
        <p><strong>ID:</strong> {{ owner.id }}</p>
        <p><strong>First Name:</strong> <input v-model="owner.first_name" /></p>
        <p><strong>Last Name:</strong> <input v-model="owner.last_name" /></p>
        <p><strong>Address:</strong> <input v-model="owner.address" /></p>
        <p><strong>City:</strong> <input v-model="owner.city" /></p>
        <p><strong>Telephone:</strong> <input v-model="owner.telephone" /></p>
        <button @click="updateOwner">Update</button>
        <button @click="deleteOwner">Delete</button>
        <button @click="createOwner">Create</button>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        owner: null,
      };
    },
    created() {
      const ownerId = this.$route.params.id; // Assuming you're using Vue Router
      fetch(`http://localhost:8081/owner/${ownerId}`)
        .then(response => response.json())
        .then(data => {
          this.owner = data;
        })
        .catch(error => {
          console.error('Error fetching owner data:', error);
        });
    },
    methods: {
      updateOwner() {
        fetch(`http://localhost:8081/owner/${this.owner.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.owner),
        })
          .then(response => response.json())
          .then(data => {
            alert('Owner updated successfully!');
            this.owner = data;
          })
          .catch(error => {
            console.error('Error updating owner:', error);
          });
      },
      deleteOwner() {
        fetch(`http://localhost:8081/owner/${this.owner.id}`, {
          method: 'DELETE',
        })
          .then(() => {
            alert('Owner deleted successfully!');
            this.$router.push('/'); // Redirect to home or another page
          })
          .catch(error => {
            console.error('Error deleting owner:', error);
          });
      },
      createOwner() {
        this.owner.id = null;
        fetch(`http://localhost:8081/owner`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.owner),
        })
        .then(response => response.json())
        .then(data => {
            alert('Owner updated successfully!');
            this.owner = data;
        })
        .catch(error => {
            console.error('Error updating owner:', error);
        });
      }
    },
  };
  </script>
  
  <style scoped>
  button {
    margin-right: 10px;
    padding: 10px 15px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  