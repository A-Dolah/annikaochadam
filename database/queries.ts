export const selectAllGuestsQuery = `SELECT id, email, first_name, last_name from guests`

export const insertGuestQuery = `INSERT INTO guests(email, first_name, last_name) VALUES ($1, $2, $3) RETURNING id`
