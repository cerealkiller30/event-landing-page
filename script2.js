function registerUser() {
        const userId = document.getElementById('id').value;
        const userName = document.getElementById('name').value;
        const userEmail = document.getElementById('email').value;
        const userContact = document.getElementById('contact').value;

        if (userId && userName && userEmail && userContact) {
            const userTable = document.getElementById('registeredTable');
            const tableBody = userTable.querySelector('tbody');
            var rows = userTable.getElementsByTagName('tr');
            var rowCount = rows.length;

            const newRow = tableBody.insertRow();
            newRow.insertCell(0).textContent = rowCount+")";
            newRow.insertCell(1).textContent = userName;
            newRow.insertCell(2).textContent = userId;
            newRow.insertCell(3).textContent = userEmail;
            newRow.insertCell(4).textContent = userContact;

            userTable.style.display = 'table';

            document.getElementById('id').value = '';
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('contact').value = '';
        } else {
            alert('Please fill out all fields.');
        }
}