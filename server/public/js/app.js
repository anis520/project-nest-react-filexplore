function deleteData(id) {
  if (confirm('Are you sure you want to delete this data?')) {
    fetch(`/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // You can include any data or parameters you need to send for the deletion
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success, if needed
          location.reload();
          console.log('Data successfully deleted');
        } else {
          // Handle error, if needed
          console.error('Error deleting data');
        }
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  }
}
