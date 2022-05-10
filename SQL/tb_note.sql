-- Drop table

-- DROP TABLE gpweb.tb_note;

CREATE TABLE gpweb.tb_note (
	id serial PRIMARY KEY,
	id_project int NOT NULL,
	nr_hours numeric NOT NULL,
	ds_activity varchar NOT NULL,
	fl_approved bool NOT NULL DEFAULT true,
	dt_create timestamp NOT NULL DEFAULT now(),
	cd_created_by varchar NOT NULL DEFAULT USER,
	dt_change timestamp NULL,
	cd_changed_by varchar NULL
);