// Define objects to store data for four teams
let teams = [
    { name: 'Team A', leads: [], users: [], admins: [] },
    { name: 'Team B', leads: [], users: [], admins: [] },
    { name: 'Team C', leads: [], users: [], admins: [] },
    { name: 'Team D', leads: [], users: [], admins: [] }
];

// Function to add a team or department
function addTeamOrDepartment(name) {
    teams.push({ name, leads: [], users: [], admins: [] });
}

// Function to add a user
function addUser(name, team, isTeamLead, isAdmin) {
    const user = { name, isTeamLead };
    teams.forEach(t => {
        if (t.name === team) {
            t.users.push(user);
            if (isAdmin) {
                t.admins.push(user);
            }
        }
    });
}

// Function to delete a user
function deleteUser(name, team) {
    teams.forEach(t => {
        if (t.name === team) {
            const userIndex = t.users.findIndex(u => u.name === name);
            if (userIndex !== -1) {
                const deletedUser = t.users.splice(userIndex, 1)[0];
                const adminIndex = t.admins.findIndex(a => a.name === name);
                if (adminIndex !== -1) {
                    t.admins.splice(adminIndex, 1);
                }
                console.log(`User ${deletedUser.name} deleted from ${team}`);
            }
        }
    });
}

// Function to check if a user is an admin
function isAdmin(userName, teamName) {
    const team = teams.find(t => t.name === teamName);
    if (team) {
        return team.admins.some(admin => admin.name === userName);
    }
    return false;
}

// Example usage:
addTeamOrDepartment("Team A");
addUser("Alice", "Team A", true, true); // Admin user
addUser("Bob", "Team A", false, false); // Non-admin user
console.log(isAdmin("Alice", "Team A")); // Output: true
console.log(isAdmin("Bob", "Team A"));   // Output: false
deleteUser("Alice", "Team A"); // Deleting an admin
console.log(isAdmin("Alice", "Team A")); // Output: false
