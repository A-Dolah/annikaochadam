export const selectAllGuestsQuery = `SELECT id, email, first_name, last_name, attending_27, attending_28, not_attending, diet from guests`

export const insertGuestQuery = `INSERT INTO guests(email, first_name, last_name, attending_27, attending_28, not_attending, diet) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING email, first_name, last_name, attending_27, attending_28, not_attending, diet`

export const selectGuestQuery = `SELECT id, email, first_name, last_name, attending_27, attending_28, not_attending, diet from guests WHERE id=$1`

export const recreateTable = `
 CREATE TABLE IF NOT EXISTS guests (
                id SERIAL PRIMARY KEY,
                email varchar(80) NOT NULL,
                first_name varchar(80) NOT NULL,
                last_name varchar(80) NOT NULL,
                diet varchar(300) NOT NULL,
attending_27 BOOL,
attending_28 BOOL,
not_attending BOOL,
date_created TIMESTAMP DEFAULT NOW())
`
