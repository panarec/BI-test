CREATE TABLE IF NOT EXISTS file_data (
   id serial PRIMARY KEY,
   hash VARCHAR(40) NOT NULL,
   size INT NOT NULL
);